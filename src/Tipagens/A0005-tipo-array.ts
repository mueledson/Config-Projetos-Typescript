//Existem duas formas de fazer arrays
// Array<Type> ou Type[]

//Array<T>
function multiplicaArgs(...args: Array<number>):number {
    return args.reduce((ac, valor) => ac * valor)
}
//quando a função é tal tipo a variavel de resposta será do mesmo tipo
const result = multiplicaArgs(1,  2, 3)

console.log(result)

//Type[]

function ConcatenaString(...args: string[] ):string {
    return args.reduce((ac, valor) => ac + valor)
}
//quando a função é tal tipo a variavel de resposta será do mesmo tipo
const concatenacao = ConcatenaString('Olarr ', 'Edson')

console.log(concatenacao)

//Outro exemplo
function toUpperCase(...args: string[] ):string {
    return args.reduce((valor) => valor.toUpperCase())
}
//quando a função é tal tipo a variavel de resposta será do mesmo tipo
const upper = toUpperCase('Olarr ')

console.log(upper)
