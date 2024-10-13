
/*ESTRUTURA FOR 
 o for tem uma sintaxe mais complexa, mas é optado pela maioria dos programadores
 *apesar de parecer mais dificil, como a instrucai fica toda em uma linha, proporciona maior controle

*/

//se essa formula fosse:for(var i = 1; i < 11; i++) ele contaria 10, porem: de 0 a 9.
//do jeito que esta. ele conta 10, porem: de 1 a 10.
for(var i = 1; i < 11; i++){
  console.log("repetindo o for: " + i);

}


var arr = [1,2,3,4,5];
//variavel(var j = 0); condicao(j < arr.length;), atribuicao(j++) 
//sintaxe: variavel, condicao e atribuicao
for(var j = 0; j < arr.length; j++ ){
  console.log(arr[j]);
}

//outro exemplo:
for(var x = 5; x < 100; x *=3){
  console.log(x);
}