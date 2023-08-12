const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numFilter = numeros.filter(num => num > 10)
console.log(numFilter)



const pessoas = [
    { nome: 'Talison', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Joao', idade: 55 },
    { nome: 'Dudu', idade: 19 },
    { nome: 'Max', idade: 32 },
    { nome: 'Vitoria', idade: 47 }
]

const pessoasNome5 = pessoas.filter(pessoa => pessoa.nome.length >= 5)
console.log(pessoasNome5)

const pessoasMaisVelhas = pessoas.filter(pessoa => pessoa.idade >= 50)
console.log(pessoasMaisVelhas)

const pessoasTerminadasComA = pessoas.filter(pessoa => pessoa.nome.toLowerCase.charAt(pessoa.nome.length - 1) === 'a')
console.log(pessoasTerminadasComA)