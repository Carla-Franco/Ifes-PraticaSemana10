const prompt = require("prompt-sync")();

var t1 = parseInt(prompt("Digite o ângulo 1: "));
var t2 = parseInt(prompt("Digite o ângulo 2: "));
var t3 = parseInt(prompt("Digite o ângulo 3: "));

if (t1 + t2 + t3 == 180) {

    if (t1 < 90 && t2 < 90 && t3 < 90) {
        console.log("Triângulo Acutângulo!");
    } else if (t1 == 90 || t2 == 90 || t3 == 90) {
        console.log("Triângulo Retângulo!");
    } else {
        console.log("Triângulo Obtusângulo!");
    }
} else {
    console.log("Não é triângulo!");
}
