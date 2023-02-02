// Elabore uma função que recebe um valor numérico (number) e retorne dobro dele caso ele seja positivo ou o triplo dele caso ele seja negativo:
// Nome da função: dobro_triplo
// Paramêtros: (number)
// Retorno: number

function dobro_triplo(numero)
{
    if(numero > 0)
    {
        return numero * 2;
    }

    return numero * 3;
}

//Teste
// console.log(dobro_triplo(7));
// console.log(dobro_triplo(-4));