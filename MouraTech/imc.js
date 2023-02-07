// O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar umaindicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )²
// Elabore uma função que recebe dois valores, um referente a altura (number) e um referente ao peso (number), e mostre sua condição de acordo com a tabela abaixo:
// IMC em adultos Condição
// Abaixo de 18,5 Baixo peso
// Entre 18,5 e 24,9 Peso normal
// Entre 25 e 29,9 Excesso de peso
// Acima de 30 Obesidade
// Acima de 35 Obesidade extrema
// Nome da função: imc
// Paramêtros: (number, number)
// Retorno: (string)

function imc(altura,peso)
{
    const calculoImc = peso / (altura * altura);

    if (calculoImc < 18.5)
    {
        return 'Baixo peso';
    }
    else
    if (calculoImc >= 18.5 && calculoImc < 25)
    {
        return 'Peso normal';
    }
    else
    if (calculoImc >= 25 && calculoImc < 30)
    {
        return 'Excesso de peso';
    }
    else
    if (calculoImc >= 30 && calculoImc <= 35)
    {
        return 'Obesidade';
    }
    return 'Obesidade extrema';
}
// // Teste
console.log(imc(1.85, 110.2));
console.log(imc(1.80, 82.6))