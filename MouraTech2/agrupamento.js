
function agrupamento(numeros)
{
    let contador1 = 0;
    let contador2 = 0; 
    let contador3 = 0; 
    let contador4 = 0;

    for(let i=0; i < numeros.length; i++)
    {
        if((numeros[i] >=0) && (numeros[i] <=25))
        {
            contador1 += 1;
        }
        else
        if((numeros[i] > 25) && (numeros[i] <=50))
        {
            contador2 += 1;
        }
        else
        if((numeros[i] >50) && (numeros[i] <=75))
        {
            contador3 += 1;
        }
        else
        if((numeros[i] >75) && (numeros[i] <=100))
        {
            contador4 += 1;
        }
    }

    return [contador1,contador2,contador3,contador4];
}

numeros = [10,5,80,60,25,99,81,92];

console.log(agrupamento(numeros))