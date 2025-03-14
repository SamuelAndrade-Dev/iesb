let estoque = [];

while (true) {
  let list = prompt(
    "Seja bem vindo ao estoque. Escolha uma opção:\n1 - Adicionar Produto\n2 - Remover Produto\n3 - Listar Produtos\n4 - Buscar Produto\n5 - Sair\n"
  );

  if (list === "1") {
    let index = prompt("Adicione um item ao estoque:");
    estoque.push(index);
    console.log("Item adicionado");
  } else if (list === "2") {
    estoque = [];
    console.log("Itens do estoque:", estoque);
    let elemento = prompt("Digite qual item você quer remover:");
    let index = list.indexOf(elemento);
    if (index !== -1) {
      estoque.splice(index, 1); //remover o elemento da array.
      console.log(
        "Produto",
        elemento,
        "Removido do estoque. Estoque atualizado",
        estoque
      );
    } else {
      console.log("Produto", elemento, "Não encontrado");
    }
  } else if (list === "3") {
    estoque = [];
    console.log("Itens disponiveis", estoque);
  } else if (list === "4") {
  } else if (list === "5") {
    console.log("Saindo do programa");
    break;
  } else {
    console.log("Esta opção não existe");
  }
}
