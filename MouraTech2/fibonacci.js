function fibonacci(numeros)
{
    let termo0 = 0, termo1 = 1, temp;
    let impresao = ``

    for(let i=0; i < numeros; i++)
    {
        if(i === 0)
        {
            numeros += i;
        }
        else 
        if(i > 0)
        {
            temp = termo1;
            termo1 = termo1 + termo0;
            termo0 = temp;        
        }

        if(i < (numeros-1))
        {
            impresao += `${termo0}, `
        }
        else
        {
            impresao += `${termo0}...`
        }
    }

    return impresao
}

console.log(fibonacci(1))