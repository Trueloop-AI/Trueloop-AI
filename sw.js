/* ==========================================================================
   Trueloop AI — service worker
   Strategy
     · App shell (index.html)  → network-first, cache fallback. Keeps the site
       fresh on every visit while staying fully usable offline.
     · Same-origin static files → stale-while-revalidate. Instant paint, quiet
       background refresh.
     · Google Fonts             → cache-first (immutable, versioned URLs).
   Updating
     Bump CACHE_VERSION on every deploy. The new worker installs in the
     background, the page shows a "new version available" prompt, and the
     worker activates only when the visitor accepts.
   ========================================================================== */

const CACHE_VERSION = 'v1.1.0';
const SHELL_CACHE  = 'trueloop-shell-' + CACHE_VERSION;
const ASSET_CACHE  = 'trueloop-assets-' + CACHE_VERSION;
const FONT_CACHE   = 'trueloop-fonts-' + CACHE_VERSION;
const CURRENT      = [SHELL_CACHE, ASSET_CACHE, FONT_CACHE];

/* Resolved against the worker's own scope, so this works both at a domain
   root and under a GitHub Pages project path such as /Trueloop-AI/. */
const SHELL_URL = new URL('./index.html', self.registration.scope).toString();

const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './assets/css/styles.css',
  './assets/js/content.js',
  './assets/js/legal.js',
  './assets/js/app.js',
  './assets/icons/android-icon-96x96.png',
  './assets/icons/android-icon-192x192.png',
  './assets/img/og-image.png',
  './assets/icons/favicon-32x32.png',
  './assets/icons/favicon-96x96.png',
  './assets/icons/android-icon-192x192.png',
  './assets/icons/apple-icon-180x180.png',
  './favicon.ico'
];

const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

/* ----------------------------------------------------------------- install */
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL_CACHE);
    // addAll() is atomic: one 404 would fail the whole install, so add
    // individually and tolerate anything optional that is missing.
    await Promise.all(PRECACHE.map(async (url) => {
      try {
        const res = await fetch(new Request(url, { cache: 'reload' }));
        if (res && res.ok) await cache.put(url, res);
      } catch (err) {
        /* Optional asset unavailable at install time — ignore. */
      }
    }));
  })());
});

/* ---------------------------------------------------------------- activate */
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.filter((k) => k.startsWith('trueloop-') && !CURRENT.includes(k))
          .map((k) => caches.delete(k))
    );
    if (self.registration.navigationPreload) {
      try { await self.registration.navigationPreload.enable(); } catch (e) {}
    }
    await self.clients.claim();
  })());
});

/* ----------------------------------------------------- update handshake --- */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/* ------------------------------------------------------------------ fetch */
self.addEventListener('fetch', (event) => {
  const req = event.request;

  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Never touch anything that is not http(s) — extensions, data:, blob:, etc.
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  // Navigations: the SPA shell, network-first.
  if (req.mode === 'navigate') {
    event.respondWith(handleNavigation(event));
    return;
  }

  if (FONT_HOSTS.includes(url.hostname)) {
    event.respondWith(cacheFirst(req, FONT_CACHE));
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(req, ASSET_CACHE));
  }
  // Anything else (other cross-origin requests) falls through to the network.
});

/* ------------------------------------------------------------- strategies */
async function handleNavigation(event) {
  const cache = await caches.open(SHELL_CACHE);
  try {
    const preload = await event.preloadResponse;
    if (preload) {
      cache.put(SHELL_URL, preload.clone()).catch(() => {});
      return preload;
    }
    const fresh = await fetch(event.request);
    if (fresh && fresh.ok) cache.put(SHELL_URL, fresh.clone()).catch(() => {});
    return fresh;
  } catch (err) {
    // Offline: every route lives in the single shell document.
    const cached = await cache.match(SHELL_URL) ||
                   await cache.match('./index.html') ||
                   await cache.match('./');
    if (cached) return cached;
    return new Response(
      '<!doctype html><meta charset="utf-8"><title>Offline</title>' +
      '<body style="background:#05060f;color:#e9eaf4;font-family:system-ui;padding:48px;line-height:1.6">' +
      '<h1>You are offline</h1><p>Trueloop AI could not be reached and no cached copy is available yet. ' +
      'Reconnect and reload.</p></body>',
      { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  }
}

async function cacheFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  if (hit) return hit;
  try {
    const res = await fetch(req);
    if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone()).catch(() => {});
    return res;
  } catch (err) {
    return hit || Response.error();
  }
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);

  const network = fetch(req).then((res) => {
    if (res && res.ok && res.type === 'basic') cache.put(req, res.clone()).catch(() => {});
    return res;
  }).catch(() => null);

  if (hit) {
    silence(network);           // refresh in the background
    return hit;
  }
  const res = await network;
  return res || new Response('', { status: 504, statusText: 'Offline' });
}

/* Swallow background-refresh rejections without leaving an unhandled promise. */
function silence(promise) { if (promise && promise.catch) promise.catch(() => {}); }
