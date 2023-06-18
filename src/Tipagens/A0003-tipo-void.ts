function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome:      'Edson',
    sobreNome: 'Luiz',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobreNome)
    }
};

semRetorno('Edson', 'Luiz')
pessoa.exibirNome();

export { pessoa };
