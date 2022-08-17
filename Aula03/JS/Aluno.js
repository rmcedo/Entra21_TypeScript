import { Pessoa } from "./Pessoa.js";
export class Aluno extends Pessoa {
    constructor(nome, idade, cidade, notas) {
        super(nome, idade, cidade);
        this.notas = notas;
    }
    apresentar() {
        return `O aluno:${this.nome}, com ${this.idade} anos, morador da cidade ${this.cidade}, possui as seguintes notas: ${this.notas}`;
    }
    calcularMedia() {
        let soma = 0;
        this.notas.forEach(nota => {
            soma += nota;
        });
        return soma / this.notas.length;
    }
}
