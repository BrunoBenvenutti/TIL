<script>
      
         'use strict'; // Modo chato do JS

         /*
            Em um certo país, bebês do sexo masculino
            devem se chamar João, e bebês do sexo feminino
            devem se chamar Maria. Pergunte ao usuário o
            sexo do bebê e retorne o nome obrigatório.
         */

         let sexo, nome;

         sexo = prompt('Qual o sexo do bebê (M ou F)?');

         /*
         if(sexo == 'M') {
            nome = 'João';
         }
         else {
            nome = 'Maria';
         }
         */

         // Usando operador ternário (if curto)
         nome = (sexo == 'M') ? 'João' : 'Maria';

         //alert('O nome do bebê deve ser ' + nome + '!');

         // Usando string template
         alert(`O nome do bebê deve ser ${nome}!`);
       
</script>