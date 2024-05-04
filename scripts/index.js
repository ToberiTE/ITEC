var date = new Date();
var year = date.getFullYear();

document.getElementById("date").innerHTML = year;

const navBtn = document.getElementById("nav-toggle");
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

const scroller = document.querySelector(".scroller");

if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
  runAnimation();
}

function runAnimation() {
  scroller.setAttribute("data-animated", true);

  const scrollerInner = scroller.querySelector(".scroller-inner");
  const scrollerContent = Array.from(scrollerInner.children);

  scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute("aria-hidden", true);
    scrollerInner.appendChild(duplicatedItem);
  });
}
