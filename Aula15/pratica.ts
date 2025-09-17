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
meuCarro.ligar();      
meuCarro.desligar();   

const minhaMoto = new Moto("Honda", "CB 500F");
minhaMoto.ligar();     
minhaMoto.desligar();  
