/*
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar.
Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12.
Como retorno deve ser passado um vetor com no máximo 2 valores, um para cada possível resultado.
Observação: Caso o delta seja negativo o array deve ser retornado vazio, se delta for igual a zero o array deve ser retornado com apenas um valor.
Nome da função: bhaskara
Paramêtros: (number)
Retorno: string
*/

function bhaskara(ax2, bx, c)
{
    const delta = bx ** 2 - 4 * ax2 * c;
    let resultado = [];

    if (delta <0) return resultado
    else
    if (delta === 0)
    {
        const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
        return [x1]  
    }
    else
    {
        const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
        resultado += x1
        const x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
        resultado += x2

        return [x1, x2]
    }
}

console.log(bhaskara(-3,18,-15))