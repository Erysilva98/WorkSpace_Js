/*
Elabore uma função que recebe três valores numéricos (number), que representam A, B e C, e retorne se a soma de A + B é menor que C:
Nome da função: menor
Paramêtros: (number, number, number)
Retorno: boolean
*/

function menor(A,B,C){
    soma = A + B;

    if (soma < C)
    {
        return true;
    }

    return false;
}

// Teste
//console.log(menor(3,1,6));