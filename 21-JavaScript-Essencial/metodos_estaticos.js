function teste() {
    console.log('____Meu teste____')
}

class ControleRemoto {
    constructor(tv, ) {
        this.tv = tv
        this.volume = 0
        teste()
    }

    //Metodos de instancia
    aumentarVolume() {
        this.volume += 2
    }
    diminuirVolume() {
        this.volume -= 2
    }

    //Metodo estatico
    static soma(x, y) {
        console.log('Valor somado _', x + y)
    }


} 

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1)


ControleRemoto.soma(10, 20)
console.log(Math.random())
