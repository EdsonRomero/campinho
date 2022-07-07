let rs = require("readline-sync");
let i = parseInt(rs.question("Digite um numero:"));
let y = 20 + i;

while (i < y) {
  i++;
  console.log("Resultado: " + i);
}
console.log("Sai");
