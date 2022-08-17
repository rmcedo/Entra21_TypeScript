import { Pessoa } from "./Pessoa.js";
export class Professor extends Pessoa {
    constructor(nome, idade, cidade, alunos) {
        super(nome, idade, cidade);
        this.alunos = alunos;
    }
    apresentar() {
        return `Olá, sou o novo professor, me chamo ${this.nome}, tenho ${this.idade}, natural de ${this.cidade}`;
    }
    gerarBoletins() {
        let boletins = [];
        this.alunos.forEach(aluno => {
            boletins.push(aluno.calcularMedia());
        });
        return boletins;
    }
}
