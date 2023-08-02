import types from "./types.json"
import categories from "./categories.json"

let typesHTML = "";

 const TYPES = types.forEach(type => {

        typesHTML += `<button>${type.name}</button>`
    })

let categoriesHTML = "";


const CATEGORIES = categories.forEach(category => {

    categoriesHTML += `<div>
    <img src="${category.iconUrl}" alt="${name}" width="100" height="100"> 
    <p>${category.name}</p>
    </div>`
})


export { typesHTML, categoriesHTML } 
