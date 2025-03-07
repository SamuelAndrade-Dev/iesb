let n1 = parseFloat(prompt("Digite sua primeira nota"));
let n2 = parseFloat(prompt("Digite sua segunda nota"));

let p1 = n1 * 0.4;
let p2 = n2 * 0.6;
let pt = n1 + n2;

if (pt >= 5) {
  console.log("Aprovado. Sua nota é: ", pt);
} else {
  console.log("Realizar prova subsitutiva. Sua nota é:", pt);
  let ps = parseFloat(prompt("Digite a prova da nota substitutiva"));
  if (ps > p1 && ps < p2) {
    p2 = ps;
    pt = p1 * 0.4 + p2 * 0.6;
  }

  if (pt >= 5) {
    console.log("Aluno reprovado");
  } else {
    console.log("Aluno aprovado");
  }
}
