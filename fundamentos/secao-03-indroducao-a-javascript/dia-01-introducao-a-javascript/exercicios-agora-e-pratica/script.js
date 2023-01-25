// const a = 2;
// const b = 3;
 
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// const primeiro = 1;
// const segundo = 5;

// // maior de dois números

// if (primeiro > segundo) {
//     console.log("Primeiro é maior");
// } else {
//     console.log("Segundo é maior");
// }

// const x = 5;
// const y = 100;
// const z = 100;

// maior de três numeros

// if (x > y && x > z) {
//     console.log("X é maior");
// } else if (y > x && y > z) {
//     console.log("Y é maior");
// } else {
//     console.log("Z é maior");
// }

// const valor = 0;

// retornar positivo, negativo ou zero

// if (valor > 0) {
//     console.log("Positivo");
// } else if (valor < 0) {
//     console.log("Negativo");
// } else {
//     console.log("Zero");
// }

const anguloA = 40;
const anguloB = 40;
const anguloC = 100;

// angulos devem somar 180 para serem válidos
// angulo será invalido caso seja negativo

let somaAngulos = anguloA + anguloB + anguloC;
let anguloValido = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (anguloValido) {
    if (somaAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
    } else {
        console.log("Ângulo inválido");
    } 

