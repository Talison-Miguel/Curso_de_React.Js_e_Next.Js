
function falaOi() {
    console.log('oi')
}
falaOi()

const souUmDado = function () {
    console.log('Sou um Dado')
} 

function execultaFuncao(funcao) {
    console.log('Vou execultar sua função abaixo:')
    funcao();
}
execultaFuncao(souUmDado)

const fArrow = () => {
    console.log('Arrow Function')
}
fArrow()

const obj = {
    falar () {
        console.log('funçao como obj')
    }
}

obj.falar()