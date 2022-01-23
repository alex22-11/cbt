let count = 0

let countEl = document.getElementById("count-el")
let errorParagraph = document.getElementById("error")

function increment() {
    count = count + 1
    countEl.innerText = count
}

function error(){
    errorParagraph.textContent = "Something went wrong, please try again"
}
