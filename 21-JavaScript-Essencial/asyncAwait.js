function random(min = 0, max = 3) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg,tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('Cai no erro!')
                return
            }

            resolve(msg.toUpperCase() + ' - Passei na promise')
            return
        }, tempo)
    })
}


// esperaAi('Fase 1', random(0, 3))
//     .then(response => {
//         console.log(response)
//         return esperaAi('Fase 2', random())
//     })
//     .then(response => {
//         console.log(response)
//         return esperaAi('Fase 3', random())
//     })
//     .then(response => {
//         console.log(response)
//         return response
//     })
//     .then(response => {
//         console.log('Terminamos na fase', response)
//     })
//     .catch(err => console.log(err))


async function execulta() {
    try{
        const fase1 = await esperaAi('Fase 1', 1000)
        console.log(fase1)

        // setTimeout(() => {
        //     console.log('Essa promisse estava pendente: ', fase1)
        // }, 1100)
    
        const fase2 = await esperaAi('Fase 2', random(0, 3))
        console.log(fase2)
    
        const fase3 = await esperaAi('Fase 3', random(0, 3))
        console.log(fase3)

        console.log('Terminamos na fase', fase3)
    } catch(err) {
        console.log(err)
    }
}

execulta()