const mobileMenu = document.querySelector("#mobile-menu");
const navbarMenu = document.querySelector(".navbar__menu");
mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("is-active");
  navbarMenu.classList.toggle("active");
});
