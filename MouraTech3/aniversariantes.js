const alunos = require("./alunos.json")

function aniversariantes(numero,alunos)
{
    const data = []
    const datafilter = alunos.filter(( elem, nascimento, alunos ) => {
        if(alunos.indexOf(elem) === nascimento)
        {
            if(elem.nascimento[4] === 0 && elem.nascimento[5] === 2)
            {
                console.log(elem.nascimento)
            }
            //data.push(elem.nascimento[4])
        }
    })
    return true
}

aniversariantes(2,alunos)