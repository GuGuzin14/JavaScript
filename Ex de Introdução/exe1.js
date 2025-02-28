const prompt = require('prompt-sync')();

const nota1 = parseFloat(prompt ('informe a primeira nota: ')) 
const nota2 = parseFloat(prompt ('informe a segunda nota: '))  
const nota3 = parseFloat(prompt ('informe a terceira nota: ')) 

const media = (nota1 + nota2 + nota3) / 3

console.log(`Sua nota é: ${media}`)