function bhaskara(ax2, bx, c)
{
    const delta = bx ** 2 - 4 * ax2 * c;
    let resultado = [];

    if (delta <0) return resultado
    else
    if (delta === 0)
    {
        const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
        return [x1]  
    }
    else
    {
        const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
        resultado += x1
        const x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
        resultado += x2

        return [x1, x2]
    }
}

console.log(bhaskara(-3,18,-15))