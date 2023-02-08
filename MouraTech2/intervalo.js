function intervalo(inicio,fim)
{
    let resultado = [];
    if(fim >= 0)
    {
        for(let i = inicio; i<= fim; i++)
        {
            resultado.push(i)
        }
    }
    else
    {
        for(let i= inicio; i>= fim; i++)
        {
            resultado.push(i)
        }
    }
    return resultado;
}

console.log(intervalo(0,-5));