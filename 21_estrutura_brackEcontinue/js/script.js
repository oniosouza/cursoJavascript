/*BREAK E CONTINUE
*com break podemos encerrar uma intrucao
*com continue podemos pular uma instrucao
*utilizados na maioria das vezes em loops

*/

for (var i = 10; i > 0; i--){

  console.log(i);

  if (i === 5){
    break;
  }
  
}
  console.log("deu o break");

  //outro exemplo
  var x =  10;
  while (x < 100){
    x += 10;
//pode ser tambem if(x === 60 || x ===90)
    if (x === 60){
      continue;
    }
    console.log("testando continue" + x);
  }