const prompt = require('prompt-sync')()

const capital = parseFloat(prompt('Insira uma capital  '))
const taxa = parseInt(prompt('Insira uma taxa de juros  '))
const periodo = parseInt(prompt('Insira um periodo  '))
const juros = capital * (1 + taxa) ** periodo

console.log(`O juros é ${juros}`)
