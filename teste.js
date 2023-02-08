// Elabore uma função que recebe dois números (number), que representam um valor inicial e um valor final, e retorna um array contendo todos os valores dentro deste intervalo (incluindo os valores passados).

function intervalo(inicio,fim)
{
    let resultado = [];

    for(let i= -inicio; i<= fim; i++)
    {
        if(i >= 0)
        {
            resultado.push(i);
        }
        else
        {
            resultado.push(i);
        }
    }
    return resultado;
}

console.log(intervalo(0,-5));