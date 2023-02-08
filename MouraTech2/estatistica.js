// Elabore uma função que recebe um array com vários números e que retorne um array contendo o maior, o menor e a média.

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