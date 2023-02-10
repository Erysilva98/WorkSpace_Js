const alunos = require('./alunos.json')

function email(alunos)
{
    
    const dados = alunos.filter(alunos => alunos.email)

    dados.forEach(alunos => {
        return `${alunos.email};`
    },);
}

console.log(email(alunos));