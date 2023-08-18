//ARRAY FILTER
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

const pessoasTerminadasComA = pessoas.filter(pessoa => pessoa.nome.charAt(pessoa.nome.length - 1) === 'a')
console.log(pessoasTerminadasComA)



console.log('---------------------------------')
//ARRAY MAP

const numerosDobrados = numeros.map(num => num * 2)
console.log(numerosDobrados)

const nomePessoa = pessoas.map(pessoa => pessoa.nome)
console.log(nomePessoa)

const idades = pessoas.map(pessoa => ({ idade: pessoa.idade }))
console.log(idades)

const objId = pessoas.map((pessoa, i) => {
    const newObj = { ...pessoa }
    newObj.id = i
    return newObj
})
console.log(objId)
console.log(pessoas)





console.log('---------------------------------')
//----ARRAY REDUCE----

const totalPares = numeros.reduce((acumulator, valorAtual, i, array) => {
    if(valorAtual % 2 === 0) acumulator += valorAtual
    return acumulator
}, 0)

console.log(totalPares)


const maisVelha = pessoas.reduce((acumulator, valorAtual) => {
    if(acumulator.idade > valorAtual.idade) return acumulator    
})
console.log(maisVelha)