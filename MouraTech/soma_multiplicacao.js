// Elabore uma função que recebe dois valores numéricos (number, number) e retorne a soma deles caso sejam iguais ou a multiplicação deles caso sejam diferentes:
// Nome da função: soma_multiplicacao
// Paramêtros: (number,number)
// Retorno: number

function soma_multiplicacao(numero1, numero2)
{
    if (numero1 === numero2)
    {
        return numero1 + numero2;
    }

    return numero1 * numero2;
}

//Teste
//console.log(soma_multiplicacao(2,2));
//console.log(soma_multiplicacao(2,3));