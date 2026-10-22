/*
 * i18n.js: English / Telugu switch for the owner page (most owners read Telugu).
 * It swaps exact English strings for Telugu ones, so the page markup stays plain English and works without this script.
 * The choice is kept in the browser (mm-lang). Names, numbers, currency and brand words are left as they are.
 * The wording should be reviewed by a native Telugu speaker before launch.
 */
(function () {
  "use strict";

  var TE = {
    "Skip to content": "కంటెంట్‌కు వెళ్ళండి",
    "Browse PGs": "PG లను చూడండి",
    "How it works": "ఇది ఎలా పనిచేస్తుంది",
    "Pune guide": "పుణె గైడ్",
    "Help": "సహాయం",
    "Download app": "యాప్ డౌన్‌లోడ్",
    "Coming soon": "త్వరలో వస్తోంది",
    "List your property": "మీ ఆస్తిని నమోదు చేయండి",
    "Sign in": "సైన్ ఇన్",
    "Refer a friend": "స్నేహితుడిని రిఫర్ చేయండి",
    "Welcome back, Ramesh": "తిరిగి స్వాగతం, రమేష్",
    "MakanMate Owner · Pune pilot · your listings are live": "MakanMate ఓనర్ · పుణె పైలట్ · మీ లిస్టింగ్‌లు లైవ్‌లో ఉన్నాయి",
    "My listings": "నా లిస్టింగ్‌లు",
    "Visits": "సందర్శనలు",
    "Rent": "అద్దె",
    "+ Add property": "+ ఆస్తిని జోడించండి",
    "Views this month": "ఈ నెల వీక్షణలు",
    "+18% vs last month": "గత నెలతో పోలిస్తే +18%",
    "Enquiries": "విచారణలు",
    "8 replied, 6 pending": "8 జవాబిచ్చారు, 6 పెండింగ్",
    "Visits booked": "బుక్ అయిన సందర్శనలు",
    "3 upcoming, 2 done": "3 రాబోయేవి, 2 పూర్తయ్యాయి",
    "Occupancy": "ఆక్యుపెన్సీ",
    "5 of 6 beds filled": "6 బెడ్లలో 5 నిండాయి",
    "2 BHK premium flat · Hinjewadi Phase 1": "2 BHK ప్రీమియం ఫ్లాట్ · హింజెవాడి ఫేజ్ 1",
    "Active": "యాక్టివ్",
    "Tower B, Sample Residency · ₹38,000 / month": "టవర్ B, శాంపిల్ రెసిడెన్సీ · ₹38,000 / నెల",
    "Safety score 8.4 · 4.8 stars (7 reviews) · 74% match avg": "భద్రతా స్కోరు 8.4 · 4.8 స్టార్లు (7 రివ్యూలు) · సగటు 74% మ్యాచ్",
    "Views": "వీక్షణలు",
    "Days listed": "లిస్ట్ చేసిన రోజులు",
    "Available": "అందుబాటులో",
    "1 Oct": "1 అక్టోబర్",
    "Manage visits (3)": "సందర్శనలను నిర్వహించండి (3)",
    "WhatsApp enquiries": "WhatsApp విచారణలు",
    "Preview listing": "లిస్టింగ్ ప్రివ్యూ",
    "Got another property or room?": "మరో ఆస్తి లేదా గది ఉందా?",
    "Listing is free. Add photos, set your rent, we'll verify and go live.": "లిస్టింగ్ ఉచితం. ఫోటోలు జోడించండి, అద్దె నిర్ణయించండి, మేము ధృవీకరించి లైవ్ చేస్తాం.",
    "Add another property": "మరో ఆస్తిని జోడించండి",
    "Visit requests": "సందర్శన అభ్యర్థనలు",
    "New (2)": "కొత్తవి (2)",
    "Upcoming (1)": "రాబోయేవి (1)",
    "Done (4)": "పూర్తయినవి (4)",
    "+91 98765 43210 · Tomorrow, 11:00 am – 12:00 pm · 2 BHK Hinjewadi": "+91 98765 43210 · రేపు, ఉ. 11:00 – మ. 12:00 · 2 BHK హింజెవాడి",
    "+91 87654 32109 · Day after tomorrow, 4:00 pm – 5:00 pm · 2 BHK Hinjewadi": "+91 87654 32109 · ఎల్లుండి, సా. 4:00 – 5:00 · 2 BHK హింజెవాడి",
    "Sneha Patil — Confirmed": "Sneha Patil — నిర్ధారించబడింది",
    "+91 76543 21098 · Friday, 10:00 am – 11:00 am · 2 BHK Hinjewadi": "+91 76543 21098 · శుక్రవారం, ఉ. 10:00 – 11:00 · 2 BHK హింజెవాడి",
    "Accept": "అంగీకరించండి",
    "Decline": "తిరస్కరించండి",
    "Confirmed": "నిర్ధారించబడింది",
    "Send listing on WhatsApp": "లిస్టింగ్‌ను WhatsApp లో పంపండి",
    "Share your listing with any enquiry directly from WhatsApp. They can take a 360° virtual tour before deciding to visit.": "ఏ విచారణకైనా మీ లిస్టింగ్‌ను నేరుగా WhatsApp నుండి షేర్ చేయండి. సందర్శించే ముందు వారు 360° వర్చువల్ టూర్ చూడవచ్చు.",
    "Share listing on WhatsApp": "లిస్టింగ్‌ను WhatsApp లో షేర్ చేయండి",
    "Rent & reminders": "అద్దె & రిమైండర్లు",
    "This month": "ఈ నెల",
    "Received 16 Sep": "16 సెప్టెంబర్‌న అందింది",
    "Next due": "తదుపరి గడువు",
    "16 Oct": "16 అక్టోబర్",
    "20 days away": "20 రోజులు మిగిలి ఉన్నాయి",
    "Deposit held": "ఉంచిన డిపాజిట్",
    "3 months · Karthik R.": "3 నెలలు · Karthik R.",
    "Tenant: Karthik Raghavan": "అద్దెదారు: Karthik Raghavan",
    "Rent paid": "అద్దె చెల్లించబడింది",
    "Monthly rent": "నెలవారీ అద్దె",
    "Last paid": "చివరిగా చెల్లించినది",
    "16 Sep": "16 సెప్టెంబర్",
    "Agreement": "ఒప్పందం",
    "11 months": "11 నెలలు",
    "Send rent reminder": "అద్దె రిమైండర్ పంపండి",
    "View payment history": "చెల్లింపుల చరిత్ర చూడండి",
    "Download receipt": "రసీదు డౌన్‌లోడ్ చేయండి",
    "Tenant paperwork": "అద్దెదారు పత్రాలు",
    "Leave and licence agreement, police verification and ID check — all done digitally. Send the links to your tenant from here.": "లీవ్ అండ్ లైసెన్స్ ఒప్పందం, పోలీస్ వెరిఫికేషన్, ID తనిఖీ — అన్నీ డిజిటల్‌గా. లింకులను ఇక్కడి నుండే మీ అద్దెదారుకు పంపండి.",
    "Send e-sign link": "ఈ-సైన్ లింక్ పంపండి",
    "Police verification": "పోలీస్ వెరిఫికేషన్",
    "ID via DigiLocker": "DigiLocker ద్వారా ID",
    "Basics": "ప్రాథమికాలు",
    "Rooms": "గదులు",
    "Features": "సౌకర్యాలు",
    "Location": "ప్రదేశం",
    "Photos": "ఫోటోలు",
    "Property basics": "ఆస్తి ప్రాథమిక వివరాలు",
    "Tell us what kind of place you have and the rent you want.": "మీ దగ్గర ఏ రకమైన ఆస్తి ఉందో, ఎంత అద్దె కావాలో చెప్పండి.",
    "Property type": "ఆస్తి రకం",
    "PG (Paying Guest)": "PG (పేయింగ్ గెస్ట్)",
    "Shared flat / room": "షేర్డ్ ఫ్లాట్ / గది",
    "1 BHK whole flat": "1 BHK పూర్తి ఫ్లాట్",
    "2 BHK whole flat": "2 BHK పూర్తి ఫ్లాట్",
    "3 BHK whole flat": "3 BHK పూర్తి ఫ్లాట్",
    "Studio / 1 RK": "స్టూడియో / 1 RK",
    "Monthly rent (₹)": "నెలవారీ అద్దె (₹)",
    "Deposit (₹)": "డిపాజిట్ (₹)",
    "Maintenance (₹ / month)": "నిర్వహణ ఖర్చు (₹ / నెల)",
    "Available from": "అందుబాటులోకి వచ్చే తేదీ",
    "Property name / building name": "ఆస్తి పేరు / భవనం పేరు",
    "Who is this for?": "ఇది ఎవరి కోసం?",
    "Working professionals": "ఉద్యోగస్తులు",
    "Students": "విద్యార్థులు",
    "Women only": "మహిళలకు మాత్రమే",
    "Couples welcome": "జంటలకు స్వాగతం",
    "Step 1 of 5": "5 లో 1వ దశ",
    "Next: Rooms": "తదుపరి: గదులు",
    "Rooms and beds": "గదులు మరియు బెడ్లు",
    "Tell us how many rooms and beds your property has.": "మీ ఆస్తిలో ఎన్ని గదులు, బెడ్లు ఉన్నాయో చెప్పండి.",
    "Total bedrooms": "మొత్తం బెడ్‌రూములు",
    "Total beds available for rent": "అద్దెకు అందుబాటులో ఉన్న మొత్తం బెడ్లు",
    "Bathrooms": "బాత్‌రూములు",
    "Floor": "అంతస్తు",
    "Furnishing": "ఫర్నిషింగ్",
    "Fully furnished": "పూర్తిగా ఫర్నిష్ చేయబడింది",
    "Semi-furnished": "పాక్షికంగా ఫర్నిష్ చేయబడింది",
    "Unfurnished": "ఫర్నిష్ చేయలేదు",
    "Sharing type": "షేరింగ్ రకం",
    "Single occupancy": "సింగిల్ ఆక్యుపెన్సీ",
    "Twin sharing": "ట్విన్ షేరింగ్",
    "Triple sharing": "ట్రిపుల్ షేరింగ్",
    "Whole flat only": "పూర్తి ఫ్లాట్ మాత్రమే",
    "Back": "వెనుకకు",
    "Next: Features": "తదుపరి: సౌకర్యాలు",
    "Features and rules": "సౌకర్యాలు మరియు నియమాలు",
    "What's included and what are the house rules?": "ఏమి ఉన్నాయి, ఇంటి నియమాలు ఏమిటి?",
    "Included amenities": "ఉన్న సౌకర్యాలు",
    "Meals included": "భోజనం ఉంది",
    "Laundry": "లాండ్రీ",
    "Parking": "పార్కింగ్",
    "Power backup": "పవర్ బ్యాకప్",
    "Pool / gym": "పూల్ / జిమ్",
    "CCTV / guard": "CCTV / గార్డ్",
    "House rules": "ఇంటి నియమాలు",
    "Veg kitchen": "శాకాహార వంటగది",
    "No smoking": "ధూమపానం నిషేధం",
    "No pets": "పెంపుడు జంతువులు వద్దు",
    "Guests allowed": "అతిథులకు అనుమతి",
    "Anything else? (optional)": "ఇంకేమైనా? (ఐచ్ఛికం)",
    "Next: Location": "తదుపరి: ప్రదేశం",
    "Your full address and the nearest college or IT park. This is what tenants use to calculate commute times.": "మీ పూర్తి చిరునామా మరియు దగ్గరలోని కళాశాల లేదా IT పార్క్. అద్దెదారులు ప్రయాణ సమయాన్ని లెక్కించడానికి దీన్ని ఉపయోగిస్తారు.",
    "Full address": "పూర్తి చిరునామా",
    "Include society name, tower, flat number, area and PIN code.": "సొసైటీ పేరు, టవర్, ఫ్లాట్ నంబర్, ప్రాంతం మరియు PIN కోడ్ రాయండి.",
    "Nearest IT park or college (optional)": "దగ్గరలోని IT పార్క్ లేదా కళాశాల (ఐచ్ఛికం)",
    "Select nearest landmark": "దగ్గరలోని ల్యాండ్‌మార్క్ ఎంచుకోండి",
    "Hinjewadi Phase 1": "హింజెవాడి ఫేజ్ 1",
    "Hinjewadi Phase 2": "హింజెవాడి ఫేజ్ 2",
    "Hinjewadi Phase 3": "హింజెవాడి ఫేజ్ 3",
    "Kharadi EON IT Park": "ఖరాడి EON IT పార్క్",
    "Magarpatta Cybercity": "మగర్‌పట్ట సైబర్‌సిటీ",
    "MIT Pune (Kothrud)": "MIT పుణె (కోథ్రుడ్)",
    "COEP (Shivajinagar)": "COEP (శివాజీనగర్)",
    "Symbiosis (Viman Nagar)": "సింబయోసిస్ (విమాన్ నగర్)",
    "Pune University (Aundh)": "పుణె యూనివర్సిటీ (ఔంధ్)",
    "Bus stop distance": "బస్ స్టాప్ దూరం",
    "Grocery distance": "కిరాణా దుకాణం దూరం",
    "Google Maps link (optional)": "Google Maps లింక్ (ఐచ్ఛికం)",
    "Paste the share link from Google Maps for your exact pin.": "మీ ఖచ్చితమైన ప్రదేశం కోసం Google Maps షేర్ లింక్‌ను ఇక్కడ పేస్ట్ చేయండి.",
    "Next: Photos": "తదుపరి: ఫోటోలు",
    "Listings with 5+ photos get 3× more enquiries. Include the bedroom, kitchen, bathroom and a common area.": "5+ ఫోటోలు ఉన్న లిస్టింగ్‌లకు 3 రెట్లు ఎక్కువ విచారణలు వస్తాయి. బెడ్‌రూమ్, వంటగది, బాత్‌రూమ్ మరియు కామన్ ఏరియా చేర్చండి.",
    "Tap to add photos": "ఫోటోలు జోడించడానికి నొక్కండి",
    "JPG or PNG · up to 10 photos · min 800×600 px": "JPG లేదా PNG · గరిష్టంగా 10 ఫోటోలు · కనీసం 800×600 px",
    "No camera handy?": "కెమెరా అందుబాటులో లేదా?",
    "Send your photos on WhatsApp and we'll add them to your listing.": "మీ ఫోటోలను WhatsApp లో పంపండి, మేము వాటిని మీ లిస్టింగ్‌కు జోడిస్తాం.",
    "Send photos on WhatsApp": "ఫోటోలను WhatsApp లో పంపండి",
    "Submit listing": "లిస్టింగ్ సమర్పించండి",
    "Listing submitted!": "లిస్టింగ్ సమర్పించబడింది!",
    "Our Pune team will visit your property within 2–3 working days to verify and take final photos. Once verified, your listing goes live.": "మా పుణె బృందం 2–3 పని దినాల్లో మీ ఆస్తిని సందర్శించి, ధృవీకరించి, తుది ఫోటోలు తీస్తుంది. ధృవీకరించిన తర్వాత మీ లిస్టింగ్ లైవ్ అవుతుంది.",
    "Property details saved": "ఆస్తి వివరాలు సేవ్ అయ్యాయి",
    "Verification visit being scheduled": "ధృవీకరణ సందర్శన షెడ్యూల్ అవుతోంది",
    "Listing will go live after verification": "ధృవీకరణ తర్వాత లిస్టింగ్ లైవ్ అవుతుంది",
    "WhatsApp us": "మాకు WhatsApp చేయండి",
    "Back to dashboard": "డాష్‌బోర్డ్‌కు తిరిగి వెళ్ళండి",
    "A home away from home in a new city. Verified PGs in Pune, zero brokerage.": "కొత్త నగరంలో ఇంటికి దూరంగా ఒక ఇల్లు. పుణెలో ధృవీకరించిన PG లు, జీరో బ్రోకరేజ్.",
    "Tenants": "అద్దెదారులు",
    "Pune starter guide": "పుణె స్టార్టర్ గైడ్",
    "Help & safety": "సహాయం & భద్రత",
    "Owners": "యజమానులు",
    "Owner dashboard": "ఓనర్ డాష్‌బోర్డ్",
    "Contact": "సంప్రదించండి",
    "Telegram community": "టెలిగ్రామ్ కమ్యూనిటీ",
    "© 2026 MakanMate · Pune, India": "© 2026 MakanMate · పుణె, భారతదేశం",
    "Privacy · Terms · Report a listing": "గోప్యత · నిబంధనలు · లిస్టింగ్‌ను రిపోర్ట్ చేయండి",
    // attributes: placeholders, labels, page title
    "e.g. 12000": "ఉదా. 12000",
    "e.g. 24000": "ఉదా. 24000",
    "0 if included in rent": "అద్దెలో కలిపి ఉంటే 0",
    "e.g. Sunrise Heights, Flat 302": "ఉదా. సన్‌రైజ్ హైట్స్, ఫ్లాట్ 302",
    "e.g. 4th of 12, Ground floor": "ఉదా. 12 లో 4వ, గ్రౌండ్ ఫ్లోర్",
    "Quiet building, curfew at 11 pm, gated society...": "ప్రశాంతమైన భవనం, రాత్రి 11 కి గేటు మూసివేత, గేటెడ్ సొసైటీ...",
    "Flat 302, Tower C, Sunrise Heights, Wakad, Pune, Maharashtra 411057": "ఫ్లాట్ 302, టవర్ C, సన్‌రైజ్ హైట్స్, వాకడ్, పుణె, మహారాష్ట్ర 411057",
    "e.g. 300 m, 5 min walk": "ఉదా. 300 మీ, 5 నిమిషాల నడక",
    "e.g. 200 m, 2 min walk": "ఉదా. 200 మీ, 2 నిమిషాల నడక",
    "Main": "ప్రధాన మెనూ",
    "Switch between light and dark theme": "లైట్ మరియు డార్క్ థీమ్ మధ్య మార్చండి",
    "Open menu": "మెనూ తెరవండి",
    "Mobile navigation": "మొబైల్ నావిగేషన్",
    "Owner dashboard sections": "ఓనర్ డాష్‌బోర్డ్ విభాగాలు",
    "Owner Dashboard — MakanMate": "ఓనర్ డాష్‌బోర్డ్ — MakanMate"
  };

  var KEY = "mm-lang";
  var ATTRS = ["placeholder", "aria-label", "title"];
  var origText = new WeakMap();   // text node -> original English
  var origAttr = new WeakMap();   // element -> { attr: original English }
  var lang = "en", busy = false, observer = null;

  function norm(s) { return s.replace(/\s+/g, " ").trim(); }

  function translateNode(node) {
    var txt = node.nodeValue, key = norm(txt);
    if (!key) return;
    var te = TE[key];
    if (!te) return;
    if (!origText.has(node)) origText.set(node, txt);
    var lead = txt.match(/^\s*/)[0], trail = txt.match(/\s*$/)[0];
    node.nodeValue = lead + te + trail;
  }

  function translateAttrs(el) {
    ATTRS.forEach(function (a) {
      if (!el.hasAttribute || !el.hasAttribute(a)) return;
      var v = el.getAttribute(a), te = TE[norm(v)];
      if (!te) return;
      var saved = origAttr.get(el) || {};
      if (!(a in saved)) saved[a] = v;
      origAttr.set(el, saved);
      el.setAttribute(a, te);
    });
  }

  function walk(root, fn, attrFn) {
    var skip = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1 };
    if (root.nodeType === 3) { fn(root); return; }
    if (root.nodeType !== 1 || skip[root.tagName] || root.closest("[data-i18n-skip]")) return;
    attrFn(root);
    var w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null);
    while (w.nextNode()) {
      var n = w.currentNode;
      if (n.nodeType === 3) { if (!n.parentElement || !skip[n.parentElement.tagName] && !n.parentElement.closest("[data-i18n-skip]")) fn(n); }
      else if (!skip[n.tagName] && !n.closest("[data-i18n-skip]")) attrFn(n);
    }
  }

  function toTelugu(root) { busy = true; walk(root, translateNode, translateAttrs); busy = false; }

  function toEnglish() {
    busy = true;
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), n, list = [];
    while ((n = w.nextNode())) if (origText.has(n)) list.push(n);
    list.forEach(function (t) { t.nodeValue = origText.get(t); origText.delete(t); });
    document.querySelectorAll("*").forEach(function (el) {
      var saved = origAttr.get(el);
      if (saved) { Object.keys(saved).forEach(function (a) { el.setAttribute(a, saved[a]); }); origAttr.delete(el); }
    });
    busy = false;
  }

  var titleEn = document.title;
  function setLang(l, remember) {
    lang = l === "te" ? "te" : "en";
    document.documentElement.setAttribute("lang", lang);
    if (lang === "te") {
      toTelugu(document.body);
      document.title = TE[norm(titleEn)] || titleEn;
      if (!observer) {
        // text that the page writes later (for example "Confirmed" after accepting a visit) is translated too
        observer = new MutationObserver(function (muts) {
          if (busy || lang !== "te") return;
          muts.forEach(function (m) {
            if (m.type === "characterData") { busy = true; translateNode(m.target); busy = false; }
            else m.addedNodes.forEach(function (n) { toTelugu(n); });
          });
        });
        observer.observe(document.body, { childList: true, subtree: true, characterData: true });
      }
    } else {
      toEnglish();
      document.title = titleEn;
    }
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", String(on));
    });
    if (remember) { try { localStorage.setItem(KEY, lang); } catch (e) {} }
  }

  function init() {
    var saved = "en";
    try { saved = localStorage.getItem(KEY) || "en"; } catch (e) {}
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang"), true); });
    });
    setLang(saved, false);
  }
  window.MMi18n = { setLang: setLang, dict: TE };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
