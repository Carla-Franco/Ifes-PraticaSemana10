// var n1 = 1;
// var n2 = 2;
// var n3 = 3;
// if (n3 % n1 >= 3) {
//   console.log("Entrou no if");
// } else if (n3 % n2 >= 2){
//   console.log("Entrou no else if");
// } else{
//   console.log("Entrou no else");
// }

// var n1 = 1;
// var n2 = 2;
// if (n1 + n2 >= 3) {
//   console.log("A soma é maior ou igual a três");
// } else {
//   console.log("A soma é menor que três");
// }

// a = 0;
// b = 2;
// c = 1;

// if (a > 0){
//   if (b > 0){
//     console.log("Tudo ok para decolagem!");
//   } else {
//     console.log("Tanque principal vazio; voando com combustível reserva!");
//   }
// } else {
//   if (c > 0){
//     console.log("Foguete não tem piloto, mas há outros foguetes disponíveis!");
//   }
// }

a = 10;
b = 20;
c = 30;
d = 40;

if ((a <= b) && !(c >= d)) {
  if (a > d) {
    console.log("Instrução 1");
  } else {
    console.log("Instrução 2");
  }
} else {
  if ((b == a) && (c === d)) {
    console.log("Instrução 3");
  } else {
    console.log("Instrução 4");
  }
}