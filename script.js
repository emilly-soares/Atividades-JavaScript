//1. Verificar se um caractere é uma vogal ou consoante;
function main() {
   function verificaCaractere(c) {
      const vogais = 'aeiouAEIOU';
      if (vogais.includes(c)) { //Verifica se as Strings vogais estão presentes
         return 'Vogal';
      } else {
         return 'Consoante';
      }
   }
   console.log('1 - Verifica Vogal ou Consoante: a, A, b');
   console.log(verificaCaractere('a'));
   console.log(verificaCaractere('A'));
   console.log(verificaCaractere('b'));
   console.log('');


   //2. Converter uma nota de 0 a 100 em conceito A, B, C, D ou F;
   function converterNota(n) {
      if (n >= 90) {
         return 'A';
      } else if (n >= 80) {
         return 'B';
      } else if (n >= 70) {
         return 'C';
      } else if (n >= 60) {
         return 'D';
      } else if (n < 60) {
         return 'F';
      }
   }
   console.log('2 - Converter Nota em Conceito: 65, 85, 72, 40 e 100');
   console.log(converterNota(65));
   console.log(converterNota(85));
   console.log(converterNota(72));
   console.log(converterNota(40));
   console.log(converterNota(100));
   console.log('');


   //3. Verificar se um número é divisível por 3 e 5 ao mesmo tempo;
   function divisivel35(n) {
      return n % 3 === 0 && n % 5 === 0;
   }
   console.log('3 - Verificar se um número é divisível por 3 e 5: 15, 20');
   console.log(divisivel35(15));
   console.log(divisivel35(20));
   console.log('');


   //4. Verificar se um número é par ou ímpar;
   function parOuImpar(n) {
      return n % 2 === 0 ? 'Par' : 'Ímpar';
   }
   console.log('4 - Verificar Par ou Impar: 4, 11, 7');
   console.log(parOuImpar(4));
   console.log(parOuImpar(11));
   console.log(parOuImpar(7));
   console.log('');


   //5. Verificar se um número é positivo, negativo ou zero;
   function verificarNumero(n) {
      if (n > 0) {
         return 'Positivo';
      } else if (n < 0) {
         return 'Negativo';
      } else if (n == 0) {
         return 'Zero';
      }
   }
   console.log('5 - Verificar se Positivo, Negativo ou Zero: 10, -15 e 0');
   console.log(verificarNumero(10));
   console.log(verificarNumero(-15));
   console.log(verificarNumero(0));
   console.log('');


   //6. Estrutura de Repetição: forEach (para arrays). Imprimir os elementos de um array
   const ArrayList = [1, 5, 8, 10, 15, 20];
   console.log('6 - Imprimir elementos do Array: ');
   ArrayList.forEach(function (e) {
      console.log(e);
   });
   console.log('');


   //7. Estrutura de Repetição: for...of (para strings). Iterar sobre os caracteres de uma
   //string usando for...of;
   //o for of percorre cada elemento (caractere) de uma sequência iterável
   const minhaString = 'Emilly';
   console.log('7 - Iterar sobre String: ');
   for (const texto of minhaString) {
      console.log(texto);
   }
   console.log('');


   //8. Estrutura de Repetição: while com break. Encontrar o primeiro número divisível por 5
   //e 7 usando while com break; (pesquisar)
   function encontrarDivisivel57() {
      let n = 1;

      while (true) {
         if (n % 5 === 0 && n % 7 === 0) {
            break; // Sai do loop quando encontrar o primeiro
         }
         n++;
      }

      return n;
   }
   const primeiro = encontrarDivisivel57();
   console.log("8 - Primeiro número divisível por 5 e 7:", primeiro);


   // 9. Estrutura de Repetição: do...while com continue. Imprimir apenas os números
   //pares de 1 a 10 usando do...while com continue;
   //Continue: pula o restante do corpo do loop na iteração atual e avança para a próxima iteração
   console.log('');
   let i = 1;
   console.log('9 - Números Pares de 1 a 10:');
   do {
      if (i % 2 !== 0) {
         i++;
         continue;
      }

      console.log(i);
      i++;
   } while (i <= 10);
   console.log('');


   // 10. Estrutura de Repetição: for...in (para arrays). Iterar sobre os índices
   //de um array usando for...in;
   //O loop for...in é usado para percorrer as propriedades de um objeto ou índices do array.
   const ArrayList2 = ['e', 'm', 'i', 'l', 'l', 'y'];
   console.log('10 - Iterar sobre os Índices: ');
   for (const e in ArrayList2) {
      console.log(`i[${e}]=${ArrayList2[e]}`);
   }
   console.log('');


   // 11. Estrutura de Repetição: while com múltiplas condições. 
   //Encontrar o menor número divisível por 2, 3 e 5 usando while com múltiplas condições;
   function encontrarMenor35() {
      let n = 1;
      while (true) {
         if (n % 2 === 0 && n % 3 === 0 && n % 5 === 0) {
            return n;
         }
         n++;
      }
   }
   const menor = encontrarMenor35();
   console.log("11 - Menor número divisível por 2, 3 e 5:", menor);
   console.log('');


   // 12. Estrutura de Repetição: for...of com indexação. 
   //Imprimir os elementos de um array com suas posições usando for...of com indexação;
   console.log('12- Indexação do elementos do Array: ');
   const ArrayList3 = ['Emilly', 'Soares', 'Santos'];

   for (const [i, e] of ArrayList3.entries()) {
      console.log(`i[${i}]=${e}`);
   }
   console.log('');


   // 13. Estrutura de Repetição: while com incremento personalizado. 
   //Imprimir os números de 1 a 10 pulando de 2 em 2 usando while com incremento personalizado;
   let a = 1;
   console.log('13 - Números de 1 a 10, pulando de 2 em 2: ');
   while (a <= 10) {
      console.log(a);
      a += 2;
   }
   console.log('');


   // 14. Estrutura de Repetição: do...while com confirmação de saída. 
   //Mostrar uma mensagem ao usuário e pedir para ele informar se deseja fechar a mensagem ou não;
   let res;
   do {
      res = prompt("14 - Deseja fechar a mensagem? (Responda sim ou não)");
   } while (res !== 'sim');


   //15. Escreva um algoritmo que solicite um número inteiro positivo ao usuário e verifique
   //se ele é um número primo.Um número primo é aquele que é divisível apenas por 1 e por ele mesmo;
   function numeroPrimo(numero) {
      if (numero <= 1) {
         return false;
      }

      for (let i = 2; i <= Math.sqrt(numero); i++) {
         if (numero % i === 0) {
            return false;
         }
      }

      return true;
   }
   const resposta = parseInt(prompt("15 - Verificar se é Primo: Digite um número inteiro positivo:"));
   if (numeroPrimo(resposta)) {
      console.log(` 15 - ${resposta} é Primo.`);
   } else {
      console.log(` 15 - ${resposta} é Não Primo.`);
   }


   //16. Escreva um algoritmo que imprima uma contagem regressiva de 10 até 1,
   //mostrando cada número no console;
   console.log('');
   console.log('Números de 10 a 1:');
   for (let i = 10; i >= 1; i--) {
      console.log(i);
   }


   //17. Escreva um algoritmo que solicite ao usuário dois números inteiros e imprima todos
   //os números pares entre esses dois valores(inclusive eles próprios);
   console.log('');
   const num1 = parseInt(prompt("17 - Números pares entre dois valores: Digite o primeiro número:"));
   const num2 = parseInt(prompt("17 - Digite o segundo número:"));

   console.log(`17 - Números pares entre ${num1} e ${num2}:`);
   for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
      if (i % 2 === 0) {
         console.log(i);
      }
   }


   //18. Jogo de Adivinhação
   //Math.random() Gera um número aleatório
   //Math.floor() Arredonda para o próximo inteiro
   function adivinharNumero() {
      const numDescobrir = Math.floor(Math.random() * 100) + 1;
      let qtd = 0;

      function adivinhar() {
         const palpite = parseInt(prompt("18 - Digite seu palpite entre 1 e 100:"));
         qtd++;

         if (palpite === numDescobrir) {
            console.log(`Você adivinhou o número ${numDescobrir} em ${qtd} tentativas.`);
         } else if (palpite < numDescobrir) {
            console.log("Dica, o número é maior.");
            setTimeout(adivinhar, 100); // Adiciona atraso de 100ms antes de exibir a próxima mensagem
         } else {
            console.log("Dica, o número é menor.");
            setTimeout(adivinhar, 100); // Adiciona atraso de 100ms antes de exibir a próxima mensagem
         }
      }

      adivinhar();
   }

   adivinharNumero();

}
main();





