const translations = {
  se: {},
  en: {},
};

let currentLang = document.querySelector("html").lang;

const langBtn = document.getElementById("switchLangBtn");
const langSpan = document.getElementById("langSpan");
const themeSpan = document.getElementById("themeSpan");
langSpan.textContent = currentLang.toLocaleUpperCase();
themeSpan.textContent = currentLang === "en" ? "Theme" : "Tema";

langBtn.onclick = function (e) {
  e.preventDefault();
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
