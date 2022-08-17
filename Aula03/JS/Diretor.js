import { Pessoa } from "./Pessoa.js";
export class Diretor extends Pessoa {
    constructor(nome, idade, cidade, professores) {
        super(nome, idade, cidade);
        this.professores = professores;
    }
    apresentar() {
        return `Olá, sou o Diretor ${this.nome}, tenho ${this.idade} anos, moro em ${this.cidade}`;
    }
    relatorioDesempenho() {
    }
}
