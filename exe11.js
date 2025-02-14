const prompt = require('prompt-sync')()

const peso = parseFloat(prompt('Insira seu peso: '))

const altura = parseFloat(prompt('Insira sua Altura: '))

const imc = peso / (altura*altura) 

console.log(`sua media no IMC é ${imc}`)