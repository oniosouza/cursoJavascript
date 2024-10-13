
/*estrutura de repeticao while = enquanto.
servem para repetir N vezes uma operacao.
repetir uam determinada logica em cada elemento de uma array
as mais comuns sao while e for
while + a ideia é que se repita algo ate determinada condicao
tem que ter cuidado com loop infinito
 */
var x = 0;


while(x < 5){

  console.log("testando repeticao" + x)

  //incrementador
  x++

}

var arr = ['carro', 'moto', 'bicicleta', 'aviao'];
var y = 0;

while(y <= 3){
  console.log(arr[y]);
  y++
}

// outro exemplo: contar as letras de um palavra

var palavra = "kaliene";
var i = 0;

while(i <= 6){
  console.log(palavra[i]);
  i++;
  //i++ pode ser tambem: i += 1;
}