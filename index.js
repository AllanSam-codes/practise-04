var txtInput = document.querySelector("#txt-input")
var redBtn = document.querySelector("#red-btn")
var greenBtn = document.querySelector("#green-btn")
var blueBtn = document.querySelector("#blue-btn")
var outputTxt = document.querySelector("#ouput-txt")

//console.log(outputTxt)


function changeColor1() {
    //console.log("clicked")
    outputTxt.innerHTML = `<p>${txtInput.value}</p>`
    outputTxt.style.color = "red"
    txtInput.style.color = "red"
}

redBtn.addEventListener('click', changeColor1)

function changeColor2() {
    //console.log("clicked")
    outputTxt.innerHTML = `<p>${txtInput.value}</p>`
    outputTxt.style.color = "green"
    txtInput.style.color = "green"
}

greenBtn.addEventListener('click', changeColor2)

function changeColor3() {
    //console.log("clicked")
    outputTxt.innerHTML = `<p>${txtInput.value}</p>`
    outputTxt.style.color = "blue"
    txtInput.style.color = "blue"
}

blueBtn.addEventListener('click', changeColor3)