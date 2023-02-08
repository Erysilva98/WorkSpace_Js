function intervalo(inicio,fim)
{
    let resultado = [];

    if (fim > inicio)
    {
        for(let i=inicio; i<= fim; i++)
        {
            resultado.push(i)
        }
        return resultado;
    }
    else
    {
        for(let i= fim; i<= inicio; i++)
        {
            resultado.push(i)
        }
        return resultado.reverse();
    }
}

console.log(intervalo(1,5))
console.log(intervalo(0,-5))