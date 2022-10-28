// MOBILE NAV
const menuIcon = document.querySelectorAll(".icon");
const navLinks = document.querySelector(".nav-links");

for (i = 0; i < menuIcon.length; i++) {
  menuIcon[i].addEventListener("click", () => {
    for (i = 0; i < menuIcon.length; i++) {
      menuIcon[i].classList.toggle("hidden");
    }
    navLinks.classList.toggle("nav-open");
  });
}
