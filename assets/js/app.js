/* ==========================================================================
   Trueloop AI — router, interactions, PWA glue
   Hash-based routing only: the whole site is one document, which is what
   GitHub Pages needs in order to serve deep links without a server rewrite.
   ========================================================================== */
(function () {
  'use strict';

  var C = window.TL_CONTENT;
  var main = document.getElementById('main');

  /* The public URL is declared once, in <link rel="canonical"> in index.html.
     Read it at boot, before any route render rewrites that tag, so the site
     carries no second copy of its own address. Falls back to wherever the
     document is actually being served from. */
  var SITE_URL = (function () {
    var el = document.head.querySelector('link[rel="canonical"]');
    var href = el && el.getAttribute('href');
    if (!href) href = location.origin + location.pathname.replace(/[^/]*$/, '');
    return href.slice(-1) === '/' ? href : href + '/';
  })();

  /* ----------------------------------------------------------- routes ---- */
  var ROUTES = {
    '/': {
      view: function () { return C.home(); },
      title: 'Trueloop AI — VIP-Grade AI for iGaming Player Support',
      desc: 'Trueloop AI builds proprietary language models trained by veteran iGaming VIP managers, so high-net-worth casino and sportsbook players get support that reads mood, timing and intent — not generic chatbot replies.'
    },
    '/platform': {
      view: function () { return C.platform(); },
      title: 'Platform — Trueloop AI',
      desc: 'Copilot and autopilot execution modes, per-player AI agents, decision perimeters and dedicated infrastructure for VIP player support in online casino and sports betting.'
    },
    '/pricing': {
      view: function () { return C.pricing(); },
      title: 'Pricing & Commercial Models — Trueloop AI',
      desc: 'Three service models: performance (agent fee plus GGR share), per chat session, or a fixed monthly fee per agent on shared infrastructure. Quoted per engagement.'
    },
    '/company': {
      view: function () { return C.company(); },
      title: 'Company — Trueloop AI',
      desc: 'Trueloop AI LTD is a Cyprus-registered company founded by eight iGaming operators with long records in online casino and sportsbook product and VIP customer support.'
    },
    '/contact': {
      view: function () { return C.contact(); },
      title: 'Contact — Trueloop AI',
      desc: 'Request a briefing on VIP-grade AI support. Tell us your VIP volume and the service model you are interested in, and a founder will reply within one business day.'
    },
    '/legal-notice': {
      view: function () { return C.legalNotice(); },
      title: 'Legal Notice — Trueloop AI',
      desc: 'Company information for Trueloop AI LTD, registration HE486285, VAT CY60305822Y, registered in Empa/Paphos, Cyprus.'
    },
    '/terms': {
      view: function () { return C.terms(); },
      title: 'Terms & Conditions — Trueloop AI',
      desc: 'Business-to-business terms and conditions for the supply of Trueloop AI services, governed by the law of the Republic of Cyprus.'
    },
    '/privacy': {
      view: function () { return C.privacy(); },
      title: 'Privacy Policy — Trueloop AI',
      desc: 'How Trueloop AI LTD handles personal data under the GDPR and Cyprus Law 125(I)/2018. No cookies, no analytics, no tracking on this website.'
    },
    '/cookies': {
      view: function () { return C.cookies(); },
      title: 'Cookie Policy — Trueloop AI',
      desc: 'This website sets no cookies and uses no analytics or tracking. Strictly necessary progressive web app storage only.'
    }
  };

  /* Legacy / convenience aliases */
  var ALIASES = {
    '/home': '/', '/index': '/', '/product': '/platform', '/about': '/company',
    '/legal': '/legal-notice', '/imprint': '/legal-notice', '/impressum': '/legal-notice',
    '/terms-and-conditions': '/terms', '/tos': '/terms', '/privacy-policy': '/privacy',
    '/cookie-policy': '/cookies'
  };

  /* ------------------------------------------------------ hash parsing ---- */
  function parseHash() {
    var raw = (location.hash || '').replace(/^#/, '');
    if (!raw) raw = '/';

    var anchor = '';
    var hi = raw.indexOf('#');
    if (hi !== -1) { anchor = raw.slice(hi + 1); raw = raw.slice(0, hi); }

    var query = '';
    var qi = raw.indexOf('?');
    if (qi !== -1) { query = raw.slice(qi + 1); raw = raw.slice(0, qi); }

    var path = raw || '/';
    if (path.charAt(0) !== '/') path = '/' + path;
    if (path.length > 1) path = path.replace(/\/+$/, '');
    path = path.toLowerCase();
    if (ALIASES[path]) path = ALIASES[path];

    return { path: path, query: parseQuery(query), anchor: anchor };
  }

  function parseQuery(qs) {
    var out = {};
    if (!qs) return out;
    qs.split('&').forEach(function (pair) {
      if (!pair) return;
      var i = pair.indexOf('=');
      var k = i === -1 ? pair : pair.slice(0, i);
      var v = i === -1 ? '' : pair.slice(i + 1);
      try { out[decodeURIComponent(k)] = decodeURIComponent(v.replace(/\+/g, ' ')); }
      catch (e) { out[k] = v; }
    });
    return out;
  }

  /* -------------------------------------------------------------- meta ---- */
  function setMeta(sel, attr, value) {
    var el = document.head.querySelector(sel);
    if (el) el.setAttribute(attr, value);
  }

  function applyMeta(route, path) {
    var url = SITE_URL + (path === '/' ? '' : '#' + path);
    document.title = route.title;
    setMeta('meta[name="description"]', 'content', route.desc);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:title"]', 'content', route.title);
    setMeta('meta[property="og:description"]', 'content', route.desc);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[name="twitter:title"]', 'content', route.title);
    setMeta('meta[name="twitter:description"]', 'content', route.desc);
  }

  /* ------------------------------------------------------------ render ---- */
  var currentPath = null;

  function render() {
    var r = parseHash();
    var route = ROUTES[r.path];
    var isNew = r.path !== currentPath;

    if (!route) {
      if (isNew) {
        main.innerHTML = C.notFound();
        document.title = 'Page not found — Trueloop AI';
        setMeta('meta[name="description"]', 'content', 'The page you are looking for does not exist on this site.');
        setMeta('meta[name="robots"]', 'content', 'noindex, follow');
      }
    } else if (isNew) {
      setMeta('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large, max-snippet:-1');
      main.innerHTML = route.view();
      applyMeta(route, r.path);
    }

    if (isNew) {
      currentPath = r.path;
      markActiveNav(r.path);
      initRevealer();
      initTocSpy();
      initHeroCanvas();
      initContactForm(r.query);
    } else if (r.path === '/contact') {
      prefillModel(r.query.model);
    }

    closeNav();
    scrollToTarget(r.anchor, isNew);
  }

  function scrollToTarget(anchor, isNew) {
    if (anchor) {
      // Let the freshly injected DOM lay out before measuring.
      requestAnimationFrame(function () {
        var el = document.getElementById(anchor);
        if (el) {
          var top = el.getBoundingClientRect().top + window.pageYOffset - 88;
          window.scrollTo({ top: top, behavior: 'smooth' });
          return;
        }
        if (isNew) window.scrollTo(0, 0);
      });
      return;
    }
    if (isNew) window.scrollTo(0, 0);
  }

  function markActiveNav(path) {
    var group = path;
    document.querySelectorAll('[data-nav]').forEach(function (a) {
      a.classList.toggle('is-active', a.getAttribute('data-nav') === group);
      if (a.classList.contains('is-active')) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  /* ----------------------------------------------------------- reveals ---- */
  var observer = null;
  function initRevealer() {
    var nodes = main.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(function (n) { n.classList.add('in'); });
      return;
    }
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (!e.isIntersecting) return;
        var el = e.target;
        setTimeout(function () { el.classList.add('in'); }, Math.min(i, 5) * 55);
        observer.unobserve(el);
      });
      // threshold must stay 0: it is a ratio of the TARGET's own area, so any
      // positive value is unreachable for an element far taller than the
      // viewport (a 14,000px legal document would never reveal).
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });
    nodes.forEach(function (n) { observer.observe(n); });
  }

  /* ---------------------------------------------------------- toc spy ---- */
  var tocObserver = null;
  function initTocSpy() {
    if (tocObserver) { tocObserver.disconnect(); tocObserver = null; }

    var links = main.querySelectorAll('.toc a[data-toc]');
    var headings = main.querySelectorAll('.prose [id^="sec-"]');
    if (!links.length || !headings.length || !('IntersectionObserver' in window)) return;

    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('data-toc')] = a; });

    var visible = Object.create(null);
    var order = Array.prototype.map.call(headings, function (el) { return el.id; });

    tocObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });

      // The highlighted entry is the first section inside the reading band.
      var current = null;
      for (var i = 0; i < order.length; i++) {
        if (visible[order[i]]) { current = order[i]; break; }
      }
      if (!current) return;

      Object.keys(byId).forEach(function (id) {
        byId[id].classList.toggle('is-current', id === current);
      });
    }, { rootMargin: '-88px 0px -68% 0px', threshold: 0 });

    Array.prototype.forEach.call(headings, function (el) { tocObserver.observe(el); });
  }

  /* ------------------------------------------------- hero neural canvas --- */
  var canvasRAF = null, canvasRO = null;
  function initHeroCanvas() {
    if (canvasRAF) { cancelAnimationFrame(canvasRAF); canvasRAF = null; }
    if (canvasRO) { canvasRO.disconnect(); canvasRO = null; }
    var cv = document.getElementById('heroCanvas');
    if (!cv) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var ctx = cv.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = 0, h = 0, nodes = [];
    var COLORS = ['#29c7f5', '#2b6bff', '#8b3bff', '#f022c8', '#ff8a3c'];

    function resize() {
      var rect = cv.getBoundingClientRect();
      w = Math.max(rect.width, 1); h = Math.max(rect.height, 1);
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }

    function build() {
      var count = w < 380 ? 26 : w < 520 ? 36 : 46;
      nodes = [];
      for (var i = 0; i < count; i++) {
        var a = Math.random() * Math.PI * 2;
        var rad = (0.30 + Math.random() * 0.22) * Math.min(w, h);
        nodes.push({
          x: w / 2 + Math.cos(a) * rad,
          y: h / 2 + Math.sin(a) * rad,
          vx: (Math.random() - 0.5) * 0.24,
          vy: (Math.random() - 0.5) * 0.24,
          r: 0.9 + Math.random() * 1.7,
          c: COLORS[(Math.random() * COLORS.length) | 0]
        });
      }
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      var cx = w / 2, cy = h / 2, inner = Math.min(w, h) * 0.27, outer = Math.min(w, h) * 0.54;

      for (var i = 0; i < nodes.length; i++) {
        var p = nodes[i];
        p.x += p.vx; p.y += p.vy;
        var dx = p.x - cx, dy = p.y - cy, d = Math.sqrt(dx * dx + dy * dy) || 1;
        // keep the swarm in an annulus around the logo
        if (d < inner || d > outer) {
          var target = d < inner ? inner : outer;
          p.x = cx + (dx / d) * target;
          p.y = cy + (dy / d) * target;
          p.vx *= -1; p.vy *= -1;
        }
      }

      for (var a = 0; a < nodes.length; a++) {
        for (var b = a + 1; b < nodes.length; b++) {
          var na = nodes[a], nb = nodes[b];
          var ddx = na.x - nb.x, ddy = na.y - nb.y;
          var dist = Math.sqrt(ddx * ddx + ddy * ddy);
          if (dist < 86) {
            ctx.globalAlpha = (1 - dist / 86) * 0.26;
            ctx.strokeStyle = na.c;
            ctx.lineWidth = 0.7;
            ctx.beginPath(); ctx.moveTo(na.x, na.y); ctx.lineTo(nb.x, nb.y); ctx.stroke();
          }
        }
      }

      for (var k = 0; k < nodes.length; k++) {
        var q = nodes[k];
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = q.c;
        ctx.beginPath(); ctx.arc(q.x, q.y, q.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
      canvasRAF = requestAnimationFrame(frame);
    }

    resize();
    frame();

    if (window.ResizeObserver) {
      canvasRO = new ResizeObserver(resize);
      canvasRO.observe(cv);
    } else {
      window.addEventListener('resize', resize);
    }
  }

  /* ------------------------------------------------------ contact form ---- */
  var MODEL_ALIASES = {
    '1': 'Model 1', 'model1': 'Model 1', 'model-1': 'Model 1', 'performance': 'Model 1',
    '2': 'Model 2', 'model2': 'Model 2', 'model-2': 'Model 2', 'session': 'Model 2',
    '3': 'Model 3', 'model3': 'Model 3', 'model-3': 'Model 3', 'essentials': 'Model 3', 'shared': 'Model 3',
    'mode1': 'Mode 1', 'mode-1': 'Mode 1', 'copilot': 'Mode 1',
    'mode2': 'Mode 2', 'mode-2': 'Mode 2', 'autopilot': 'Mode 2'
  };

  function prefillModel(value) {
    if (!value) return;
    var sel = document.getElementById('cf-model');
    if (!sel) return;
    var key = String(value).trim().toLowerCase().replace(/\s+/g, '');
    var needle = MODEL_ALIASES[key] || MODEL_ALIASES[String(value).trim().toLowerCase()] || String(value).trim();
    for (var i = 0; i < sel.options.length; i++) {
      var t = sel.options[i].text;
      if (t && t.toLowerCase().indexOf(needle.toLowerCase()) === 0) { sel.selectedIndex = i; return; }
    }
    for (var j = 0; j < sel.options.length; j++) {
      if (sel.options[j].text.toLowerCase().indexOf(needle.toLowerCase()) !== -1) { sel.selectedIndex = j; return; }
    }
  }

  function initContactForm(query) {
    var form = document.getElementById('contactForm');
    if (!form) return;

    prefillModel(query && query.model);

    var status = document.getElementById('formStatus');
    var copyBtn = document.getElementById('copyBtn');

    function val(id) {
      var el = document.getElementById(id);
      if (!el) return '';
      if (el.tagName === 'SELECT') return el.selectedIndex > 0 ? el.options[el.selectedIndex].text.trim() : '';
      return (el.value || '').trim();
    }

    function say(msg) {
      if (!status) return;
      status.innerHTML = msg;
      status.hidden = false;
    }

    function compose() {
      var name = val('cf-name'), company = val('cf-company'), email = val('cf-email');
      var model = val('cf-model'), message = val('cf-message');
      var consent = document.getElementById('cf-consent');

      var missing = [];
      if (!name) missing.push('full name');
      if (!company) missing.push('company');
      if (!email) missing.push('work e-mail');
      if (!model) missing.push('model of interest');
      if (!message) missing.push('what you would like to cover');
      if (consent && !consent.checked) missing.push('the acknowledgement checkbox');

      if (missing.length) {
        say('Please complete ' + listify(missing) + ' before composing the e-mail.');
        var firstInvalid = form.querySelector(':invalid');
        if (firstInvalid && firstInvalid.focus) firstInvalid.focus();
        return null;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        say('That e-mail address does not look right. Please check it and try again.');
        var em = document.getElementById('cf-email');
        if (em) em.focus();
        return null;
      }

      var subject = 'Briefing request — ' + company + ' — ' + model;

      var lines = [
        'Hello Trueloop AI,', '',
        'I would like to arrange a briefing.', '',
        '— CONTACT —',
        'Name:            ' + name,
        'Role:            ' + (val('cf-role') || '—'),
        'Company:         ' + company,
        'Work e-mail:     ' + email,
        'Phone:           ' + (val('cf-phone') || '—'),
        '',
        '— INTEREST —',
        'Model of interest: ' + model,
        'Vertical:          ' + (val('cf-vertical') || '—'),
        'VIPs under mgmt:   ' + (val('cf-vips') || '—'),
        '',
        '— WHAT I WOULD LIKE TO COVER —',
        message,
        '', '',
        'Sent via the contact form at ' + location.host
      ];

      return {
        subject: subject,
        body: lines.join('\r\n')
      };
    }

    function listify(arr) {
      if (arr.length === 1) return arr[0];
      return arr.slice(0, -1).join(', ') + ' and ' + arr[arr.length - 1];
    }

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var msg = compose();
      if (!msg) return;

      var href = 'mailto:' + C.COMPANY.email +
        '?subject=' + encodeURIComponent(msg.subject) +
        '&body=' + encodeURIComponent(msg.body);

      say('Opening your e-mail client with the message ready to send. ' +
          '<strong>It is not sent yet</strong> — press send in your mail application. ' +
          'Nothing was transmitted from this page.');

      // A plain assignment is the most widely supported way to trigger a mail client.
      window.location.href = href;
    });

    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        var msg = compose();
        if (!msg) return;
        var text = 'To: ' + C.COMPANY.email + '\r\nSubject: ' + msg.subject + '\r\n\r\n' + msg.body;
        copyText(text).then(function () {
          say('Copied to your clipboard. Paste it into an e-mail addressed to ' + C.COMPANY.email + '.');
        }, function () {
          say('Your browser blocked clipboard access. Please select the text in the form and copy it manually.');
        });
      });
    }
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(ta);
        ok ? resolve() : reject();
      } catch (e) { reject(e); }
    });
  }

  /* ---------------------------------------------------------- nav / ui ---- */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  function closeNav() {
    if (!navLinks || !navToggle) return;
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
  }

  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (header) header.classList.toggle('is-stuck', window.pageYOffset > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Clicking the current route again should still scroll / re-render cleanly. */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var href = a.getAttribute('href');

    // A bare "#anchor" is an in-page jump, not a route. Handle it here so the
    // router never sees it and mistakes it for an unknown path.
    if (href.length > 1 && href.charAt(1) !== '/') {
      var el = document.getElementById(href.slice(1));
      if (el) {
        e.preventDefault();
        if (!el.hasAttribute('tabindex') && !/^(A|BUTTON|INPUT|SELECT|TEXTAREA)$/.test(el.tagName)) {
          el.setAttribute('tabindex', '-1');
        }
        el.focus({ preventScroll: true });
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.pageYOffset - 88,
          behavior: 'smooth'
        });
      }
      return;
    }

    if (href === location.hash) {
      e.preventDefault();
      render();
    }
  });

  /* ------------------------------------------------------- online state --- */
  var offlineBar = document.getElementById('offlineBar');
  function updateOnline() {
    if (offlineBar) offlineBar.hidden = navigator.onLine !== false;
  }
  window.addEventListener('online', updateOnline);
  window.addEventListener('offline', updateOnline);
  updateOnline();

  /* --------------------------------------------------------- boot / SW ---- */
  window.addEventListener('hashchange', render);
  render();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./sw.js').then(function (reg) {

        function promptForUpdate(worker) {
          var toast = document.getElementById('updateToast');
          var btn = document.getElementById('updateBtn');
          if (!toast || !btn) { return; }
          toast.classList.add('show');
          btn.onclick = function () {
            btn.disabled = true;
            btn.textContent = 'Updating…';
            worker.postMessage({ type: 'SKIP_WAITING' });
          };
        }

        if (reg.waiting && navigator.serviceWorker.controller) {
          promptForUpdate(reg.waiting);
        }

        reg.addEventListener('updatefound', function () {
          var nw = reg.installing;
          if (!nw) return;
          nw.addEventListener('statechange', function () {
            // "installed" with an existing controller means an update is ready.
            if (nw.state === 'installed' && navigator.serviceWorker.controller) {
              promptForUpdate(nw);
            }
          });
        });

        // Look for a new version on navigation and roughly hourly.
        window.addEventListener('hashchange', function () { reg.update().catch(function () {}); });
        setInterval(function () { reg.update().catch(function () {}); }, 60 * 60 * 1000);

      }).catch(function (err) {
        console.warn('Service worker registration failed:', err);
      });

      var refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', function () {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });
    });
  }
})();
