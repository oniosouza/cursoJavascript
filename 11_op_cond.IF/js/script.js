/*OPERADORES CONDICIONAIS
*sao instrucoes que podem determinar o fluxo de uma aplicacao
*amplamente utilizados, deixam os softwares dinamicos
*exemplos sao> if, else if, else.

*CONDICAO IF
*executa um bloco de codigo se a instrucao for verdadeira
se for falsa segue o codigo normalmente
*lembrando que true e false, sao do tipo boolean
*/
//SINTAXE
//ele vai retornar = testando o if. se tivesse false, nao retornaria nada, o codigo continuava.
/*console.log("antes do if");

if(true){
   console.log("testando o if");
}

console.log("depois do if");*/ //troque o true por false e veja a diferença
//outro exe:
var idade = 18;

if (idade >= 19) {
  console.log("pode fazer carteira de habilitacao");
} else {
  //se nao for maior ou igual a 19. retorna nao pode tirara a carteira
  console.log("nao pode tirar a carteira");
}

//se a idade for maior ou igual a 19, executa o codigo
