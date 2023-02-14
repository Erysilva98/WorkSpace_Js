
/*
Elabore uma função que recebe o array de alunos descrito acima e retorne um array contendo a quantidade de alunos, a quantidade de alunos do sexo Masculino e a quantidade de alunos do sexo Feminino.

Nome da função: sexo
Paramêtros: array [{}, {}, ...]
Retorno: array [number, number, number]
*/

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

