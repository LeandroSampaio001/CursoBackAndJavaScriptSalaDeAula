var livro = /** @class */ (function () {
    function livro(titulo) {
        this.titulo = titulo;
    }
    return livro;
}());
var carro = /** @class */ (function () {
    function carro() {
    }
    return carro;
}());
var gato = /** @class */ (function () {
    function gato() {
    }
    gato.prototype.miar = function () {
        console.log("Miau!");
    };
    return gato;
}());
var computador = /** @class */ (function () {
    function computador() {
    }
    computador.prototype.ligar = function () {
        console.log("Computador ligado!");
    };
    return computador;
}());
