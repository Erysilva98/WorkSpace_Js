/*
Elabore uma função que recebe um array com valores em Dólares americanos e converta todos para Reais.
Considere à taxa de câmbio de Dólar para Real de R$ 5,0420 (02/02/2023) .
Nome da função: cambio
Paramêtros: array
Retorno: array
*/

const valor = [100,50,199.90,32,999.90]

function cambio(valor)
{
    const dolar = 5.0420
    const real = []
    
    for(let i=0; i<valor.length; i++)
    {
        resultado = valor[i] * dolar
        let convertido = `${resultado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
        real.push(convertido)
        
    }
    
    return real
    
}

console.log(cambio(valor))