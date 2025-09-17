//Crie a classe Funcionario com:
//Atributos: nome(public), salario(private)
//Getter: getSalario().
//Setter:setSalario(valor: number) que rejeita valores menores que 1.518,00(salário mínimo).
// Método: exibirDados

class Funcionario {
    private _salario: number;

    constructor(public nome: string, salarioInicial: number) {
        this._salario = 0;
        this.salario = salarioInicial;
    }
    get salario(): number {
        return this._salario;
    }

    set salario(valor: number) {
        if (valor >= 1518.00) {
            this._salario = valor;
        } else {
            console.error(`Tentativa de atribuir um salário inválido (R$ ${valor.toFixed(2)}) para ${this.nome}. O valor não foi alterado.`);
        }
    }
    public exibirDados(): void {
        console.log("--- Dados do Funcionário ---");
        console.log(`Nome: ${this.nome}`);
        console.log(`Salário: R$ ${this.salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        console.log("---------------------------\n");
    }
}

console.log("Criando funcionário 'Maria' com salário válido...");
const func1 = new Funcionario("Maria", 2000);
func1.exibirDados(); // Nome: Maria, Salário: R$ 2.000,00

// funcionário com salário inválido
console.log("Criando funcionário 'Carlos' com salário inválido...");
const func2 = new Funcionario("Carlos", 1000); // Vai mostrar o erro no console!
func2.exibirDados(); // Nome: Carlos, Salário: R$ 0,00 (porque o valor 1000 foi rejeitado)

//Alterando o salário de 'Maria' para um valor válido
console.log("Aumentando o salário de Maria...");
func1.salario = 3500; // Aqui estamos usando o SETTER
func1.exibirDados(); // Nome: Maria, Salário: R$ 3.500,00

//alterar o salário de 'Maria' para um valor inválido
console.log("Tentando reduzir o salário de Maria para um valor inválido...");
func1.salario = 1200; // Vai mostrar o erro no console!
func1.exibirDados(); // O salário não mudou! Continua R$ 3.500,00