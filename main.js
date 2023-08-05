import "./css/style.css";
import { sortItems } from "./js/general";
import { types$, categories$ } from "./js/base";

document.querySelector("#app").innerHTML = `
  <div class="content">
    <div class="typesCard">
      <h2>Typy</h2>
      <div id="typesList"></div>
    </div>
    <div class="categoriesCards">
      <h2>Kategorie</h2>
      <div id="categories"></div>
    </div>
  </div>
`;

const typesList = document.getElementById("typesList");
const categoriesList = document.getElementById("categories");

let typesHTML = "";
let categoriesHTML = "";

Promise.all([types$, categories$]).then((values) => {
  values[0].sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  values[1].sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  postTypes(values[0]);
  postCategory(values[1]);
  console.log(values[0]);
  console.log(values[1]);
});

function postTypes(types) {
  types.forEach((type) => {
    typesHTML = `<button class="type-button">${type.name}</button>`;
    typesList.innerHTML += typesHTML;
  });
}

function postCategory(categories) {
  categories.forEach((category) => {
    categoriesHTML = `<div class="categoryCard">
    <img src="${category.iconUrl}" alt="${category.name}" width="64" height="64">
    <p>${category.name}</p>
    </div>`;
    categoriesList.innerHTML += categoriesHTML;
  });
}

// const allButtons = document.querySelectorAll(".type-button");
// console.log(allButtons);

// allButtons.forEach(function (currentButton) {
//   console.log(currentButton);

//   currentButton.addEventListener("click", function () {});
// });

// setupCounter(document.querySelector('#counter'))

{
  /* <a href="https://vitejs.dev" target="_blank">
<img src="${viteLogo}" class="logo" alt="Vite logo" />
</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
<img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
</a>
<h1>Hello Vite!</h1>
<div class="card">
<button id="counter" type="button"></button>
</div>
<p class="read-the-docs">
Click on the Vite logo to learn more
</p> */
}
