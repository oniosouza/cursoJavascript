var nome = "matheus";

  //else if sempre tem que vir depois do if
  //posso ter quantos else if quiser

if (nome == "pedro") {
  console.log("o nome dele é pedro");

} else if (nome == "matheus") {
  console.log("o nome dele é matheus");
} else {
  console.log("ele possui outro nome");
}

//outro caso
//nesse caso nao precisou do else
var idade = 21;
if (idade > 20) {
  console.log("ele pode entrar na festa");
} else if (idade >= 18) {
  console.log("ele so pode entrar com autorizacao");
}
