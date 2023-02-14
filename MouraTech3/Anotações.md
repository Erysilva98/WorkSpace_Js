

- Questão 4   Aniversariantes do mês

    Elabore uma função que receba o mês (number) e o array de alunos descrito acima e retorne um array de objetos ordenado pelo dia contendo data (DD/MM) e nome.

    Nome da função: aniversariantes
    Paramêtros: number, array [{}, {}, ...]
    Retorno: array [{}, {}, ...]

    exemplo 1:

    Entrada: (2, Alunos)

    Saída:

        [
            { data: '01/02', nome: 'Hugo Erick Drumond' },
            { data: '01/02', nome: 'Ricardo Theo Yuri Lopes' },
            { data: '01/02', nome: 'Samuel Danilo Costa' },
            { data: '03/02', nome: 'Sandra Carolina Barbosa' },
            { data: '04/02', nome: 'Alice Jéssica Giovanna Vieira' },
            { data: '06/02', nome: 'Nelson Henry Mendes' },
            { data: '07/02', nome: 'Ian Augusto Rezende' },
            { data: '08/02', nome: 'Tiago Cauã Elias Rocha' },
            { data: '09/02', nome: 'Gabrielly Flávia dos Santos' },
            { data: '09/02', nome: 'Melissa Cristiane Castro' }
        ]

- Questão 5 Média de idade da turma

    Elabore uma função que receba o array de alunos descrito acima e retorne a média de idade da turma (number).

    Observação: As idades e a média das idades deve ser calculada em anos (apenas números inteiros), para isto é possível usar a função Math.floor.

    Nome da função: media_idade

    Paramêtros: array [{}, {}, ...]

    Retorno: number

    exemplo 1:

    Entrada: Alunos

    Saída: 22

- Questão 8 Ordenar por data de nascimento

    Elabore uma função que recebe o array de alunos descrito acima e retorne o mesmo array ordenando os alunos por data de nascimento.

    Nome da função: ordenar_nascimento

    Paramêtros: array [{}, {}, ...]

    Retorno: array [{}, {}, ...]

- Questão 9 Semestre de entrada

    Elabore uma função que recebe o array de alunos descrito acima e retorne um array de objetos contendo os semestres de entrada dos alunos, a quantidade e o percenctual de alunos deste semestre ( conforme o exemplo).

    Nome da função: semestres_entrada

    Paramêtros: array [{}, {}, ...]

    Retorno: {}

    exemplo 1:

    Entrada: Alunos da turma 02 do Mouratech

    Saída:

        [
            { semestre: '2019.2', quantidade: 4, percentual: '20.00 %' },
            { semestre: '2021.1', quantidade: 5, percentual: '25.00 %' },
            { semestre: '2022.1', quantidade: 9, percentual: '45.00 %' },
            { semestre: '2022.2', quantidade: 1, percentual: '5.00 %' },
            { semestre: '2023.1', quantidade: 1, percentual: '5.00 %' }
        ]

- Questão 10 

    Elabore uma função que recebe um termo de busca (string) e o array de alunos descrito acima e retorne um array contento os alunos que possuem este termo de busca em seu nome.

    Observação: A pesquisa deve desconsiderar a acentuação e se as letras são maiúsculas ou minúsculas. Por exemplo ao pesquisar "jose" deve ser encontrado "José" e ao pesquisar "José" deve ser encontrado "Joseane".

    Nome da função: pesquisar_nome

    Paramêtros: string, array [{}, {}, ...]

    Retorno: array [{}, {}, ...]

    exemplo 1:

    Entrada: ("eir", Alunos)

    Saída:

        [
            {
                email: 'ajgv@discente.ifpe.edu.br',
                matricula: '20222MTFS0001',
                nome: 'Alice Jéssica Giovanna Vieira',
                nascimento: '04/02/2000',
                sexo: 'Feminino',
                naturalidade: 'Petrolina - PE',
                turma: 0
            },
            {
                email: 'erm3@discente.ifpe.edu.br',
                matricula: '20222MTFS0006',
                nome: 'Eliane Rosa Monteiro',
                nascimento: '15/01/2000',
                sexo: 'Feminino',
                naturalidade: 'Belo Jardim - PE',
                turma: 0
            },
            {
                email: 'tchm@discente.ifpe.edu.br',
                matricula: '20222MTFS0019',
                nome: 'Thiago Caleb Heitor Moreira',
                nascimento: '21/01/2002',
                sexo: 'Masculino',
                naturalidade: 'Recife - PE',
                turma: 0
            }
        ]

