enum Cores {
    AZUL = 1,    //indice: 0 com esse = 1 ele muda de 0 para 1
    VERMELHO,    //indice: 1                                 2
    AMARELO,     //indice: 2                                 3
    ROXO,        //indice: 3                                 4
}

enum Cores {
    BRANCO = 5,
    PRETO,
    CINZA
}

// Frase elaborada console.log(`Indice ${Cores.AZUL} é ${Cores[1]}`)
// console.log(Cores)

function escolhaACor(cor: Cores): void {
    console.log(Cores[cor])
}

escolhaACor(Cores.PRETO)
