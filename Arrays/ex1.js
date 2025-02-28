const prompt = require('prompt-sync')();

let nomes = Array();
quantidade = 0;
let op = 1;
while (op != 0) {
    nome = prompt('Quantos nomes deseja inserir? ');
    quantidade = Number(nome);
    for (let i = 0; i < quantidade; i++) {
        nome = prompt('Digite o nome do aluno: ');
        nomes.push(nome);
    }
    op = prompt('informar mais dados? (1 - Sim, 0 - Não) ');
    nomes.sort()
    console.log(nomes)
}
