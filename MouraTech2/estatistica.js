// Elabore uma função que recebe um array com vários números e que retorne um array contendo o maior, o menor e a média.

/*
Elabore uma função que recebe um array com vários números e que retorne um array contendo o maior, o menor e a média.
Nome da função: estatistica
Paramêtros: array [number, ...]
Retorno: array [number, number, number]

exemplo 1:

Entrada: [ 8, 4, 12 ]

Saída: [ 12, 4, 8 ]

exemplo 2:

Entrada: [ 5, 1, 9, 2, 3, 0, 1 ]

Saída: [ 9, 0, 3 ]
*/


function estatistica(numeros){
    let maiorValor = Math.max(...numeros)
    let menorValor = Math.min(...numeros)
    let soma = 0;

    for(let i=0; i < numeros.length; i++){
        soma += numeros[i];
    }
    let media = soma / numeros.length;

    return [maiorValor, menorValor, media]
}

numeros = [5,1,9,2,3,0,1]

console.log(estatistica(numeros));