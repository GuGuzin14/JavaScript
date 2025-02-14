const prompt = require('prompt-sync')()

const km = parseFloat(prompt('Diga um valor em KM: '))

const milhas = km / 1.609

console.log(`${km}km em milhas são ${milhas}`)