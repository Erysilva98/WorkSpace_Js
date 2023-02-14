
/*
Elabore uma função que recebe o array de alunos descrito acima e retorne um objeto contendo as naturalidades e a quantidade de alunos de cada naturalidade conforme o exemplo.

Nome da função: estatistica_naturalidade

Paramêtros: array [{}, {}, ...]

Retorno: {}
*/

//const alunos = require('./alunos.json')

function estatistica_naturalidade(alunos)
{
    const dados = alunos.reduce( (numeros, alunos) => {
        if(numeros[alunos.naturalidade])
        {
            numeros[alunos.naturalidade]++
        }
        else
        {
            numeros[alunos.naturalidade] = 1
        }
        return numeros
    },{})       

    return dados
}

//console.log(estatistica_naturalidade(alunos))