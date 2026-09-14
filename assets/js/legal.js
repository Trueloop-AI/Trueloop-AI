/* ==========================================================================
   Trueloop AI — legal pages (Cyprus)
   NOTE FOR THE SITE OWNER: these documents were drafted as a solid, industry-
   standard starting point under the law of the Republic of Cyprus. They have
   NOT been reviewed by a qualified Cypriot advocate. Have them checked before
   you rely on them commercially.
   ========================================================================== */
(function () {
  'use strict';
  var C = window.TL_CONTENT;
  var co = C.COMPANY;
  var UPDATED = C.LEGAL_UPDATED;

  function legalMeta(extra) {
    return '<div class="legal-meta">Last updated: ' + UPDATED + (extra ? ' &nbsp;·&nbsp; ' + extra : '') +
      ' &nbsp;·&nbsp; ' + co.legalName + ' &nbsp;·&nbsp; Reg. ' + co.reg + '</div>';
  }

  var DOCS = [
    { path: '/legal-notice', label: 'Legal notice' },
    { path: '/terms',        label: 'Terms &amp; conditions' },
    { path: '/privacy',      label: 'Privacy policy' },
    { path: '/cookies',      label: 'Cookie policy' }
  ];

  /* Sidebar: sibling documents + an on-this-page index.
     Anchors must carry their own route, because the router reads the hash:
     a bare "#sec-5" would be parsed as the path /sec-5 and 404. */
  function aside(route, items) {
    var docs = DOCS.map(function (d) {
      var cur = d.path === route;
      return '<li><a href="#' + d.path + '"' +
        (cur ? ' class="is-current" aria-current="page"' : '') + '>' + d.label + '</a></li>';
    }).join('');

    var toc = items.map(function (t, i) {
      var id = 'sec-' + (i + 1);
      return '<li><a href="#' + route + '#' + id + '" data-toc="' + id + '">' + t + '</a></li>';
    }).join('');

    return '<aside class="legal-aside">' +
      '<nav class="legal-docs" aria-label="Legal documents">' +
        '<h4 class="aside-title">Documents</h4><ul>' + docs + '</ul>' +
      '</nav>' +
      '<nav class="toc" aria-label="On this page">' +
        '<h4 class="aside-title">On this page</h4><ol>' + toc + '</ol>' +
      '</nav>' +
    '</aside>';
  }

  var n = 0;
  function h(title) { n += 1; return '<h2 id="sec-' + n + '">' + n + '. ' + title + '</h2>'; }

  /* -------------------------------------------------------- LEGAL NOTICE */
  function legalNotice() {
    n = 0;
    var titles = ['Service provider', 'Nature of our activity', 'Website content and liability for content',
      'Links to third-party websites', 'Intellectual property', 'Online dispute resolution',
      'Applicable law', 'Contact'];
    return C.pageHero('Legal', 'Legal notice',
      'Information published in accordance with the Electronic Commerce Law of 2004 (Law 156(I)/2004) of the Republic of Cyprus and Directive 2000/31/EC.') +
    '<section class="section--tight"><div class="wrap"><div class="legal-layout">' +
      aside('/legal-notice', titles) +
      '<div class="prose reveal">' +
      legalMeta() +

      h(titles[0]) +
      '<dl>' +
        '<dt>Legal name</dt><dd>' + co.legalName + '</dd>' +
        '<dt>Legal form</dt><dd>Private company limited by shares, incorporated under the Companies Law, Cap. 113, Republic of Cyprus</dd>' +
        '<dt>Director</dt><dd>' + co.director + '</dd>' +
        '<dt>Registered office</dt><dd>' + co.street + ', ' + co.city + ', ' + co.country + '</dd>' +
        '<dt>Registration no.</dt><dd>' + co.reg + '</dd>' +
        '<dt>VAT no.</dt><dd>' + co.vat + '</dd>' +
        '<dt>Registry</dt><dd>Department of the Registrar of Companies and Intellectual Property, Nicosia, Cyprus</dd>' +
        '<dt>E-mail</dt><dd><a href="mailto:' + co.email + '">' + co.email + '</a></dd>' +
      '</dl>' +
      '<p>The person responsible for the content of this website within the meaning of applicable Cypriot and European law is the director named above, contactable at the registered office and e-mail address given.</p>' +

      h(titles[1]) +
      '<p>' + co.legalName + ' is a business-to-business technology supplier. We develop and operate artificial-intelligence software used by licensed online casino and sports betting operators to support their customers, including VIP customers.</p>' +
      '<p><strong>We do not operate games of chance, we do not accept wagers, and we do not hold or require a gambling licence.</strong> We do not offer any service to consumers or to players. All regulatory obligations arising from the operation of gambling services &mdash; including licensing, responsible gambling, anti-money-laundering, advertising and player-protection duties &mdash; remain at all times with our customers as the licensed operators in their respective jurisdictions.</p>' +

      h(titles[2]) +
      '<p>The content of this website is provided for general information about our company and services. It is prepared with reasonable care, but we give no warranty that it is complete, current or free from error. Nothing on this website constitutes an offer capable of acceptance, a binding commitment, or legal, financial or regulatory advice. Descriptions of service models, execution modes, fees and capabilities are indicative; the binding scope of any engagement is set out exclusively in the signed order form and the applicable <a href="#/terms">terms and conditions</a>.</p>' +
      '<p>Any illustrative figures, example conversations and screenshots shown on this website are for demonstration purposes. They do not represent real players, real conversations or guaranteed outcomes.</p>' +

      h(titles[3]) +
      '<p>Where this website links to external websites, those websites are outside our control. We are not responsible for their content, availability, security or data-protection practices, and no link should be read as an endorsement. Liability for external content lies with the respective provider. If you become aware of unlawful content reachable through a link on this site, please notify us at <a href="mailto:' + co.email + '">' + co.email + '</a> and we will remove the link without delay.</p>' +

      h(titles[4]) +
      '<p>Unless otherwise stated, all content on this website &mdash; including text, layout, graphics, logos, the Trueloop AI mark, icons, illustrations, source code and the underlying design &mdash; is the property of ' + co.legalName + ' or is used under licence, and is protected by the Copyright and Related Rights Law of 1976 (Law 59/1976, as amended), the Trade Marks Law, Cap. 268, and applicable European legislation.</p>' +
      '<p>You may view, download and print pages of this website for your own internal business use. Any other use &mdash; in particular reproduction, distribution, public communication, adaptation, systematic extraction or use for the training of machine-learning systems &mdash; requires our prior written consent.</p>' +

      h(titles[5]) +
      '<p>Our services are addressed exclusively to businesses. We do not enter into consumer contracts, and we are neither obliged nor willing to participate in dispute-resolution proceedings before a consumer arbitration board. The European Commission&rsquo;s online dispute resolution platform is therefore not applicable to our activity.</p>' +

      h(titles[6]) +
      '<p>This legal notice and any non-contractual obligations arising out of or in connection with it are governed by the laws of the Republic of Cyprus. See the <a href="#/terms">terms and conditions</a> for the law and jurisdiction applicable to our services.</p>' +

      h(titles[7]) +
      '<p>' + co.legalName + '<br>' + co.street + '<br>' + co.city + '<br>' + co.country + '<br><a href="mailto:' + co.email + '">' + co.email + '</a></p>' +
      '</div>' +
    '</div></div></section>';
  }

  /* ------------------------------------------------------------- TERMS */
  function terms() {
    n = 0;
    var titles = [
      'Who we are and what these terms cover', 'Definitions', 'Contract formation and order of precedence',
      'The Services', 'Pilots and evaluations', 'Provisioning, changes and deprecation',
      'Customer responsibilities', 'Regulatory responsibility and human oversight', 'Acceptable use',
      'Fees, invoicing and taxes', 'Late payment and suspension', 'Intellectual property',
      'Customer Data, Output and model training', 'Data protection', 'Confidentiality',
      'Security', 'Warranties', 'Disclaimers specific to artificial intelligence',
      'Limitation of liability', 'Indemnities', 'Term and termination',
      'Effects of termination and data return', 'Force majeure', 'Subcontractors and assignment',
      'Anti-bribery, sanctions and compliance', 'Publicity', 'Notices',
      'Changes to these terms', 'General provisions', 'Governing law and jurisdiction'
    ];
    return C.pageHero('Legal', 'Terms and conditions',
      'These terms govern the supply of Trueloop AI services to business customers. They are drafted under the law of the Republic of Cyprus.') +
    '<section class="section--tight"><div class="wrap"><div class="legal-layout">' +
      aside('/terms', titles) +
      '<div class="prose reveal">' +
      legalMeta('Version 1.0 &nbsp;·&nbsp; Business-to-business only') +

      h(titles[0]) +
      '<p>These terms and conditions (the <strong>&ldquo;Terms&rdquo;</strong>) are entered into between <strong>' + co.legalName + '</strong>, a private company limited by shares incorporated under the Companies Law, Cap. 113 of the Republic of Cyprus with registration number ' + co.reg + ' and registered office at ' + co.street + ', ' + co.city + ', ' + co.country + ' (<strong>&ldquo;Trueloop&rdquo;</strong>, <strong>&ldquo;we&rdquo;</strong>, <strong>&ldquo;us&rdquo;</strong>), and the business entity identified in the Order Form (<strong>&ldquo;Customer&rdquo;</strong>, <strong>&ldquo;you&rdquo;</strong>).</p>' +
      '<p>The Services are offered <strong>exclusively to businesses</strong> acting in the course of their trade, business or profession. They are not offered to consumers, and consumer-protection legislation applicable to business-to-consumer contracts does not apply. By signing an Order Form or otherwise accessing the Services, you confirm that you are contracting as a business and that the individual accepting these Terms is duly authorised to bind you.</p>' +

      h(titles[1]) +
      '<ul>' +
        '<li><strong>Agent</strong> &mdash; a provisioned, custom-trained artificial-intelligence agent made available under the Services, whether assigned to an identified VIP or to a defined support desk.</li>' +
        '<li><strong>Customer Data</strong> &mdash; all data, content and materials that you or your end users supply to, or generate within, the Services, including player interaction records.</li>' +
        '<li><strong>Decision Perimeter</strong> &mdash; the set of decisions, actions and topics that an Agent is authorised to handle autonomously, as documented in the Order Form or an agreed configuration record.</li>' +
        '<li><strong>Execution Mode</strong> &mdash; Mode 1 (guided, approval-based copilot) or Mode 2 (autopilot), as described in clause ' + '4' + '.</li>' +
        '<li><strong>Output</strong> &mdash; text, suggestions, classifications, signals and other material generated by the Services.</li>' +
        '<li><strong>Order Form</strong> &mdash; the document, however titled, signed or otherwise expressly accepted by both parties, that identifies the Service Model, Execution Mode, fees, term and any special conditions.</li>' +
        '<li><strong>Service Model</strong> &mdash; Model 1, Model 2 or Model 3, as described in clause ' + '10' + '.</li>' +
        '<li><strong>Services</strong> &mdash; the Trueloop artificial-intelligence software, models, Agents, interfaces, integrations, infrastructure and related support made available to you under an Order Form.</li>' +
        '<li><strong>VIP</strong> &mdash; a customer of yours whom you have identified as belonging to the cohort covered by the Services.</li>' +
      '</ul>' +

      h(titles[2]) +
      '<p>A binding contract comes into existence when an Order Form is signed or expressly accepted in writing by both parties. Information published on our website, including indicative descriptions of the Service Models, is an invitation to treat and not an offer.</p>' +
      '<p>In the event of conflict, the following order of precedence applies: (a) the Order Form; (b) the data processing agreement; (c) any agreed service description or configuration record; (d) these Terms. Your own purchase-order terms, portal terms or general conditions do not apply and are expressly excluded, even where referenced in a document you issue.</p>' +

      h(titles[3]) +
      '<p>We will supply the Services described in the Order Form with reasonable skill and care, in accordance with these Terms.</p>' +
      '<p><strong>Mode 1 (copilot).</strong> The Services deliver just-in-time text and reply suggestions to your personnel within their working environment. Your personnel remain responsible for reviewing, editing, approving and sending every communication. No communication is transmitted to a VIP by the Services without a human act of approval.</p>' +
      '<p><strong>Mode 2 (autopilot).</strong> Each identified VIP may be assigned a custom-trained Agent that operates on demand and may communicate directly with that VIP within the Decision Perimeter. Where an Agent reaches the limit of the Decision Perimeter, the matter is escalated to your personnel together with the supporting context. You are responsible for staffing escalations and for responding to them within the timeframes you consider appropriate.</p>' +
      '<p>The Decision Perimeter is agreed in writing before Mode 2 is enabled and may be amended only by agreement in writing. You acknowledge that the Decision Perimeter is a control that you specify, and that the appropriateness of its scope is your decision.</p>' +

      h(titles[4]) +
      '<p>Where an Order Form designates the engagement as a pilot, evaluation or proof of concept, it runs for the stated period, may be terminated by either party on the notice stated in the Order Form (or, if none is stated, on fifteen (15) days&rsquo; written notice), and is provided on an &ldquo;as is&rdquo; basis. Clause ' + '17' + ' (Warranties) does not apply to pilots, and our aggregate liability in respect of a pilot is limited to the fees actually paid for it.</p>' +

      h(titles[5]) +
      '<p>We may modify, improve, replace or discontinue components of the Services provided that we do not materially reduce the functionality contracted for during the then-current term. Where a material adverse change to core functionality is unavoidable, we will give you at least sixty (60) days&rsquo; written notice, and you may terminate the affected Services on written notice given within thirty (30) days of ours, with a pro-rata refund of prepaid fees for the unused period.</p>' +
      '<p>We may make changes required for security, legal or regulatory reasons with such notice as is reasonably practicable, including immediately where necessary.</p>' +

      h(titles[6]) +
      '<p>You shall: (a) hold and maintain all licences, authorisations and registrations required to operate your gambling business in every jurisdiction in which you offer it; (b) provide Customer Data that you are lawfully entitled to provide and to have processed as contemplated by the Order Form; (c) provide accurate configuration input, including the definition of the VIP cohort and the Decision Perimeter; (d) keep credentials and integration keys secure and notify us promptly of any suspected compromise; (e) provide competent personnel to review Output in Mode 1 and to handle escalations in Mode 2; and (f) comply with all laws applicable to your use of the Services.</p>' +
      '<p>You are responsible for the acts and omissions of your personnel, affiliates and subcontractors in connection with the Services as if they were your own.</p>' +

      h(titles[7]) +
      '<p>You remain at all times the party responsible to your regulators, your players and any other authority for your customer communications and for the operation of your gambling business. We are a technology supplier and are not a licensee, operator, intermediary or agent in relation to any gambling activity.</p>' +
      '<p>You must implement and maintain human oversight proportionate to the Execution Mode you have selected, including: review of Output before transmission in Mode 1; monitoring, sampling and escalation handling in Mode 2; and a documented procedure allowing your personnel to intervene in, override or suspend Agent activity at any time.</p>' +
      '<p><strong>Responsible gambling and player protection.</strong> The Services are configured so that indicators of problem gambling, financial distress, vulnerability, self-exclusion, complaints, or requests touching on those matters are treated as escalation events and are not decided autonomously. You remain solely responsible for the design and execution of your responsible-gambling, safer-gambling, affordability, anti-money-laundering and player-protection programmes, and for any decision taken in relation to a player.</p>' +
      '<p>You are responsible for complying with any transparency, disclosure or notification obligations owed to your players regarding the use of automated systems or artificial intelligence in your communications, including as they arise under Regulation (EU) 2024/1689 (the AI Act) and any national implementing measures. We will provide, on request, the technical information reasonably necessary for you to do so.</p>' +

      h(titles[8]) +
      '<p>You may not, and may not permit any third party to: (a) use the Services other than for the support of your own business; (b) reverse engineer, decompile, disassemble or otherwise attempt to derive our models, weights, prompts or source code, except to the extent such restriction is prohibited by applicable law; (c) use Output to train, fine-tune or evaluate any competing machine-learning system; (d) resell, sublicense or provide the Services as a bureau or managed service to third parties without our prior written consent; (e) introduce malicious code, circumvent access controls, or conduct penetration or load testing without prior written agreement; (f) use the Services to deceive, defraud, manipulate, coerce or unlawfully profile any individual, or to target individuals known or reasonably suspected to be vulnerable; (g) use the Services in any jurisdiction in which the underlying gambling activity is unlawful, or in breach of applicable sanctions; or (h) submit special categories of personal data within the meaning of Article 9 GDPR unless expressly agreed in writing in the data processing agreement.</p>' +

      h(titles[9]) +
      '<p>Fees are set out in the Order Form and are built from the Service Model you select:</p>' +
      '<p><strong>Service Model 1 &mdash; Performance:</strong> a flat fee per Agent per month; an agreed percentage of gross gaming revenue generated by the covered VIP cohort; traffic ingress and egress fees; and dedicated infrastructure.</p>' +
      '<p><strong>Service Model 2 &mdash; Per session:</strong> a fixed fee per chat session; traffic ingress and egress fees; and dedicated infrastructure.</p>' +
      '<p><strong>Service Model 3 &mdash; Shared:</strong> a monthly fixed fee per Agent, on shared infrastructure, together with the training licence described in clause 13. That licence forms part of the consideration for the Services and is reflected in the fee level, which is the lowest of the three Service Models.</p>' +
      '<p>The definitions of &ldquo;Agent&rdquo;, &ldquo;chat session&rdquo;, &ldquo;covered VIP cohort&rdquo;, &ldquo;gross gaming revenue&rdquo;, the reporting source used to calculate any revenue share, the metering method for traffic, and any fair-use thresholds are set out in the Order Form and govern invoicing.</p>' +
      '<p>Unless the Order Form states otherwise: fees are quoted and invoiced in euro (EUR); recurring fees are invoiced monthly in advance; usage-based and revenue-share fees are invoiced monthly in arrears; and invoices are payable within thirty (30) days of the invoice date. Fees are exclusive of value added tax and all other taxes and duties, which you shall pay in addition at the applicable rate. Cyprus VAT is charged where required under the VAT Law of 2000 (Law 95(I)/2000); where you are a taxable person established in another EU Member State and provide a valid VAT identification number, the reverse-charge mechanism applies. Where you are required to withhold any amount by law, you shall gross up the payment so that we receive the amount we would have received absent the withholding.</p>' +
      '<p>You shall provide, within a reasonable period of our request and no more than twice in any twelve-month period, such reporting as is reasonably necessary to verify amounts calculated by reference to sessions, Agents or gross gaming revenue. Where verification reveals an underpayment exceeding five per cent (5%) for the period audited, you shall bear the reasonable costs of that verification.</p>' +
      '<p>We may increase recurring fees with effect from each renewal term on at least sixty (60) days&rsquo; written notice.</p>' +

      h(titles[10]) +
      '<p>Sums not paid when due bear interest at the rate provided for by the Combating of Late Payment in Commercial Transactions Law of 2012 (Law 73(I)/2012), accruing daily from the due date until payment in full, together with the compensation for recovery costs provided for by that Law. Payment obligations may not be withheld or set off against any claim except to the extent the claim is admitted by us in writing or established by a final judgment.</p>' +
      '<p>Where an undisputed invoice remains unpaid for more than thirty (30) days after written reminder, we may suspend the Services in whole or in part on ten (10) days&rsquo; prior written notice. Suspension does not relieve you of the obligation to pay fees accruing during the suspension, and we will restore the Services promptly on payment.</p>' +
      '<p>We may also suspend the Services immediately, with notice given as soon as reasonably practicable, where continued provision presents a material security risk, is reasonably suspected of facilitating unlawful activity, or is required by law or by a competent authority.</p>' +

      h(titles[11]) +
      '<p>All intellectual property rights in and to the Services, including the underlying models, model weights, training methodology, datasets assembled by us, software, interfaces, documentation, the Trueloop AI name and logo, and all improvements and derivative works, remain our exclusive property or that of our licensors. Nothing in these Terms transfers any such right to you.</p>' +
      '<p>Subject to payment of the fees and compliance with these Terms, we grant you a non-exclusive, non-transferable, non-sublicensable, worldwide licence, for the term of the Order Form, to access and use the Services and to use the Output for your internal business purposes and for communication with your own customers.</p>' +
      '<p>If you provide feedback, suggestions or improvement requests, you grant us a perpetual, irrevocable, royalty-free, worldwide licence to use them without restriction or obligation to you. Feedback is provided voluntarily and you are not obliged to provide it.</p>' +

      h(titles[12]) +
      '<p>As between the parties, you retain all right, title and interest in Customer Data. You grant us a non-exclusive, worldwide, royalty-free licence to host, process, transmit, display and otherwise use Customer Data to the extent necessary to provide, secure, maintain and support the Services under the Order Form.</p>' +
      '<p>As between the parties, and to the extent such material is capable of protection, you own the Output generated for you, subject to our retained rights in the Services. You acknowledge that Output is generated probabilistically, that similar or identical Output may be generated for other customers, and that we make no claim and give no warranty as to the availability, scope or enforceability of intellectual property rights in Output.</p>' +
      '<p><strong>Training &mdash; Service Models 1 and 2.</strong> We will not use Customer Data to train or improve models made available to any other customer. This does not prevent us from: (a) training and adapting models dedicated to you; (b) using aggregated and de-identified statistical information that does not identify you, any individual or any player, for the purposes of security, capacity planning, benchmarking and improving the Services; or (c) processing Customer Data as instructed by you or as required by law.</p>' +
      '<p><strong>Training &mdash; Service Model 3.</strong> Where the Order Form specifies Service Model 3, you grant us a non-exclusive, worldwide, royalty-free licence to use Customer Data to train, fine-tune, evaluate and improve our models, <strong>including models made available to other customers</strong>. This licence is part of the consideration for the Services and is the reason the fees under Service Model 3 are the lowest of the three models. You warrant that you hold all rights and a lawful basis necessary to grant it. Before Customer Data is used for training we apply the de-identification, minimisation and category exclusions recorded in the data processing agreement.</p>' +
      '<p>The Service Model 3 training licence ends on the effective date of termination, or of a conversion to Service Model 1 or 2, and we will not use Customer Data for training after that date. It survives, however, in respect of models already trained: a model that has learned from data cannot be made to unlearn it, and no right of deletion, conversion or termination requires us to retrain or withdraw a model that was lawfully trained while the licence was in force. You should weigh this before selecting Service Model 3.</p>' +

      h(titles[13]) +
      '<p>Where we process personal data on your behalf in providing the Services, you act as controller and we act as processor within the meaning of Regulation (EU) 2016/679 (<strong>GDPR</strong>) and the Processing of Personal Data (Protection of the Individual) Law of 2018 (Law 125(I)/2018). Such processing is governed by a data processing agreement executed between the parties, which forms part of the contract and which sets out the subject matter, duration, nature and purpose of processing, the categories of data subjects and personal data, the security measures, the list of sub-processors, the retention and deletion arrangements, and the arrangements for international transfers.</p>' +
      '<p>You warrant that you have a valid legal basis for the processing you instruct, that you have provided all required information to data subjects, and that your instructions do not require us to act in breach of applicable data-protection law. We will process personal data only on your documented instructions, will impose confidentiality obligations on personnel with access, will assist you with data-subject requests and with obligations under Articles 32 to 36 GDPR taking into account the nature of processing, and will notify you without undue delay on becoming aware of a personal data breach affecting Customer Data.</p>' +
      '<p>Where we process personal data as controller &mdash; for example the business contact details of your personnel, or website visitor data &mdash; that processing is described in our <a href="#/privacy">privacy policy</a>.</p>' +
      '<p><strong>Service Model 3.</strong> Using data to train models served to other customers is processing for our own purposes, and in respect of that processing we act as controller rather than as your processor. The parties shall record in the data processing agreement the respective roles, the lawful basis relied upon, the de-identification applied before any training use, the categories of data excluded from training altogether, and the information you must give to data subjects. You shall not instruct us to use, and shall use reasonable endeavours not to supply for training, personal data that you are not lawfully entitled to have used for that purpose.</p>' +

      h(titles[14]) +
      '<p>Each party shall keep confidential all non-public information disclosed by the other that is identified as confidential or that would reasonably be understood to be confidential, and shall use it only for the purposes of the contract. The obligation does not apply to information that is or becomes public other than through breach, was lawfully known without obligation of confidence before disclosure, is independently developed without use of the confidential information, or is required to be disclosed by law, court order or a competent regulator &mdash; in which case the disclosing party shall, where lawful, give prior notice.</p>' +
      '<p>Confidentiality obligations survive termination for five (5) years, and indefinitely in respect of trade secrets and personal data.</p>' +

      h(titles[15]) +
      '<p>We will maintain technical and organisational measures appropriate to the risk, having regard to the state of the art, including encryption of data in transit and at rest, access control on a least-privilege basis, logical or physical separation between tenants according to the Service Model, logging and monitoring, and a documented incident-response process. On Service Models 1 and 2 the Services run on infrastructure dedicated to you; on Service Model 3 they run on shared infrastructure with logical separation. Further detail is set out in the data processing agreement and any agreed security schedule.</p>' +
      '<p>You are responsible for the security of your own systems, networks, endpoints and personnel, and for promptly revoking access for personnel who no longer require it.</p>' +

      h(titles[16]) +
      '<p>We warrant that: (a) we have the right and authority to enter into the contract and to grant the licences set out in it; (b) the Services will be provided with reasonable skill and care and in a professional manner; and (c) we will comply with laws applicable to us as a supplier of the Services.</p>' +
      '<p>Where the Services do not conform to warranty (b), your exclusive remedy, and our entire liability, is that we shall use reasonable endeavours to remedy the non-conformity within a reasonable period, failing which you may terminate the affected Services and receive a pro-rata refund of prepaid fees for the unused period, provided you notify us in writing within thirty (30) days of becoming aware of the non-conformity.</p>' +

      h(titles[17]) +
      '<p>You acknowledge and accept that the Services are based on probabilistic machine-learning systems and that, accordingly:</p>' +
      '<ul>' +
        '<li>Output may be inaccurate, incomplete, outdated, inappropriate to context or otherwise unsuitable, notwithstanding the exercise of reasonable skill and care;</li>' +
        '<li>the same or similar input may produce different Output on different occasions;</li>' +
        '<li>the Services do not and cannot guarantee any commercial outcome, including player retention, revenue, satisfaction, service level or reduction in churn, and no statement on our website or in any proposal constitutes such a guarantee;</li>' +
        '<li>the Services are decision-support and communication tools and are not a substitute for professional judgement, regulatory compliance, legal, financial, medical or psychological advice, or for your own duties towards your players; and</li>' +
        '<li>Output must be reviewed by a competent human being before it is relied upon for any decision having a legal or similarly significant effect on an individual.</li>' +
      '</ul>' +
      '<p>Except as expressly set out in clause ' + '17' + ', and to the fullest extent permitted by law, all warranties, conditions, terms and representations, whether express or implied by statute, common law or otherwise &mdash; including any implied terms as to satisfactory quality, fitness for a particular purpose, accuracy or non-infringement &mdash; are excluded. We do not warrant that the Services will be uninterrupted or error-free.</p>' +

      h(titles[18]) +
      '<p>Nothing in these Terms excludes or limits either party&rsquo;s liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, for wilful misconduct, or for any other liability which cannot lawfully be excluded or limited under the law of the Republic of Cyprus.</p>' +
      '<p>Subject to the paragraph above, neither party shall be liable, whether in contract, tort (including negligence), breach of statutory duty or otherwise, for any: loss of profit; loss of revenue; loss of anticipated savings; loss of business or business opportunity; loss of goodwill or reputation; loss of players or player lifetime value; regulatory fines or penalties imposed on the other party; or any indirect or consequential loss, in each case however arising and even if foreseeable or if the party was advised of the possibility.</p>' +
      '<p>Subject to the first paragraph of this clause, each party&rsquo;s total aggregate liability arising out of or in connection with the contract in any period of twelve (12) consecutive months shall not exceed the total fees paid and payable by you under the applicable Order Form in the twelve (12) months immediately preceding the first event giving rise to the liability, or, where the contract has been in force for less than twelve months, the fees paid and payable during that shorter period.</p>' +
      '<p>Your obligation to pay fees due, and each party&rsquo;s liability under clause ' + '20' + ' (Indemnities), are excluded from the cap in the preceding paragraph.</p>' +
      '<p>Each party shall take reasonable steps to mitigate its loss. No claim may be brought more than twelve (12) months after the claimant became aware, or ought reasonably to have become aware, of the circumstances giving rise to it.</p>' +

      h(titles[19]) +
      '<p>We shall indemnify you against damages finally awarded against you, and reasonable legal costs, arising from a third-party claim that your permitted use of the Services infringes that third party&rsquo;s intellectual property rights, provided you notify us promptly, give us sole conduct of the defence and settlement, and provide reasonable assistance at our cost. This indemnity does not apply to claims arising from Customer Data, from Output that you have modified, from use in combination with anything not supplied by us, or from use in breach of these Terms. If the Services become, or in our reasonable opinion are likely to become, the subject of such a claim, we may at our option procure the right to continue use, modify or replace the affected part, or terminate the affected Services with a pro-rata refund of prepaid fees.</p>' +
      '<p>You shall indemnify us against all losses, damages, fines, penalties, costs and expenses arising from: (a) Customer Data, including any claim that its provision or processing as instructed infringes the rights of a third party or breaches applicable law; (b) your breach of clause ' + '9' + ' (Acceptable use); (c) your operation of gambling services, including any regulatory action in relation to them; and (d) any communication sent to a player that was approved, or ought under your oversight obligations to have been reviewed, by your personnel.</p>' +

      h(titles[20]) +
      '<p>The contract begins on the effective date stated in the Order Form and continues for the initial term stated there. Unless the Order Form provides otherwise, it renews automatically for successive periods equal to the initial term (or twelve months, whichever is shorter) unless either party gives written notice of non-renewal at least ninety (90) days before the end of the then-current term.</p>' +
      '<p>Either party may terminate the contract with immediate effect by written notice if the other: commits a material breach that is incapable of remedy, or that is capable of remedy and is not remedied within thirty (30) days of written notice requiring it to be remedied; becomes unable to pay its debts as they fall due, enters liquidation, administration or receivership, or suffers any analogous event in any jurisdiction; or ceases, or threatens to cease, to carry on all or a substantial part of its business.</p>' +
      '<p>We may additionally terminate with immediate effect where you lose a licence or authorisation material to your operation of gambling services, or where continued provision of the Services would place us in breach of applicable law or sanctions.</p>' +

      h(titles[21]) +
      '<p>On termination or expiry: all licences granted to you cease; you shall cease using the Services; and each party shall return or destroy the other&rsquo;s confidential information, save for copies required to be retained by law or held in routine backup, which remain subject to clause ' + '15' + '.</p>' +
      '<p>For thirty (30) days after termination we will, on your written request, make Customer Data available for export in a structured, commonly used, machine-readable format. After that period we will delete Customer Data in accordance with the data processing agreement, subject to any legal retention obligation. Where you request an export in a non-standard format or requiring significant effort, we may charge our reasonable costs at our then-current professional-services rates.</p>' +
      '<p>Termination does not affect accrued rights or liabilities. Clauses relating to definitions, fees accrued, intellectual property, data protection, confidentiality, disclaimers, limitation of liability, indemnities, effects of termination, notices and governing law survive termination.</p>' +

      h(titles[22]) +
      '<p>Neither party is liable for failure or delay in performing its obligations (other than obligations to pay money) to the extent caused by an event beyond its reasonable control, including act of God, fire, flood, epidemic, war, act of terrorism, civil disturbance, industrial action not involving its own workforce, failure of public telecommunications or power networks, act of government or regulator, or failure of a third-party cloud provider notwithstanding reasonable contingency arrangements. The affected party shall notify the other promptly and use reasonable endeavours to mitigate. If the event continues for more than sixty (60) consecutive days, either party may terminate the affected Services on written notice.</p>' +

      h(titles[23]) +
      '<p>We may engage subcontractors and sub-processors, including cloud infrastructure providers, in the provision of the Services, and remain responsible for their performance as if it were our own. Sub-processors handling personal data are appointed in accordance with the data processing agreement.</p>' +
      '<p>Neither party may assign or transfer the contract without the other&rsquo;s prior written consent, not to be unreasonably withheld, except that either party may assign it in its entirety to an affiliate or to a successor in connection with a merger, reorganisation or sale of substantially all of its assets, on written notice.</p>' +

      h(titles[24]) +
      '<p>Each party shall comply with all applicable anti-bribery and anti-corruption laws, and with all applicable economic and trade sanctions and export-control laws, including those of the European Union and the Republic of Cyprus. Each party warrants that it is not, and is not owned or controlled by, a person subject to such sanctions, and shall notify the other immediately if that ceases to be true. Each party shall comply with applicable anti-money-laundering legislation, including the Prevention and Suppression of Money Laundering and Terrorist Financing Laws of Cyprus.</p>' +

      h(titles[25]) +
      '<p>Neither party may use the other&rsquo;s name, logo or trade marks in publicity without prior written consent. Consent to a specific use is not consent to further uses. Where you consent, we may identify you as a customer in our client list and in confidential sales materials; any case study, quotation or press announcement requires separate written approval.</p>' +

      h(titles[26]) +
      '<p>Notices must be in writing and sent to the addresses stated in the Order Form. Notices of termination, breach or a claim must be sent by registered post or courier to the registered office, with a copy by e-mail. Our address for such notices is ' + co.legalName + ', ' + co.street + ', ' + co.city + ', ' + co.country + ', copy to <a href="mailto:' + co.email + '">' + co.email + '</a>. Routine operational notices may be given by e-mail alone.</p>' +

      h(titles[27]) +
      '<p>We may amend these Terms with effect from the start of the next renewal term on at least sixty (60) days&rsquo; written notice. If an amendment materially and adversely affects you, you may terminate the affected Order Form by written notice given before the amendment takes effect, and the existing Terms will continue to apply until that termination is effective. Amendments required by law or by a competent authority take effect on the date required, with such notice as is reasonably practicable.</p>' +
      '<p>Amendments to an Order Form require the written agreement of both parties.</p>' +

      h(titles[28]) +
      '<p><strong>Entire agreement.</strong> The Order Form, the data processing agreement, any agreed service description and these Terms constitute the entire agreement between the parties and supersede all prior discussions, proposals and representations. Neither party has relied on any statement not set out in them, save that nothing limits liability for fraudulent misrepresentation.</p>' +
      '<p><strong>Severability.</strong> If any provision is held invalid or unenforceable, it shall be modified to the minimum extent necessary to make it enforceable, or, failing that, severed; the remainder continues in full force.</p>' +
      '<p><strong>Waiver.</strong> No failure or delay in exercising a right is a waiver of it, and no single or partial exercise prevents further exercise.</p>' +
      '<p><strong>No partnership.</strong> Nothing creates a partnership, joint venture, agency or employment relationship between the parties.</p>' +
      '<p><strong>Third parties.</strong> A person who is not a party to the contract has no right to enforce any of its terms.</p>' +
      '<p><strong>Counterparts and electronic signature.</strong> An Order Form may be signed in counterparts and by electronic signature, each of which is an original and together constitute one instrument.</p>' +
      '<p><strong>Language.</strong> The governing language of the contract is English. Any translation is for convenience only.</p>' +

      h(titles[29]) +
      '<p>These Terms, the contract, and any non-contractual obligations arising out of or in connection with them, are governed by and construed in accordance with the laws of the Republic of Cyprus, without regard to its conflict-of-laws rules. The United Nations Convention on Contracts for the International Sale of Goods does not apply.</p>' +
      '<p>The courts of the Republic of Cyprus have exclusive jurisdiction to settle any dispute arising out of or in connection with the contract, and each party irrevocably submits to that jurisdiction. Nothing prevents either party from seeking urgent injunctive or other interim relief in any court of competent jurisdiction.</p>' +
      '<p>Before commencing proceedings, the parties shall use reasonable endeavours to resolve the dispute by escalation to a senior representative of each party for a period of thirty (30) days. This does not prevent either party from seeking urgent relief or from taking steps necessary to preserve a limitation period.</p>' +

      '<p class="note mt-lg">Questions about these terms: <a href="mailto:' + co.email + '">' + co.email + '</a></p>' +
      '</div>' +
    '</div></div></section>';
  }

  window.TL_CONTENT.legalNotice = legalNotice;
  window.TL_CONTENT.terms = terms;
  window.TL_CONTENT.legalMeta = legalMeta;
  window.TL_CONTENT.aside = aside;
  window.TL_CONTENT.h = function (t) { return h(t); };
  window.TL_CONTENT.resetH = function () { n = 0; };
})();

/* ==========================================================================
   Privacy policy · Cookie policy · 404
   ========================================================================== */
(function () {
  'use strict';
  var C = window.TL_CONTENT;
  var co = C.COMPANY;
  var h = C.h, aside = C.aside, legalMeta = C.legalMeta;

  function privacy() {
    C.resetH();
    var titles = ['Who is responsible', 'Scope of this policy', 'When we act as processor',
      'What we collect and why', 'Legal bases', 'This website', 'Sharing your data',
      'International transfers', 'How long we keep data', 'Security', 'Your rights',
      'Complaints', 'Automated decision-making', 'Changes', 'Contact'];
    return C.pageHero('Legal', 'Privacy policy',
      'How ' + co.legalName + ' handles personal data, under the GDPR and the Processing of Personal Data (Protection of the Individual) Law of 2018 (Law 125(I)/2018).') +
    '<section class="section--tight"><div class="wrap"><div class="legal-layout">' +
      aside('/privacy', titles) +
      '<div class="prose reveal">' +
      legalMeta('Applies to this website and to our business relationships') +

      h(titles[0]) +
      '<p>The controller for the processing described in this policy is:</p>' +
      '<dl>' +
        '<dt>Controller</dt><dd>' + co.legalName + '</dd>' +
        '<dt>Address</dt><dd>' + co.street + ', ' + co.city + ', ' + co.country + '</dd>' +
        '<dt>Registration</dt><dd>' + co.reg + '</dd>' +
        '<dt>Contact</dt><dd><a href="mailto:' + co.email + '">' + co.email + '</a></dd>' +
      '</dl>' +
      '<p>We have not appointed a data protection officer, as we are not required to do so under Article 37 GDPR. Privacy enquiries are handled by the director at the address above.</p>' +

      h(titles[1]) +
      '<p>This policy explains how we process personal data <strong>as controller</strong> &mdash; that is, where we decide the purposes and means of processing. That covers visitors to this website, prospective and existing business contacts, suppliers, applicants and correspondents.</p>' +

      h(titles[2]) +
      '<p>When we provide our services to a gambling operator, we process player data <strong>as a processor</strong> on that operator&rsquo;s instructions. In that relationship the operator is the controller and its own privacy notice applies. This policy does not govern that processing, which is instead governed by the data processing agreement between us and the operator.</p>' +
      '<p>If you are a player of an operator that uses Trueloop and you wish to exercise your rights, please contact that operator. We will refer any request we receive directly to the relevant controller and assist them in responding.</p>' +
      '<p>There is one exception. Under <strong>Service Model 3</strong>, our lowest-priced commercial model, the operator grants us the right to use data arising from the service to train and improve our own models, including models served to other customers. That is processing for our own purposes, so for that processing we act as controller rather than processor. It is agreed in writing with the operator, the roles and safeguards are recorded in the data processing agreement, and de-identification, minimisation and category exclusions are applied before any training use. Operators on Service Models 1 and 2 grant no training right of any kind, and their data is used only to provide the service to them.</p>' +

      h(titles[3]) +
      '<p><strong>Business contact data.</strong> Name, role, employer, e-mail address, telephone number and the content of your correspondence, where you contact us or where we contact you in the course of business development. Purpose: to respond to you, to prepare and manage a commercial relationship, and to keep a record of our dealings.</p>' +
      '<p><strong>Contract and billing data.</strong> Contracting entity details, signatory names, billing contacts, VAT identification, payment records and correspondence relating to a contract. Purpose: performance of the contract and compliance with accounting, tax and company-law obligations.</p>' +
      '<p><strong>Technical data from this website.</strong> When you load a page, your browser transmits your IP address, user-agent string and request details to the hosting infrastructure. These are processed in server logs by our hosting provider for the purposes of delivering the site and maintaining its security and integrity. We do not combine them with other data to identify you.</p>' +
      '<p><strong>Application data.</strong> Where you apply for a role with us, the information in your application. Purpose: to assess your application.</p>' +
      '<p>We do not knowingly collect personal data from children through this website, and the site is not directed at them.</p>' +

      h(titles[4]) +
      '<ul>' +
        '<li><strong>Article 6(1)(b) GDPR</strong> &mdash; performance of a contract, or steps taken at your request before entering into one, for contract and billing data and for handling your enquiry.</li>' +
        '<li><strong>Article 6(1)(f) GDPR</strong> &mdash; our legitimate interests in operating and securing this website, in business development with business contacts, in maintaining records of our dealings and in establishing or defending legal claims. You may object to processing based on this ground (see clause 11).</li>' +
        '<li><strong>Article 6(1)(c) GDPR</strong> &mdash; compliance with legal obligations, including accounting and tax retention requirements under Cypriot law.</li>' +
        '<li><strong>Article 6(1)(a) GDPR</strong> &mdash; consent, where we ask for it specifically, for example for a marketing mailing. You may withdraw consent at any time, without affecting the lawfulness of processing before withdrawal.</li>' +
      '</ul>' +

      h(titles[5]) +
      '<p>This website is deliberately built to collect as little as possible:</p>' +
      '<ul>' +
        '<li><strong>No cookies are set by us.</strong> We use no analytics, no advertising, no tracking pixels, no social-media embeds and no A/B testing tools.</li>' +
        '<li><strong>No account or login</strong> exists on this website.</li>' +
        '<li><strong>The contact form does not transmit anything to us.</strong> It runs entirely in your browser and, when you press the button, composes a message in your own e-mail client. Nothing you type is sent to, or stored on, this website. The message reaches us only if you choose to send it, and it then arrives as ordinary e-mail correspondence.</li>' +
        '<li><strong>Progressive web app storage.</strong> To work offline and load quickly, the site registers a service worker that stores copies of pages, styles, scripts and images in your browser&rsquo;s cache. This is strictly necessary technical storage on your own device; it contains no personal data and is not readable by us. You can clear it at any time in your browser settings. See our <a href="#/cookies">cookie policy</a>.</li>' +
        '<li><strong>Web fonts.</strong> Typefaces are loaded from Google Fonts (Google Ireland Limited). Your IP address and browser information are transmitted to that service in order to deliver the font files. This is based on our legitimate interest in a consistent presentation. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&rsquo;s privacy policy</a>.</li>' +
        '<li><strong>Hosting.</strong> This site is hosted on GitHub Pages, operated by GitHub, Inc. and its affiliates. GitHub processes server log data, including IP addresses, as described in the <a href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub Privacy Statement</a>.</li>' +
      '</ul>' +

      h(titles[6]) +
      '<p>We do not sell personal data and we do not share it for advertising. We disclose personal data only to: our hosting and e-mail providers; professional advisers (lawyers, accountants, auditors) bound by confidentiality; banks and payment providers in connection with invoicing; competent authorities where required by law; and an acquirer or successor in connection with a corporate transaction, subject to appropriate confidentiality undertakings. Processors act only on our documented instructions under a written agreement meeting Article 28 GDPR.</p>' +

      h(titles[7]) +
      '<p>Our operations are based in the European Union. Some of the providers named above are established outside the European Economic Area or may access data from outside it. Where personal data is transferred to a third country, we rely on an adequacy decision of the European Commission where one applies, or otherwise on the Standard Contractual Clauses adopted by the European Commission together with any supplementary measures the transfer risk assessment requires. You may request a copy of the relevant safeguards by writing to us.</p>' +

      h(titles[8]) +
      '<ul>' +
        '<li><strong>Enquiry correspondence:</strong> for as long as needed to deal with the matter, then up to 24 months, unless a relationship develops.</li>' +
        '<li><strong>Contract and billing records:</strong> for the duration of the contract and thereafter for the periods required by Cypriot accounting, tax and company law, generally six (6) years, and up to the expiry of the applicable limitation period for claims.</li>' +
        '<li><strong>Unsuccessful job applications:</strong> up to 12 months, then deleted, unless you agree to us keeping them longer.</li>' +
        '<li><strong>Hosting server logs:</strong> retained by the hosting provider according to its own policy, typically a short period for security purposes.</li>' +
      '</ul>' +
      '<p>Where continued retention is no longer necessary, data is deleted or irreversibly anonymised.</p>' +

      h(titles[9]) +
      '<p>We apply technical and organisational measures appropriate to the risk, including transport encryption, access control on a least-privilege basis, multi-factor authentication on administrative accounts, logging, and confidentiality obligations on everyone with access. No transmission over the internet is completely secure; please do not send sensitive information, and in particular player data, by ordinary e-mail.</p>' +

      h(titles[10]) +
      '<p>Subject to the conditions in the GDPR, you have the right to: request access to your personal data (Article 15); request rectification of inaccurate data (Article 16); request erasure (Article 17); request restriction of processing (Article 18); receive your data in a portable format (Article 20); object to processing based on legitimate interests, including profiling (Article 21); and withdraw consent at any time where processing is based on consent (Article 7(3)).</p>' +
      '<p>To exercise a right, write to <a href="mailto:' + co.email + '">' + co.email + '</a>. We will respond within one month, which may be extended by a further two months where the request is complex, in which case we will tell you. We may ask for information reasonably necessary to confirm your identity. Exercising your rights is free of charge unless a request is manifestly unfounded or excessive.</p>' +

      h(titles[11]) +
      '<p>If you believe we have processed your personal data unlawfully, we would like the chance to put it right &mdash; please contact us first. You also have the right to lodge a complaint with a supervisory authority, in particular the authority in the Member State of your habitual residence, place of work or place of the alleged infringement. The supervisory authority for Cyprus is:</p>' +
      '<p><strong>Office of the Commissioner for Personal Data Protection</strong><br>Iasonos 1, 1082 Nicosia, Cyprus<br><a href="https://www.dataprotection.gov.cy" target="_blank" rel="noopener noreferrer">www.dataprotection.gov.cy</a></p>' +

      h(titles[12]) +
      '<p>We do not carry out automated decision-making producing legal or similarly significant effects on you within the meaning of Article 22 GDPR in the processing for which we are controller. Where our software is used by an operator to support communication with its own customers, the operator is the controller and is responsible for assessing and disclosing any such processing.</p>' +

      h(titles[13]) +
      '<p>We may update this policy to reflect changes in our processing or in the law. The current version is always published at this address and is dated above. Where a change materially affects you and we hold your contact details, we will notify you.</p>' +

      h(titles[14]) +
      '<p>' + co.legalName + '<br>' + co.street + '<br>' + co.city + '<br>' + co.country + '<br><a href="mailto:' + co.email + '">' + co.email + '</a></p>' +
      '</div>' +
    '</div></div></section>';
  }

  function cookies() {
    C.resetH();
    var titles = ['Summary', 'Cookies we set', 'Technical storage we do use', 'Third-party requests', 'Managing storage', 'Changes'];
    return C.pageHero('Legal', 'Cookie policy',
      'A short policy, because there is very little to declare.') +
    '<section class="section--tight"><div class="wrap"><div class="legal-layout">' +
      aside('/cookies', titles) +
      '<div class="prose reveal">' +
      legalMeta() +

      h(titles[0]) +
      '<p><strong>This website sets no cookies.</strong> We use no analytics, no advertising or re-targeting technology, no tracking pixels, no social-media embeds and no cross-site identifiers. Because we place no non-essential cookies or similar identifiers on your device, no consent banner is required under Article 5(3) of Directive 2002/58/EC as implemented in Cyprus by the Regulation of Electronic Communications and Postal Services Law of 2004 (Law 112(I)/2004).</p>' +

      h(titles[1]) +
      '<p>None. If that ever changes, this page will be updated and, where the law requires it, we will ask for your consent before anything non-essential is stored.</p>' +

      h(titles[2]) +
      '<p>The site is a progressive web app. To load quickly and to remain usable without a connection, it uses two strictly necessary browser mechanisms on your own device:</p>' +
      '<div class="table-wrap"><table>' +
        '<thead><tr><th scope="col">Mechanism</th><th scope="col">Purpose</th><th scope="col">Contains</th><th scope="col">Lifetime</th></tr></thead>' +
        '<tbody>' +
        '<tr><th scope="row">Service worker</th><td>Serves the site from your device and checks for new versions</td><td>Site code only</td><td>Until you uninstall the app or clear site data</td></tr>' +
        '<tr><th scope="row">Cache Storage</th><td>Stores copies of pages, styles, scripts, icons and the logo</td><td>Public site assets; no personal data</td><td>Replaced when a new version is published; cleared with site data</td></tr>' +
        '</tbody></table></div>' +
      '<p>Neither can be read by us, neither identifies you, and neither is transmitted anywhere. Both are strictly necessary to provide the service you requested.</p>' +

      h(titles[3]) +
      '<p>Loading this site causes your browser to make requests to two third parties, which will see your IP address and browser information as an unavoidable part of delivering content over the internet:</p>' +
      '<ul>' +
        '<li><strong>GitHub Pages</strong> (GitHub, Inc.) &mdash; hosting. See the <a href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub Privacy Statement</a>.</li>' +
        '<li><strong>Google Fonts</strong> (Google Ireland Limited) &mdash; the typefaces used on this site. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&rsquo;s privacy policy</a>.</li>' +
      '</ul>' +
      '<p>Neither is used by us for analytics or advertising.</p>' +

      h(titles[4]) +
      '<p>You can clear the cached copies at any time. In most desktop browsers: open developer tools, go to the Application or Storage panel, and choose &ldquo;Clear site data&rdquo;. In mobile browsers, clear the website data for this site in settings. If you installed the app to your home screen, uninstalling it removes its storage. Doing so does not affect your ability to use the site online.</p>' +

      h(titles[5]) +
      '<p>If we ever introduce cookies or similar technologies, we will update this page before doing so and obtain consent where the law requires it. For everything else about personal data, see our <a href="#/privacy">privacy policy</a>.</p>' +
      '</div>' +
    '</div></div></section>';
  }

  function notFound() {
    return '<section class="section" style="min-height:56vh;display:grid;place-items:center;text-align:center"><div class="wrap">' +
      '<span class="eyebrow">Error 404</span>' +
      '<h1>This page is <span class="grad-text">outside the perimeter</span></h1>' +
      '<p class="lede" style="margin-inline:auto">The address you followed does not match any route on this site. It may have moved, or the link may have been mistyped.</p>' +
      '<div class="cta-actions" style="margin-top:26px">' +
        '<a class="btn btn--lg" href="#/">Back to the homepage</a>' +
        '<a class="btn btn--lg btn--ghost" href="#/contact">Contact us</a>' +
      '</div>' +
    '</div></section>';
  }

  window.TL_CONTENT.privacy = privacy;
  window.TL_CONTENT.cookies = cookies;
  window.TL_CONTENT.notFound = notFound;
})();
