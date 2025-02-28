const prompt = require('prompt-sync')()

const preco = parseFloat(prompt('Insira um preco: '))

const desconto = parseInt(prompt('Insira seu Desconto: '))

const valor = preco * (1-desconto / 100);

console.log(`o valor final é ${valor}`)