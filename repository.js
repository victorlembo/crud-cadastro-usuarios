require("dotenv").config(); // carrega as variáveis definidas no .env

const { POSTGRE_URI, POSTGRE_DB, POSTGRE_USER, POSTGRE_PASSWORD } = process.env;
const moment = require("moment");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: POSTGRE_USER,
  host: POSTGRE_URI,
  database: POSTGRE_DB,
  password: POSTGRE_PASSWORD,

  port: 5432,
});

if (!POSTGRE_URI) {
  throw new Error(
    "Por favor, defina a variável de ambiente POSTGRE_URI dentro do arquivo .env"
  );
}

if (!POSTGRE_DB) {
  throw new Error(
    "Por favor, defina a variável de ambiente POSTGRE_DB dentro do arquivo .env"
  );
}

if (!POSTGRE_USER) {
  throw new Error(
    "Por favor, defina a variável de ambiente POSTGRE_USER dentro do arquivo .env"
  );
}

if (!POSTGRE_PASSWORD) {
  throw new Error(
    "Por favor, defina a variável de ambiente POSTGRE_PASSWORD dentro do arquivo .env"
  );
}

const getUsuarios = (request, response) => {
  pool.query(
    "SELECT * FROM usuarios",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getUsuarioById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM usuarios WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUsuario = (request, response) => {
  const { nome, data_nascimento, email, senha } = request.body;

  pool.query(
    "INSERT INTO usuarios (nome, data_nascimento, email, senha) VALUES ($1, $2, $3, $4)",
    [nome, data_nascimento, email, senha],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Usuário criado com sucesso.`);
    }
  );
};

const updateUsuario = (request, response) => {
  const id = parseInt(request.params.id);
  const { nome, data_nascimento, email, senha } = request.body;

  pool.query(
    "UPDATE usuarios SET nome = $1, data_nascimento = $2, email = $3, senha = $4 WHERE id = $5",
    [nome, data_nascimento, email, senha, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Usuário ${id} atualizado com sucesso.`);
    }
  );
};

const deleteUsuario = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM usuarios WHERE id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    response
      .status(200)
      .send(`Usuário removido com sucesso com o identificador: ${id}`);
  });
};

module.exports = {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
