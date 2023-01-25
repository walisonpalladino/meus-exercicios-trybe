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

// const anguloA = 40;
// const anguloB = 40;
// const anguloC = 100;

// // angulos devem somar 180 para serem válidos
// // angulo será invalido caso seja negativo

// let somaAngulos = anguloA + anguloB + anguloC;
// let anguloValido = anguloA > 0 && anguloB > 0 && anguloC > 0;

// if (anguloValido) {
//     if (somaAngulos === 180) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
//     } else {
//         console.log("Ângulo inválido");
//     } 

// const pecaXadrez = "Cavalo";

// switch (pecaXadrez.toLowerCase()) {
//     case "rei":
//         console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez.");
//         break;
//     case "dama":
//         console.log("Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.");
//         break;
//     case "orre":
//         console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
//         break;
//     case "bispo":
//         console.log("Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.");
//         break;
//     case "cavalo":
//         console.log("É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.");
//         break;
//     case "peão":
//         console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
//         break;
//     default:
//         console.log("Peça inválida!");
//         break;
// }

// const nota = 35;
// if (nota < 0 || nota > 100) {
//     console.log("Nota inválida!");
// } else if (nota >= 90) {
//     console.log("A");
// } else if (nota >= 80) {
//     console.log("B");
// } else if (nota >= 70) {
//     console.log("C");
// } else if (nota >= 60) {
//     console.log("D");
// } else if (nota >= 50) {
//     console.log("E");
// } else {
//     console.log("F");
// } 