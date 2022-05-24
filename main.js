// BURGER MENU
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

// PRODUCT VIEW PAGE //

// toggle & collapsible //
function toggleArtistInfo() {
  var info = document.querySelector(".toggle-info");
  var icon = document.querySelector("img.product-arrow");
  if (info.style.display === "block") {
    info.style.display = "none";
    icon.src = "svg/arrowdown.svg";
  } else {
    info.style.display = "block";
    icon.src = "svg/arrowleft.svg";
  }
}
const arrowToggleArtist = document.querySelector(".toggle-info-artist");
arrowToggleArtist.addEventListener("click", toggleArtistInfo);
