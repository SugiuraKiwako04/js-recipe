const memo-container = document.getElementById("memo-container")
const add-button = document.getElementById("add-button")
const memo-input = document.getElementById("memo-input")

button.onclick = function() {
    console.dir(memo-input)
    console.log(memo-container.textContent) 
    console.log(add-button.textContent) 
  }

const logValue = function(e) {
  console.log(e.target.value)
}
memo-input.oninput = logValue



