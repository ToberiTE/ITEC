var date = new Date();
var year = date.getFullYear();

document.getElementById("date").innerHTML = year;

const navBtn = document.getElementById("toggleNavButton");
const nav = document.getElementById("nav");

navBtn.onclick = function (e) {
  e.preventDefault();
  const currentState = navBtn.getAttribute("data-state");
  if (!currentState || currentState === "closed") {
    navBtn.setAttribute("data-state", "open");
    navBtn.setAttribute("aria-expanded", "true");
    nav.setAttribute("aria-expanded", "true");
  } else {
    navBtn.setAttribute("data-state", "closed");
    navBtn.setAttribute("aria-expanded", "false");
    nav.setAttribute("aria-expanded", "false");
  }
};
