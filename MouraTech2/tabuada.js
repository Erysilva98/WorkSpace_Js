/*
Elabore uma função que recebe um um número (number) e retorne a tabuada de multiplicação deste número (string).

Nome da função: tabuada
Paramêtros: number
Retorno: string

exemplo 1:
Entrada: 5
Saída: 5 x 0 = 0, 5 x 1 = 5, 5 x 2 = 10, 5 x 3 = 15, 5 x 4 = 20, 5 x 5 = 25, 5 x 6 = 30, 5 x 7 = 35, 5 x 8 = 40, 5 x 9 = 45, 5 x 10 = 50

exemplo 2:
Entrada: 8
Saída: 8 x 0 = 0, 8 x 1 = 8, 8 x 2 = 16, 8 x 3 = 24, 8 x 4 = 32, 8 x 5 = 40, 8 x 6 = 48, 8 x 7 = 56, 8 x 8 = 64, 8 x 9 = 72, 8 x 10 = 80
*/

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