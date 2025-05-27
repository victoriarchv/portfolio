// js/scrollHorizontal.js

export function initScrollHorizontal() {
  const stickySections = document.querySelectorAll(".sticky");

  window.addEventListener("scroll", () => {
    stickySections.forEach(section => {
      transformSection(section);
    });
  });

  // Trigger once on load
  window.dispatchEvent(new Event('scroll'));
}

function transformSection(section) {
  const parent = section.parentElement;
  if (!parent) return;

  const offsetTop = parent.offsetTop;
  const scrollSection = section.querySelector(".scroll_section");
  if (!scrollSection) return;


  let maxW = 500;
  if (window.innerWidth > 768) {
    maxW = 310
  }

  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = Math.max(0, Math.min(maxW, percentage)); // Clamp
  scrollSection.style.transform = `translateX(-${percentage}vw)`;
}