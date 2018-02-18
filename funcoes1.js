function add(x, y) {
   var total = x + y;
   return total;
};

var resultado = add(4,5);
console.log(resultado);

/**************************/
resultado2 = function(x, y){
   return x + y;
};
console.log(resultado2(4,40));

/**********
Function declaration 
*/
function soma(a, b){
   return a + b;
}

console.log(soma);
console.log(soma(2,4));
/******
Function expression
*/
var soma = function(a, b){
   return a + b;
}
console.log(soma);
console.log(soma(2,4));
/**
Principal diferen�a: as functions declarations s�o lidas pelo compilador antes da invoca��o nas linhas de comando, de modo que podem ser criadas ap�s suas chamadas
 */
console.log(testsum);
var testsum = function(a,b){
   return a + b;
}
console.log(testsum);

/**************
Exemplo de reaproveitamento
*/
var produto = {nome: 'sapato', preco: 150};
var formulaPrecoA = function(preco){
   return preco * 0.1;
};
var formulaPrecoB = function(preco){
   return preco * 0.2;
};
var calculaPreco = function(produto, formulaImposto){
   return produto.preco + formulaImposto(produto.preco);
};

var precoFinal;

precoFinal = calculaPreco(produto, formulaPrecoA);
console.log(precoFinal);

precoFinal = calculaPreco(produto, formulaPrecoB);
console.log(precoFinal);

/********************
 Exemplo fun��es dentro de fun��es/ fun��es internas
 */
var helloWorld = function(){
   return function(){
      return 'Hello World!';
   };
};
console.log(helloWorld);
console.log(helloWorld());
console.log(helloWorld()());

/*************
 * Invocando fun��o pelo objeto
 */
var pessoa = {
   nome: 'Jo�o',
   idade: 20,
   getIdade: function(){
      return this.idade;
   } 
};
console.log(pessoa.getIdade());

/************
 * externalizando a fun��o
 */
var getIdade = function(){
   return this.idade;
};
var pessoa = {
   nome: 'Jo�o',
   idade: 20,
   getIdade: getIdade
};
console.log(getIdade()); //undefined
console.log(pessoa.getIdade());

/*****
 * Invoca��o da fun��o usando call e apply
 */
var getIdade = function(extra){
   return this.idade + extra;
};
var pessoa = {
   nome: 'Jo�o',
   idade: 20,
   getIdade: getIdade
};
console.log(pessoa.getIdade(2)); //undefined
console.log(getIdade.call(pessoa, 2));
console.log(getIdade.apply(pessoa, [2]));