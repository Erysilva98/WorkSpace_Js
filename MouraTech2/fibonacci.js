/*
Na matemática, a sucessão de Fibonacci, é uma sequência de números inteiros, começando normalmente por 0 e 1, na qual cada termo subsequente corresponde à soma dos dois anteriores.
Exemplo: 0, 1, 1, 2, 3, 5, 8, 13...

Crie uma função que recebe um número N e retorna N elementos da sequencia de Fibonacci.
Nome da função: fibonacci
Paramêtros: (number)
Retorno: string

exemplo 1:
Entrada: 7
Saída: 0, 1, 1, 2, 3, 5, 8...

exemplo 2:
Entrada: 1
Saída: 0...

exemplo 3:
Entrada: 3
Saída: 0, 1, 1...
*/

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