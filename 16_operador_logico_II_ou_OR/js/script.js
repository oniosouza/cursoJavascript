// O operador OR-|| retorna true caso uma das duas condicoes forem verdadeiras
//OR retorna false, apenas se a duas condicoes forem falsas

var idade = 17;
var nome = "joao";
//nesse caso vai da certo porque uma das duas condicoes é verdadeira 
if(nome == "joao" || idade > 14){
    console.log("o joao pode entrar na aula de esgrima");
// se idade fosse 13 e nome "pedro" cairia no else
//porque as duas condicoes seriam falsas
  }else{
    console.log("nao pode entrar");
  }

  //outro exemplo:

if(nome == "joao" && 15 > 20 || 10 == 10){
    console.log("testado");
}
//exemplo com else  
if(nome == "pedro" && (30 > 20 || 10 == 10)){
    console.log("testado");
}else{
    console.log("nao entrou");

}