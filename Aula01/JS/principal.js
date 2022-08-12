let nome = "Rafael Macedo";
let idade = 28;
console.log(nome, idade);
$('<p>', { text: `Olá ${nome} vc tem ${idade} anos`, class: "display-6 fw-bolder text-center pt-5" }).appendTo("body");
function dados(nome, idade) {
    if (nome == "Rafael" && idade == 28) {
        return true;
    }
    else {
        return false;
    }
}
function somar(numA, numB) {
    return numA + numB;
}
