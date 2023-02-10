//const alunos = require('./alunos.json')

function filtro_naturalidade(estado,alunos)
{
    return alunos.filter(alunos => alunos.naturalidade === estado)
}


//console.log(filtro_naturalidade("Paulista - PE",alunos))
