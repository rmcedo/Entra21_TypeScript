export class Animal {
    //----> Construtor <-----
    constructor(especie, nome, peso, habitat) {
        this.especie = especie,
            this.nome = nome,
            this.peso = peso,
            this.habitat = habitat;
    }
    //----> Métodos <-----
    get getEspecie() {
        return this.especie;
    }
    set setEspecie(especie) {
        this.especie = especie;
    }
}
