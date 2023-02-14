/*
Elabore uma função que recebe dois números (number), que representam um valor inicial e um valor final, e retorna um array contendo todos os valores dentro deste intervalo (incluindo os valores passados).

Nome da função: intervalo

Paramêtros: (number, number)

Retorno: array [number, number, number, ...]

exemplo 1:

Entrada: (1, 5)

Saída: [ 1, 2, 3, 4, 5 ]

exemplo 2:

Entrada: (0, -5)

Saída: [ 0, -1, -2, -3, -4, -5 ]
*/

function intervalo(inicio,fim)
{
    let resultado = [];

    if (fim > inicio)
    {
        for(let i=inicio; i<= fim; i++)
        {
            resultado.push(i)
        }
        return resultado;
    }
    else
    {
        for(let i= fim; i<= inicio; i++)
        {
            resultado.push(i)
        }
        return resultado.reverse();
    }
}

console.log(intervalo(1,5))
console.log(intervalo(0,-5))