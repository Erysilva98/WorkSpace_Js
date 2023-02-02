// Elabore uma função que recebe dois valores, um referente a altura (number) e um referente ao sexo (string) sendo "m" para masculino e "f" para feminino, e calcule seu peso ideal, utilizando as seguintes fórmulas:
// ● para homens: (72.7 * altura) – 58;
// ● para mulheres: (62.1 * altura) – 44.7.
// Nome da função: peso_ideal
// Paramêtros: (number, string)
// Retorno: (number)

function peso_ideal(altura,sexo)
{
    if (sexo == 'm' || sexo == 'M')
    {
        const calculo = (72.7 * altura) - 58;
        return calculo
    }
    else
    if (sexo == 'f' || sexo == 'F')
    {
        const calculo = (62.1 * altura) - 44.7;
        return calculo
    }

}

// // Teste
// console.log(peso_ideal(1.85,'m'));
// console.log(peso_ideal(1.85,'M'));
// console.log(peso_ideal(1.80,'f'));
// console.log(peso_ideal(1.80,'F'));
