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
// TRANSPARENT HEADER
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

// HERO CAROUSEL

let slidePosition = 0;
const slides = document.getElementsByClassName("carousel-item");
const totalSlides = slides.length;
const timer = setInterval("moveToNextSlide()", 3000);

document.getElementById("next").addEventListener("click", function () {
  moveToNextSlide();
  stop();
  {
    clearInterval(timer);
  }
});

document.getElementById("prev").addEventListener("click", function () {
  moveToPrevSlide();
  stop();
  {
    clearInterval(timer);
  }
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("visible");
    slide.classList.add("hidden");
  }

  slides[slidePosition].classList.add("visible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}
