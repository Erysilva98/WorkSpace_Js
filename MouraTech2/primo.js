/*
Um número é classificado como primo se ele é maior do que um e é divisível apenas por um e por ele mesmo. Apenas números naturais são classificados como primos.

Crie uma função que recebe um número (number) e retorna se ele é primo.

Nome da função: primo

Paramêtros: (number)

Retorno: boolean
*/

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