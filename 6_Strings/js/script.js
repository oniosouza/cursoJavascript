
/* 
tipo de dados: String;
é um tipo de dado para texto;
podem ser escritas em aspas simples ou duplas;
é possivel tambem concatenar com o: +;
*/
//declarando uma string

var nome = "Onio";
var sobrenome = "kaliene";



//exemplo de concatenacao

var nomeCompleto = nome + " " + sobrenome;

console.log(nome);
console.log(typeof nome);
console.log(nomeCompleto);

//Numeros entre aspas é considerado uma String
console.log(typeof "10255");

//isso permite que imprima um dado no navegador
document.write("ola");

//isso me permite imprimir um texto entre aspas
document.write("ele disse: 'olá'")

//isso me faz juntar um texto com um numero
//isso nos tras a funcao de concatenacao
console.log("este é um numero: " + "432");

//cocatenando com uma varial
console.log("este numero " + nome);

//exemplo de concatenacao
