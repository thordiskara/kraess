// BURGER MENU
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

// SUBMENU - NOT WORKING

// var arrow = document.querySelectorAll(".nav-item .arrow");
// var i;

// for (i = 0; i < arrow.length; i++) {
//   console.log("Blaaaa");
//   arrow[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var subinfo = document.querySelector(".submenu");
//     var icon = document.querySelector(".nav-item .arrow");
//     if (subinfo.style.display === "flex") {
//       subinfo.style.display = "none";
//       icon.src = "svg/arrowdown.svg";
//     } else {
//       subinfo.style.display = "flex";
//       icon.src = "svg/arrowleft.svg";
//     }
//   });
// }

let arrowToggle = document.querySelectorAll(".nav-item .arrow");

arrowToggle.forEach(toggleAll);

function toggleAll(arrowsDown) {
  arrowsDown.addEventListener("click", () => {
    console.log("Blaaaa");
    // this.classList.toggle("active");
    var subMenu = document.querySelector(".submenu");
    var arrow = document.querySelector(".nav-item .arrow");
    if (subMenu.style.display === "flex") {
      subMenu.style.display = "none";
      arrow.src = "svg/arrowright.svg";
    } else {
      subMenu.style.display = "flex";
      arrow.src = "svg/arrowdown.svg";
    }
  });
}

/* FEATURE DROP DOWN */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var filter, ul, li, a, i;
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
}

// PRODUCT LIST & PRODUCT VIEW
window.addEventListener("DOMContentLoaded", init);

function init(event) {
  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");
  let url = "https://thordiskara.com/wp_kraess/wp-json/wp/v2/product";

  if (id) {
    url += `/${id}`;
  }

  getData(url + "?_embed");

  async function getData(fetchurl) {
    console.log(fetchurl);
    let result = await fetch(fetchurl);
    if (id) {
      showSingleProduct(await result.json());
    } else {
      showProducts(await result.json());
    }
  }
}

function showProducts(productArray) {
  console.log(productArray);
  const template = document.querySelector(".productlistTemplate").content;
  const parentElement = document.querySelector(".productlist");
  productArray.forEach((product) => {
    const copy = template.cloneNode(true);
    copy.querySelector(".name").textContent = product.title.rendered;
    copy.querySelector(".artist").textContent = product.designer;
    copy
      .querySelector("a")
      .setAttribute("href", `productview.html?id=${product.id}`);
    copy.querySelector(".price span").textContent = product.price;
    copy.querySelector(".image").src =
      product._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.medium_large.source_url;
    parentElement.appendChild(copy);
  });
}

function showSingleProduct(singleproduct) {
  console.log(singleproduct);
  document.querySelector("title.pageTitle").textContent =
    singleproduct.title.rendered;
  document.querySelector("h3.product-name").textContent =
    singleproduct.title.rendered;
  document.querySelector("a.product-name").textContent =
    singleproduct.title.rendered;
  document.querySelector(".price span").textContent = singleproduct.price;
  document.querySelector(".product-artist").textContent =
    singleproduct.designer;
  document.querySelector(".product-artist.desktop").textContent =
    singleproduct.designer;
  document.querySelector(".description").textContent =
    singleproduct.description;
  document.querySelector(".stock").textContent = singleproduct.stock;
  document.querySelector(".about-designer .artist-info").textContent =
    singleproduct.designer_info;
  document.querySelector(".toggle-info .artist-info").textContent =
    singleproduct.designer_info;
  document.querySelector(".coll-details").textContent = singleproduct.details;
  document.querySelector(".product-img").src =
    singleproduct._embedded[
      "wp:featuredmedia"
    ][0].media_details.sizes.medium_large.source_url;
}
// PRODUCT VIEW PAGE //

// TOGGLE & COLLAPSIBLE //
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

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/* PARALLAX */
const mediaQuery = window.matchMedia("(min-width: 1024px)");

if (mediaQuery.matches) {
  scrollDesk();
}

function scrollDesk() {
  window.addEventListener("scroll", function () {
    const target = this.document.querySelector(".product-left");
    console.log(window.pageYOffset);
    var scrolled = window.pageYOffset;
    var rate = scrolled * -0.5;
    target.style.transform = "translate3d(0px, " + rate + "px, 0px)";
  });
}
