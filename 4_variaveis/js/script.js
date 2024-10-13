
//declarando uma variavel
var teste = 1;

//declarando um avariavel global

nome = "joao";

console.log(teste);

//mudando valor da variavel, mas dessa forma pode resultar em problemas de manutencao futura

teste = 'souza';

console.log(teste)

/*declarando variavel de forma global
o problema é que ela pode sobscrever variaveis no scopo global
*/

console.log(nome);

/*o melhor é: sempre que declarar uma 
variavel colocar o var de variável*/

/* A unica forma de declarar variaveis com caracteres especiais é com, $ ou _. 
ex:
var $nome = 'ASD';
var _nome = 'ASD';

tambem nao podemos comecar variaveis com numeros

outra forma de declarar variaveis é usando (let ou const)

podemos tambem delarar variaveis sem valor
ex: var nome;
depois essa variavel pode ganhar algum valor.
ex: nome = 'mateus';
console.log(nome) o rsultado será mateus
*/
