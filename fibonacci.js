function fibonacci(numeros)
{
    let resultado = [];
    let impresao = ``
    let anterior = 0;
    let proximo = 1;
    let temp = 0;

    for(let i= 2; i<= numeros; i++)
    {
        temp = anterior + proximo;
        anterior = proximo;
        proximo = anterior;
        impresao += `${temp}`;

        if(i === numeros-1)
        {
            impresao += `...`;
        }
        else
        {
            impresao += `, `
        }
    }
    return impresao
}

console.log(fibonacci(7))