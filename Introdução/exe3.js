const prompt = require('prompt-sync')();

const fahrenheit = parseInt(prompt("Digite a Temperatura em Fahrenheit: "))

const celcius = (fahrenheit - 32) / 1.8

console.log(`Em Celcius: ${celcius}`)