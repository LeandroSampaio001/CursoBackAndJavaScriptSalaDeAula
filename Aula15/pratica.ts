interface IVeiculo {
  marca: string;
  modelo: string;

  ligar(): void;
  desligar(): void;
}
class Carro implements IVeiculo {
  marca: string;
  modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  ligar(): void {
    console.log(`O carro ${this.marca} ${this.modelo} está ligado.`);
  }

  desligar(): void {
    console.log(`O carro ${this.marca} ${this.modelo} foi desligado.`);
  }
}
class Moto implements IVeiculo {
  marca: string;
  modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  ligar(): void {
    console.log(`A moto ${this.marca} ${this.modelo} está ronronando!`);
  }

  desligar(): void {
    console.log(`A moto ${this.marca} ${this.modelo} foi desligada com estilo.`);
  }
}
const meuCarro = new Carro("Toyota", "Corolla");
meuCarro.ligar();      // O carro Toyota Corolla está ligado.
meuCarro.desligar();   // O carro Toyota Corolla foi desligado.

const minhaMoto = new Moto("Honda", "CB 500F");
minhaMoto.ligar();     // A moto Honda CB 500F está ronronando!
minhaMoto.desligar();  // A moto Honda CB 500F foi desligada com estilo.
