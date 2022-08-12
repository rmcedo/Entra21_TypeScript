export class Vendedor {
    constructor(nome, idade, comissao, vendasRealizadas) {
        this.nome = nome;
        this.idade = idade;
        this.comissao = comissao;
        this.vendasRealizadas = vendasRealizadas;
    }
    apresentar() {
        return `Olá sr(a), me chamo ${this.nome}, como posso lhe ajudar?`;
    }
    calcularRendimento() {
        return this.comissao * this.vendasRealizadas;
    }
}
