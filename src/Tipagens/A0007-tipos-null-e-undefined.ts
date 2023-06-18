/* NULL */
let x; //x começa null(nulo)
if (typeof x === 'undefined') x = 20; //Mas daqui pra frente ele virou um número(number)
console.log(x * 2);

export function createPerson(
    firstName:string,
    lastName?:string
): {
    firstName : string;
    lastName? : string;
} {
    return{
        firstName,
        lastName
    }
}

export function squareOf(x: any) {
    if (typeof x === 'number') return x * x;
    return null;
}

const squareOfTwo = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoString === null ){
    console.log('Conta Inválida');
} else {
    console.log(squareOfTwo);
}

/* UNDEFINED */
