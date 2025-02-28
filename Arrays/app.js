const prompt = require('prompt-sync')();

let nomes = Array();
let notas = Array();
let nome,nota;

let op = 1;
while (op != 0) {
    nome = prompt('Digite o nome do aluno: ');
    nota = Number(prompt('Digite a nota do aluno: '));
    nomes.push(nome);
    notas.push(nota);
    op = prompt('informar mais dados? (1 - Sim, 0 - Não) ');


}

console.log(nomes);
console.log(notas);

console.log(`nome do primeiro aluno: ${nomes[0]}`);

//Após excluir o valor retirado ficará dentro da variavel "nome"
nome = nomes.pop();

console.log("Ultimo nome excluido: " + nome);
console.log(nomes);

//inserir Vania na posição 1 
nomes.splice(1, 0, "Vania");

//Exclui a posição 1 do array
nomes.splice(1,1)

for (let i=0; i< nomes.length; i++){
    console.log(nomes[i])
}

for (let n of nomes){
    console.log(n)
}