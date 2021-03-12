# Aqui serão mostrados alguns cenários de testes para verificar que a aplicação está funcionando como deveria:

## Testes 1 e 2: Valor de cliente = 0 / Valor de cliente = -1 (negativo)
  ### Resultado: Pop-up de alerta com a seguinte mensagem: "Insira um valor maior que 0 Pressione F5 ou recarregue a pagina para utiliza-lo novamente"
  ### Vale ressaltar que se acessar ao console, as informações estáticas estarão preenchidas, mas todas NaN (not a number) definido, logo, a aplicação não evaluará nenhum valor

## Teste 2 - Testaremos o resultado para um caso onde a divisão tenha resto 0:
  ### Cliente = 10
  ### Todos os itens com a quantidade 10
  ### Valor Total = 5800 centavos
  ### Valor por Pessoa = 580
  ### Todos os clientes pagarão a mesma quantia

## Preço dos itens:
  ### item1 = 34
  ### item2 = 77
  ### item3 = 83 
  ### item4 = 57 
  ### item5 = 87 
  ### item6 = 63 
  ### item7 = 63 
  ### item8 = 51 
  ### item9 = 65 

## Teste 3 - Testaremos o resultado para um caso onde a divisão tenha resto diferente de 0 e com quantidades de itens aleatórias:
  ### Clientes = 13
  ### item1 = 45, Valor por Item = quantidade * preco = 45 * 34 = 1530
  ### item2 = 67, Valor por Item = quantidade * preco = 67 * 77 = 5159
  ### item3 = 2, Valor por Item = quantidade * preco =  2 * 83 = 166
  ### item4 = 87, Valor por Item = quantidade * preco = 87 * 57 = 4959
  ### item5 = 15, Valor por Item = quantidade * preco = 15 * 87 = 1305
  ### item6 = 6, Valor por Item = quantidade * preco = 6 * 63 = 378
  ### item7 = 275, Valor por Item = quantidade * preco = 275 * 63 = 17325
  ### item8 = 0, Valor por Item = quantidade * preco = 0 * 51 = 0
  ### item9 = 9, Valor por Item = quantidade * preco = 9 * 65 = 585
  ### Valor total dos itens = 31407 centavos
  ### O resto da divisão é 12, logo é o número de clientes que pagarão 1 centavo a mais cada

## Teste 4 - Testaremos o resultado para um caso onde a divisão tenha resto diferente de 0 e com quantidades de itens aleatórias mas com alguns que contenham valor 0 e valor negativo:
  ### Clientes = 71
  ### item1 = 0, Valor por Item = quantidade * preco = 0 * 34 = 0
  ### item2 = 0, Valor por Item = quantidade * preco = 0 * 77 = 0
  ### item3 = -245, Valor por Item = quantidade * preco =  0 * 83 = 0
  ### item4 = -34567, Valor por Item = quantidade * preco = 0 * 57 = 0
  ### item5 = 15, Valor por Item = quantidade * preco = 15 * 87 = 1305
  ### item6 = 6, Valor por Item = quantidade * preco = 6 * 63 = 378
  ### item7 = 275, Valor por Item = quantidade * preco = 275 * 63 = 17325
  ### item8 = 0, Valor por Item = quantidade * preco = 0 * 51 = 0
  ### item9 = 9, Valor por Item = quantidade * preco = 9 * 65 = 585
  ### Valor total dos itens = 19593 centavos
  ### O resto da divisão é 68, logo é o número de clientes que pagarão 1 centavo a mais cada