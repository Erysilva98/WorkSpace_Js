/*
Elabore uma função que recebe o array de alunos descrito acima e retorne uma string contendo apenas os e-mails dos alunos separados por ;.
Nome da função: email
Paramêtros: array [{}, {}, ...]
Retorno: string
*/

//const alunos = require('./alunos.json')

function email(alunos)
{
    const dados = alunos.map(alunos => alunos.email)
    const info = dados.join(";")

    return info
}

//console.log(email(alunos))