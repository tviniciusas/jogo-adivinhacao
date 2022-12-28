const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const randomNumber = Math.round(Math.random()*10) // numeros aleatorios e inteiros
let acertos = 1

function handleTryClick(event){
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber){
       screen1.classList.add("hide") //esconder a primeira tela
        screen2.classList.remove("hide") // aparecer a segunda tela

        document.querySelector(".screen2 h2").innerText = ` acertou em ${acertos} tentativas` // mostrar o resultado
    }

    inputNumber.value = ""
acertos++
}

// fazer com que quando aparecer a segunda tela voltar para a primeira
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function(){
    screen1.classList.remove("hide") 
    screen2.classList.add("hide") 
    acertos = 1

})
        