// SPLIDE CAROUSEL
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    type: "loop",
    perPage: 2,
    perMove: 1,
    breakpoints: {
      950: {
        perPage: 3,
      },
      815: {
        perPage: 2,
        heightRatio: 0.5,
      },
      600: {
        perPage: 1,
        heightRatio: 0.7,
      },
    },
    cover: true,
    heightRatio: 0.5,
  }).mount();
});

const header = document.querySelector("header#landing-header");
const logo = document.querySelector("img.logo");
const shopNav = document.querySelector(".nav-first-options");
const desNav = document.querySelector(".nav-designer");
const inspoNav = document.querySelector(".nav-inspo");
const aboutNav = document.querySelector(".nav-about");
const bag = document.querySelector(".bagIcon");
const heart = document.querySelector(".heartIcon");
const user = document.querySelector(".userIcon");
const search = document.querySelector(".searchIcon");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll >= 50) {
    header.style.background = "white";
    logo.src = "svg-logo/logo-black.svg";
    shopNav.style.color = "black";
    desNav.style.color = "black";
    inspoNav.style.color = "black";
    aboutNav.style.color = "black";
    bag.src = "svg/bag.svg";
    heart.src = "svg/heart.svg";
    user.src = "svg/user.svg";
    search.src = "svg/search.svg";
  }
});
