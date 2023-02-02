// Elabore uma função que recebe um valor numérico (number) e retorne se ele é par ou ímpar:
// Nome da função: par_impar
// Paramêtros: (number)
// Retorno: string

function par_impar(numero){

    if(numero % 2 == 0)
    {
        return 'par';
    }
    return 'ímpar';
}

// Teste
//console.log(par_impar(7));