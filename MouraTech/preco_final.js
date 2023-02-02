// Elabore uma função que recebe dois valores, um referente ao preço de um produto (number) e um referente à forma de pagamento (number), conforme tabela abaixo, e retorne o valor final do produto após o desconto.
// Código Condição de pagamento
// 1. À vista em dinheiro ou PIX, recebe 15% de desconto
// 2. À vista no cartão de débito, recebe 10% de desconto
// 3. No cartão de crédito, sem parcelamento, recebe 5% de desconto
// 4. No cartão de crédito, dividido em até 10x sem juros, recebe 0% de desconto
// Nome da função: preco_final
// Paramêtros: (number, number)
// Retorno: (string)
// Observação: Retornar o valor no formato monetário (localizado para o Brasil), por exemplo R$ 10,50.

function preco_final(preco,pagamento)
{
    if (pagamento === 1)
    {
        valor = preco - (preco * (15/100));
        // Converte o valor para String
        convert = valor + ""
        return `R$ ${convert},00`;
    }
    else
    if (pagamento === 2)
    {
        valor = preco - (preco * (10/100));
        convert = valor + ""
        return `R$ ${convert},00`;
    }
    else
    if (pagamento === 3)
    {
        valor = preco - (preco * (5/100));
        convert = valor + ""
        return `R$ ${convert},00`;
    }
    else
    if (pagamento === 4 )
    {
        convert = preco + ""
        return `R$ ${convert},00`;
    }
}

//Teste
console.log(preco_final(100,3));
