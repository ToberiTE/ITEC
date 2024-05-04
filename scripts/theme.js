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
  root.style.setProperty("--bg-secondary", "#0B0B0B");
  root.style.setProperty(
    "--link-border",
    `linear-gradient(
                      to right,
                      #151515,
                      #fffaf0,
                      #151515
                    )`
  );
  root.style.setProperty("--boxshadow", "rgba(0, 0, 0, 0.5)");
  root.style.setProperty("--invert-svg", "1");

  effect.setOptions({
    skyColor: 0x0,
    cloudColor: 0x0,
    cloudShadowColor: 0x0,
    sunGlareColor: 0xffffff,
    sunlightColor: 0x414141,
  });

  themeIcon.src = "./assets/moon.svg";
  currentLang === "sv"
    ? (themeBtn.title = "Växla till ljust tema")
    : (themeBtn.title = "Switch to light theme");
}

function setLightTheme() {
  root.style.setProperty("--text-primary", "#0B0B0B");
  root.style.setProperty("--bg-primary", "#fffaf0");
  root.style.setProperty("--bg-secondary", "#e6eedf");
  root.style.setProperty(
    "--link-border",
    `linear-gradient(
            to right,
            #fffaf0,
            #0b0b0b,
            #fffaf0
          )`
  );
  root.style.setProperty("--boxshadow", "rgba(11, 11, 11, 0.2)");
  root.style.setProperty("--invert-svg", "0");
  root.style.setProperty("--svg-shadow", "0 5px 5px");

  effect.setOptions({
    skyColor: 0xcfcfcf,
    cloudColor: 0xdcdcff,
    cloudShadowColor: 0x141414,
    sunGlareColor: 0x0,
    sunlightColor: 0x0,
  });

  themeIcon.src = "./assets/sun.svg";
  currentLang === "sv"
    ? (themeBtn.title = "Växla till mörkt tema")
    : (themeBtn.title = "Switch to dark theme");
}

themeBtn.onclick = function (e) {
  e.preventDefault();
  toggleTheme();
};
