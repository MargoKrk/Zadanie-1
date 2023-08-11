import "./css/style.css";
import { types$, categories$, TEST } from "./js/base";

document.querySelector("#app").innerHTML = `
  <div class="content">
    <div class="typesCard">
      <h2>Typy</h2>
      <div id="typesList">
      <button class="type-button selected" id="ALL_TYPES" data-filter="ALL">Wszystkie</button></div>
      <div class="checkbox-div">
      <input type="checkbox" id="vege-switch">
      <label for="vege">Vege only</label>
      </div>
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

Promise.all([types$, categories$]).then(([types, categories, test]) => {
  types.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  categories.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  postTypes(types);
  postCategory(categories);

  const allButtons = document.querySelectorAll(".type-button");
  const allCategoriesCard = document.querySelectorAll(".categoryCard");
  const allTypesButton = document.getElementById("ALL_TYPES");

  allButtons.forEach((currentButton) => {
    currentButton.addEventListener("click", (e) => {
      const filterTarget = e.target.dataset.filter;

      if (!document.querySelector(".selected")) {
        e.target.classList.add("selected");
      } else {
        document.querySelector(".selected").classList.remove("selected");
        e.target.classList.add("selected");
      }

      const filtredCategory = categories.filter((elem) => {
        return elem.type === filterTarget;
      });

      postCategory(filtredCategory);
    });
  });

  allTypesButton.addEventListener("click", () => {
    postCategory(categories);
  });

  allCategoriesCard.forEach((currentCategoryCard) => {
    currentCategoryCard.addEventListener("click", () => {
      fetch(TEST).then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(console.log("Brak informacji do wyświetlenia"));
      });
    });
  });

  const vegeSwitch = document.getElementById("vege-switch");

  vegeSwitch.addEventListener("click", function () {
    const vegeCategories = categories.filter((elem) => {
      return vegeSwitch.checked
        ? elem.type != "MEAT" && elem.type != "COOKED_MEATS"
        : true;
    });

    postCategory(vegeCategories);
  });
});

function postTypes(types) {
  types.forEach((type) => {
    typesHTML = `<button class="type-button" id="${type.id}" data-filter="${type.id}">${type.name}</button>`;
    typesList.innerHTML += typesHTML;
  });
}

function postCategory(categories) {
  categoriesList.innerHTML = "";

  categories.forEach((category) => {
    categoriesHTML = `<div class="categoryCard" data-filter="${category.type}">
    <img src="${category.iconUrl}" alt="${category.name}" width="64" height="64">
    <p>${category.name}</p>
    </div>`;
    categoriesList.innerHTML += categoriesHTML;
  });
}
