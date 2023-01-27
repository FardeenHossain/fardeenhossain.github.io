const headerLogoConatiner = document.querySelector(".header__logo-container");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const hamMenuCloseBtn = document.querySelector(".header__main-ham-menu-close");
const smallMenu = document.querySelector(".header__sm-menu");
const smallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

headerLogoConatiner.addEventListener("click", () => {
  location.href = "index.html";
});

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("header__sm-menu--active")) {
    smallMenu.classList.remove("header__sm-menu--active");
  } else {
    smallMenu.classList.add("header__sm-menu--active");
  }
  if (headerHamMenuBtn.classList.contains("d-none")) {
    headerHamMenuBtn.classList.remove("d-none");
    hamMenuCloseBtn.classList.add("d-none");
  } else {
    headerHamMenuBtn.classList.add("d-none");
    hamMenuCloseBtn.classList.remove("d-none");
  }
});

for (let i = 0; i < smallMenuLinks.length; i++) {
  smallMenuLinks[i].addEventListener("click", () => {
    smallMenu.classList.remove("header__sm-menu--active");
    headerHamMenuBtn.classList.remove("d-none");
    hamMenuCloseBtn.classList.add("d-none");
  });
}
