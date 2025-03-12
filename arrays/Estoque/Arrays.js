let a = ["Guitarra", "Baixo", "Teclado", "Violão"];
console.log("Elementos:", a);

let elemento = "Teclado"; //remover este elemento
let index = a.indexOf(elemento); // encontrar indice do elemento

if (index !== -1) {
  a.splice(index, 1); //remover o elemento da array.
  console.log(
    "Produto",
    elemento,
    "Removido do estoque. Estoque atualizado",
    a
  );
} else {
  console.log("Produto", elemento, "Não encontrado");
}
