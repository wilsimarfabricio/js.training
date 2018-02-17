var pessoa = { nome: "Pedro Silva", 
               idade: 23,
               telefone: '9999-9999',
               'cor dos olhos': 'azul',
               endereco: {
                  bairro: 'Iraja',
                  rua: 'Papa Paulo VI'
               }
            }

for (var propriedade in pessoa){
   console.log(propriedade + ': ' + pessoa[propriedade]);
}

//para apagar uma propriedade:
delete pessoa.idade;

for (var propriedade in pessoa){
   console.log(propriedade + ': ' + pessoa[propriedade]);
}
