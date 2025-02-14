console.log("Olá Mundo");
// let nome = "João"
// console.log(nome)
// nome = "Maria"
// console.log(nome)
//Let pode ter mais de um Valor

const valor = 10
console.log(valor)
// valor = 15  //Erro
// console.log(valor)
//Constante não muda o valor

let total = 5 + parseInt("5")
console.log(`valor é ${total}`)

let nota = 3.5
if(nota>=9){
    console.log("Excelente")
}
else if(nota>=7){
    console.log("Bom")
}
else{
    console.log("Vamos Estudar")
}

let diaSemana = 3
switch (diaSemana){
    case 1:
        console.log("domingo")
        break
    case 2:
        console.log("segunda")
        break
    case 3: 
        console.log("Terça")
        break
    default:
        console.log("Dia Invalido")
    }

    //Repetição

    for(let i=0; i<5; i++){
        console.log(`Laço FOR: ${i}` )
    }

    let contador1 = 0
    while(contador1 < 5){
        console.log(`Laço FOR ${contador1}`)
        contador1++;
    }

    let contador2 = 0
    do{
        console.log("Laço DO WHILE: "+ contador2)
        contador2++
    } while (contador2 < 5)

    function somar(a, b){
        return a + b
    }

    const soma = (a,b) => a+b
    console.log(soma(3,4))
    
    const prompt = require('prompt-sync')();
    nome = prompt("Digite o seu nome: ")
    let idade = prompt("Digite a sua idade: ")

    console.log(`Nome: ${nome} - Idade: ${idade}`)