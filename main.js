// BURGER MENU
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

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
      .setAttribute("href", `productView.html?id=${product.id}`);
    copy.querySelector(".price span").textContent = product.price;
    copy.querySelector(".img").src =
      product._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.medium_large.source_url;
    parentElement.appendChild(copy);
  });
}

// function showSingleProduct(singleproduct) {
//   console.log(singlebag);
//   document.querySelector(".bagName").textContent = singlebag.bagname;
//   document.querySelector(".bagPrice span").textContent = singlebag.price;

//   document.querySelector(".description").textContent = singlebag.description;
//   document.querySelector(".bagColor").textContent = singlebag.color;
//   document.querySelector(".toggleInner .bagMaterial span").textContent =
//     singlebag.material;
//   document.querySelector(".toggleInner .bagDimensions span").textContent =
//     singlebag.dimensions;
//   document.querySelector(".toggleInner .bagStrap span").textContent =
//     singlebag.straplength;
//   document.querySelector(".bagImg").src =
//     singlebag._embedded[
//       "wp:featuredmedia"
//     ][0].media_details.sizes.large.source_url;
// }
