const slides = document.querySelectorAll(".slide");
const containerBackground = document.querySelector("body");
for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
    const attributeName = slide.getAttribute("style").slice(29, -10);
    containerBackground.style.backgroundImage = attributeName;
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
