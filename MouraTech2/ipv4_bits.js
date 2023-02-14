/*
IPv4 (Internet Protocol versão 4) é o formato de endereço padrão que permite que todos os computadores na internet se comuniquem entre si.
O IPv4 é uma sequência de dígitos de 32 bits que normalmente é representada por quatro números, cada um entre 0 e 255
Crie uma função que recebe um endereço IPv4 e converta ele para uma sequência de 32 bits.

Nome da função: ipv4_bits
Paramêtros: (string)
Retorno: string

exemplo 1:
Entrada: 192.168.0.1
Saída: 11000000101010000000000000000001

exemplo 2:
Entrada: 172.16.0.254
Saída: 10101100000100000000000011111110
*/

function ipv4_bits(ip)
{
    let partes = ip.split(".")
    let binario = "";

    for (let i=0; i < partes.length; i++)
    {
        let inicio = parseInt(partes[i]).toString(2);

        while(inicio.length < 8)
        {
            inicio = "0" + inicio
        }
        binario += inicio
    }
    return binario;
}

console.log(ipv4_bits("192.168.0.1"))