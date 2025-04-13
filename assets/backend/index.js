const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor do Vinícius Miranda está online!');
});

app.get('/alunos', (req, res) => {
  try {
    const data = fs.readFileSync(__dirname + '/alunos.json');
    const alunos = JSON.parse(data);
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao ler os alunos.' });
  }
});

app.post('/alunos', (req, res) => {
  try {
    const novoAluno = req.body;

    const data = fs.readFileSync(__dirname + '/alunos.json');
    const alunos = JSON.parse(data);

    alunos.push(novoAluno);

    fs.writeFileSync(__dirname + '/alunos.json', JSON.stringify(alunos, null, 2));

    res.status(201).json({ mensagem: 'Aluno cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao salvar o aluno.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
