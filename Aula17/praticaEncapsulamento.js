//Crie a classe Funcionario com:
//Atributos: nome(public), salario(private)
//Getter: getSalario().
//Setter:setSalario(valor: number) que rejeita valores menores que 1.518,00(salário mínimo).
// Método: exibirDados
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salarioInicial) {
        this.nome = nome;
        this._salario = 0;
        this.salario = salarioInicial;
    }
    Object.defineProperty(Funcionario.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        set: function (valor) {
            if (valor >= 1518.00) {
                this._salario = valor;
            }
            else {
                console.error("Tentativa de atribuir um sal\u00E1rio inv\u00E1lido (R$ ".concat(valor.toFixed(2), ") para ").concat(this.nome, ". O valor n\u00E3o foi alterado."));
            }
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.exibirDados = function () {
        console.log("--- Dados do Funcionário ---");
        console.log("Nome: ".concat(this.nome));
        console.log("Sal\u00E1rio: R$ ".concat(this.salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })));
        console.log("---------------------------\n");
    };
    return Funcionario;
}());
console.log("Criando funcionário 'Maria' com salário válido...");
var func1 = new Funcionario("Maria", 2000);
func1.exibirDados(); // Nome: Maria, Salário: R$ 2.000,00
// funcionário com salário inválido
console.log("Criando funcionário 'Carlos' com salário inválido...");
var func2 = new Funcionario("Carlos", 1000); // Vai mostrar o erro no console!
func2.exibirDados(); // Nome: Carlos, Salário: R$ 0,00 (porque o valor 1000 foi rejeitado)
//Alterando o salário de 'Maria' para um valor válido
console.log("Aumentando o salário de Maria...");
func1.salario = 3500; // Aqui estamos usando o SETTER
func1.exibirDados(); // Nome: Maria, Salário: R$ 3.500,00
//alterar o salário de 'Maria' para um valor inválido
console.log("Tentando reduzir o salário de Maria para um valor inválido...");
func1.salario = 1200; // Vai mostrar o erro no console!
func1.exibirDados(); // O salário não mudou! Continua R$ 3.500,00
