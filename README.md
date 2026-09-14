# Trueloop AI — website

Static, dependency-free progressive web app for **Trueloop AI LTD**, built to be served
straight from GitHub Pages. No build step, no framework, no package manager.

## Structure

```
index.html            App shell: <head> meta, header, footer, script tags
404.html              GitHub Pages fallback → redirects strays into the hash router
manifest.json         PWA manifest (relative paths, shortcuts, maskable icons)
sw.js                 Service worker: precache, offline, update prompt
browserconfig.xml     Windows tiles
robots.txt            Crawler policy
assets/css/styles.css Design system — all colours are CSS custom properties on :root
assets/js/content.js  Home, Platform, Pricing, Company, Contact page templates
assets/js/legal.js    Legal notice, Terms, Privacy, Cookies, 404
assets/js/app.js      Hash router, contact form, hero canvas, PWA glue
assets/img/og-image.png  1200×630 social preview image
assets/logo/          logo.png (2048px source, used for JSON-LD)
                      logo-512 / -192 / -96.png (generated, used by the page)
assets/icons/         PWA / favicon / Apple / MS tile icons
```

## Routes

All navigation is hash-based, as required for GitHub Pages:

| Route | Page |
|---|---|
| `#/` | Home |
| `#/platform` | Platform (execution modes, model, governance, infrastructure) |
| `#/pricing` | Three service models, comparison table, pricing FAQ |
| `#/company` | About, mission, principles, company details |
| `#/contact` | Contact form (composes an e-mail) |
| `#/legal-notice` | Legal notice / imprint |
| `#/terms` | Terms and conditions (Cyprus law) |
| `#/privacy` | Privacy policy (GDPR) |
| `#/cookies` | Cookie policy |

Aliases such as `#/about`, `#/product`, `#/legal`, `#/imprint` and `#/tos` redirect to the
canonical route. Deep anchors work as `#/terms#sec-12`.

## Before you go live — three things to check

1. **The domain appears in exactly one place.** Every path on the site is relative —
   assets, routes, icons, the manifest, the service worker, and the JSON-LD structured
   data (Google resolves relative URLs in structured data against the page). The single
   exception is the marked block at the top of `index.html`:

   ```
   <link rel="canonical">   og:url   og:image   og:image:secure_url   twitter:image
   ```

   Those five must be literal absolute URLs because social scrapers do not execute
   JavaScript and reject relative image URLs. They currently say `https://trueloop.com.cy/`.
   **If the site lives at `https://<user>.github.io/Trueloop-AI/` instead, edit that block
   and nothing else.** `app.js` reads the canonical tag at boot, so the router's own meta
   updates follow automatically.

   If you use the custom domain, add a `CNAME` file containing `trueloop.com.cy` and point
   DNS at GitHub Pages.

   There is deliberately no `sitemap.xml`: a sitemap's `<loc>` must be absolute, which would
   reintroduce a second copy of the address, and it would list exactly one URL — every route
   is a hash fragment that crawlers do not index separately. The canonical tag already does
   that job.

2. **The legal pages are an unreviewed draft.** The terms, privacy and cookie policies were
   drafted as a solid, industry-standard starting point under the law of the Republic of
   Cyprus, with the correct statutory references (GDPR, Law 125(I)/2018, Law 156(I)/2004,
   Law 73(I)/2012, the AI Act). They have **not** been reviewed by a qualified Cypriot
   advocate. Have them checked before relying on them commercially. The dates are set in
   `LEGAL_UPDATED` at the top of `assets/js/content.js`.

3. **Image placeholders.** Four slots are marked with dashed placeholder panels that state
   the intended subject and the recommended dimensions. Drop real files in and replace the
   `ph(...)` call with an `<img>`:
   - `assets/img/console.png` — product console screenshot (1600×1000)
   - `assets/img/reasoning.png` — reasoning/signal timeline UI (1400×900)
   - `assets/img/team.jpg` and `team-wide.jpg` — founding team (1400×1000 / 2000×900)
   - `assets/img/office.jpg` — Paphos office (1400×1000)

   All other graphics on the site are real: inline SVG diagrams, the animated hero
   particle network, and the generated OG image.

The page never loads the 1.7 MB source logo: the header uses `logo-96.png` and the hero
uses `logo-512.png`. If you replace `logo.png`, regenerate the variants (any image tool
will do — they are plain square downscales).

## Service worker / updates

`sw.js` precaches the shell and serves navigations network-first, so the site is fresh
online and fully usable offline. **Bump `CACHE_VERSION` in `sw.js` on every deploy.**
Visitors then get a "A new version of this site is available / Refresh" toast; the new
worker activates only when they accept, so nothing reloads under them mid-read.

## Contact form

The form never transmits anything. On submit it validates in the browser, builds a
formatted plain-text message and opens the visitor's own mail client via `mailto:` to
`manager@trueloop.com.cy`. A copy-to-clipboard fallback covers browsers with no mail client
configured. Deep links preselect the model, e.g. `#/contact?model=model-2`, `?model=mode-1`.

## Privacy posture

No cookies, no analytics, no tracking, no third-party JavaScript. The only third-party
requests are GitHub Pages (hosting) and Google Fonts (typefaces) — both disclosed in the
privacy and cookie policies. If you would rather have zero third-party requests, self-host
the three fonts in `assets/fonts/` and drop the `fonts.googleapis.com` stylesheet link from
`index.html`; the CSS already falls back to a system font stack.

## Local preview

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

Service workers need `localhost` or HTTPS; `file://` will not work.
