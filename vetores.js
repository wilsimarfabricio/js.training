var a = new Array();
console.log(a);
console.log(a.length);
//os vetores come�am em 0
a[0] = 'gato';
a[2] = 'cachorro';
a[10] = 'passaro';
console.log(a.length); //tamanho 11

for (var i = 0; i < a.length; i++){
   console.log(a[i]);
}

console.log(a,toString());

//iterar array
a.forEach(function(item, indice, array){
   console.log(item, indice);
});

//adicionar um item no final do array
var frutas = ['maçã', 'banana'];
frutas.push('laranja');
console.log(frutas);

//Remover um item do final do Array
var ultimo = frutas.pop();
console.log(ultimo);
console.log(frutas);

//Remover do início do Array
frutas.shift();
console.log(frutas);

//Adicionar ao início do Array
frutas.unshift('morango');
console.log(frutas);

//Procurar o índice de um item na Array
frutas = ['maçã', 'banana', 'laranja', 'morango', 'abacaxi', 'manga'];
var posicao = frutas.indexOf('laranja');
console.log(posicao);

//Remover um item pela posição do índice
frutas.splice(posicao, 1);
console.log(frutas);

//Remover itens de uma posição de índice
var vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
console.log(vegetais);
var itensremovidos = vegetais.splice(1, 2);
console.log(vegetais);
console.log(itensremovidos);

//copiar um array
var copia = vegetais.slice();
console.log(copia);

//copiar parte de um array
vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
console.log(vegetais);
copia = vegetais.slice(1, 3); //[ 'Nabo', 'Rabanete' ]
console.log(copia);

//filtro simples
//o parâmetro é um callback que deve retornar true para os elementos que serão mantidos
var maioresQueDez = [12, 5, 8, 130, 44].filter(isBigEnough);

function isBigEnough(value){
   return value >= 10;
}

console.log(maioresQueDez);
console.log(maioresQueDez.length > 0);

//filtro de entradas JSON
var arrayObjIds = [{ id: 15 },
                   { id: -1 },
                   { id: 0 },
                   { id: 3 },
                   { id: 12.2 },
                   { },
                   { id: null },
                   { id: NaN },
                   { id: 'undefined' }];

function filterById(obj){

   if('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)){
      return true;
   } else {
      return false;
   }
}

var arrayByObjIdNumber = arrayObjIds.filter(filterById);
console.log(arrayObjIds);
console.log(arrayByObjIdNumber);
