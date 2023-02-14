/*
Elabore uma função que recebe uma string e o array de alunos descrito acima e retorne um array filtrando os alunos conforme sua Naturalidade.
Nome da função: filtro_naturalidade
Paramêtros: string, array [{}, {}, ...]
Retorno: array [number, number, number]
*/

//const alunos = require('./alunos.json')

function filtro_naturalidade(estado,alunos)
{
    return alunos.filter(alunos => alunos.naturalidade === estado)
}


//console.log(filtro_naturalidade("Paulista - PE",alunos))
