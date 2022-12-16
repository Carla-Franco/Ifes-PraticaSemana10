const prompt = require("prompt-sync")();

var nome = prompt("Digite seu nome: ");
var valor = parseFloat(prompt("Digite o valor da compra: "));

if (valor < 1000) {
    var desconto = valor * 0.05;
} else if (valor >=1000 && valor <= 5000) {
    var desconto = valor * 0.10;
} else {
    var desconto = valor * 0.15;
}

console.log("Valor da compra: ", valor);
console.log("Valor desconto: ", desconto);