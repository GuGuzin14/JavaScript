const prompt = require('prompt-sync')();

const altura = parseInt(prompt('Altura do retangulo: '))
const largura = parseInt(prompt('Largura do retangulo: '))

const area = altura * largura

console.log(`Area do retangulo: ${area}`)