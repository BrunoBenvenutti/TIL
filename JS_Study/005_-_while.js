<script>
      
         'use strict'; // Modo chato do JS

         /*
            Escreva na página, com document.write(),
            todos os números múltiplos de 3 no intervalo
            entre 1 e 1000.
         */

         let x = 1;

         while(x <= 1000) {
            if(x % 3 == 0) {
               // <br> quebra linha no HTML
               document.write(x + '<br>');
            }
            x++; // x = x + 1;
         }

         
</script>