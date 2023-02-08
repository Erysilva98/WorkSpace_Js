function fibonacci(numeros)
{
    let resultado = [0,1];

    for(let i= 2; i<numeros; i++)
    {
        resultado.push(resultado[i-2] + resultado[i-1])
    }
    return resultado.join(",")
}

console.log(fibonacci(7))