var hoje = new Date();
console.log(hoje);
console.log(hoje.getTime());//dias em mile
console.log(hoje.getMilliseconds());
var novaData = new Date(hoje.getTime() + 86400000);
console.log(novaData);

