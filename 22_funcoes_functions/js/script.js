/*FUNCOES - functions
*funcoes sao blocos de códigos reutilizaveis
*ou seja: evitamos a repeticao da logica de um programa, em diversas partes do cotigo
*a funcao precisa ser invocada para ser executada

*/

function primeiraFuncao(){
  console.log("retorno de mensagem da funcao");
}

primeiraFuncao();//vai aparecer a mensagem a cima.

//funcao com paramentro

function dizerNome(nome){
  console.log("o nome é: " + nome);
}

dizerNome("Souza");
dizerNome("aline");
dizerNome("lavinia");
dizerNome("laura");

//ex: com variavel, caso tenha um banco de dados
var nomeDoBancoDeDados = "joao";
dizerNome(nomeDoBancoDeDados);

//ex: com retorno

function soma(a, b){
  var soma = a + b;
  return soma;
}
  var somaUm = soma(2, 5);
  console.log(somaUm);

  var somaDois = soma(5, 5 );
  console.log(somaDois);