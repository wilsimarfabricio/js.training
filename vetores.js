var a = new Array();
console.log(a);
console.log(a.length);
//os vetores começam em 0
a[0] = 'gato';
a[2] = 'cachorro';
a[10] = 'passaro';
console.log(a.length); //tamanho 11

for (var i = 0; i < a.length; i++){
   console.log(a[i]);
}

console.log(a,toString());