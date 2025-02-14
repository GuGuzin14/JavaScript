const prompt = require('prompt-sync')();

const raio = parseFloat(prompt('Raio do circulo: '))

const area = 3.14 * raio * raio

console.log(`A area do circulo é: ${area}`)