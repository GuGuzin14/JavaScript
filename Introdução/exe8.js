const prompt = require('prompt-sync')()

const base = parseInt(prompt('Insira uma base: '))
const expoente = parseInt(prompt('Insira um expoente: '))

const resultado = base ** expoente

console.log(`Resultado da conta com a base ${base} e com o expoente ${expoente} é ${resultado}`)