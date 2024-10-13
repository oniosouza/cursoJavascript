/*
UNDEFINED E NULL
*sao considerados tipos de dados
*o null é um tipo de dado que representa um valor
*o undefined é um tipo de dado pára uma variavel,
com valor nao atribuido.
*/

/*O HOISTING = içamento: 
faz com que as funcoes e variaveis seja inicializadas no topo do codigo*/
//isso me dá a opcao de usar essa variavel posteriormente com algum valor
var nome = null;

var sobrenome; //iniciada sem um valor
//var sobrenome = "kaliene"; assim me dá o valor corretamente

console.log(nome);

//vai informar undefined. porque foi iniciada, mas na tem u valor.
console.log(sobrenome);

nome = "souza";

console.log(nome);