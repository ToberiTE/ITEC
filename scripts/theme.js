const root = document.documentElement;
const themeBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-toggle-icon");
const savedTheme = localStorage.getItem("isDarkTheme");
let isDarkTheme = false;
if (savedTheme !== null) {
  isDarkTheme = savedTheme === "true";
  if (isDarkTheme) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}
function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  if (isDarkTheme) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
  localStorage.setItem("isDarkTheme", isDarkTheme);
}
function setDarkTheme() {
  root.style.setProperty("--text-primary", "#fffaf0");
  root.style.setProperty("--bg-primary", "#151515");
  root.style.setProperty("--invert-svg", "1");
  root.style.setProperty("--thumbnail-gradient-1", "#0b0b0b");
  root.style.setProperty("--thumbnail-gradient-2", "#fffaf0");
  root.style.setProperty("--background-image", "url(./assets/m_dark.png)");
  themeIcon.src = "./assets/moon.svg";
  currentLang === "sv"
    ? (themeBtn.title = "Växla till ljust tema")
    : (themeBtn.title = "Switch to light theme");
}
function setLightTheme() {
  root.style.setProperty("--text-primary", "#0B0B0B");
  root.style.setProperty("--bg-primary", "#fffaf0");
  root.style.setProperty("--invert-svg", "0");
  root.style.setProperty("--svg-shadow", "0 2px 2px");
  root.style.setProperty("--thumbnail-gradient-1", "#fffaf0");
  root.style.setProperty("--thumbnail-gradient-2", "#0b0b0b");
  root.style.setProperty("--background-image", "url(./assets/m_light.png)");
  themeIcon.src = "./assets/sun.svg";
  currentLang === "sv"
    ? (themeBtn.title = "Växla till mörkt tema")
    : (themeBtn.title = "Switch to dark theme");
}
themeBtn.onclick = function () {
  toggleTheme();
};
