// assets/js/desempenho.js

const form = document.getElementById("formDesempenho");
const tabela = document.querySelector("#tabelaDesempenho tbody");

let desempenhos = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const aluno = document.getElementById("aluno").value;
  const data = document.getElementById("data").value;
  const observacao = document.getElementById("observacao").value;
  const avaliacao = document.getElementById("avaliacao").value;

  const registro = { aluno, data, observacao, avaliacao };
  desempenhos.push(registro);

  atualizarTabela();
  form.reset();
});

function atualizarTabela() {
  tabela.innerHTML = "";

  desempenhos.forEach((d) => {
    const row = tabela.insertRow();
    row.innerHTML = `
      <td>${d.aluno}</td>
      <td>${d.data}</td>
      <td>${d.observacao}</td>
      <td>${d.avaliacao}</td>
    `;
  });
}
