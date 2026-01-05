/* Simple i18n. Stores language in localStorage. */
const I18N = {
  en: {
    nav_services: "Portfolio",
    nav_talent: "Talent",
    nav_contact: "Contact",

    // Slogan (keep original, shown in header only)
    hero_kicker: "Bridging top-tier devs to Europe.",

    // Hero
    hero_h1: "Talent partners for top-tier devs.",
    hero_sub: "We bring senior developers to tech companies in the Netherlands.",

    // CTAs (use everywhere)
    cta_open_position: "Hire a Dev",
    cta_book_call: "Book a Call",
    cta_apply: "Apply",
    cta_refer: "Refer a Friend",

    // Services
    services_title: "Our Portfolio",
    services_lead: "Two ways to hire.",
    svc1_k: "",
    svc1_t: "Tech Boutique",
    svc1_p: "We deliver both recruitment and hunting for senior-plus tech roles. Built for roles where delivery and reliability matter.",
    svc2_t: "Staff Augmentation",
    svc2_p: "Full-time or part-time. Contracts from 3 months. Optional conversion to hire after an agreed period, with a flexible non-solicitation clause.",
    role_cov_t: "Role Coverage",
    role_cov_p: "Software Engineering, Product, Data, DevOps.",
    verticals_t: "Verticals",
    verticals_p: "Fintech, B2B SaaS, Consulting and Professional Services.",

    // How it works
    how_title: "How It Works",
    how_lead: "Clear milestones. Shared accountability.",
    how1_t: "Launch",
    how1_p: "Kickoff, role discovery, and a scorecard we agree together.",
    how2_t: "Staging",
    how2_p: "Shortlist delivered with evidence and a clear next step.",
    how3_t: "Commit",
    how3_p: "Offer accepted. We stay close to reduce drop-offs.",
    how4_t: "Production",
    how4_p: "90 days of proven performance. This is where shared accountability matters.",

    // Business model
    bm_title: "Our Business Model",
    bm_lead: "Simple structure. Fees unlock only as measurable progress is delivered.",

    launch_fee_t: "Launch Fee",
    launch_fee_p: "High-complexity roles (Lead, Staff, Principal, Head). €2,000 Launch Fee.",
    launch_fee_p2: "Senior profiles. €2,000 Launch Fee. Launch Fee waived.",
    launch_support: "Secures your slot in our pipeline and activates the search.",

    success_fee_t: "20% Success Fee",
    success_fee_p: "20% of annual base salary. Paid through milestones: Staging, Commit, and Production. Each portion unlocks only when that milestone is achieved.",

    pipe_title: "Pipeline",
    pipe_lead: "Milestones and who owns what. Shared accountability.",

    pipe1_t: "1. Launch",
    pipe1_p: "Kickoff. Scorecard agreed. Search starts after approval.",

    pipe2_t: "2. Staging. 30%",
    pipe2_p: "30% of the 20% success fee. We deliver a shortlist of candidates, aligned with the agreed scorecard. Each includes a Shortlist Pack.",

    pipe3_t: "3. Commit. 30%",
    pipe3_p: "30% of the 20% success fee. Triggered when the candidate signs and accepts the offer.",

    pipe4_t: "4. Production. 40%",
    pipe4_p: "40% of the 20% success fee. Triggered after 90 days in role with proven performance. Shared accountability applies in practice.",

    // Talent
    talent_title: "Talent We Seek",
    talent_lead: "We’re clear on the profile we look for.",
    tb1: "5+ years of experience in your role",
    tb2: "Proficient English for team collaboration",
    tb3: "Availability to relocate to Europe (optional, strong plus)",
    tb4: "Clear communication and ownership",
    tb5: "Publicly verifiable work (e.g., GitHub/portfolio) and strong references",

    // Final cards
    final_open_t: "Hire a Dev",
    final_open_p: "Share your role and constraints. We’ll align scorecard and timeline.",

    final_dev_t: "Candidate Application",
    final_dev_p: "If you’re a senior dev, apply or refer a friend. We respond with next steps.",

    // Footer
    footer_links_t: "Links",
    footer_about: "About",
    footer_services: "Portfolio",
    footer_contact: "Book a Call",
    footer_addr_t: "Addresses",
    footer_articles_t: "Articles",
    footer_copy: "© 2026 EuroBrug. All rights reserved."
  },

  nl: {
    nav_services: "Portfolio",
    nav_talent: "Talent",
    nav_contact: "Contact",

    // Slogan (keep original, shown in header only)
    hero_kicker: "Bridging top-tier devs to Europe.",

    // Hero
    hero_h1: "Talent partners voor top-tier developers.",
    hero_sub: "We brengen senior developers naar techbedrijven in Nederland.",

    // CTAs
    cta_open_position: "Hire a Dev",
    cta_book_call: "Plan een gesprek",
    cta_apply: "Solliciteer",
    cta_refer: "Verwijs een vriend",

    // Services
    services_title: "Ons portfolio",
    services_lead: "Twee manieren om in te huren.",
    svc1_k: "",
    svc1_t: "Tech Boutique",
    svc1_p: "We combineren recruitment met direct search voor senior techrollen. Voor posities waar levering en betrouwbaarheid echt het verschil maken.",
    svc2_t: "Staff Augmentation",
    svc2_p: "Fulltime of parttime. Contracten vanaf 3 maanden. Optioneel: overstap naar een vaste aanstelling, met een flexibel niet-wervingsbeding.",
    role_cov_t: "Rolbereik",
    role_cov_p: "Software Engineering, Product, Data, DevOps.",
    verticals_t: "Sectoren",
    verticals_p: "Fintech, B2B SaaS, Consulting en professionele dienstverlening.",

    // How it works
    how_title: "Hoe we werken",
    how_lead: "Duidelijke mijlpalen. Gedeelde verantwoordelijkheid.",
    how1_t: "Launch",
    how1_p: "Kickoff, rolverkenning en een scorecard die we samen definiëren.",
    how2_t: "Staging",
    how2_p: "Een shortlist met bewijs en een heldere volgende stap.",
    how3_t: "Commit",
    how3_p: "Het aanbod is geaccepteerd. We blijven dichtbij om uitval te verminderen.",
    how4_t: "Production",
    how4_p: "90 dagen bewezen performance. Hier telt gedeelde verantwoordelijkheid.",

    // Business model
    bm_title: "Ons businessmodel",
    bm_lead: "Eenvoudige structuur. De fee wordt pas verschuldigd bij aantoonbare voortgang.",

    launch_fee_t: "Launch Fee",
    launch_fee_p: "High-complexity rollen (Lead, Staff, Principal, Head). €2.000 launch fee.",
    launch_fee_p2: "Senior profielen. €2.000 launch fee. Launch fee kwijtgescholden.",
    launch_support: "Reserveert je plek in onze pipeline en activeert de search.",

    success_fee_t: "20% Success Fee",
    success_fee_p: "20% van het jaarlijkse basissalaris. Betaald via milestones: Staging, Commit en Production. Elk deel wordt pas verschuldigd wanneer de milestone is behaald.",

    pipe_title: "Pipeline",
    pipe_lead: "Mijlpalen en eigenaarschap. Gedeelde verantwoordelijkheid.",

    pipe1_t: "1. Launch",
    pipe1_p: "Kickoff. Scorecard akkoord. Search start na goedkeuring.",

    pipe2_t: "2. Staging. 30%",
    pipe2_p: "30% van de 20% success fee. We leveren een shortlist van kandidaten, afgestemd op de afgesproken scorecard. Elke kandidaat wordt geleverd met een Shortlist Pack.",

    pipe3_t: "3. Commit. 30%",
    pipe3_p: "30% van de 20% success fee. Wordt geactiveerd wanneer de kandidaat het aanbod tekent en accepteert.",

    pipe4_t: "4. Production. 40%",
    pipe4_p: "40% van de 20% success fee. Wordt geactiveerd na 90 dagen in de rol met bewezen performance. Gedeelde verantwoordelijkheid geldt in de praktijk.",

    // Talent (title kept in English as aligned)
    talent_title: "Talent We Seek",
    talent_lead: "We zijn duidelijk over het profiel dat we zoeken.",
    tb1: "5+ jaar ervaring in je rol",
    tb2: "Goed Engels voor samenwerking in het team",
    tb3: "Bereidheid om naar Europa te verhuizen (optioneel, sterke plus)",
    tb4: "Heldere communicatie en eigenaarschap",
    tb5: "Publiek verifieerbaar werk (bijv. GitHub/portfolio) en sterke referenties",

    // Final cards
    final_open_t: "Hire a Dev",
    final_open_p: "Deel je rol en randvoorwaarden. We stemmen scorecard en planning af.",

    final_dev_t: "Aanmelding voor kandidaten",
    final_dev_p: "Ben je een senior developer. Solliciteer of verwijs een vriend. We sturen je de volgende stappen.",

    // Footer
    footer_links_t: "Links",
    footer_about: "Over",
    footer_services: "Portfolio",
    footer_contact: "Plan een gesprek",
    footer_addr_t: "Adressen",
    footer_articles_t: "Articles",
    footer_copy: "© 2026 EuroBrug. Alle rechten voorbehouden."
  }
};

function applyLang(lang){
  const dict = I18N[lang] || I18N.en;
  document.documentElement.setAttribute("lang", lang === "nl" ? "nl" : "en");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(!key) return;
    const val = dict[key];
    if(typeof val === "string") el.textContent = val;
  });

  const tgl = document.getElementById("lang-toggle");
  if(tgl){
    tgl.setAttribute("data-state", lang === "nl" ? "nl" : "en");
    tgl.setAttribute("aria-label", lang === "nl" ? "Language: Dutch" : "Language: English");
  }
}

function setLang(lang){
  localStorage.setItem("eurobrug_lang", lang);
  applyLang(lang);
}

function initLang(){
  const saved = localStorage.getItem("eurobrug_lang");
  const lang = saved === "nl" ? "nl" : "en";
  applyLang(lang);

  const tgl = document.getElementById("lang-toggle");
  if(tgl){
    tgl.addEventListener("click", () => {
      const current = localStorage.getItem("eurobrug_lang") === "nl" ? "nl" : "en";
      setLang(current === "en" ? "nl" : "en");
    });
  }
}

document.addEventListener("DOMContentLoaded", initLang);
