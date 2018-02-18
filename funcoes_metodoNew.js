/************
 * invocação com o operador New
 * Funções construtoras vs. funções fábrica
 */

 //função fábrica
 var criarPessoa = function(nome, idade){
   //retorna um objeto 
   return {
      nome: nome,
      idade: idade
    };
 };

 console.log(criarPessoa('Pedro', 20));
 var pedro = criarPessoa('Pedro', 20);
 console.log(pedro);

 //função construtora
 var Pessoa = function(nome, idade){
    this.nome = nome;
    this.idade = idade;
 };
 console.log(new Pessoa('Pedro', 21));
 pedro = new Pessoa('Pedro', 21);
 console.log(pedro);

 //o operador new faz internamente:
 pedro = {};
 Pessoa.call(pedro, "Pedro", 20);
 console.log(pedro);