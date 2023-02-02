// Elabore uma função que recebe três valores numéricos (number) e retorne um array contendo os 3 números em ordem decrescente:
// Nome da função: ordenar_3_numeros
// Paramêtros: (number, number, number)
// Retorno: [number, number, number]

function ordenar_3_numeros(numero1, numero2, numero3)
{
    const array = [numero1, numero2, numero3]
    const tamanho = array.length;
    
    for(let i = 0; i < tamanho; i++)
    {
        for(let j = 0; j < (tamanho -i -1); j++)
        {
            if(array[j] < array[j+1])
            {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1]= temp;
            }
        }
    }

    return array
}

// //Teste 
// console.log(ordenar_3_numeros(7, 4, 8))
// console.log(ordenar_3_numeros(-10, 3, 1))