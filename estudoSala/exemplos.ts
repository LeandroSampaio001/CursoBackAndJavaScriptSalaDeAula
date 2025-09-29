class Produto {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    // MUDANÇA: Agora o método mostra a informação diretamente na tela.
    mostrarDescricao() {
        console.log(`Produto: ${this.nome}, Preço: R$ ${this.preco}`);
    }
}

// 1. FAÇA A HERANÇA ACONTECER AQUI
class Livro extends Produto {
    // 2. ADICIONE O ATRIBUTO 'autor' AQUI
    autor:string;
    
    // 3. CRIE O CONSTRUTOR AQUI
    // Ele precisa receber nome, preco e autor.
    // Lembre-se de chamar super() primeiro!
    constructor (nome: string, preco: number, oAutor: string){
        super(nome, preco)

        this.autor = oAutor;

    }

}
const produtoGeral = new Produto("Caneca", 15.50);
const meuLivro = new Livro("O Senhor dos Anéis", 89.90, "J.R.R. Tolkien");

produtoGeral.mostrarDescricao();
meuLivro.mostrarDescricao(); // O livro consegue usar o método do pai?

// O acesso ao atributo continua igual
console.log(`Autor do livro: ${meuLivro.autor}`);