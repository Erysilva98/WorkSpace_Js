function ipv4_bits(ip)
{
    let partes = ip.split(".")
    let binario = "";

    for (let i=0; i < partes.length; i++)
    {
        let inicio = parseInt(partes[i].toString(2));

        while(inicio.length < 8)
        {
            inicio = "0" + inicio
        }
        binario += inicio
    }
    return binario;
}

console.log(ipv4_bits("192.168.0.1"))