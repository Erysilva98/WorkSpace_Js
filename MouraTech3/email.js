//const alunos = require('./alunos.json')

function email(alunos)
{
    const dados = alunos.map(alunos => alunos.email)
    const info = dados.join(";")

    return info
}

//console.log(email(alunos))