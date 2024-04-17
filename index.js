require("dotenv").config();
const conn = require("./db/conn");
const Usuario = require("./models/Usuario")
const Jogo = require("./models/Jogo")

const express =require("express");
const app = express();

app.use(
  express.urlencoded({
    extended:true
  })
);

app.use(express.json())

app.get("/usuario/novo" , (rec,res) =>{
  res.sendFile(`${__dirname}/views/formUsuario.html`)
});

app.get("/jogo/novo" , (rec,res) =>{
  res.sendFile(`${__dirname}/views/formJogo.html`)
});


conn
  .sync()
  .then(() => {
    console.log("Conectado ao banco de dados com sucesso!");
  })
  .catch((err) => {
    console.log("Ocorreu um erro: " + err);
  });
