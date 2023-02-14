/*
Elabore uma função que recebe um array de números e conte quantos estão nos seguintes intervalos: [0 até 25], [>25 até 50], [>50 até 75], [>75 até 100].

A função deve retornar um array contendo as quatro contagens.

Nome da função: agrupamento

Paramêtros: array [number, number, number, ...]

Retorno: array [number, number, number, number]

exemplo 1:

Entrada: [ 10, 5, 80, 60, 25, 99, 81, 92 ]

Saída: [ 3, 0, 1, 4 ]
*/

function agrupamento(numeros)
{
    let contador1 = 0;
    let contador2 = 0; 
    let contador3 = 0; 
    let contador4 = 0;

    for(let i=0; i < numeros.length; i++)
    {
        if((numeros[i] >=0) && (numeros[i] <=25))
        {
            contador1 += 1;
        }
        else
        if((numeros[i] > 25) && (numeros[i] <=50))
        {
            contador2 += 1;
        }
        else
        if((numeros[i] >50) && (numeros[i] <=75))
        {
            contador3 += 1;
        }
        else
        if((numeros[i] >75) && (numeros[i] <=100))
        {
            contador4 += 1;
        }
    }

    return [contador1,contador2,contador3,contador4];
}

numeros = [10,5,80,60,25,99,81,92];

console.log(agrupamento(numeros))