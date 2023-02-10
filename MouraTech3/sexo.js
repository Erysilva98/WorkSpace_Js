
function sexo(alunos)
{
    let masculino = 0, feminino =0;
    const tam = alunos.length

    for(let i=0; i<tam; i++)
    {
        if(alunos[i].sexo === "Masculino") masculino ++
        else feminino ++
    }

    return [tam, masculino, feminino]
}

//const alunos = require('./alunos.json')

console.log(sexo(alunos))

