window.addEventListener("DOMContentLoaded", init);

function init(event) {
  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");
  let url = "https://thordiskara.com/wp_kraess/wp-json/wp/v2/designer";

  if (id) {
    url += `/${id}`;
  }

  getData(url + "?_embed");

  async function getData(fetchurl) {
    console.log(fetchurl);
    let result = await fetch(fetchurl);
    if (id) {
      showSingleDesigner(await result.json());
    } else {
      showDesigners(await result.json());
    }
  }
}

// Designer list
function showDesigners(designers) {
  console.log(designers);
  const template = document.querySelector(".designerListTemp").content;
  const parentElement = document.querySelector(".designerListGrid");
  designers.forEach((product) => {
    const copy = template.cloneNode(true);

    copy.querySelector(".designerName").textContent = product.title.rendered;
    copy.querySelector(".designerContainer img").src = product.img1.guid;
    parentElement.appendChild(copy);
  });
}

// Single designer view

function showSingleDesigner(singledesigner) {
  console.log(singledesigner);
  document.querySelector(".designerName").textContent =
    singledesigner.title.rendered;
}
