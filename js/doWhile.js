let rs = require("readline-sync");
let i = parseInt(rs.question("Digite um numero:"));
let sai = "";
let resultado = "";
do {
  i += 1;
  resultado = +i;
  console.log(i);
  sai = rs.question("Deseja sair Sim ou Nâo:");
} while (sai === "sim");
console.log("sai");
