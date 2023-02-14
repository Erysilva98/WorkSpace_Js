/*
Escreva uma função que recebe um valor numérico N e retorna uma STRING com a seqüência de valores do cálculo de N! (Fatorial) e o seu resultado. Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120

Nome da função: fatorial

Paramêtros: (number)

Retorno: string

exemplo 1:

Entrada: 5

Saída: 5! = 5 X 4 X 3 X 2 X 1 = 120
*/

function fatorial (numeros)
{
    let resultado = 1;
    let impressao = `${numeros}! = `;
    for(let i=numeros; i>0; i--)
    {
        resultado *=i;
        impressao += `${i}`;
        if(i>1)
        {
            impressao += ` x `;
        }
    }
    impressao += ` = ${resultado}`;

    return impressao;
}

console.log(fatorial(5));