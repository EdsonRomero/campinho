let rs = require("readline-sync");
let ano = parseInt(rs.question("Digite o ano: "));
let data = new Date();

if (ano >= data.getFullYear() - 14) {
  console.log("Não pode Votar");
} else {
  if (ano <= data.getFullYear() - 70) {
    console.log("Voto Facultativo");
  } else {
    console.log("Pode Votar");
  }
}
