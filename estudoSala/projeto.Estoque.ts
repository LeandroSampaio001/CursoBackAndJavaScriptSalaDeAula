class Produto {
    // ======================================================
    // REGIÃO 1: ATRIBUTOS (O que a classe TEM)
    // ======================================================
    private id: string;
    private nome: string;
    private preco: number;
    private quantidade: number;

    // ======================================================
    // REGIÃO 2: CONSTRUTOR (Como a classe NASCE)
    // ======================================================
    constructor(idProduto: string, nomeProduto: string, precoProduto: number, qtdProduto: number) {
        this.id = idProduto;
        this.nome = nomeProduto;
        this.preco = precoProduto;
        this.quantidade = qtdProduto;
    }

    // ======================================================
    // REGIÃO 3: MÉTODOS (O que a classe FAZ)
    // ======================================================

    // --- Métodos de Leitura (Getters) ---
    public getId(): string {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getPreco(): number {
        return this.preco;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }

    // --- Métodos de Alteração (Setters e outros) ---
    public setPreco(novoPreco: number): void {
        this.preco = novoPreco;
    }
}