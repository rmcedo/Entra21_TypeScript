export class Professor {
    constructor(nome, idade, disciplina, valorHora, qtdHoras) {
        this.nome = nome;
        this.idade = idade;
        this.disciplina = disciplina;
        this.valorHora = valorHora;
        this.qtdHoras = qtdHoras;
    }
    apresentar() {
        return `Olá alunos, me chamo ${this.nome}, serei seu novo professor de ${this.disciplina}, tenho ${this.idade} anos`;
    }
    calcularRendimento() {
        return this.valorHora * this.qtdHoras;
    }
}
