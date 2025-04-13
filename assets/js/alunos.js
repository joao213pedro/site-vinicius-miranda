// assets/js/alunos.js

const form = document.getElementById("formAluno");
const tabela = document.querySelector("#tabelaAlunos tbody");

let alunos = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const plano = document.getElementById("plano").value;

  const aluno = { nome, idade, plano };
  alunos.push(aluno);

  atualizarTabela();

  form.reset();
});

function atualizarTabela() {
  tabela.innerHTML = "";

  alunos.forEach((aluno) => {
    const row = tabela.insertRow();
    row.innerHTML = `
      <td>${aluno.nome}</td>
      <td>${aluno.idade}</td>
      <td>${aluno.plano}</td>
    `;
  });
}
