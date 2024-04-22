function changeCalculator(type) {
    const btnBinaryText = document.querySelector(".main_calculadora_change_binaryToText")
    const btnTextBinary = document.querySelector(".main_calculadora_change_textToBinary")
    const containBinaryText = document.querySelector(".main_calculadora_binaryToText")
    const containTextBinary = document.querySelector(".main_calculadora_textToBinary")
    if(type == "btt"){
        console.log("hola")
        btnBinaryText.classList.add("active")
        btnTextBinary.classList.remove("active")
        containBinaryText.classList.remove("inactive")
        containTextBinary.classList.add("inactive")
    }else{
        btnBinaryText.classList.remove("active")
        btnTextBinary.classList.add("active")
        containBinaryText.classList.add("inactive")
        containTextBinary.classList.remove("inactive")
    }
}

const btnBinaryText = document.querySelector(".main_calculadora_change_binaryToText").addEventListener("click", () => changeCalculator("btt"))
const btnTextBinary = document.querySelector(".main_calculadora_change_textToBinary").addEventListener("click",() => changeCalculator("ttb"))
