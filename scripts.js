let peso = document.querySelector('.peso')
let altura = document.querySelector('.altura')
let botao = document.querySelector('button')
let info = document.querySelector('.informacoes')
let resultado = document.querySelector('.resultado')


botao.addEventListener('click', clique)

function clique() {
info.innerHTML = ''
if (peso.value === '') {
    resultado.innerHTML = '<h2 style="color: red">Insira dados válidos</h2>'
} else {

    let imc = parseFloat(peso.value / (altura.value * altura.value)).toFixed(2)
    
       resultado.innerHTML = `<h2>Seu IMC é: ${imc}<br></h2>` + '<h2>O seu IMC está normal</h2>'
       info.innerHTML = ''
       
       if ( imc >= 18 && imc < 24) {
        resultado.innerHTML = `<h2>Seu IMC é: ${imc}<br></h2>` + '<h2>O seu IMC está normal' + '<h3>Continue cuidando da sua saúde :)'
    
       } else if (imc < 18) {
        resultado.innerHTML = `<h2>Seu IMC é: ${imc}<br></h2>` + '<h2>Você está ABAIXO DO PESO</h2>'
       } else if (imc >= 25 && imc < 30) {
        resultado.innerHTML = `<h2>Seu IMC é: ${imc}<br></h2>` + '<h2>Você está com SOBREPESO</h2>'
       } else if ( imc >= 30 && imc < 35 ) {
        resultado.innerHTML = `<h2>Seu IMC é: ${imc}<br></h2>` + '<h2>Você está com OBESIDADE NÍVEL 1</h2>'
       } else if ( imc >= 35 && imc < 40 ) {
        resultado.innerHTML = `<h2>Seu IMC é: ${imc}<br></h2>` + '<h2>Você está com OBESIDADE NÍVEL 2</h2>'
       } else if ( imc > 40 ) {
        resultado.innerHTML = `<h2>Seu IMC é: ${imc}<br></h2>` + '<h2>Você está com OBESIDADE NÍVEL 3</h2>'
       }
       
    
    }
}
