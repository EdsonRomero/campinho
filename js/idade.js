let rs = require("readline-sync");
let nascimento = new Date(rs.question("Digite o data nacimento 0000-00-00 : "));
let dataAtual = new Date();

let tempo = Math.abs(dataAtual.getTime() - nascimento.getTime());
let dias = Math.ceil(tempo / (1000 * 3600 * 24));

if (dias < 5840) {
  console.log("Não pode Votar");
} else {
  if (dias >= 25550) {
    console.log("Voto Facultativo");
  } else {
    console.log("Pode Votar");
  }
}

// for (let ano = nascimento.getFullYear(); ano < dataAtual.getFullYear(); ano++) {
//     if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)) {
//       anosBi++;
//     }
//   }
