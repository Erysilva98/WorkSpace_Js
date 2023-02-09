function febre(temperaturas)
{
    let estado = [];

    for(let i=0; i < temperaturas.length; i++)
    {
        let atual = temperaturas[i];

        if(atual >= 41)
        {
            estado[i] = "Hipertemia"
        }
        else
        if(atual >= 39.6 )
        {
            estado[i] = "Febre Alta"
        }
        else
        if(atual >= 37.8)
        {
            estado[i] = "Febre"
        }
        else
        if(atual >= 35.1)
        {
            estado[i] = "Normal"
        }
        else
        if(atual <= 35)
        {
            estado[i] = "Hipotermia"
        }
    }
    return estado
}

console.log(febre([35.41,33.12,41.06,38.9,40.22]))