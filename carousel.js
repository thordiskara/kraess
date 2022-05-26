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
