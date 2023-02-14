/*
Elabore uma função que recebe o array de alunos descrito acima e retorne o mesmo array alterando o domínio dos emails de: @discente.ifpe.edu.br para: @gmail.com

Nome da função: mudar_email
Paramêtros: array [{}, {}, ...]
Retorno: array [{}, {}, ...]
*/

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