import types from "./types.json"

let typesHTML = "";

 const TYPES = types.forEach(type => {


        typesHTML += `<button>${type.name}</button>`
    })



export default typesHTML