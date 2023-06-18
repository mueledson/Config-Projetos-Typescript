// eslint-disable

// Tipos básicos (aqui ocorre interfêrencia de tipos)
let nome    : string  = 'Edson'; // Qualquer tipo de strings: '' ou "" ou ``
let idade   : number  = 13;      // 10, 1.57, -5.55. 0xf00d, 0b1010, 0o7744
let adulto  : boolean = false;   // true or false
let simbolo : symbol  = Symbol('qualquer-symbol'); //symbol
// let big     : bigint  = 1n;   // bigint

// Arrays

/*FORMA 1*/let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5]
/*FORMA 2*/let arrayDeNumeros2: number[]     = [6, 7, 8, 9, 10]
/*FORMA 1*/let arrayDeStrings: Array<string> = ['a', 'a', 'a']
/*FORMA 2*/let arrayDeStrings2: string[]     = ['a','b', 'c']

// Objetos

/* FORMA 1 */
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    nome : 'Muel',
    idade: 13
};

console.log(pessoa.nome);

// Functions
//            x :number, y :number são tipagens de parametros function soma(): number é tipagem de função
function soma(x1:number, y1:number): number {
    return x1 + y1;
}
