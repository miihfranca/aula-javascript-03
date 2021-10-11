//1)  Cria variável para armazenar a resposta da pergunta: você é maior de 18 anos?
//a)Se for maior ou igual a 18 anos, escreva a mensagem no console: Que legal!
// Você já pode ter a carteira de habilitação.
//b)Se for menor de 18 anos, escreva a mensagem no console: Poxa, que pena! 
//Você ainda não pode ter a carteira de habilitação.

    console.log("você é maior de 18 anos?");
    var idade = [0]; //Adicionar um valor conforme a idade.

    if(idade >= 18) {
        console.log('Que legal! Você já pode ter a carteira de habilitação.');
    }
    else if(idade < 18 && idade != 0){
        console.log("Poxa, que pena! Você ainda não pode ter a carteira de habilitação.");
    }
    else {
        console.log('Escreva sua idade como resposta.')
    }

//          //          //          //          //
//2)Cria variável para armazenar a resposta da pergunta: você já terminou o ensino médio?
//a)Se for verdade, escreva a mensagem no console: Poxa, que legal!.
//b)Se for mentira, escreva a mensagem no console: Falta pouco! Logo você termina.

console.log("você já terminou o ensino médio?");
let resposta2 = []; // Adicionar um Sim ou Não como resposta.

    if(resposta2[0] == "Sim") {
        console.log("Poxa, que legal!.");
    }
    else if(resposta2[0] == "Não") {
        console.log("Falta pouco! Logo você termina.");
    }
    else {
        console.log('Escreva "Sim" ou "Não" como resposta.')
    }