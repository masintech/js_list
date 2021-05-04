let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")

ourForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("hi")
    // console.log(ourField.value)
})

function createItem(x){
    ourList.insertAdjacentHTML("beforeend", x)
}

function deleteItem(elementToDelete){
    elementToDelete.parentElement.remove()
}
