//operador logico &&
//o operador logico && é conhecido tambem como AND.
//ele vai retornar true, apenas se as duas condicoes forem true.
//qualquer outro resultado retorna false.
var idade = 17;
var nome = "joao";

//se o nome for joao e a idade for 16, entao ele retorna o if.
if(nome == "joao" && idade ==16){
  console.log("o joao pode entrar na aula de esgrima");
}else{
  console.log("esse nao é o joao");
}
//se o algo estiver diferente, ele cai no else, 
//ex: se a idade for 17 ou o nome pedro por exemplo.

//outro exemplo
//aqui eu tenho duas condicoes: se 1 é igual a 1 e, se 3 é maior que 2.
if(1 == 1 && 3 > 2 && true){
  console.log("passou");
}

//outro exemplo
//nesse exemplo eu posso encadear varias condicoes
//no caso do 3 > vai da false, e vai car no else if
if((1 == 1 && 3 > 3) && true){
  console.log("passou");
  //exemplo acresentando else if
}else if(nome === "joao" && idade >= 14){
  console.log("aqui passa");
}