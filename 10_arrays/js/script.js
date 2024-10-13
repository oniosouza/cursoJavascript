/*
TIPPS DE DADOS: ARRAYS
*na verdade os arrays sao considerados objetos em Javascript,
porem: servem como lista
*podemos ter itens de qualquer tipo de dados tambem
*porem nao por chave  evalor e sim por indice.
*/

//sitaxe de Arrays = [] enaquanto objetos = {}

var arrays = [
    5, "souza", true,  {teste: 1, teste: 2}]; //podemos incluir dentro de array um bloco de objetos
    console.log(arrays);

var array2 = [2,3,4,5,6];
console.log(array2[1]);//esse me mostra o segundo indice 
console.log(arrays[0]);//esse me mostra o primeiro indice

//inserindo um elemento no arrays
arrays[4] = 10;
console.log(arrays);

/*adiconando elemto no array. tem que adicionar um indice que nao contenha
 no array para nao substituir o elemento escolhendo um indice que ja existe*/
array2[6] = 7;
console.log(array2);

//modificando elemento do array
arrays[1] = "onio";//aqui troquei o indice 2 de souza para onio.
console.log(arrays);