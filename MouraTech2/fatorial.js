
function fatorial (numeros)
{
    let resultado = 1;
    let impressao = `${numeros}! = `;
    for(let i=numeros; i>0; i--)
    {
        resultado *=i;
        impressao += `${i}`;
        if(i>1)
        {
            impressao += ` X `;
        }
    }
    impressao += ` = ${resultado}`;

    return impressao;
}

console.log(fatorial(5));