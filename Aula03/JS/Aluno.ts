import { Pessoa } from "./Pessoa.js"

export class Aluno extends Pessoa{

    
    private notas: Array<number>

    constructor(nome: string, idade: number, cidade: string, notas: Array<number>) {
        super(nome, idade, cidade)
        this.notas = notas
    }

    public apresentar(): string {

        return `O aluno:${this.nome}, com ${this.idade} anos, morador da cidade ${this.cidade}, possui as seguintes notas: ${this.notas}`
    }

    public calcularMedia(): number {

        let soma: number = 0
        this.notas.forEach(nota => {
            soma += nota
        })

        return soma / this.notas.length
    }

}



