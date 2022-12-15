require("dotenv").config(); // carrega as variáveis definidas no .env

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const cors = require("cors");

const repository = require("./repository");
app.use(cors());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);



app.listen(port, () => {
  console.log(`Servidor rodando na porta de conexão ${port}.`);
});

app.get("/", (request, response) => {
  response.json({ aplicacao: "CRUD Cadastro de usuarios" });
});

app.get("/usuarios", repository.getUsuarios);
app.get("/usuarios/:id", repository.getUsuarioById);
app.post("/usuarios", repository.createUsuario);
app.put("/usuarios/:id", repository.updateUsuario);
app.delete("/usuarios/:id", repository.deleteUsuario);
