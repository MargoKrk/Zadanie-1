import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
import { typesHTML, categoriesHTML } from './general'


document.querySelector('#app').innerHTML = `
  <div class="main">
    <div class="typesCard">
      <h2>Typy</h2>
      <div id="typesList"></div>
    </div>
    <div class="categoriesCards">
      <h2>Kategorie</h2>
      <div id="categories"></div>
    </div>
  </div>
`

const typesList = document.getElementById("typesList")
typesList.innerHTML = typesHTML

const categories = document.getElementById("categories")
categories.innerHTML = categoriesHTML


// setupCounter(document.querySelector('#counter'))


{/* <a href="https://vitejs.dev" target="_blank">
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
</p> */}
