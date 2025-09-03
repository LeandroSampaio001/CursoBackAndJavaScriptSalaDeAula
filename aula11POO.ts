class Cliente {
    nome: string;
    cpf: string;

    constructor(nome: string, cpf: string) {
        this.nome = nome;
        this.cpf = cpf;
    }

    saudar(): void {
        console.log(`Olá ${this.nome}, seu CPF é: ${this.cpf}`);
    }
}

// Criando instâncias fora da classe
const id1 = new Cliente("João", "03487564743");
const id2 = new Cliente("Maria", "03484564743");

// Chamando métodos
id1.saudar();
id2.saudar();
