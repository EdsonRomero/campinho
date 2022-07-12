let rs = require("readline-sync");
let ano = parseInt(rs.question("Digite o ano: "));
let data = new Date();

if (ano >= data.getFullYear - 17) {
  console.log("Não pode Votar");
} else {
  console.log("Pode Votar");
}
