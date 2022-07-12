let rs = require("readline-sync");
let senha = parseInt(rs.question("Digite sua senha: "));

if (senha === 1234) {
  console.log("Senha Correta");
} else {
  console.log("Senha Errada");
}
