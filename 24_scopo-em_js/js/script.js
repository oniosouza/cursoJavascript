/*
No javascript podemos ter varios scopos;
O global, que é iniciado em toda aplicacao
E os locais. que podem existir em varias instrucoes com as funcoes

*/
//scopo1
var x = 1;

var y = 3;

console.log(x, y);

//scopo 2
function teste(){
  var z = 0;

  console.log(z);
}
teste();

//scopo 3
function testando(){
  var z = 5;

  console.log(z);
}
testando();

//os scopos nao se misturam
//estruturas como if, for while, se misturam no global
//é recomendado declarar as variaveis globais no topo como boa pratica