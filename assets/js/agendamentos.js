// assets/js/agendamentos.js

const formTreino = document.getElementById("formTreino");
const tabelaTreinos = document.querySelector("#tabelaTreinos tbody");

let treinos = [];

formTreino.addEventListener("submit", function (e) {
  e.preventDefault();

  const aluno = document.getElementById("aluno").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const tipo = document.getElementById("tipo").value;

  const treino = { aluno, data, hora, tipo };
  treinos.push(treino);

  atualizarTabela();
  formTreino.reset();
});

function atualizarTabela() {
  tabelaTreinos.innerHTML = "";

  treinos.forEach((treino) => {
    const row = tabelaTreinos.insertRow();
    row.innerHTML = `
      <td>${treino.aluno}</td>
      <td>${treino.data}</td>
      <td>${treino.hora}</td>
      <td>${treino.tipo}</td>
    `;
  });
}
