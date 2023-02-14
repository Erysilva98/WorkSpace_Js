/*
A Progressão Aritmética (P.A.) é uma sequência de números onde a diferença entre dois termos consecutivos é sempre a mesma. Essa diferença constante é chamada de razão da P.A..

Sendo assim, a partir do segundo elemento da sequência, os números que surgem são resultantes da soma da razão com o valor do elemento anterior.

Exemplo: (4, 7, 10, 13, 16, ...) é uma P.A. infinita de razão 3.

Dito isto, elabore uma função que recebe três valores inteiros (number), inicio, razão e quantidade de elementos, e retorne a Progressão Aritmética:

Nome da função: pa

Paramêtros: (number, number, number)

Retorno: string


*/

function pa(inicio, razao, quantidade)
{
    let resultado = ''

    for(let i =0; i <= quantidade; i++)
    {
        
        if(i === quantidade)
        {
            resultado += `...`
        }
        else
        {
            resultado += `${inicio + i * razao}`;
            if(i < quantidade-1)
            {
                resultado += `, `
            }
        }
    }
    return resultado;
}

console.log(pa(4,3,5))