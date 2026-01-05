/* Simple i18n. Stores language in localStorage. */
const I18N = {
  en: {
    nav_services: "Services",
    nav_talent: "Talent",
    nav_contact: "Contact",
    hero_kicker: "Bridging top-tier devs to Europe.",
    hero_h1: "Experienced developers who accelerate your results.",
    hero_sub: "Senior roles for fintech and B2B SaaS teams across Europe.",
    cta_open_position: "Open a Position",
    cta_book_call: "Book a Call",
    services_title: "Our Services",
    services_lead: "Two ways to hire. Built for senior roles where delivery and reliability matter.",
    svc1_k: "Tech Boutique",
    svc1_t: "Tech Boutique",
    svc1_p: "We deliver both recruitment and hunting for senior-plus tech roles. Built for roles where delivery and reliability matter.",
    svc2_t: "Staff Augmentation",
    svc2_p: "Full-time or part-time. Contracts from 3 months. Optional conversion to hire after an agreed period, with a flexible non-solicitation clause.",
    role_cov_t: "Role Coverage",
    role_cov_p: "Software Engineering, Product, Data, DevOps.",
    verticals_t: "Verticals",
    verticals_p: "Fintech, B2B SaaS, Consulting and Professional Services.",
    how_title: "How It Works",
    how_lead: "Clear milestones. Shared Accountability.",
    how1_t: "Launch",
    how1_p: "Kickoff, role discovery, and a scorecard we agree together.",
    how2_t: "Staging",
    how2_p: "Shortlist delivered with evidence and a clear next step.",
    how3_t: "Commit",
    how3_p: "Offer accepted. We stay close to reduce drop-offs.",
    how4_t: "Production",
    how4_p: "90 days of proven performance. This is where Shared Accountability matters.",
    bm_title: "Our Business Model",
    bm_lead: "Simple structure. The fee unlocks only as real progress is delivered.",
    launch_fee_t: "Launch Fee",
    launch_a: "High-complexity roles (Lead, Staff, Principal, Head)",
    launch_a_price: "€2,000 Launch Fee",
    launch_b: "Senior profiles",
    launch_b_old: "€2,000 Launch Fee",
    launch_b_new: "Launch Fee waived",
    launch_support: "Secures your slot in our pipeline and activates the search.",
    success_fee_t: "20% Success Fee",
    success_fee_p: "20% of annual base salary. Paid through milestones: Staging, Commit, and Production. The fee unlocks only as progress is delivered.",
    pipe_title: "Pipeline",
    pipe_lead: "Milestones and who owns what. Shared Accountability.",
    pipe1_t: "1. Launch",
    pipe1_p: "Kickoff. Scorecard agreed. Search starts after approval.",
    pipe2_t: "2. Staging. 30%",
    pipe2_p: "30% of the 20% success fee. We deliver three candidates with scorecard results of at least 70%, each with a Shortlist Pack.",
    pipe3_t: "3. Commit. 30%",
    pipe3_p: "30% of the 20% success fee. Triggered when the candidate signs and accepts the offer.",
    pipe4_t: "4. Production. 40%",
    pipe4_p: "40% of the 20% success fee. Triggered after 90 days in role with proven performance. Shared Accountability applies in practice.",
    talent_title: "Talent We Seek",
    talent_lead: "We’re clear on the profile we look for.",
    tb1: "5+ years of experience in your role",
    tb2: "Proficient English for team collaboration",
    tb3: "Availability to relocate to Europe (optional, strong plus)",
    tb4: "Clear communication and ownership",
    tb5: "Publicly verifiable work (e.g., GitHub/portfolio) and strong references",
    final_open_t: "Open a Position",
    final_open_p: "Share your role and constraints. We’ll align scorecard and timeline.",
    final_dev_t: "Candidate Application",
    final_dev_p: "If you’re a senior dev, apply or refer a friend. We respond with next steps.",
    cta_apply: "Apply",
    cta_refer: "Refer a Friend",
    footer_links_t: "Links",
    footer_about: "About",
    footer_services: "Services",
    footer_contact: "Book a Call",
    footer_addr_t: "Addresses",
    footer_articles_t: "Articles",
    footer_copy: "© EuroBrug. All rights reserved."
  },
  nl: {
    nav_services: "Diensten",
    nav_talent: "Talent",
    nav_contact: "Contact",
    hero_kicker: "Bridging top-tier devs to Europe.",
    hero_h1: "Ervaren developers die je resultaten versnellen.",
    hero_sub: "Senior rollen voor fintech en B2B SaaS teams in Europa.",
    cta_open_position: "Open een Vacature",
    cta_book_call: "Plan een Call",
    services_title: "Onze Diensten",
    services_lead: "Twee manieren om te huren. Gebouwd voor senior rollen waar betrouwbaarheid telt.",
    svc1_k: "Tech Boutique",
    svc1_t: "Tech Boutique",
    svc1_p: "Wij leveren zowel recruitment als hunting voor senior tech rollen. Voor posities waar delivery en betrouwbaarheid echt tellen.",
    svc2_t: "Staff Augmentation",
    svc2_p: "Full-time of part-time. Contracten vanaf 3 maanden. Optionele conversie naar vaste aanwerving, met een flexibele non-solicitation afspraak.",
    role_cov_t: "Rolbereik",
    role_cov_p: "Software Engineering, Product, Data, DevOps.",
    verticals_t: "Verticals",
    verticals_p: "Fintech, B2B SaaS, Consulting en Professional Services.",
    how_title: "Hoe We Werken",
    how_lead: "Duidelijke mijlpalen. Gedeelde verantwoordelijkheid.",
    how1_t: "Launch",
    how1_p: "Kickoff, rolverkenning en een scorecard die we samen definiëren.",
    how2_t: "Staging",
    how2_p: "Shortlist met bewijs en een heldere volgende stap.",
    how3_t: "Commit",
    how3_p: "Aanbod geaccepteerd. We blijven dichtbij om uitval te verminderen.",
    how4_t: "Production",
    how4_p: "90 dagen bewezen performance. Hier telt gedeelde verantwoordelijkheid.",
    bm_title: "Ons Business Model",
    bm_lead: "Eenvoudige structuur. De fee komt pas vrij bij echte progressie.",
    launch_fee_t: "Launch Fee",
    launch_a: "Hoge complexiteit (Lead, Staff, Principal, Head)",
    launch_a_price: "€2.000 Launch Fee",
    launch_b: "Senior profielen",
    launch_b_old: "€2.000 Launch Fee",
    launch_b_new: "Launch Fee vervalt",
    launch_support: "Reserveert je plek in onze pipeline en start de search.",
    success_fee_t: "20% Success Fee",
    success_fee_p: "20% van het jaarlijkse basissalaris. Betaald via milestones: Staging, Commit en Production. De fee komt alleen vrij bij voortgang.",
    pipe_title: "Pipeline",
    pipe_lead: "Mijlpalen en ownership. Gedeelde verantwoordelijkheid.",
    pipe1_t: "1. Launch",
    pipe1_p: "Kickoff. Scorecard akkoord. Search start na goedkeuring.",
    pipe2_t: "2. Staging. 30%",
    pipe2_p: "30% van de 20% success fee. We leveren drie kandidaten met minimaal 70% scorecard, elk met een Shortlist Pack.",
    pipe3_t: "3. Commit. 30%",
    pipe3_p: "30% van de 20% success fee. Start wanneer de kandidaat het aanbod tekent en accepteert.",
    pipe4_t: "4. Production. 40%",
    pipe4_p: "40% van de 20% success fee. Na 90 dagen in de rol met bewezen performance. Gedeelde verantwoordelijkheid in de praktijk.",
    talent_title: "Talent We Seek",
    talent_lead: "We zijn duidelijk over het profiel dat we zoeken.",
    tb1: "5+ jaar ervaring in je rol",
    tb2: "Goed Engels voor samenwerking in het team",
    tb3: "Bereidheid om naar Europa te verhuizen (optioneel, sterke plus)",
    tb4: "Heldere communicatie en ownership",
    tb5: "Publiek verifieerbaar werk (bijv. GitHub/portfolio) en sterke referenties",
    final_open_t: "Open een Vacature",
    final_open_p: "Deel je rol en randvoorwaarden. We stemmen scorecard en planning af.",
    final_dev_t: "Kandidaat Aanmelding",
    final_dev_p: "Ben je senior dev. Solliciteer of verwijs een vriend. We sturen de volgende stappen.",
    cta_apply: "Solliciteer",
    cta_refer: "Verwijs een Vriend",
    footer_links_t: "Links",
    footer_about: "Over",
    footer_services: "Diensten",
    footer_contact: "Plan een Call",
    footer_addr_t: "Adressen",
    footer_articles_t: "Articles",
    footer_copy: "© EuroBrug. Alle rechten voorbehouden."
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
