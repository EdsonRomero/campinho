let rs = require("readline-sync");
let valor = parseInt(
  rs.question("Digite o valo para saber se e par ou impar: ")
);

if (valor % 2 === 0) {
  console.log("Valor Par");
} else {
  console.log("Valor Impar");
}
