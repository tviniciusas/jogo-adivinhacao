const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let acertos = 1
let randomNumber = Math.round(Math.random()*10) // numeros aleatorios e inteiros

function handleTryClick(event){
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")
    if(Number(inputNumber.value) == randomNumber){
        screen1.classList.add("hide") //esconder a primeira tela
        screen2.classList.remove("hide") // aparecer a segunda tela
        document.querySelector(".screen2 h2").innerText = ` acertou em ${acertos} tentativas` // mostrar o resultado
        randomNumber = Math.round(Math.random()*10) // numeros aleatorios e inteiros
    }else{
        acertos++
        document.getElementById("tentenovamente").innerText = `tente novamente, você errou, tentativa ${acertos-1}` // mostrar o resultado
    }
    inputNumber.value = ""
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
        