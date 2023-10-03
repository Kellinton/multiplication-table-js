   // Cria um input element
   var inserirNumero = document.createElement("input");

   //tipo do input
   inserirNumero.type = "text";
   inserirNumero.placeholder = "Digite um número: ";


   // Adiciona o input element ao corpo do HTML
   document.body.appendChild(inserirNumero);

   //classe para estilizar no CSS depois
   inserirNumero.classList.add("estiloInput");


   //criação do botão
   var botao = document.createElement("button");
   //valor ao campo do botão
   botao.innerHTML = "Confirmar"
   //adicionar o botao ao html
   document.body.appendChild(botao);
   //estilo ao botão
   botao.classList.add("estiloBotao");

   var botaoReset = document.createElement("button");
   botaoReset.innerHTML = "Resetar";
   document.body.appendChild(botaoReset);
   botaoReset.classList.add("estiloBotao");



   var botoes = document.getElementById("botoes");
   botoes.appendChild(botao);
   botoes.appendChild(botaoReset);


   // Cria um parágrafo para exibir o número digitado
   var paragrafoNumeroDigitado = document.createElement("p");
   paragrafoNumeroDigitado.classList.add("paragrafoNumero")


   //evento de clique
   botao.addEventListener("click", function () {
       // armazenando o valor que o usuário digitou (.value acessa o valor atualmente digitado no campo)
       var numeroDigitado = inserirNumero.value;
       // var corpoDocumento = document.body;
       var caixaConteudo = document.getElementById("caixaConteudo");



       for (var indice = 1; indice <= 10; indice++) {
           // Cria um novo parágrafo para cada iteração
           var paragrafoNumeroDigitado = document.createElement("p");
           paragrafoNumeroDigitado.textContent = numeroDigitado + " x " + indice + " = " + numeroDigitado * indice;

           // Adiciona o novo parágrafo ao corpo do documento
           // corpoDocumento.appendChild(paragrafoNumeroDigitado);
           caixaConteudo.appendChild(paragrafoNumeroDigitado);
       }

   });

   botaoReset.addEventListener("click", function () {
       // Limpar o conteúdo da caixaConteudo
       caixaConteudo.innerHTML = "";
       // Limpar o valor no input
       inserirNumero.value = "";
       // Remover a classe 'corpo'
       caixaConteudo.classList.remove("corpo");
   });
