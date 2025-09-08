class aluno{
    nome:string;
    matricula:number;

  constructor(nome: string, matricula: number) {
    this.nome = nome;
    this.matricula = matricula;
  }
}
class Turma {
  alunos: aluno[]; // lista de alunos

  constructor() {
    this.alunos = []; // começa vazia
  }

  adicionarAluno(aluno: aluno): void {
    this.alunos.push(aluno);
  }

  listarAlunos(): void {
    console.log("Lista de alunos da turma:");
    this.alunos.forEach((aluno) => {
      console.log(`Nome: ${aluno.nome}, Matrícula: ${aluno.matricula}`);
    });
  }
}
// Criando alunos
const aluno1 = new aluno("Maria", 101);
const aluno2 = new aluno("João", 102);

// Criando turma
const turma = new Turma();

// Adicionando alunos à turma
turma.adicionarAluno(aluno1);
turma.adicionarAluno(aluno2);

// Listando alunos
turma.listarAlunos();

