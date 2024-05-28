var date = new Date();
var year = date.getFullYear();
document.getElementById("date").innerHTML = year;
const scroller = document.querySelector(".scroller");
const thumbnails = document.querySelectorAll(".thumbnail");
const presentation = document.querySelector(".presentation");
if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
  runAnimations();
}
function runAnimations() {
  scroller.setAttribute("data-animated", true);
  const scrollerInner = scroller.querySelector(".scroller-inner");
  const scrollerContent = Array.from(scrollerInner.children);
  scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute("aria-hidden", true);
    scrollerInner.appendChild(duplicatedItem);
  });
}
let prevEl = null;
thumbnails.forEach((thumbnail) => {
  const classList = Array.from(thumbnail.classList);
  const targetEl = classList.find((cls) =>
    ["a", "b", "c", "d", "e"].includes(cls)
  );
  thumbnail.addEventListener("click", function () {
    const currentThumbnail = document.querySelector(`.thumbnail.${targetEl}`);
    const currentText = document.querySelector(`.card-text.${targetEl}`);
    const currentImg = document.querySelector(`.card-img.${targetEl}`);
    const prevThumbnail = document.querySelector(`.thumbnail.${prevEl}`);
    const prevText = document.querySelector(`.card-text.${prevEl}`);
    const prevImg = document.querySelector(`.card-img.${prevEl}`);
    if (targetEl) {
      if (targetEl === prevEl) {
        if (currentThumbnail) {
          currentThumbnail.classList.remove("thumbnail-active");
        }
        if (currentText) {
          currentText.classList.remove("animate-card-text-enter");
          currentText.classList.add("animate-card-text-leave");
        }
        if (currentImg) {
          currentImg.classList.remove("animate-card-img-enter");
          currentImg.classList.add("animate-card-img-leave");
        }
        presentation.classList.remove("animate-presentation-leave");
        presentation.classList.add("animate-presentation-enter");
        prevEl = null;
      } else {
        if (prevEl) {
          if (prevThumbnail) {
            prevThumbnail.classList.remove("thumbnail-active");
          }
          if (prevText) {
            prevText.classList.remove("animate-card-text-enter");
            prevText.classList.add("animate-card-text-leave");
          }
          if (prevImg) {
            prevImg.classList.remove("animate-card-img-enter");
            prevImg.classList.add("animate-card-img-leave");
          }
        }
        presentation.classList.remove("animate-presentation-enter");
        presentation.classList.add("animate-presentation-leave");
        setTimeout(() => {
          if (currentThumbnail) {
            currentThumbnail.classList.add("thumbnail-active");
          }
          if (currentText) {
            currentText.classList.remove("animate-card-text-leave");
            currentText.classList.add("animate-card-text-enter");
          }
          if (currentImg) {
            currentImg.classList.remove("animate-card-img-leave");
            currentImg.classList.add("animate-card-img-enter");
          }
        }, 500);
        prevEl = targetEl;
      }
    }
  });
});
