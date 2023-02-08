function primo(numeros)
{
    if(numeros <= 1)
    {
        return false
    }
    for(let i = 2; i< numeros; i++)
    {
        if(numeros % i === 0)
        {
            return false;
        }
    }
    return true;
}

console.log(primo(10))