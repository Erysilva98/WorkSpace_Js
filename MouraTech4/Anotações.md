### Desafio Lista de JavaScript

- 01 Câmbio de Moedas

    Elabore uma função que recebe um array com valores em Dólares americanos e converta todos para Reais.
    Considere à taxa de câmbio de Dólar para Real de R$ 5,0420 (02/02/2023) .
    Nome da função: cambio
    Paramêtros: array
    Retorno: array

    exemplo 1:

    Entrada: [ 100, 50, 199.90, 32, 999.90 ]
    Saída: ["R$ 504,20","R$ 252,10","R$ 1.007,90","R$ 161,34","R$ 5.041,50"]

- 02 Cores HTML/CSS

    No HTML e no CSS, as cores podem ser representas pelo nome em Inglês (apenas algumas cores), pela codificação RGB ou pela codificação Hexadecimal.
    Elabore uma função que recebe 3 números, que representão o padrão RGB (Red, Green e Blue) e retorne o código Hexadecimal desta cor.
    Nome da função: rgbToHexa
    Paramêtros: (number, number, number)
    Retorno: string

    exemplo 1:
    Entrada: 50, 175, 104
    Saída: #32af68

- 03 Palíndromo

    Palíndromo, do grego palin (novo) e dromo (percurso), é toda palavra ou frase que pode ser lida de trás pra frente e que, independente da direção, mantém o seu sentido.
    Dito isto, elabore uma função que recebe uma palavra e retorne um objeto com com duas propriedades:
    palindromo: true ou false
    palavra: a palavra recebida como argumento da função invertida

    Nome da função: palindromo
    Paramêtros: (string)
    Retorno: { palindromo: boolean, palavra: string}

    Alguns Palíndromos

    exemplo 1:
    Entrada: ("Ana")
    Saída: { palindromo: true, palavra: 'anA' }

    exemplo 2:
    Entrada: ("Paulo")
    Saída: { palindromo: false, palavra: 'oluaP' }

    exemplo 3:
    Entrada: ("reviver")
    Saída: { palindromo: true, palavra: 'reviver' }

04 - Esquerda, Volver!

    Este ano o sargento está tendo mais trabalho do que de costume para treinar os recrutas. Um deles é muito atrapalhado, e de vez em quando faz tudo errado – por exemplo, ao invés de virar à direita quando comandado, vira à esquerda, causando grande confusão no batalhão.
    Vamos ajudar este recruta!
    Elabore uma função que recebe uma string que contém apenas letras E e D, onde E significa Esquerda, Volver! e D significa Direita, Volver!.
    A cada comando, o recruta, que começa olhando para o Norte, deve girar sobre o mesmo ponto e dar um quarto de volta na direção correspondente ao comando.
    Ao final dos comandos a função deve retonar para que direção o recruta está olhando: Norte, Sul, Leste ou Oeste.

    Nome da função: recruta
    Paramêtros: string
    Retorno: string

    exemplo 1:
    Entrada: EEED
    Saída: Sul

    exemplo 2:
    Entrada: D
    Saída: Leste

05 - Saque

    Escreva uma função de saque, que receber um valor (number) e retorna um objeto com as cédulas e quantidades respectivas.
    Se não for possível efetuar o saque deve ser retornado um objeto vazio.
    Observação: Cédulas disponíveis R$5, R$10, R$20, R$50, R$100

    Nome da função: saque
    Paramêtros: (number)
    Retorno: {}

    exemplo 1:
    Entrada: 1290
    Saída: { 'R$100': 12, 'R$50': 1, 'R$20': 2, 'R$10': 0, 'R$5': 0 }

    exemplo 2:
    Entrada: 11
    Saída: {}

06 - Volleyball

    Caio acompanha todos os jogos do seu clube de Volleyball preferido. De cada temporada ele guarda anotado todos os placares sempre colocando os Sets ganhos por seu time na frete.

    Exemplo: 3x1,3x0,2x3,3x0,1x3,3x1

    Elabore uma função que recebe uma string com os resultados anotados por Caio em uma temporada e retorne um array contendo a quantidade de vitórias, derrotas, sets vencidos e sets perdidos.
    Nome da função: volleyball
    Paramêtros: string
    Retorno: array [number, number, number, number]

    exemplo 1:

    Entrada: 3x1,3x0,2x3,3x0,1x3,3x1
    Saída: [ 4, 2, 15, 8 ]

07 - Cifra de César

    Júlio César, imperador romano de 100 a.C. a 44 a.C., utilizava um código para proteger as mensagens enviadas a seus generais. Assim, se a mensagem caísse em mãos inimigas, a informação não poderia ser compreendida. Cada letra do alfabeto era substituída pela letra três posições à frente, ou seja, o “A” era substituído pelo “D”, o “B” pelo “E”, o “C” pelo “F”, e assim sucessivamente. Qualquer código que tenha esse padrão é considerado uma Cifra de César, também conhecida como Código de César.

    Elabore uma função que recebe uma string e a codifique com a cifra de César.
    OBS: No computador cada carctere é representado por um código numérico, implemente a cifra de César adicionando mais 3 a este código para gerar o novo caractere.

    Nome da função: cifraCesar
    Paramêtros: string
    Retorno: string

    exemplo 1:

    Entrada: Foco e Simplicidade.

    Saída: Irfr#h#Vlpsolflgdgh1

08 - Jogo da velha

    Elabore uma função que recebe um array que representa um jogo da velha e retorne um dos sequintes estados: "Vez do jogador X.", "Vez do jogador O.", "Jogador X venceu!", "Jogador O venceu!", "Deu velha!".

    OBS: Considere que o jogo sempre inicia pelo jogador X e que as posições 0, 1 e 2 do array são a primeira linha do jogo, as posições 3, 4 e 5 do array são a segunda linha do jogo, e que as posições 6, 7 e 8 do array são a terceira linha do jogo.

    Nome da função: velha
    Paramêtros: array
    Retorno: string

    exemplo 1:

    Entrada: ["X"," ","O"," ","O","X","O","X"," "].
    Saída: Jogador O venceu!

09 - Dígito de Auto Conferência
    A sigla DAC significa Dígito de Auto Conferência. Pode também ser chamado de dígito verificador (DV). Este dígito é encontrado em documentos pessoais, números de agências e contas bancárias, boletos e outros, e serve envitar erros validando os dados mesmo sem consulta a base de dados.

    Elabore uma função que recebe uma string com o número da agência ou da conta do Banco do Brasil e retorne um booleano informando se o número informado é válido.
    O banco do Brasil utiliza o cálculo do DAC módulo 11 padronizado pela FEBRABAN que é realizado conforme abaixo:.
    O DAC (Dígito de Auto-Conferência) módulo 11, de um número é calculado multiplicando cada algarismo, pela seqüência de multiplicadores 2,3,4,5,6,7,8,9,2,3,4.... posicionados da direita para a esquerda.

    A soma dos produtos dessa multiplicação é dividida por 11, obtém-se o resto da divisão, este resto deve ser subtraído de 11, o produto da subtração é o DAC.

    11 - resto(176/11) = 11 - 0 = 11

    No caso do Banco do Brasil quando o DAC calculado é 11 o mesmo é substituído por 0 e quando o DAC calculado é 10 o mesmo é substituído por X.
    Neste exemplo então teriamos o resultado 01230067896-0 onde 0 é o DAC/DV.
    Nome da função: validar_dacBB
    Paramêtros: string
    Retorno: boolean

    exemplo 1:
    Entrada: 01230067896-0.
    Saída: true

    exemplo 2:
    Entrada: 01230067896-5.
    Saída: false

10 - Copa do Mundo
​
    Escreva uma função que receberá como parâmetro um array de objetos(como o abaixo) que representam os jogos de um dos grupo da copa do mundo.

        [
            {Time1: "Suíça",    P1: 1, Time2: "Camarões", P2: 0},
            {Time1: "Brasil",   P1: 2, Time2: "Sérvia",   P2: 0},
            {Time1: "Camarões", P1: 3, Time2: "Sérvia",   P2: 3},
            {Time1: "Brasil",   P1: 1, Time2: "Suíça",    P2: 0},
            {Time1: "Sérvia",   P1: 2, Time2: "Suíça",    P2: 3},
            {Time1: "Camarões", P1: 1, Time2: "Brasil",   P2: 0},
        ];
    A função deverá retornar outro array de objetos com a classificação deste grupo, conforme o exemplo abaixo:

        [
            { Time: 'Brasil',     P: 6, J: 3, V: 2, E: 0, D: 1, GP: 3, GC: 1, SG:  2 },
            { Time: 'Suíça',      P: 6, J: 3, V: 2, E: 0, D: 1, GP: 4, GC: 3, SG:  1 },
            { Time: 'Camarões',   P: 4, J: 3, V: 1, E: 1, D: 1, GP: 4, GC: 4, SG:  0 },
            { Time: 'Sérvia',     P: 1, J: 3, V: 0, E: 1, D: 2, GP: 5, GC: 8, SG: -3 }
        ]
    Legenda: P - Pontos; J - Jogos; V - Vitórias; E - Empates; D - Derrotas; GP - Gols pró (marcados); GC Gols contra (sofridos); SG - Saldo de gols.

    Observação: Em casos de empate nos pontos seguir os seguintes critérios de desempate: Mais vitórias (V), Maior saldo de gols (SG) e Mais gols marcados (GP).

    Nome da função: ranking

    Paramêtros: [{}, {}, ...]

    Retorno: [{}, {}, ...]

