function random(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg,tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('Cai no erro')
                return
            }

            resolve(msg.toUpperCase() + ' - Passei na promise')
            return
        }, tempo)
    })
}

    


const promises = [
    esperaAi('Promise 1', random(1,5)),
    esperaAi('Promise 2', random(1,5)),
    esperaAi('Promise 3', random(1,5)),
    // esperaAi(100, random(1,5)),
]

// Promise.race(promises)
//     .then(valor => console.log(valor))
//     .catch(err => console.log(err))



function baixaPag() {
    const emCache = true

    if(emCache) {
        return Promise.resolve('Pagina em cache')
    } else {
        return esperaAi('Baixei a pag', 3000)
    }
}

baixaPag()
    .then(response => {
        console.log(response)
    })
    .catch(e => console.log("Erro", e))