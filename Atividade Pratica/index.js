const prompt = require("prompt-sync")();

var idade = parseInt(prompt("Digite sua idade: "));
var tmp_serv = parseInt(prompt("Digite seu tempo de serviço: "));
var sal = parseFloat(prompt("Digite seu salário: "));

if (idade >= 65 || tmp_serv >= 30 || idade >= 60 && tmp_serv >= 25) {

    if (tmp_serv > 20) {
        sal_aposent = sal * 0.80;
    } else if (tmp_serv <= 20) {
        sal_aposent = sal * 0.60;
    } if (sal_aposent < 1212.00) {
        sal_aposent = 1212.00;
    } else if (sal_aposent > 7087.22) {
        sal_aposent = 7087.22;
    }
    console.log("Você pode se aposentar!"); 
    console.log("Seu salário de aposentadoria será: ", sal_aposent);  

} else {
    console.log("Você não pode se aposentar!");
}


