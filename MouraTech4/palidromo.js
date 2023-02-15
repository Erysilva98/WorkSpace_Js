function palindromo(palavra)
{
    const reverso = palavra.split('').reverse().join('')

    if(palavra == reverso)
    {
        return {palindromo: true, palavra: `${reverso}`}
    }
    else
    {
        return {palindromo: false, palavra: `${reverso}`}
    }
}

console.log(palindromo("Ana"))
console.log(palindromo("Paulo"))