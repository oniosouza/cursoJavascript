/*
*Tipos de dados: OBJETOS
*funcionam como um array associativo de outras liguagens
*podemos criar propriedades com chave e valor
*a ideia é guardar um conjunto de valores, para usar posteriormente
*/

//isso determina que é Objeto

 //nesse caso o valor nao é dado com o sinal de = e sim (:) dois pontos
var objeto = {
    nome: "Souza",
    idade: 29,
    profissao: "programador",
};
console.log(objeto);
//para acessar uma propriedade do objeto
console.log(objeto.nome) //retorna apenas o nome

//usando como variavel
console.log("o meu nome é " + objeto.nome); // retorna: (o meu nome é souza)

//posso mudar o valor do objeto ex:
objeto.nome ="joao";

console.log(objeto.nome)

//criando propriedades no objeto ex:
objeto.graduacao = true;
console.log(objeto);

