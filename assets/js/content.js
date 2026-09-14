/* ==========================================================================
   Trueloop AI — site content & page templates
   Every page is a plain function returning an HTML string. The router in
   app.js picks one by hash route. No build step, no dependencies.
   ========================================================================== */
(function () {
  'use strict';

  var COMPANY = {
    legalName: 'Trueloop AI LTD',
    tradingName: 'Trueloop AI',
    director: 'Andre Haneberg',
    street: 'Nikitara 2',
    city: '8250 Empa/Paphos',
    country: 'Cyprus',
    reg: 'HE486285',
    vat: 'CY60305822Y',
    email: 'manager@trueloop.com.cy'
  };

  var LEGAL_UPDATED = '14 September 2026';

  /* ---------------- Icons (inline SVG, currentColor) ---------------- */
  var I = {
    brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/></svg>',
    crown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18h20"/><path d="m3 6 4.5 4L12 4l4.5 6L21 6l-1.7 9H4.7L3 6Z"/></svg>',
    radar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76a6 6 0 1 0-8.49 8.49"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z"/><path d="m9 12 2 2 4-4"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18 8.07 3.6a1 1 0 0 1 0 1.83l-8.07 3.6a2 2 0 0 1-1.66 0l-8.07-3.6a1 1 0 0 1 0-1.83l8.07-3.6a2 2 0 0 1 1.66 0Z"/><path d="m2.3 12.23 8.87 3.96a2 2 0 0 0 1.66 0l8.87-3.96"/><path d="m2.3 17.23 8.87 3.96a2 2 0 0 0 1.66 0l8.87-3.96"/></svg>',
    gauge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/></svg>'
  };

  /* ---------------- Small builders ---------------- */
  function ph(title, desc, spec) {
    return '<figure class="img-placeholder" role="img" aria-label="Image placeholder: ' + title + '">' +
      '<div><div class="ph-icon">' + I.image + '</div>' +
      '<div class="ph-title">Image placeholder &middot; ' + title + '</div>' +
      '<p class="ph-desc">' + desc + '</p>' +
      '<div class="ph-spec">' + spec + '</div></div></figure>';
  }

  function card(icon, title, body, variant) {
    return '<article class="card reveal">' +
      '<div class="icon-badge' + (variant ? ' icon-badge--' + variant : '') + '">' + icon + '</div>' +
      '<h3>' + title + '</h3><p>' + body + '</p></article>';
  }

  function qa(q, a) {
    return '<details class="qa"><summary>' + q + '</summary><div class="qa-body">' + a + '</div></details>';
  }

  function ctaBand(title, body) {
    return '<section class="section"><div class="wrap"><div class="cta-band reveal">' +
      '<h2>' + title + '</h2><p class="lede" style="margin-inline:auto">' + body + '</p>' +
      '<div class="cta-actions">' +
      '<a class="btn btn--lg" href="#/contact">Request a briefing</a>' +
      '<a class="btn btn--lg btn--ghost" href="#/pricing">See commercial models</a>' +
      '</div></div></div></section>';
  }

  /* ---------------- Hero neural illustration (inline SVG) ---------------- */
  var SVG_LOOP = '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram: the Trueloop feedback loop between player signals, the VIP model and the operator">' +
    '<defs>' +
    '<linearGradient id="gA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#29c7f5"/><stop offset="0.5" stop-color="#2b6bff"/><stop offset="1" stop-color="#8b3bff"/></linearGradient>' +
    '<linearGradient id="gB" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8b3bff"/><stop offset="1" stop-color="#f022c8"/></linearGradient>' +
    '<linearGradient id="gC" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ff8a3c"/><stop offset="1" stop-color="#ffc46b"/></linearGradient>' +
    '</defs>' +
    '<rect width="640" height="400" fill="none"/>' +
    '<ellipse cx="320" cy="200" rx="230" ry="130" fill="none" stroke="url(#gA)" stroke-width="1.2" opacity="0.5" stroke-dasharray="5 7"/>' +
    '<ellipse cx="320" cy="200" rx="170" ry="92" fill="none" stroke="url(#gB)" stroke-width="1.2" opacity="0.45"/>' +
    '<g font-family="ui-monospace, monospace" font-size="11" letter-spacing="1.4" fill="#b6bad4" text-anchor="middle">' +
    '<g><circle cx="320" cy="70" r="34" fill="#0a0b1a" stroke="url(#gA)" stroke-width="1.5"/><text x="320" y="66">SIGNAL</text><text x="320" y="80" font-size="9" fill="#858bad">capture</text></g>' +
    '<g><circle cx="530" cy="200" r="34" fill="#0a0b1a" stroke="url(#gB)" stroke-width="1.5"/><text x="530" y="196">MODEL</text><text x="530" y="210" font-size="9" fill="#858bad">reasoning</text></g>' +
    '<g><circle cx="320" cy="330" r="34" fill="#0a0b1a" stroke="url(#gC)" stroke-width="1.5"/><text x="320" y="326">ACTION</text><text x="320" y="340" font-size="9" fill="#858bad">response</text></g>' +
    '<g><circle cx="110" cy="200" r="34" fill="#0a0b1a" stroke="url(#gA)" stroke-width="1.5"/><text x="110" y="196">OUTCOME</text><text x="110" y="210" font-size="9" fill="#858bad">learning</text></g>' +
    '</g>' +
    '<g fill="#e9eaf4" font-family="ui-monospace, monospace" font-size="10" text-anchor="middle" opacity="0.85">' +
    '<circle cx="320" cy="200" r="46" fill="#05060f" stroke="#8b3bff" stroke-width="1.5"/>' +
    '<text x="320" y="197" letter-spacing="1">TRUE</text><text x="320" y="211" letter-spacing="1">LOOP</text>' +
    '</g>' +
    '<g stroke="url(#gA)" stroke-width="1.4" fill="none" opacity="0.8">' +
    '<path d="M348 88 C 430 108 490 140 512 172"/><path d="M512 228 C 490 260 430 292 348 312"/>' +
    '<path d="M292 312 C 210 292 150 260 128 228"/><path d="M128 172 C 150 140 210 108 292 88"/>' +
    '</g>' +
    '<g fill="#29c7f5"><circle cx="430" cy="128" r="3"><animate attributeName="opacity" values="0.2;1;0.2" dur="2.6s" repeatCount="indefinite"/></circle>' +
    '<circle cx="210" cy="272" r="3" fill="#f022c8"><animate attributeName="opacity" values="1;0.2;1" dur="2.6s" repeatCount="indefinite"/></circle>' +
    '<circle cx="430" cy="272" r="3" fill="#ff8a3c"><animate attributeName="opacity" values="0.2;1;0.2" dur="3.4s" repeatCount="indefinite"/></circle>' +
    '<circle cx="210" cy="128" r="3" fill="#8b3bff"><animate attributeName="opacity" values="1;0.2;1" dur="3.4s" repeatCount="indefinite"/></circle></g>' +
    '</svg>';

  var SVG_SIGNAL = '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram: a generic model reads only the words while Trueloop reads tone, timing and history">' +
    '<defs><linearGradient id="sA" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f022c8"/><stop offset="1" stop-color="#ff8a3c"/></linearGradient>' +
    '<linearGradient id="sB" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#29c7f5"/><stop offset="1" stop-color="#8b3bff"/></linearGradient></defs>' +
    '<g font-family="ui-monospace, monospace" font-size="10.5" letter-spacing="1.2">' +
    '<text x="24" y="30" fill="#858bad">GENERIC LLM · READS</text>' +
    '<rect x="20" y="44" width="600" height="56" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.09)"/>' +
    '<text x="40" y="70" fill="#b6bad4" font-size="12.5" letter-spacing="0">&ldquo;Can you check my withdrawal? Been a long week anyway.&rdquo;</text>' +
    '<text x="40" y="88" fill="#f022c8" font-size="10">→ intent: withdrawal_status &nbsp;·&nbsp; sentiment: neutral &nbsp;·&nbsp; done</text>' +
    '<text x="24" y="140" fill="#858bad">TRUELOOP VIP MODEL · READS</text>' +
    '</g>' +
    '<g font-family="ui-monospace, monospace" font-size="10">' +
    '<rect x="20" y="154" width="600" height="152" rx="12" fill="rgba(139,59,255,0.07)" stroke="rgba(139,59,255,0.35)"/>' +
    '<g fill="#e9eaf4" font-size="10.5">' +
    '<text x="40" y="180">◆ &nbsp;withdrawal_status &nbsp;—&nbsp; <tspan fill="#29c7f5">resolve in-line, no ticket, no hold music</tspan></text>' +
    '<text x="40" y="204">◆ &nbsp;&ldquo;long week&rdquo; &nbsp;—&nbsp; <tspan fill="#ff8a3c">discrete invitation to acknowledge, not to probe</tspan></text>' +
    '<text x="40" y="228">◆ &nbsp;03:14 local &nbsp;—&nbsp; <tspan fill="#f022c8">off-pattern session; 4th night this week</tspan></text>' +
    '<text x="40" y="252">◆ &nbsp;last 30d &nbsp;—&nbsp; <tspan fill="#8b3bff">deposit velocity up 210%, session length up 80%</tspan></text>' +
    '<text x="40" y="276">◆ &nbsp;host history &nbsp;—&nbsp; <tspan fill="#29c7f5">prefers brevity; never call, always message</tspan></text>' +
    '</g>' +
    '<rect x="20" y="154" width="4" height="152" rx="2" fill="url(#sB)"/>' +
    '</g></svg>';

  /* ==========================================================================
     HOME
     ========================================================================== */
  function home() {
    return '' +
    '<section class="hero">' +
      '<div class="wrap hero-grid">' +
        '<div>' +
          '<span class="eyebrow">Proprietary LLMs for VIP player management</span>' +
          '<h1>VIPs don&rsquo;t churn over odds.<br>They churn over <span class="grad-text">one missed signal</span>.</h1>' +
          '<p class="lede">Trueloop AI trains proprietary models on the nuance that decides VIP relationships &mdash; mood, timing, restraint, and the things a high-net-worth player implies rather than says. Built by people who ran the desk.</p>' +
          '<div class="hero-actions">' +
            '<a class="btn btn--lg" href="#/contact">Request a briefing ' + I.arrow + '</a>' +
            '<a class="btn btn--lg btn--ghost" href="#/platform">How it works</a>' +
          '</div>' +
        '</div>' +
        '<div class="hero-visual">' +
          '<canvas id="heroCanvas" aria-hidden="true"></canvas>' +
          '<div class="hero-ring" aria-hidden="true"></div>' +
          '<div class="hero-ring r2" aria-hidden="true"></div>' +
          '<img class="hero-logo" src="./assets/logo/hero-vip.png"' +
            ' srcset="./assets/logo/hero-vip-400.png 400w, ./assets/logo/hero-vip.png 792w"' +
            ' sizes="(min-width: 800px) 385px, 74vw"' +
            ' alt="A VIP casino guest in a suit, sunglasses and a VIP lanyard, rendered in Trueloop brand purples"' +
            ' width="792" height="792" fetchpriority="high">' +
        '</div>' +
      '</div>' +
    '</section>' +

    /* --- Problem --- */
    '<section class="section" id="problem"><div class="wrap">' +
      '<div class="section-head center reveal">' +
        '<span class="eyebrow">The problem</span>' +
        '<h2>Generic AI is a churn engine at the top of your database</h2>' +
        '<p class="lede" style="margin-inline:auto">Most operators bolt a general-purpose model onto a support widget. It is, at best, mediocre for recreational players. For a VIP it is unusable &mdash; and every failure is a reason to open an account somewhere else.</p>' +
      '</div>' +
      '<div class="grid grid-4">' +
        card(I.chat, 'The infinite loop', 'Clarifying question, clarifying question, clarifying question. A player with eight-figure lifetime value does not repeat themselves twice, let alone four times.') +
        card(I.radar, 'The missed invitation', 'A VIP rarely asks for help directly. A throwaway line about a &ldquo;long week&rdquo; is an opening. A generic model answers the literal question and closes the door.') +
        card(I.gauge, 'The wrong register', 'Over-familiar at 3 a.m. after a heavy loss. Clipped and transactional after a career win. Tone that ignores context reads as indifference.') +
        card(I.users, 'The human ceiling', 'Competitors staff enormous human VIP centres. That scales headcount, not consistency &mdash; and it never covers every hour, language and time zone at the same quality.') +
      '</div>' +
      '<div class="media reveal mt-lg" style="padding:clamp(16px,2.6vw,28px)">' + SVG_SIGNAL + '</div>' +
    '</div></section>' +

    /* --- Difference --- */
    '<section class="section" id="difference"><div class="wrap">' +
      '<div class="split">' +
        '<div class="reveal">' +
          '<span class="eyebrow">The Trueloop difference</span>' +
          '<h2>Experience is the training set</h2>' +
          '<p>Only people who have spent years inside VIP management can tell the difference between adequate support and excellence. That judgement is not in a public corpus &mdash; it lives in how a host reads a Tuesday-night message differently from a Saturday-afternoon one.</p>' +
          '<p>We encode it. Our models are trained on large, structured datasets of nuanced VIP interaction, annotated by the people who handled those relationships, and differentiated by day, time, state of play and mood.</p>' +
          '<ul class="feat-list mt-md">' +
            '<li>Proprietary models, not a thin prompt over someone else&rsquo;s chatbot</li>' +
            '<li>Per-player agents that carry the full relationship history</li>' +
            '<li>Restraint by design &mdash; knowing when not to reply is a feature</li>' +
            '<li>Explicit decision perimeters with human escalation built in</li>' +
          '</ul>' +
          '<p class="mt-md"><a class="link-arrow" href="#/platform">Explore the platform ' + I.arrow + '</a></p>' +
        '</div>' +
        '<div class="media reveal" style="padding:clamp(12px,2vw,24px)">' + SVG_LOOP + '</div>' +
      '</div>' +
    '</div></section>' +

    /* --- Modes --- */
    '<section class="section" id="modes"><div class="wrap">' +
      '<div class="section-head center reveal">' +
        '<span class="eyebrow">Execution modes</span>' +
        '<h2>Start as a wingman. Graduate to autopilot.</h2>' +
        '<p class="lede" style="margin-inline:auto">Both modes run on the same VIP intelligence. The only question is how much of the keyboard you hand over &mdash; and most operators answer that question differently after ninety days.</p>' +
      '</div>' +
      '<div class="grid grid-2">' + modeCard1() + modeCard2() + '</div>' +
      '<p class="note mt-lg">Mode 1 is where nearly every engagement begins. It is the lowest-risk way to see Trueloop reasoning against your real traffic, with your team retaining every final word. Mode 2 is where the economics change.</p>' +
    '</div></section>' +

    /* --- Capabilities --- */
    '<section class="section"><div class="wrap">' +
      '<div class="section-head center reveal">' +
        '<span class="eyebrow">Capabilities</span>' +
        '<h2>What the agent actually does</h2>' +
      '</div>' +
      '<div class="grid grid-3">' +
        card(I.brain, 'Nuance detection', 'Surfaces the implied request behind the stated one: fatigue, frustration, a bid for recognition, an unspoken limit. Flags it to the host or acts on it inside the perimeter.', 'warm') +
        card(I.crown, 'Per-player personality', 'Each identified VIP is assigned a custom-trained agent that learns channel preference, message length, humour tolerance, escalation triggers and the names that matter to them.') +
        card(I.bolt, 'Low-latency, on demand', 'Agents are spun up on demand and answer at conversational speed. No queue, no &ldquo;an agent will be with you shortly&rdquo; for the top of your database.') +
        card(I.shield, 'Decision perimeter', 'You define what the agent may decide alone &mdash; bonus latitude, limit changes, comp value, tone in sensitive contexts. Anything outside it routes to a human with a full briefing.', 'warm') +
        card(I.layers, 'Sits in your stack', 'Just-in-time suggestions inside the text editors your team already uses, or a direct integration into your CRM and messaging layer. No rip-and-replace.') +
        card(I.lock, 'Isolation by tenant', 'Dedicated infrastructure options keep your player data and your fine-tuned weights on infrastructure that serves you alone.') +
      '</div>' +
    '</div></section>' +

    /* --- Product visual placeholder --- */
    '<section class="section"><div class="wrap">' +
      '<div class="split split--rev">' +
        '<div class="reveal">' + ph('Console screenshot',
            'The Trueloop VIP console: live conversation, agent reasoning trace, signal timeline and the human escalation control. Dark UI on #05060f with cyan-to-magenta accents.',
            'Recommended 1600 &times; 1000 px &middot; PNG or WebP &middot; assets/img/console.png') + '</div>' +
        '<div class="reveal">' +
          '<span class="eyebrow">In the workflow</span>' +
          '<h2>Your host stays in the chair</h2>' +
          '<p>In Mode 1, Trueloop writes into the tools your VIP team already lives in. Suggested phrasings appear as the conversation moves, with the signal that triggered them attached, so the host can accept, edit or ignore in a single keystroke.</p>' +
          '<p>Nothing is sent without approval. Every accept, edit and rejection becomes training signal &mdash; which is why Mode 1 makes Mode 2 safe.</p>' +
          '<ul class="feat-list mt-md">' +
            '<li>Inline suggestions with the reasoning attached</li>' +
            '<li>One-keystroke accept, edit or discard</li>' +
            '<li>Every correction feeds the loop</li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</div></section>' +

    /* --- How to start --- */
    '<section class="section"><div class="wrap">' +
      '<div class="split">' +
        '<div class="reveal">' +
          '<span class="eyebrow">Getting started</span>' +
          '<h2>From first call to live VIP coverage</h2>' +
          '<p>A deployment is measured in weeks, not quarters &mdash; because the hard part, the domain knowledge, is already built.</p>' +
        '</div>' +
        '<div class="steps reveal">' +
          '<div class="step"><h4>Briefing &amp; scoping</h4><p>We map your VIP segment, current coverage model, channels and the service gaps you already know about.</p></div>' +
          '<div class="step"><h4>Data &amp; perimeter design</h4><p>Historic interactions are ingested under a data processing agreement. Together we draw the decision perimeter and escalation rules.</p></div>' +
          '<div class="step"><h4>Mode 1 pilot</h4><p>Your hosts work with the agent as a wingman on live traffic. You see reasoning quality against your own players before anything is automated.</p></div>' +
          '<div class="step"><h4>Per-player agents</h4><p>Identified VIPs are assigned dedicated, custom-trained agents that carry their history and preferences forward.</p></div>' +
          '<div class="step"><h4>Mode 2 hand-over</h4><p>Autopilot is enabled segment by segment. Humans act only when the agent reaches the edge of its perimeter.</p></div>' +
        '</div>' +
      '</div>' +
    '</div></section>' +

    /* --- Company teaser --- */
    '<section class="section"><div class="wrap">' +
      '<div class="split">' +
        '<div class="reveal">' + ph('Founding team',
            'Eight founders from iGaming product and VIP management. Editorial group portrait or an eight-frame grid of individual portraits, desaturated with a cyan/magenta rim light to match the brand.',
            'Recommended 1400 &times; 1000 px &middot; JPG or WebP &middot; assets/img/team.jpg') + '</div>' +
        '<div class="reveal">' +
          '<span class="eyebrow">Who builds this</span>' +
          '<h2>Eight operators, not eight prompt engineers</h2>' +
          '<p>Trueloop AI LTD was founded by eight people with long-standing records in the online casino and sports betting industry, concentrated in product and VIP customer support. Between them they have carried the relationships this software is built to protect.</p>' +
          '<p>That is the whole thesis: the models are only as good as the judgement annotating them, and that judgement is not for hire on a freelance marketplace.</p>' +
          '<p class="mt-md"><a class="link-arrow" href="#/company">About Trueloop AI ' + I.arrow + '</a></p>' +
        '</div>' +
      '</div>' +
    '</div></section>' +

    ctaBand('Bring your hardest VIP conversation.',
      'We will walk you through exactly how a Trueloop agent would have read it &mdash; signal by signal &mdash; and what it would have said instead.');
  }

  function modeCard1() {
    return '<article class="mode-card m1 reveal">' +
      '<span class="mode-tag">Mode 01 &mdash; Copilot</span>' +
      '<h3>Guided &amp; approval-based</h3>' +
      '<p>A human receives just-in-time text and reply suggestions inside their own text editor. The host is in the driver&rsquo;s seat; the AI is the wingman that never misses the small thing.</p>' +
      '<ul class="feat-list">' +
        '<li>Just-in-time drafts and phrasing options</li>' +
        '<li>Signals surfaced with the reasoning attached</li>' +
        '<li>Nothing leaves without human approval</li>' +
        '<li>The usual entry point before switching to Mode 2</li>' +
      '</ul>' +
      '<div class="chat-mock" aria-label="Example of a copilot suggestion">' +
        '<div class="bubble vip"><span class="who">VIP &middot; 03:14</span>Any update on that withdrawal? Been a long week anyway.</div>' +
        '<div class="bubble ai"><span class="who">Trueloop &middot; suggestion</span>Already released &mdash; it cleared our side eleven minutes ago and should land within the hour. And noted on the week. I&rsquo;ll keep this short.' +
          '<span class="signal">Signal: 4th off-pattern night session · brevity preferred · acknowledge, don&rsquo;t probe</span></div>' +
      '</div>' +
    '</article>';
  }

  function modeCard2() {
    return '<article class="mode-card m2 reveal">' +
      '<span class="mode-tag">Mode 02 &mdash; Autopilot</span>' +
      '<h3>Dedicated agent per VIP</h3>' +
      '<p>Each identified VIP is assigned a custom-trained agent for that player, running on demand and at low latency. Humans act only when the agent reaches a decision outside its perimeter.</p>' +
      '<ul class="feat-list warm">' +
        '<li>One agent per player, not one bot per brand</li>' +
        '<li>On-demand execution at conversational latency</li>' +
        '<li>Explicit decision perimeter you control</li>' +
        '<li>Clean hand-off with a full briefing attached</li>' +
      '</ul>' +
      '<div class="chat-mock" aria-label="Example of an autopilot escalation">' +
        '<div class="bubble vip"><span class="who">VIP &middot; 03:14</span>Any update on that withdrawal? Been a long week anyway.</div>' +
        '<div class="bubble ai"><span class="who">Agent &middot; sent</span>Released eleven minutes ago, should land within the hour. Sounds like a week worth closing the laptop on &mdash; I&rsquo;m here if you want anything sorted before then.</div>' +
        '<div class="bubble vip"><span class="who">Perimeter &middot; escalated</span>Discretionary goodwill above &euro;5,000 requires a host. Briefing sent to Marcus with the full signal timeline.</div>' +
      '</div>' +
    '</article>';
  }

  window.TL_CONTENT = { COMPANY: COMPANY, LEGAL_UPDATED: LEGAL_UPDATED, I: I, ph: ph, card: card, qa: qa, ctaBand: ctaBand,
    home: home, modeCard1: modeCard1, modeCard2: modeCard2, SVG_LOOP: SVG_LOOP, SVG_SIGNAL: SVG_SIGNAL };
})();

/* ==========================================================================
   Pages: Platform · Pricing · Company · Contact
   ========================================================================== */
(function () {
  'use strict';
  var C = window.TL_CONTENT;
  var I = C.I, card = C.card, ph = C.ph, qa = C.qa, ctaBand = C.ctaBand;

  function pageHero(eyebrow, title, lede) {
    return '<section class="page-hero"><div class="wrap">' +
      '<span class="eyebrow">' + eyebrow + '</span>' +
      '<h1>' + title + '</h1>' +
      (lede ? '<p class="lede">' + lede + '</p>' : '') +
      '</div></section>';
  }

  /* ---------------------------------------------------------------- PLATFORM */
  function platform() {
    return '' +
    pageHero('Platform', 'Intelligence built for the <span class="grad-text">top 1% of your database</span>',
      'Trueloop is not a support chatbot with a VIP skin. It is a separate class of system: proprietary models, per-player agents, and an operating model that assumes the person on the other side can afford to walk away.') +

    '<section class="section--tight"><div class="wrap">' +
      '<div class="metric-strip reveal">' +
        '<div class="metric"><div class="num">24/7</div><p class="lbl">Coverage without a night-shift roster</p></div>' +
        '<div class="metric"><div class="num">1:1</div><p class="lbl">Dedicated agent per identified VIP</p></div>' +
        '<div class="metric"><div class="num">&lt;1s</div><p class="lbl">Target response latency, on demand</p></div>' +
        '<div class="metric"><div class="num">100%</div><p class="lbl">Interactions logged with reasoning trace</p></div>' +
      '</div>' +
    '</div></section>' +

    '<section class="section" id="modes"><div class="wrap">' +
      '<div class="section-head reveal">' +
        '<span class="eyebrow">Execution modes</span>' +
        '<h2>Two ways to run it</h2>' +
        '<p class="lede">The same intelligence, two levels of autonomy. Operators almost always start at Mode 1 and move to Mode 2 once they have watched the reasoning against their own players.</p>' +
      '</div>' +
      '<div class="table-wrap reveal"><table>' +
        '<thead><tr><th scope="col">&nbsp;</th><th scope="col">Mode 1 &mdash; Copilot</th><th scope="col">Mode 2 &mdash; Autopilot</th></tr></thead>' +
        '<tbody>' +
        '<tr><th scope="row">Who sends the message</th><td>Your host, after reviewing a suggestion</td><td>The player&rsquo;s dedicated agent</td></tr>' +
        '<tr><th scope="row">Where it lives</th><td>Inside your team&rsquo;s existing text editors</td><td>Integrated into your messaging and CRM layer</td></tr>' +
        '<tr><th scope="row">Agent scope</th><td>Shared reasoning across the VIP desk</td><td>One custom-trained agent per identified VIP</td></tr>' +
        '<tr><th scope="row">Human involvement</th><td>Every message</td><td>Only outside the decision perimeter</td></tr>' +
        '<tr><th scope="row">Headcount effect</th><td>Same team, materially higher quality and speed</td><td>Coverage decoupled from roster size</td></tr>' +
        '<tr><th scope="row">Typical use</th><td>Evaluation, onboarding, sensitive segments</td><td>Steady-state VIP coverage at scale</td></tr>' +
        '</tbody></table></div>' +
      '<div class="grid grid-2 mt-lg">' + C.modeCard1() + C.modeCard2() + '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="section-head reveal">' +
        '<span class="eyebrow">How the model is built</span>' +
        '<h2>Where the nuance comes from</h2>' +
        '<p class="lede">Public training data teaches a model to be helpful. It does not teach a model that a VIP who mentions their daughter&rsquo;s graduation is testing whether anyone is listening.</p>' +
      '</div>' +
      '<div class="grid grid-3">' +
        card(I.doc, 'Domain corpora', 'Large datasets of real VIP interaction across casino and sportsbook, structured by channel, segment and outcome rather than scraped at random.') +
        card(I.users, 'Operator annotation', 'Labelled by people who have carried VIP relationships for years &mdash; the only population that can separate mediocre from excellent at this level.') +
        card(I.gauge, 'Contextual differentiation', 'Day of week, hour, session state, recent results, deposit and withdrawal rhythm and mood all shift the correct response. The model is trained on that axis explicitly.', 'warm') +
        card(I.shield, 'Negative examples', 'We train on what went wrong as hard as on what went right: the loops, the over-familiarity, the missed invitation, the reply that should never have been sent.', 'warm') +
        card(I.radar, 'Continuous loop', 'Host accepts, edits and rejections in Mode 1 become supervision for Mode 2. The system tightens against your players, not a generic average.') +
        card(I.crown, 'Per-player fine-tuning', 'On top of the base model, each VIP agent carries its own adaptation layer built from that single relationship&rsquo;s history.') +
      '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="split split--rev">' +
        '<div class="reveal">' + ph('Reasoning trace UI',
            'A signal timeline for one VIP conversation: detected signals as coloured markers along a time axis, with the resulting response and confidence band. Abstract, dark, brand-gradient accents.',
            'Recommended 1400 &times; 900 px &middot; PNG or WebP &middot; assets/img/reasoning.png') + '</div>' +
        '<div class="reveal">' +
          '<span class="eyebrow">Governance</span>' +
          '<h2>You draw the perimeter. The agent respects it.</h2>' +
          '<p>Autonomy without boundaries is not a product an operator can put in front of its most valuable players. Every Trueloop deployment starts by writing down what the agent may decide alone.</p>' +
          '<ul class="feat-list mt-md">' +
            '<li>Monetary latitude: comp value, goodwill, bonus discretion</li>' +
            '<li>Account actions: limits, verification, withdrawal handling</li>' +
            '<li>Sensitive contexts: responsible gambling, distress, complaints</li>' +
            '<li>Tone ceilings and topics the agent will never initiate</li>' +
            '<li>Hard escalation triggers with a full briefing to the host</li>' +
          '</ul>' +
          '<p class="note mt-md">Responsible-gambling and problem-play indicators are always escalation events, never autonomous ones. The agent surfaces and hands over; it does not adjudicate.</p>' +
        '</div>' +
      '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="section-head reveal">' +
        '<span class="eyebrow">Infrastructure &amp; data</span>' +
        '<h2>Deployed the way your compliance team needs it</h2>' +
      '</div>' +
      '<div class="grid grid-3">' +
        card(I.lock, 'Dedicated infrastructure', 'Service Models 1 and 2 run on infrastructure provisioned for your brand alone &mdash; isolated inference, isolated weights, isolated storage.') +
        card(I.layers, 'Shared infrastructure', 'Service Model 3 runs on multi-tenant infrastructure with logical separation between brands. It is the lowest-priced model, and in exchange we hold a licence to train our models on your data &mdash; the single trade that separates it from Models 1 and 2.') +
        card(I.globe, 'EU-based company', 'Trueloop AI LTD is registered and operated in Cyprus. Processing locations and retention periods are agreed per engagement and fixed in the data processing agreement.') +
        card(I.doc, 'Traffic metering', 'Ingress and egress are measured per engagement and billed transparently on Models 1 and 2, so scale-ups and quiet months are both priced honestly.') +
        card(I.shield, 'Auditability', 'Every agent action carries a reasoning trace and a timestamped record, exportable for internal audit or regulator enquiry.') +
        card(I.bolt, 'Integration surface', 'Editor plug-ins for Mode 1; API and webhook integration into your CRM, messaging and player-data platforms for Mode 2.') +
      '</div>' +
    '</div></section>' +

    ctaBand('See it reason against your own traffic.',
      'A Mode 1 pilot puts Trueloop next to your hosts on live VIP conversations, with your team keeping every final word.');
  }

  /* ----------------------------------------------------------------- PRICING */
  function pricing() {
    return '' +
    pageHero('Commercial models', 'Pricing that follows <span class="grad-text">how you want to run it</span>',
      'Three service models and two execution modes. Every engagement is quoted individually &mdash; the structure below is what that quote is built from. Ask us for the model that matches your VIP volume and your finance team&rsquo;s preference.') +

    '<section class="section--tight"><div class="wrap">' +
      '<div class="price-grid">' +

        '<article class="price-card reveal">' +
          '<span class="plan-model">Service Model 1</span>' +
          '<div class="plan-name">Performance</div>' +
          '<p class="plan-for">Full VIP coverage with commercial upside shared. The deepest integration, and the model most operators land on for Mode 2 at scale.</p>' +
          '<ul class="price-lines">' +
            '<li><span class="pl-name">Flat fee per agent, per month</span><span class="pl-desc">A predictable base for every VIP agent you have in service.</span></li>' +
            '<li><span class="pl-name">GGR percentage</span><span class="pl-desc">An agreed share of gross gaming revenue from the covered VIP cohort, so our incentive is your retention.</span></li>' +
            '<li><span class="pl-name">Traffic ingress &amp; egress fees</span><span class="pl-desc">Metered data in and out, billed transparently at cost-plus.</span></li>' +
            '<li><span class="pl-name">Dedicated infrastructure</span><span class="pl-desc">Isolated inference, storage and fine-tuned weights provisioned for your brand alone.</span></li>' +
          '</ul>' +
          '<a class="btn btn--block" href="#/contact?model=model-1">Discuss Model 1</a>' +
        '</article>' +

        '<article class="price-card featured reveal">' +
          '<span class="plan-model">Service Model 2</span>' +
          '<div class="plan-name">Per session</div>' +
          '<p class="plan-for">Pay for conversations, not seats. Volume-linked economics with the same dedicated footprint.</p>' +
          '<ul class="price-lines">' +
            '<li><span class="pl-name">Fixed fee per chat session</span><span class="pl-desc">One clear unit price per VIP session handled, whatever its length.</span></li>' +
            '<li><span class="pl-name">Traffic ingress &amp; egress fees</span><span class="pl-desc">Metered data in and out, billed transparently at cost-plus.</span></li>' +
            '<li><span class="pl-name">Dedicated infrastructure</span><span class="pl-desc">Isolated inference, storage and fine-tuned weights provisioned for your brand alone.</span></li>' +
            '<li><span class="pl-name">No revenue share</span><span class="pl-desc">Nothing linked to GGR &mdash; useful where revenue-share structures are awkward to book.</span></li>' +
          '</ul>' +
          '<a class="btn btn--block" href="#/contact?model=model-2">Discuss Model 2</a>' +
        '</article>' +

        '<article class="price-card reveal">' +
          '<span class="plan-model">Service Model 3</span>' +
          '<div class="plan-name">Shared</div>' +
          '<p class="plan-for">Our lowest price point. One difference defines it: the infrastructure is shared rather than dedicated, and your data contributes to training our models.</p>' +
          '<ul class="price-lines">' +
            '<li><span class="pl-name">Monthly fixed fee per agent</span><span class="pl-desc">One line on the invoice, at the lowest rate of the three models. No metering, no revenue share.</span></li>' +
            '<li><span class="pl-name">Shared infrastructure</span><span class="pl-desc">The defining difference. Multi-tenant infrastructure with logical separation between brands, rather than a footprint provisioned for you alone.</span></li>' +
            '<li><span class="pl-name">Your data trains our models</span><span class="pl-desc">In exchange for the lower price, Trueloop has the right to use your data to train and improve its models. Models 1 and 2 grant no such right.</span></li>' +
            '<li><span class="pl-name">Traffic included</span><span class="pl-desc">Ingress and egress fall within fair-use thresholds agreed in your order form rather than being metered.</span></li>' +
          '</ul>' +
          '<a class="btn btn--block btn--ghost" href="#/contact?model=model-3">Discuss Model 3</a>' +
        '</article>' +

      '</div>' +
      '<p class="note mt-lg">All fees are quoted exclusive of VAT. Cyprus VAT is applied where required; reverse charge applies to valid EU business customers outside Cyprus. Fee levels, GGR percentage, session pricing and fair-use thresholds are set in the order form for each engagement.</p>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="section-head reveal">' +
        '<span class="eyebrow">Comparison</span>' +
        '<h2>What differs between the models</h2>' +
      '</div>' +
      '<div class="table-wrap reveal"><table>' +
        '<thead><tr><th scope="col">&nbsp;</th><th scope="col">Model 1 &mdash; Performance</th><th scope="col">Model 2 &mdash; Per session</th><th scope="col">Model 3 &mdash; Shared</th></tr></thead>' +
        '<tbody>' +
        '<tr><th scope="row">Infrastructure</th><td><strong>Dedicated</strong></td><td><strong>Dedicated</strong></td><td><strong>Shared</strong></td></tr>' +
        '<tr><th scope="row">Your data used to train our models</th><td>No</td><td>No</td><td><strong>Yes</strong></td></tr>' +
        '<tr><th scope="row">Recurring fee</th><td>Flat fee per agent / month</td><td>&mdash;</td><td>Monthly fixed fee per agent</td></tr>' +
        '<tr><th scope="row">Usage fee</th><td>&mdash;</td><td>Fixed fee per chat session</td><td>&mdash;</td></tr>' +
        '<tr><th scope="row">Revenue share</th><td>Agreed GGR percentage</td><td>None</td><td>None</td></tr>' +
        '<tr><th scope="row">Traffic ingress / egress</th><td>Metered &amp; billed</td><td>Metered &amp; billed</td><td>Included, fair use</td></tr>' +
        '<tr><th scope="row">Relative cost</th><td>Base fee plus a share of the upside</td><td>Scales with contact volume</td><td>Lowest of the three</td></tr>' +
        '<tr><th scope="row">Best when</th><td>You want our upside tied to VIP retention</td><td>VIP contact volume is uneven month to month</td><td>Cost matters more than an isolated footprint, and contributing data is acceptable</td></tr>' +
        '</tbody></table></div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="split">' +
        '<div class="reveal">' +
          '<span class="eyebrow">Modes &amp; models</span>' +
          '<h2>Two choices, taken separately</h2>' +
          '<p>Your execution mode decides how much autonomy the agent has. Your service model decides what you pay for it and on whose infrastructure it runs. The two are chosen independently.</p>' +
          '<ul class="feat-list mt-md">' +
            '<li><strong>Models 1 and 2</strong> run on dedicated infrastructure, and your data is never used to train models served to anyone else</li>' +
            '<li><strong>Model 3</strong> trades that isolation for the lowest price: shared infrastructure, and a licence for us to train on your data</li>' +
            '<li>Model 1 links part of our fee to VIP revenue; Model 2 links it to contact volume; Model 3 links it to nothing at all</li>' +
          '</ul>' +
          '<p class="mt-md"><a class="link-arrow" href="#/platform#modes">Compare the execution modes ' + I.arrow + '</a></p>' +
        '</div>' +
        '<div class="reveal">' +
          '<div class="card">' +
            '<span class="card-num">WHAT A QUOTE CONTAINS</span>' +
            '<ul class="feat-list">' +
              '<li>Number of VIP agents in service and the covered cohort definition</li>' +
              '<li>Fee levels per agent, per session or the agreed GGR percentage</li>' +
              '<li>Metered traffic rates, or fair-use thresholds on Model 3</li>' +
              '<li>Infrastructure footprint, region and isolation level</li>' +
              '<li>Decision perimeter, escalation SLAs and support hours</li>' +
              '<li>Data processing agreement, retention and deletion terms</li>' +
              '<li>Term, notice period and pilot-to-production conversion</li>' +
            '</ul>' +
            '<a class="btn btn--block mt-md" href="#/contact">Request a quote ' + I.arrow + '</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div></section>' +

    '<section class="section" id="faq"><div class="wrap">' +
      '<div class="section-head center reveal">' +
        '<span class="eyebrow">Pricing FAQ</span>' +
        '<h2>The questions finance teams ask first</h2>' +
      '</div>' +
      '<div class="faq reveal" style="max-width:820px;margin-inline:auto">' +
        qa('What counts as an &ldquo;agent&rdquo;?', '<p>On Models 1 and 3 an agent is a provisioned, custom-trained agent assigned to an identified VIP or, in Mode 1, to a defined VIP desk. The counting method is fixed in your order form so there is no ambiguity at invoicing.</p>') +
        qa('How is a chat session defined on Model 2?', '<p>A session is a continuous conversation with one player, closed after an agreed period of inactivity. The inactivity window and any multi-channel merging rules are written into the order form before the first invoice.</p>') +
        qa('How is the GGR percentage calculated?', '<p>It applies to gross gaming revenue generated by the covered VIP cohort over the billing period, on the definition and reporting source agreed in the order form. Cohort membership, entry and exit rules are all defined contractually.</p>') +
        qa('What are traffic ingress and egress fees?', '<p>They cover metered data transferred into and out of the dedicated environment &mdash; player data, conversation payloads and exports. They are billed transparently at agreed rates and appear as a separate line on your invoice.</p>') +
        qa('On Model 3, what exactly may you do with our data?', '<p>Model 3 grants us a licence to use your data to train and improve our models, including models served to other customers. That licence is the reason Model 3 is the cheapest of the three, and its scope, any exclusions and the de-identification applied are written into the order form and the data processing agreement. Models 1 and 2 grant no training licence at all: on those models your data is used only to provide the service to you.</p>') +
        qa('Can we move from Model 3 to Model 1 or 2?', '<p>Yes. Conversion terms are agreed up front so the move is a commercial decision rather than a renegotiation. From the date of conversion the training licence ends and your workload moves to dedicated infrastructure; what was already learned before that date cannot be unlearned, which is worth weighing at the outset.</p>') +
        qa('Is there a minimum term?', '<p>Terms are agreed per engagement. Pilots are typically short and fixed-length; production engagements on dedicated infrastructure carry a longer initial term because the footprint is provisioned for you alone.</p>') +
        qa('Which currency do you invoice in?', '<p>Euro by default. Other currencies can be agreed in the order form. All amounts are exclusive of VAT; see the note above for how Cyprus VAT and reverse charge are handled.</p>') +
      '</div>' +
    '</div></section>' +

    ctaBand('Tell us your VIP volume. We&rsquo;ll tell you the model.',
      'Two numbers &mdash; how many VIPs you cover and how many conversations they generate &mdash; are usually enough for us to recommend a structure on the first call.');
  }

  /* ----------------------------------------------------------------- COMPANY */
  function company() {
    var co = C.COMPANY;
    return '' +
    pageHero('Company', 'Built by the people who <span class="grad-text">ran the desk</span>',
      'Trueloop AI LTD is a Cyprus-registered company founded by eight individuals from the iGaming industry, with long-standing records in online casino and sports betting &mdash; concentrated in product and VIP customer support.') +

    '<section class="section--tight"><div class="wrap">' +
      '<div class="reveal">' + ph('Founding team',
        'Eight founders from iGaming product and VIP management. Editorial group portrait, or an eight-frame grid of individual portraits, desaturated with cyan/magenta rim lighting on a near-black background.',
        'Recommended 2000 &times; 900 px &middot; JPG or WebP &middot; assets/img/team-wide.jpg') + '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="split">' +
        '<div class="reveal">' +
          '<span class="eyebrow">Mission</span>' +
          '<h2>Excellence, not adequacy</h2>' +
          '<p>Our mission is to use decades of industry experience to provide excellent VIP support, by training proprietary large language models on datasets that carry the nuance the job actually requires &mdash; how to support a VIP differently by day, by time, and by mood.</p>' +
          '<p>Only people who have worked in VIP management for an extended period can distinguish between bad support, mediocre standard support, and genuine excellence in VIP treatment. We built the company around that distinction, because it is not something a general-purpose model can infer.</p>' +
        '</div>' +
        '<div class="reveal">' +
          '<span class="eyebrow">Why now</span>' +
          '<h2>The market opportunity is a market failure</h2>' +
          '<p>Supporting high-net-worth individuals through AI is an opening precisely because most companies are getting it wrong. They use general models to power bot software that is, at best, mediocre &mdash; serving recreational players badly and VIPs not at all.</p>' +
          '<p>Meanwhile the alternative on offer is headcount: enormous human VIP service centres, expensive to run and impossible to keep uniformly excellent across every hour and language. Neither option is what a player with real financial firepower expects.</p>' +
        '</div>' +
      '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="section-head center reveal">' +
        '<span class="eyebrow">What we believe</span>' +
        '<h2>Four principles the product is built on</h2>' +
      '</div>' +
      '<div class="grid grid-4">' +
        card(I.crown, 'VIPs are not a segment', 'They are individual relationships. A system that treats them as a tier will lose them to one that treats them as people.') +
        card(I.brain, 'Judgement beats scale', 'A larger model does not catch the discrete invitation. A model trained by people who have caught it before does.', 'warm') +
        card(I.shield, 'Autonomy needs a perimeter', 'An agent allowed to decide anything will eventually decide something you would not have. Boundaries are the product, not a limitation.') +
        card(I.radar, 'Restraint is a skill', 'Knowing when to say less, or nothing, is the hardest thing to teach a language model &mdash; and the most valuable.', 'warm') +
      '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="split split--rev">' +
        '<div class="reveal">' + ph('Paphos office',
          'Exterior or interior of the Empa/Paphos office, or a Cyprus coastline frame with a cool, cinematic grade to match the brand palette.',
          'Recommended 1400 &times; 1000 px &middot; JPG or WebP &middot; assets/img/office.jpg') + '</div>' +
        '<div class="reveal">' +
          '<span class="eyebrow">Company details</span>' +
          '<h2>Registered in Cyprus</h2>' +
          '<div class="prose"><dl>' +
            '<dt>Legal name</dt><dd>' + co.legalName + '</dd>' +
            '<dt>Director</dt><dd>' + co.director + '</dd>' +
            '<dt>Registered office</dt><dd>' + co.street + ', ' + co.city + ', ' + co.country + '</dd>' +
            '<dt>Registration</dt><dd>' + co.reg + '</dd>' +
            '<dt>VAT</dt><dd>' + co.vat + '</dd>' +
            '<dt>Contact</dt><dd><a href="mailto:' + co.email + '">' + co.email + '</a></dd>' +
          '</dl></div>' +
          '<p class="mt-md"><a class="link-arrow" href="#/legal-notice">Full legal notice ' + I.arrow + '</a></p>' +
        '</div>' +
      '</div>' +
    '</div></section>' +

    ctaBand('Talk to an operator, not a sales engineer.',
      'Every first conversation at Trueloop is held by someone who has run a VIP desk. Bring the problem you have actually got.');
  }

  window.TL_CONTENT.pageHero = pageHero;
  window.TL_CONTENT.platform = platform;
  window.TL_CONTENT.pricing = pricing;
  window.TL_CONTENT.company = company;
})();

/* ==========================================================================
   Page: Contact (mailto-composing form)
   ========================================================================== */
(function () {
  'use strict';
  var C = window.TL_CONTENT;
  var I = C.I, co = C.COMPANY;

  function contact() {
    return '' +
    C.pageHero('Contact', 'Let&rsquo;s talk about your <span class="grad-text">VIP desk</span>',
      'Tell us what you run and what you are interested in. Pressing <em>Compose e-mail</em> opens your own mail client with everything below already written &mdash; nothing is sent from this page, and nothing is stored on it.') +

    '<section class="section--tight"><div class="wrap">' +
      '<div class="contact-grid">' +

        '<div class="contact-card reveal">' +
          '<div class="card">' +
            '<span class="card-num">DIRECT</span>' +
            '<div class="contact-card">' +
              infoItem(I.mail, 'E-mail', '<a href="mailto:' + co.email + '">' + co.email + '</a>') +
              infoItem(I.pin, 'Registered office', co.street + '<br>' + co.city + '<br>' + co.country) +
              infoItem(I.doc, 'Company', co.legalName + '<br><span style="color:var(--text-muted);font-size:0.86rem">Reg. ' + co.reg + ' &middot; VAT ' + co.vat + '</span>') +
              infoItem(I.users, 'Director', co.director) +
            '</div>' +
          '</div>' +

          '<div class="card">' +
            '<span class="card-num">WHAT HAPPENS NEXT</span>' +
            '<ul class="feat-list">' +
              '<li>A founder replies, usually within one business day</li>' +
              '<li>A 30-minute briefing on your VIP coverage today</li>' +
              '<li>A written recommendation: execution mode and service model</li>' +
              '<li>If it fits, a scoped Mode 1 pilot against live traffic</li>' +
            '</ul>' +
          '</div>' +

          '<p class="note">Please do not send personal data about your players, or anything confidential, through e-mail. We will set up a proper channel and a data processing agreement before any player data moves.</p>' +
        '</div>' +

        '<form class="form reveal" id="contactForm" novalidate>' +
          '<h2 style="font-size:clamp(1.3rem,2.4vw,1.7rem)">Request a briefing</h2>' +
          '<p style="font-size:0.9rem">Fields marked <span style="color:var(--pink)">*</span> are required.</p>' +

          '<div class="field-row">' +
            '<div class="field">' +
              '<label for="cf-name">Full name <span class="req">*</span></label>' +
              '<input id="cf-name" name="name" type="text" autocomplete="name" placeholder="Jamie Rivera" required>' +
            '</div>' +
            '<div class="field">' +
              '<label for="cf-role">Role</label>' +
              '<input id="cf-role" name="role" type="text" autocomplete="organization-title" placeholder="Head of VIP">' +
            '</div>' +
          '</div>' +

          '<div class="field-row">' +
            '<div class="field">' +
              '<label for="cf-company">Company <span class="req">*</span></label>' +
              '<input id="cf-company" name="company" type="text" autocomplete="organization" placeholder="Operator or group name" required>' +
            '</div>' +
            '<div class="field">' +
              '<label for="cf-email">Work e-mail <span class="req">*</span></label>' +
              '<input id="cf-email" name="email" type="email" autocomplete="email" placeholder="you@operator.com" required>' +
            '</div>' +
          '</div>' +

          '<div class="field-row">' +
            '<div class="field">' +
              '<label for="cf-phone">Phone</label>' +
              '<input id="cf-phone" name="phone" type="tel" autocomplete="tel" placeholder="+357 ...">' +
            '</div>' +
            '<div class="field">' +
              '<label for="cf-vips">Approx. VIPs under management</label>' +
              '<select id="cf-vips" name="vips">' +
                '<option value="">Select…</option>' +
                '<option>Fewer than 50</option>' +
                '<option>50 – 250</option>' +
                '<option>250 – 1,000</option>' +
                '<option>1,000 – 5,000</option>' +
                '<option>More than 5,000</option>' +
              '</select>' +
            '</div>' +
          '</div>' +

          '<div class="field">' +
            '<label for="cf-model">Which model are you interested in? <span class="req">*</span></label>' +
            '<select id="cf-model" name="model" required>' +
              '<option value="">Select…</option>' +
              '<optgroup label="Service models">' +
                '<option>Model 1 &ndash; Performance (agent fee + GGR % + traffic + dedicated infra)</option>' +
                '<option>Model 2 &ndash; Per session (session fee + traffic + dedicated infra)</option>' +
                '<option>Model 3 &ndash; Shared (lowest fee, shared infra, data used for training)</option>' +
              '</optgroup>' +
              '<optgroup label="Execution modes">' +
                '<option>Mode 1 &ndash; Copilot (guided, approval-based)</option>' +
                '<option>Mode 2 &ndash; Autopilot (dedicated agent per VIP)</option>' +
              '</optgroup>' +
              '<optgroup label="Other">' +
                '<option>Not sure yet &ndash; please advise</option>' +
                '<option>Partnership or reseller enquiry</option>' +
                '<option>Press or investor enquiry</option>' +
              '</optgroup>' +
            '</select>' +
            '<p class="hint">Not sure? Pick &ldquo;please advise&rdquo; &mdash; we will recommend one on the first call.</p>' +
          '</div>' +

          '<div class="field">' +
            '<label for="cf-vertical">Vertical</label>' +
            '<select id="cf-vertical" name="vertical">' +
              '<option value="">Select…</option>' +
              '<option>Online casino</option>' +
              '<option>Sports betting</option>' +
              '<option>Both casino and sportsbook</option>' +
              '<option>Other / platform provider</option>' +
            '</select>' +
          '</div>' +

          '<div class="field">' +
            '<label for="cf-message">What would you like to cover? <span class="req">*</span></label>' +
            '<textarea id="cf-message" name="message" rows="5" placeholder="How your VIP desk is covered today, where it breaks, and what you would like Trueloop to take on." required></textarea>' +
          '</div>' +

          '<div class="field">' +
            '<label class="checkbox">' +
              '<input type="checkbox" id="cf-consent" name="consent" required>' +
              '<span>I understand this form opens my own e-mail client and that no data is submitted to or stored by this website. I have read the <a href="#/privacy">privacy policy</a>.</span>' +
            '</label>' +
          '</div>' +

          '<button class="btn btn--lg btn--block" type="submit">Compose e-mail ' + I.arrow + '</button>' +
          '<div class="form-status" id="formStatus" hidden></div>' +
          '<p class="hint" style="margin-top:14px">If nothing opens, your browser may not have a mail client configured. Use the <button type="button" class="link-arrow" id="copyBtn" style="background:none;border:0;padding:0;cursor:pointer;font:inherit">copy to clipboard</button> option and send it to ' + co.email + ' yourself.</p>' +
        '</form>' +

      '</div>' +
    '</div></section>';
  }

  function infoItem(icon, label, value) {
    return '<div class="info-item"><div class="icon-badge">' + icon + '</div>' +
      '<div><div class="it">' + label + '</div><div class="iv">' + value + '</div></div></div>';
  }

  window.TL_CONTENT.contact = contact;
})();
