import { Aluno } from "./Aluno.js";
import { Animal } from "./Animal.js";
import { Professor } from "./Professor.js";
import { Vendedor } from "./Vendedor.js";

let animal1: Animal = new Animal("Humano", "Rafael", 85, ["Terra", "Brasil", "SC", "Brusque"])

let animal2: Animal = new Animal("Gato", "Hermione", 1, ["Blumenau"])

let animal3: Animal = new Animal("Gato", "Luna", 0.8, ["Blumenau"])

console.log(animal1);

console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.habitat[1]);
console.log(animal1.habitat[2]);
console.log(animal1.habitat[3]);
console.log(animal1.getEspecie); //Atributo está privado em ANIMAL.TS 

console.log("------------");


animal1.nome = "Cachorro"
animal1.peso = 12.3
animal1.habitat[0] = "Casa"
animal1.setEspecie = "LupusCaninos"


console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie); //Atributo está privado em ANIMAL.TS 


console.log("------------");

console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat);
console.log(animal2.getEspecie);

animal2.nome = "Gatuna"
animal2.peso = 2
animal2.habitat[0] = "Pelotas"

console.log("------------");


console.log(animal3.nome);
console.log(animal3.peso);
console.log(animal3.habitat);
console.log(animal3.getEspecie);

let rafael: Aluno = new Aluno("Rafael Macedo", 28, [10, 8, 9])

console.log(rafael);

console.log("-----");

console.log(rafael.nome);
console.log(rafael.idade);
console.log(rafael.calcularMedia());


console.log("==========");

let daiane: Aluno = new Aluno("Daiane Philippsen Maders", 27, [10, 10, 10, 8, 10, 8, 9, 9.5])

console.log(daiane);

console.log(daiane.calcularMedia());


console.log("==========");
console.log("PROFESSOR");

let rubem: Professor = new Professor("Rubem", 33, "Java", 25, 360)

console.log("Professor:", rubem);


console.log("Mensagem do Professor:", rubem.apresentar());

console.log("Ao final do curso o professor recebeu:", rubem.calcularRendimento(), "Reais");

console.log("==========");
console.log("VENDEDOR");

let vendedor1: Vendedor = new Vendedor("Marcone", 42, 0.05, 67000)

console.log(vendedor1.apresentar());

console.log("A comissão total de", vendedor1.nome, "foi de", vendedor1.calcularRendimento(), "sob uma venda de", vendedor1.vendasRealizadas);








