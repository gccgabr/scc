"use strict";

/* Em cada rota, deve-se invocar a função cabível, presente na construção do
 * controlador do usuário. A função controladora deverá intermediar o acesso
 * aos dados no banco de dados, e tratar alguns aspectos de segurança. */

const {
	getAllUsers,
	getUserByCpf,
	getUsersByName,
	getUsersByRole
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
app.get("/api/user/cpf/:cpf", (req, res) => {
	console.log("GET /api/user/cpf/:" + req.params.cpf + " request.");
	getUserByCpf(req.params.cpf)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Consultar usuários por meio de nome.
app.get("/api/user/name/:name", (req, res) => {
	console.log("GET /api/user/name/:" + req.params.name + " request.");
	getUsersByName(req.params.name)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Consultar usuários por meio de função.
app.get("/api/user/role/:role", (req, res) => {
	console.log("GET /api/user/role/:" + req.params.role + " request.");
	getUsersByRole(req.params.role)
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
