#Vamos ao teste!
Imagine uma lista de compras. Ela possui:

Itens
- Quantidade de cada item
- Preço por unidade/peso/pacote de cada item
- Desenvolva uma função (ou método) que irá receber uma lista de compras (como a detalhada acima) e uma lista de e-mails. Aqui, cada e-mail representa uma pessoa.

##A função deve:

- Calcular a soma dos valores, ou seja, multiplicar o preço de cada item por sua quantidade e somar todos os itens
- Dividir o valor de forma igual entre a quantidade de e-mails
- Retornar um mapa/dicionário onde a chave será o e-mail e o valor será quanto ele deve pagar nessa conta
⚠️ IMPORTANTE

Quando fizer a divisão, é importante que não falte nenhum centavo! Cuidado quando tiver, por exemplo, um valor total de R$ 1,00 para ser dividido entre 3 e-mails. Isso daria uma dízima infinita. No entanto, o correto aqui é que duas pessoas fiquem com o valor 0,33 e a terceira fique com 0,34.
Para facilitar e como boa prática, não trabalhe com valores com decimais. Ou seja, ponto flutuante ou float. Use inteiros para representar os valores! Como a menor unidade na nossa moeda é o centavo, use valores inteiros em centavos. Assim, um real será representado por 100 (cem centavos é igual a um real).
Deixe documentado como você "testa" a solução. Por exemplo: "eu coloco o arquivo numa pasta/desafio e executo javac Desafio.java e depois java Desafio". Testes automatizados são bem vindos, mas não são necessários.

# Aplicação "Calculadora do Mundo dos Salgadinhos"

## Para utilizá-la, deve-se seguir os seguintes passos:
  ### Abrir o arquivo "index.html"
  ### Preencher os campos campos relativos ao numero de clientes e quantidade de salgados comprados
  ### Ao terminar o preenchimento, acessar o Console do browser
        Para isso, utilizar o comando Ctrl+Shift+I ou clicar no botão direito do mouse e selecionar a opção "Inspecionar"
        Após, clicar no botão "Console"
  ### Os resultados irão aparecer nessa guia

## Informações importantes:
  ### Os resultados da calculadora irão aparecer sempre em centavos
  ### Valores fracionários serão arredondados em toda e qualquer etapa do processo
  ### Valores menores que 0 irão se comportar da seguinte forma:
      Para clientes: o programa emitirar um alerta com a seguinte frase "Insira um valor maior que 0
      Pressione F5 ou recarregue a pagina para utiliza-lo novamente"
      Para itens: o programa irá assumir qualquer quantidade de itens menor ou igual a 0 como 0 e continuará com a escolha da quantidade do próximo item, isso significa que ele entrará na conta final com valor = 0 
