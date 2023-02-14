const data = '03/05/1981'

const hoje =new Date()
const nasc = new Date(`${ano}-${mes}-${dia}`);
const idade_ms = hoje - nasc;
const idade = idade_ms/1000 / 60 / 60 / 24 / 365.25;

console.log(idade)