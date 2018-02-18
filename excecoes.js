         //exceções
         try{
            buscaEndereco('a');
         } catch(erro) {
            console.log('Erro: ' + erro);
         }
         //exceções personalizadas
         var x = 1;
         try{
            if(x < 5){
               throw 'O valor de x precisa ser maior que 5';
            }
         } catch(erro){
            console.log('Erro: ' + erro);
         }
         function verifica(){
            var x = 4;
            try{
               if (x == ''){
                  throw 'valor não informado.';
               } 
               if (isNaN(x)){ //se não é um número
                  throw 'o dado informado não é um número.';
               }
               /*if (x < 10){
                  throw 'deve ser informado um valor maior ou igual a 10';
               }
               if (x > 20) throw 'deve ser informado um valor menor ou igual a 20.'*/
               if (x < 10 || x > 20) throw 'deve ser informado um valor entre 10 e 20.';
               x = Number(x);
               console.log('Valor válido.');
               console.log(x + ' ao quadrado = ' + x * x);
             } catch(err){
                  console.log('Número inválido: ' + err); 
             } finally { //é executado independente do try catch
                console.log('numero ' + x);
             }   
         }

verifica();