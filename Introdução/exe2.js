const prompt = require('prompt-sync')();

const celcius = parseInt(prompt("Digite a Temperatura em C°: "))

const fahrenheit = (celcius * 1.8) + 32

console.log(`Em Fahrenheit: ${fahrenheit}`)