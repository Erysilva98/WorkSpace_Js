const alunos = require('./alunos.json')

function estatistica_naturalidade(alunos)
{
    return alunos.reduce( (numeros, alunos) =>{
        const nacionalide = alunos.nacionalide
        
        numeros[nacionalide] = numeros[nacionalide] ? numeros[nacionalide] + 1 : 1

        return numeros
    }, {})

}

console.log(estatistica_naturalidade(alunos))