//O readonly é para não deixar mudar a variavel ou array
const dadosCliente1: readonly [number, string] = [1, 'Edson']
const dadosCliente2: [number, string] = [2, 'Valentina']
const dadosCliente3: [number, string, string?] = [3, 'Rodrigo']

dadosCliente2[0] = 1
dadosCliente2[1] = 'Edson'

console.log(dadosCliente1, dadosCliente2)

//Readonly
const array1: readonly string[]     = ['Pokemon Fire Red'  , 'Resident Evil 6']
const array2: ReadonlyArray<string> = ['Pokemon Leaf Green', 'Resident Evil 4']

console.log(array1, array2)
