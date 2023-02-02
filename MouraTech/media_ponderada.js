function media_ponderada(nota1, nota2)
{
    const mediaSemestre = ((nota1 * 4) + (nota2 *6)) / 10;

    console.log(mediaSemestre);

    if (mediaSemestre >= 90)
    {
        return "A";
    }
    else
    if (mediaSemestre >= 75)
    {
        return "B";
    }
    else
    if (mediaSemestre >= 60)
    {
        return "C";
    }
    else
    if (mediaSemestre >= 40)
    {
        return "D";
    }
    else
    {
        return "E";
    }
}

//Teste
console.log(media_ponderada(70,85));