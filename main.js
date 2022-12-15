function get(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function main() {
  data = get("http://localhost:3000/usuarios");
  usuarios = JSON.parse(data);
  let tabela = document.getElementById("tabela");

  usuarios.forEach((element) => {
    let linha = criarLinha(element);
    tabela.appendChild(linha);
  });
}

function criarLinha() {
  linha = document.createElement("tr");
  tdId = document.createElement("td");
  tdNome = document.createElement("td");
  tdId.innerHTML = usuarios.id;
  tdNome.innerHTML = usuarios.nome;

  linha.appendChild(tdId);
  linha.appendChild(tdNome);

  return linha;
}
