// Elabore uma função que recebe um um número (number) e retorne a tabuada de multiplicação deste número (string).

function tabuada(numero){

    let resultado = '';

    for(let i=0; i<= 10; i++)
    {
        if(i === 10)
        {
            resultado+=(numero+' x '+i+' = '+(numero*i));
        }
        else
        {
            resultado+=(numero+' x '+i+' = '+(numero*i)+', ')
        }
    } 

    return resultado;
}

console.log(tabuada(5));