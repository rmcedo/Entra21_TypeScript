import { Pessoa } from "./Pessoa.js"
import { Professor } from "./Professor.js"

export class Diretor extends Pessoa {



    public professores: Array<Professor>

    constructor(nome: string, idade: number, cidade: string, professores: Array<Professor>) {

        super(nome, idade, cidade)
        this.professores = professores

    }

    public apresentar(): string {

        return `Olá, sou o Diretor ${this.nome}, tenho ${this.idade} anos, moro em ${this.cidade}`
    }

    public relatorioDesempenho() {


    }
}