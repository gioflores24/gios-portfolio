// select DOM items

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const portrait = document.querySelector(".portrait");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;
menuButton.addEventListener("click", () => {
  if (!showMenu) {
    menuButton.classList.add("close");
    menu.classList.add("show");
    portrait.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    // Set menu state

    menuButton.classList.remove("close");
    menu.classList.remove("show");
    portrait.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
});
