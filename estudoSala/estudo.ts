class Playlist {
    nome: string;
    musicas: string[]; // Isso significa "uma lista de strings"
    duracaoTotal: number; // Em segundos

    // <-- SEU CÓDIGO DO CONSTRUTOR VEM AQUI
    constructor(nomeDaMusica:string, playlista: string[], duracaoEmSegundos: number){
        this.nome= nomeDaMusica;
        this.musicas= playlista;
        this.duracaoTotal= duracaoEmSegundos;
    }

    // Este método já está pronto, ele vai usar os atributos que o seu construtor criar
    adicionarMusica(nomeDaMusica: string, duracaoEmSegundos: number) {
        this.musicas.push(nomeDaMusica);
        this.duracaoTotal += duracaoEmSegundos;
        console.log(`"${nomeDaMusica}" foi adicionada à playlist ${this.nome}.`);
    }
}