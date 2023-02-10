//
const alunos = require('./alunos.json')

function emails(alunos)
{
    const dados = '';

    for( let i=0; i<alunos.length; i++)
    {
        const filtro = alunos.filter(alunos => alunos.naturalidade === email)
        dados += `${filtro};`
    }
    return dados
}

//
console.log(emails(alunos))