import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import typesHTML from './types'


document.querySelector('#app').innerHTML = `
  <div>
  <div id="typesList">
  <h2>Typy</h2>
  </div>
  </div>
`

const typesList = document.getElementById("typesList")

typesList.innerHTML = typesHTML

setupCounter(document.querySelector('#counter'))


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
