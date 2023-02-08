function pa(inicio, razao, quantidade)
{
    let resultado = ''

    for(let i =0; i <= quantidade; i++)
    {
        
        if(i === quantidade)
        {
            resultado += `...`
        }
        else
        {
            resultado += `${inicio + i * razao}`;
            if(i < quantidade-1)
            {
                resultado += `, `
            }
        }
    }
    return resultado;
}

console.log(pa(4,3,5))