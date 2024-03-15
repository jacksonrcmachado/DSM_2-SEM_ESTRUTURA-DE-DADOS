import { menor_r } from "./menor_recursivo_modelo";

let a: number[] = [10, 5, -20, -5, -10];
console.log("Array original:");
console.log(a);
let menor = menor_r(a);
console.log("O menor número do array é: ", menor);

