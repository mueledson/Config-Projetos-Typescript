const objetoA: {
    readonly chaveA       : string,
    chaveB                : string,
} = {
    chaveA: 'chaveA',
    chaveB: 'chaveB',
}

objetoA.chaveB = 'Outro valor';

console.log(objetoA);
