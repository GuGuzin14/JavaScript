const prompt = require('prompt-sync')();

let numeros = Array();

let op = 1;
while (op != 0) {
    numero = prompt('Quantos números deseja inserir? ');
    quantidade = Number(numero);
    for (let i = 0; i < quantidade; i++) {
        numero = prompt('Digite o número: ');
        numeros.push(numero);
    }
    op = prompt('informar mais dados? (1 - Sim, 0 - Não) ');
    let crescente = numeros.sort();
    console.log(crescente);
    let decrescente = numeros.reverse();
    console.log(decrescente);
   
}