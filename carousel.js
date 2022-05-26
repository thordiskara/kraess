// SPLIDE CAROUSEL
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    type: "loop",
    perPage: 2,
    perMove: 1,
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
    cover: true,
    heightRatio: 0.4,
  }).mount();
});
