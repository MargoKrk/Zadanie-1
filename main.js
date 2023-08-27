import "./css/style.css";
import { types$, categories$, categoryQuery } from "./js/base";

document.querySelector("#app").innerHTML = `
    <div class="content">
    <div class="typesCard">
      <h2>Typy</h2>
      <div id="typesList">
        <button class="type-button selected" id="ALL_TYPES" data-filter="ALL">
          Wszystkie
        </button>
      </div>
      <div class="checkbox-div">
        <input type="checkbox" id="vege-switch" />
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

Promise.all([types$, categories$]).then(([types, categories]) => {
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
  const vegeSwitch = document.getElementById("vege-switch");
  const allTypesButton = document.getElementById("ALL_TYPES");
  // const meatButton = document.getElementById("MEAT");
  // const cookedMeatButton = document.getElementById("COOKED_MEATS");

  allButtons.forEach((currentButton) => {
    currentButton.addEventListener("click", (e) => {
      const filterTarget = e.target.dataset.filter;

      if (!document.querySelector(".selected")) {
        e.target.classList.add("selected");
      } else {
        document.querySelector(".selected").classList.remove("selected");
        vegeSwitch.checked.remove;
        e.target.classList.add("selected");
      }

      const filtredCategories = categories.filter((elem) => {
        return elem.type === filterTarget;
      });

      postCategory(filtredCategories);

      const filtredCategoriesCard = document.querySelectorAll(".categoryCard");

      filtredCategoriesCard.forEach((currentCategory) => {
        categoryQuery(currentCategory);
      });
    });
  });

  allTypesButton.addEventListener("click", () => {
    postCategory(categories);

    const filtredCategoriesCard = document.querySelectorAll(".categoryCard");

    filtredCategoriesCard.forEach((currentCategory) => {
      categoryQuery(currentCategory);
    });
  });

  allCategoriesCard.forEach((currentCategory) => {
    categoryQuery(currentCategory);
  });

  vegeSwitch.addEventListener("click", function () {
    if (vegeSwitch.checked) {
      document.querySelector(".selected").classList.remove("selected");
    } else {
      allTypesButton.classList.add("selected");
    }

    const vegeCategories = categories.filter((elem) => {
      return vegeSwitch.checked
        ? elem.type != "MEAT" && elem.type != "COOKED_MEATS"
        : true;
    });

    postCategory(vegeCategories);

    const vegeAllCategories = document.querySelectorAll(".categoryCard");
    vegeAllCategories.forEach((currentCategory) => {
      categoryQuery(currentCategory);
    });
  });
});

function postTypes(types) {
  types.forEach((type) => {
    typesList.innerHTML += `<button class="type-button" id="${type.id}" data-filter="${type.id}">${type.name}</button>`;
  });
}

function postCategory(categories) {
  categoriesList.innerHTML = "";

  categories.forEach((category) => {
    categoriesList.innerHTML += `<div class="categoryCard" data-filter="${category.type}">
    <img src="${category.iconUrl}" alt="${category.name}" width="64" height="64">
    <p>${category.name}</p>
    </div>`;
  });
}
