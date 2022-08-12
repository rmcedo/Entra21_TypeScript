export class Professor {

    public nome: string
    public idade: number
    public disciplina: string
    public valorHora: number
    public qtdHoras: number

    constructor(nome: string, idade: number, disciplina: string, valorHora: number, qtdHoras: number) {

        this.nome = nome
        this.idade = idade
        this.disciplina = disciplina
        this.valorHora = valorHora
        this.qtdHoras = qtdHoras

    }





    public apresentar(): string {

        return `Olá alunos, me chamo ${this.nome}, serei seu novo professor de ${this.disciplina}, tenho ${this.idade} anos`


    }

    public calcularRendimento(): number {


        return this.valorHora * this.qtdHoras
    }
}