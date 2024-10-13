/*
Utilizando let e const, podemos criar scopo ate em instrucoes com if
Deixando o codigo mais confiavel
Separando cada bloco em um scopo

*/
let x = 5; // var x = 5(como se fosse)

const y = 10;//assim nao permite mudar o valor de y(porque é uma constante)
//geralmente os codigos sao feitos com const, porque os valores nao costuma mudar

//podemos mudar o valor de x

x = 12;

console.log(x);

console.log('const ' + y);

if(true){
  let x = 20;
console.log(x);

const y = 50;

console.log('const if' + y);
}
console.log(x);

//a grande sacada do let é que posso criar outro let sem se misturar com o que ja existe
if(true){
  let x = 20;

  console.log(x);

}
console.log(x);

if(20 > 10){
  const y = 100;
  console.log('const y if 3 ' + y);

}

//nesses casos observamos que as constantes dos blocos nao se misturam.
//posso criar tambem

for(let x = 0; x < 10; x++){
  console.log(x);
} 