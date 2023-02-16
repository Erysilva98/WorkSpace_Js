function palindromo(palavra) {
    const reverso = palavra.split("").reverse().join("");
    const verifique = palavra.toLowerCase() === reverso.toLowerCase();
    
    if(palavra === reverso)
    {
        return { palindromo: verifique, palavra: reverso };
    }
    else
    {
        return { palindromo: verifique, palavra: reverso };
    }
    
} 
  
console.log(palindromo("Ana"))