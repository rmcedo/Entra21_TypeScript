export class Aluno {

    public nome:string
    public idade:number
    private notas:Array<number>
    

    constructor (nome:string, idade:number, notas:Array<number>) {

        this.nome = nome
        this.idade = idade
        this.notas = notas

    }


public apresentar():string{

    return `Olá, meu nome é ${this.nome} tenho ${this.idade} anos e tenho...`
}

public calcularMedia(): number{

    let soma:number = 0

    this.notas.forEach(nota => {
        soma+=nota
    });

    return soma/this.notas.length
    
    
    //return this.notas.reduce((anterior,posterior)=> anterior+posterior,0)/this.notas.length

}

}