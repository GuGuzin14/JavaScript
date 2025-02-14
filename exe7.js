const prompt = require('prompt-sync')();

const raio = parseFloat(prompt('Insira o Raio do circulo: '))

const perimetro = (2 * 3.14) * raio

console.log(`O perimetro do circulo é: ${perimetro}`)