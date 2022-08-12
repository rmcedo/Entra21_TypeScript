export class Vendedor {

    public nome: string
    public idade: number
    public comissao: number
    public vendasRealizadas: number

    constructor(nome: string, idade: number, comissao: number, vendasRealizadas: number) {

        this.nome = nome
        this.idade = idade
        this.comissao = comissao
        this.vendasRealizadas = vendasRealizadas
    }


    public apresentar(): string {

        return `Olá sr(a), me chamo ${this.nome}, como posso lhe ajudar?`
    
    
    }

    public calcularRendimento(): number {

                
        return this.comissao * this.vendasRealizadas
    }
}

