import types from "../data/types.json";
import categories from "../data/categories.json";

let typesHTML = "";

types.sort(function (a, b) {
  return a.name.localeCompare(b.name);
});

categories.sort(function (a, b) {
  return a.name.localeCompare(b.name);
});

// console.log(newArray);

const TYPES = types.forEach((type) => {
  typesHTML += `<button class="type-button">${type.name}</button>`;
});

let categoriesHTML = "";

const CATEGORIES = categories.forEach((category) => {
  categoriesHTML += `<div class="categoryCard">
    <img src="${category.iconUrl}" alt="${category.name}" width="64" height="64"> 
    <p>${category.name}</p>
    </div>`;
});

export { typesHTML, categoriesHTML };
