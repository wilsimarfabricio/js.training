var obj = {
   name: "Carrot",
   "for": "Max", //for é palavra reservada
   details: {
       color: "orange",
       size: 12
   },
   helloWorld: function(){
      return "Hello World!";
   }
}
console.log(obj);
console.log("size: " + obj.details.size);

function retDados(obj){
   return {
      nome: obj.name,
      cor: obj.details.color
   };
}
console.log(retDados(obj));
console.log(obj.helloWorld());