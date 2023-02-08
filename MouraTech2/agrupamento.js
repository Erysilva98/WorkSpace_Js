
function agrupamento(numeros)
{
    let contador1 = 0;
    let contador2 = 0; 
    let contador3 = 0; 
    let contador4 = 0;

    for(let i=0; i< numeros.length; i++)
    {
        if(numeros[i] >= 0 && numeros <= 25)
        {
            contador1++;
            console.log(contador1)
        }
        else
        if( numeros[i] >25 && numeros <= 50)
        {
            contador2++;
        }
        else
        if( numeros[i] >50 && numeros <= 75)
        {
            contador3++;
        }
        else
        if(numeros[i] > 75 && numeros <=100)
        {
            contador4++;
        }
    }
    return [contador1,contador2,contador3,contador4];
}

numeros = [10,5,80,60,25,99,81,92];

console.log(agrupamento(numeros))