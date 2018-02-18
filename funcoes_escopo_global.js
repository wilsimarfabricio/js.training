//as variáreis de escopo global podem poluir o programa
var counter = 0;
var add = function(){
   return ++counter;
};
console.log(add());
console.log(add());
console.log(add());

var itens = [];
var add = function(item){
   itens.push(item);
   return itens;
};
console.log(add('A'));
console.log(add('B'));
console.log(add('C'));
console.log(add());

//encapsulamento
var counter = {
   value: 0,
   add: function(){
      return ++this.value;
   }
};
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

var itens = {
   value: [],
   add: function(item){
      this.value.push(item);
      return this.value;
   }
};
console.log(itens.add('A'));
console.log(itens.add("B"));
console.log(itens.add('C'));

console.log(counter.add());

//problema: ainda pode-se modificar o conteúdo do atributo
counter.value = undefined;
console.log(counter.add());

//uso de função para encapsular
var createCounter = function(){
   var value = 0;
   return {
      add: function(){
      return ++value;
      }
   };
};
var counter = createCounter();

console.log(counter.value);//undefined
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

//ou...
var Counter = function(){
   var value = 0; //privado
   this.add = function(){ //publico
      return ++value;
      };
};
var counter = new Counter();

console.log(counter.value);//undefined
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

//module parttern
//pequena alteração, para deixar a função privada e melhorando a legibilidade
var counter = function(){
   var _value = 0;
   var _add = function(){
      return ++_value;
   };
   var _reset = function(){
      return _value = 0;
   };
   return { //apenas o que quero revelar
      add: _add,
      reset: _reset
   };
}();

console.log(counter.value);//undefined
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
console.log(counter.reset());
console.log(counter.add());
console.log(counter.add());
