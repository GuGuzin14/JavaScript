const prompt = require('prompt-sync')();

const area = parseFloat(prompt('Insira a area do retangulo: '))
const altura = parseFloat(prompt('Insira a altura do retangulo: '))

const perimetro = 2 * area + 2 * altura

console.log(`Perimetro do retangulo: ${perimetro}`)
