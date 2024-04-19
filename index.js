// Importações de módulos e configurações
require("dotenv").config();
const express = require("express");
const conn = require("./db/conn");
const Jogo = require("./models/Jogo");

const app = express();

// Configurações do middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas
app.post("/jogo/novo", async (req, res) => {
  const dadosJogo = {
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    precoBase: req.body.precoBase
  }

  const jogo = await Jogo.create(dadosJogo);
  res.send("Jogo cadastrado com id" + jogo.id);
});

app.get("/jogo/novo", (req, res) => {
  res.sendFile(`${__dirname}/views/formJogo.html`);
});

// Inicialização do servidor
app.listen(8000, () => {
  console.log("Abridu!");
});

// Conexão com o banco de dados
conn
  .sync()
  .then(() => {
    console.log("Conectado ao banco de dados com sucesso!");
  })
  .catch((err) => {
    console.log("Ocorreu um erro: " + err);
  });
