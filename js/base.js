export const TYPES_HOST =
  "https://api-eko-bazarek.azurewebsites.net/api/products/types";
export const CATEGORIES_HOST =
  "https://api-eko-bazarek.azurewebsites.net/api/products/categories";

export const SINGLE_CATEGORY_HOST =
  "https://api-eko-bazarek.azurewebsites.net/api/products/01d5e2a0-1b34-4644-8205-506130e03b75";

export const types$ = fetch(TYPES_HOST)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw Error(`${response.status} - ${response.statusText}`);
  })
  .catch((error) => {
    console.error(error);
  });

export const categories$ = fetch(CATEGORIES_HOST)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw Error(`${response.status} - ${response.statusText}`);
  })
  .catch((error) => {
    console.error(error);
  });

export function categoryQuery(element) {
  element.addEventListener("click", () => {
    fetch(SINGLE_CATEGORY_HOST)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(
          `${response.status} - ${response.statusText}`,
          alert("Brak informacji o produkcie")
        );
      })
      .catch((error) => {
        console.error(error);
      });
  });
}
