"use strict";

/* Em cada rota, deve-se invocar a função cabível, presente na construção do
 * controlador do usuário. A função controladora deverá intermediar o acesso
 * aos dados no banco de dados, e tratar alguns aspectos de segurança. */

const {
	getAllUsers,
	getUserByCpf
} = require("../services/user.js");

const express = require("express");
const app = express();
const port = 3000;

/* Middleware. */
app.use(express.json());

/* Rotas. (CRUD) */
// Obter um vetor de todos os usuários.
app.get("/api/user", (req, res) => {
	console.log("GET /api/user request.");
	getAllUsers()
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Consultar um usuário por meio do CPF.
app.get("/api/user/:cpf", (req, res) => {
	console.log("GET /api/user/ request.");
	getUserByCpf("11111111111")
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});


/* Escuta do servidor. */
app.listen(port, () => {
	console.log("Escutando na porta " + port + ".");
});
