class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(this.nome, '_Eai galera!')
    }

}

function Pessoa2(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function() {
    console.log(this.nome, '_Eai galera!222')
}


const p1 = new Pessoa('Tálison', 'Miguel')
const p2 = new Pessoa2('Troyyer', 'Amancio')
console.log(p1)
console.log(p2)
p1.falar()
p2.falar()