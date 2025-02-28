const prompt = require('prompt-sync')()

const metros = parseFloat(prompt('Insira um valor em metros: '))

const centrimetros = metros * 100

console.log(`${metros}m em centrimetros é ${centrimetros}cm`)