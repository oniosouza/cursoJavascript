//METODOS NUMERICOS
/*
O Objeto number pai dos numeros contem metodos muito uteis para tarbalhar com numeros em js
A maioria dos tipos de dados tambem tem um objeto pai como: String, Object e Array.
*/

//exemplos: parsefloat 10.0

console.log(parseFloat('12.999'));
console.log(Number.parseFloat('12.999'));

//EX; parseInt;
//transforama uma string em inteiro
console.log(parseInt('10'));

//transforma ponto flutuante em inteiro
console.log(parseInt(16.96));

//ex: toFixed
//limita as casa decimais
console.log(23.9956448.toFixed(3));

//ex: isNaN
//PARA VERIFICAR SE TENHO UM NUMERO

console.log(isNaN("teste"));//true, nao é numero

console.log(isNaN(12)); //false, é numero


//converte string pra numero
console.log(isNaN("14"));//false, nao é string

//MAX_VALUE e MIN_VALUE
//MAXIMO VALOR E MINIMO VALOR QUE O JS ACEITA
console.log(Number.MAX_VALUE); //ACIMA DISSO, INFORMA INFINITY
console.log(Number.MIN_VALUE);






