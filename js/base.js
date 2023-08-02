export const HOST = "http://localhost:5173/";
export const TYPES_HOST =
  "https://api-eko-bazarek.azurewebsites.net/api/products/types";
export const CATEGORIES_HOST =
  "https://api-eko-bazarek.azurewebsites.net/api/products/categories";

export const types$ = fetch(TYPES_HOST).then((response) => response.json());

export const categories$ = fetch(CATEGORIES_HOST).then((response) =>
  response.json()
);
