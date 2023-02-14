/*
O aumento da temperatura é uma reação do corpo a infecções e outras doenças e quando apresentamos febre isso significa que algo não está bem com o nosso corpo.
Crie uma função que recebe um array de valores, contendo medidas de temperatura do corpo, e retorne um array de mesmo tamanho informando a situação (Hipertermia, Febre Alta, Febre, Normal, Hipotermia).

Nome da função: febre
Paramêtros: array
Retorno: array
*/

function febre(temperaturas)
{
    let estado = [];

    for(let i=0; i < temperaturas.length; i++)
    {
        if(temperaturas[i] >= 41)
        {
            estado.push("Hipertermia")
        }
        else
        if(temperaturas[i] >= 39.6)
        {
            estado.push("Febre Alta")
        }
        else
        if(temperaturas[i] >= 37.8)
        {
            estado.push("Febre")
        }
        else
        if(temperaturas[i] >= 35.1)
        {
            estado.push("Normal")
        }
        else
        if(temperaturas[i] <= 35)
        {
            estado.push("Hipotermia")
        }
    }
    return estado
}

temperaturas = [35.41,33.12,41.06,38.9,40.22]

console.log(febre(temperaturas))