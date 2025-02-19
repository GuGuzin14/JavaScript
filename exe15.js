const prompt = require('prompt-sync')()

const dia = parseInt(prompt('Insira um dia  '))

const horas = dia * 24
const minutos = horas * 60
const segundos = minutos * 60

console.log(`${dia} dias são ${horas} horas, ${minutos} minutos e ${segundos} segundos.`)