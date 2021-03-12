const loja = alert('Bem vindo ao Mundo dos Salgadinhos')
const clientes = parseInt(prompt('Por gentileza, informe o numero de compradores?\n(Apenas valores inteiros)'))
let item1, item2, item3, item4, item5, item6, item7, item8, item9 = 0

if (clientes >0){
  item1 = parseInt(prompt('Gostaria de comprar quantas coxinhas?\nCoxinha 1un: 34 centavos\n(valores fracionarios serao arredondados)'))
  item2 = parseInt(prompt('Coxinha com requeijao 1un: 77 centavos\n(valores fracionarios serao arredondados)'))
  item3 = parseInt(prompt('Bolinha de queijo 1un: 83 centavos\n(valores fracionarios serao arredondados)'))
  item4 = parseInt(prompt('Quibe 1un: 57 centavos\n(valores fracionarios serao arredondados)'))
  item5 = parseInt(prompt('Quibe com cremily 1un: 87 centavos\n(valores fracionarios serao arredondados)'))
  item6 = parseInt(prompt('Risoli de queijo e presunto 1un: 63 centavos\n(valores fracionarios serao arredondados)'))
  item7 = parseInt(prompt('Risoli de camarao 1un: 63 centavos\n(valores fracionarios serao arredondados)'))
  item8 = parseInt(prompt('Empadinha de carne 1un: 51 centavos\n(valores fracionarios serao arredondados)'))
  item9 = parseInt(prompt('Enroladinho de salsicha 1un: 65 centavos\n(valores fracionarios serao arredondados)'))
} else {
  alert('Insira um valor maior que 0\nPressione F5 ou recarregue a pagina para utiliza-lo novamente')
}

const salgadosArr = [
  {
  item: 'Coxinha',
  quantidade: item1,
  precoPorQtd:34,
  valorTotal: item1*34
  },
  {
  item: 'Coxinha com requeijao',
  quantidade:item2,
  precoPorQtd:77,
  valorTotal: item2*77
  },
  {
  item: 'Bolinha de Queijo',
  quantidade: item3,
  precoPorQtd:83,
  valorTotal: item3*83
  },
  {
  item: 'Quibe',
  quantidade: item4,
  precoPorQtd:57,
  valorTotal: item4*57
  },
  {
  item: 'Quibe com cremily',
  quantidade:item5,
  precoPorQtd:87,
  valorTotal: item5*87
  },
  {
  item: 'Risoli de queijo e presunto',
  quantidade:item6,
  precoPorQtd:63,
  valorTotal: item6*63
  },
  {
  item: 'Risoli de camarao',
  quantidade:item7,
  precoPorQtd:63,
  valorTotal: item7*63
  },
  {
  item: 'Empadinha de carne',
  quantidade:item8,
  precoPorQtd:51,
  valorTotal: item8*51
  },
  {
  item: 'Enroladinho de salsicha',
  quantidade:item9,
  precoPorQtd:65,
  valorTotal: item9*65
  },
]

// Loop for pra garantir que os valores são positivos 
for(i=0; i<salgadosArr.length; i++){
  if (salgadosArr[i].quantidade < 0){
    salgadosArr[i].quantidade = 0
    salgadosArr[i].valorTotal = 0
}
}

// Utilizando o Reduce pois ele garante que o array será percorrido após a validação do loop for
const valorTotalItens = salgadosArr.reduce((prevVal, elem) => prevVal + (elem.precoPorQtd * elem.quantidade), 0)
console.log(`Valor total: ${valorTotalItens} centavos`)

const clientesArr = []
const valorPorPessoa = () => {
  const valorPorPessoa = parseInt(valorTotalItens / clientes)
  const restoDaDivisao = valorTotalItens % clientes
  if(restoDaDivisao>0){
    // Definindo fora do escopo do for para que o j possa ser reutilizado
    let j
    for(j=1; j<=restoDaDivisao; j++){
      clientesArr.push(
        {
          id: j,
          valor: valorPorPessoa + 1,
          cliente: `O cliente ${j} paga: ${valorPorPessoa+1} centavos`
        }
        )
      }
      console.log(`Como a divisao do valor da conta pelo numero de clientes gera um valor fracionario, alguns clientes terao que pagar 1 centavo a mais para que nao a conta seja dividida de forma justa:\nO numero de clientes que pagarao a mais: ${restoDaDivisao}\nE o valor que eles pagarao:${valorPorPessoa+1}`)
      // variável para determinar as pessoas que vão pagar a menos
      const pessoasResto = clientes - restoDaDivisao
        for(k=1; k<=pessoasResto;k++){
          clientesArr.push(
            {
              id: j -1 + k,
              valor: valorPorPessoa,
              cliente: `O cliente ${j -1 +k} paga: ${valorPorPessoa} centavos`
            }
            )
          }
        } else {
          for(let i=1; i<=clientes; i++){
            clientesArr.push(
              {
                id: i,
                valor: valorPorPessoa,
                cliente: `O cliente ${i} paga: ${valorPorPessoa} centavos`
              }
              )
            }
            console.log(`o valor por pessoa e: ${valorPorPessoa} centavos`)
          }
          console.log(salgadosArr)
    console.log(clientesArr)
} 
valorPorPessoa()
