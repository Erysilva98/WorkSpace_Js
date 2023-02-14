//const alunos = require('./alunos.json')

function mudar_email(alunos)
{
    const dados = alunos.filter(alunos => {
        if(alunos.email){
            const alterar = alunos.email.replace("discente.ifpe.edu.br", "gmail.com")
            return alunos.email = alterar
        }
    })

    return dados
}

//console.log(mudar_email(alunos))