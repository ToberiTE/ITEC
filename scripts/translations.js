const translations = {
  en: {
    s: "Our services",

    scroller_li_1: "IT Consulting",
    scroller_li_2: "Software Development",
    scroller_li_3: "Infrastructure",
    scroller_li_4: "Cybersecurity",
    scroller_li_5: "Documentation",

    card_1_h3: "Development",
    card_1_li_1: "Software",
    card_1_li_2: "Systems",
    card_1_li_3: "Integrations",
    card_1_li_4: "Webapplications",
    card_1_li_5: "Product pages",
    card_1_li_6: "Company websites",

    card_2_li_1: "Implementation",
    card_2_li_2: "Management",
    card_2_li_3: "Proof of concept",
    card_2_li_4: "Consultation",
    card_2_li_5: "Training",

    card_3_h3: "Infrastructure",
    card_3_li_1: "Cloud infrastructure",
    card_3_li_2: "On-premises",
    card_3_li_3: "Cost management",
    card_3_li_4: "Proof of concept",
    card_3_li_5: "Consultation",

    card_4_h3: "Cybersecurity",
    card_4_li_1: "Cloud security",
    card_4_li_2: "Secure infrastructure",
    card_4_li_3: "Monitoring",

    card_5_h3: "Documentation",
    card_5_li_1: "Technical manuals",
    card_5_li_2: "Software manuals",
    card_5_li_3: "API / integration manuals",
    card_5_li_4: "User manuals",
    card_5_li_5: "Consultation",
  },
  sv: {
    s: "Våra tjänster",

    scroller_li_1: "IT Konsultation",
    scroller_li_2: "Systemutveckling",
    scroller_li_3: "Infrastruktur",
    scroller_li_4: "Cybersäkerhet",
    scroller_li_5: "Dokumentation",

    card_1_h3: "Utveckling",
    card_1_li_1: "Mjukvara",
    card_1_li_2: "System",
    card_1_li_3: "Integrationer",
    card_1_li_4: "Webbapplikationer",
    card_1_li_5: "Produktsidor",
    card_1_li_6: "Företagswebbsidor",

    card_2_li_1: "Implementering",
    card_2_li_2: "Förvaltning",
    card_2_li_3: "Bevis på koncept",
    card_2_li_4: "Konsultation",
    card_2_li_5: "Utbildning",

    card_3_h3: "Infrastruktur",
    card_3_li_1: "Molninfrastruktur",
    card_3_li_2: "On-premises",
    card_3_li_3: "Kostnadshantering",
    card_3_li_4: "Bevis på koncept",
    card_3_li_5: "Konsultation",

    card_4_h3: "Cybersäkerhet",
    card_4_li_1: "Molnsäkerhet",
    card_4_li_2: "Säker infrastruktur",
    card_4_li_3: "Övervakning",

    card_5_h3: "Dokumentation",
    card_5_li_1: "Tekniska manualer",
    card_5_li_2: "Programvarumanualer",
    card_5_li_3: "API / integrationsmanualer",
    card_5_li_4: "Användarmanualer",
    card_5_li_5: "Konsultation",
  },
};

let currentLang = document.querySelector("html").lang;

const langBtn = document.getElementById("lang-toggle");
const langSpan = document.getElementById("lang-span");
const themeSpan = document.getElementById("theme-span");
langSpan.textContent = currentLang.toLocaleUpperCase();
themeSpan.textContent = currentLang === "en" ? "Theme" : "Tema";

langBtn.onclick = function () {
  currentLang = currentLang === "en" ? "sv" : "en";
  document.querySelector("html").lang = currentLang;
  translatePage(currentLang);
  langBtn.title = currentLang === "en" ? "Language" : "Språk";
  langSpan.textContent = currentLang.toLocaleUpperCase();
  themeSpan.textContent = currentLang === "en" ? "Theme" : "Tema";

  if (!isDarkTheme) {
    themeBtn.title =
      currentLang === "sv" ? "Växla till mörkt tema" : "Switch to dark theme";
  } else {
    themeBtn.title =
      currentLang === "sv" ? "Växla till ljust tema" : "Switch to light theme";
  }
};

function translatePage(lang) {
  document.querySelectorAll("[data-t]").forEach((el) => {
    const key = el.getAttribute("data-t");
    el.innerHTML = translations[lang][key];
  });
}
