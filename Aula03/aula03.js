import { Aluno } from "./JS/Aluno.js";
import { Professor } from "./JS/Professor.js";
import { Diretor } from "./JS/Diretor.js";
let rafael = new Aluno("Rafael Macedo", 28, "Brusque", [7, 9, 8, 10, 10]);
let vitor = new Aluno("Vitor Moreira", 30, "Pelotas", [10, 9, 5, 6, 10]);
let daiane = new Aluno("Daiane Maders", 27, "Brusque", [7, 9, 10, 10, 10]);
let paula = new Aluno("Paula Oliveira", 27, "Uruguaiana", [6, 7, 9, 9, 10]);
console.log(rafael);
console.log(rafael.apresentar());
console.log(rafael.calcularMedia());
let rubem = new Professor("Rubem Oliota", 32, "Blumenau", [rafael, vitor, daiane, paula]);
console.log(rubem);
console.log(rubem.apresentar());
console.log(rubem.gerarBoletins());
let diretor = new Diretor("Beltrano", 55, "Itajai", [rubem]);
console.log(diretor);
console.log(diretor.apresentar());
console.log(diretor.relatorioDesempenho());