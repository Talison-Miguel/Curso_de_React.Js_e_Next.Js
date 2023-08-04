const pessoa = {
    nome: 'Talison',
    sobrenome: 'Miguel',
    idade: 18,
    endereco: {
        rua: 'Avenida Brasil',
        numero: 320
    }
}

const { endereco: {rua, numero}, ...rest} = pessoa

console.log(pessoa)
console.log(rest)
console.log(rua, numero)