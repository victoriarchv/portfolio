// js/menu.js

export function initMenu() {
  const navIcon = document.querySelector("#nav_icon");
  const navMenu = document.querySelector("#nav_menu");
  const navBack = document.querySelector("#nav_back");

  if (!navIcon || !navMenu || !navBack) return;

  navIcon.addEventListener("click", () => {
    navIcon.classList.toggle("nav_show");
    navMenu.classList.toggle("hidden");
    navBack.classList.toggle("hidden");
  });

  navMenu.addEventListener("click", () => {
    navIcon.classList.toggle("nav_show");
    navMenu.classList.toggle("hidden");
    navBack.classList.toggle("hidden");
  })
}