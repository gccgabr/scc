"use strict";

/* Em cada rota, deve-se invocar a função cabível, presente na construção do
 * controlador do usuário. A função controladora deverá intermediar o acesso
 * aos dados no banco de dados, e tratar alguns aspectos de segurança. */

// const {
// 	getAllUsers,
// 	getUserByCpf,
// 	getUsersByName,
// 	getUsersByRole,
// 	updateUserName,
// 	updateUserEmail,
// 	updateUserPhone,
// 	updateUserRole,
// 	updateUserHashedPassword
// } = require("../services/user.js");
const USER = require("../services/user.js");

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
	USER.getUsersByRole(req.params.role)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

/* Update. */
// Atualizar nome de usuário. */
app.put("/api/user/:cpf/name/:name", (req, res) => {
	console.log("PUT /api/user/:" + req.params.cpf + "/name/:" + req.params.name + " request.");
});

// Atualizar endereço de e-mail de usuário.
app.put("/api/user/:cpf/email/:email", (req, res) => {
	console.log("PUT /api/user/:" + req.params.cpf + "/email/:" + req.params.email + " request.");
});

// Atualizar número de telefone de usuário.
app.put("/api/user/:cpf/phone/:phone", (req, res) => {
	console.log("PUT /api/user/:" + req.params.cpf + "/phone/:" + req.params.phone + " request.");
});

// Atualizar função de usuário.
app.put("/api/user/:cpf/role/:role", (req, res) => {
	console.log("PUT /api/user/:" + req.params.cpf + "/role/:" + req.params.role + " request.");
});

app.put("/api/user/:cpf/password/:password", (req, res) => {
	console.log("PUT /api/user/:" + req.params.cpf + "/password/:" + req.params.password + " request.");
});

/* Escuta do servidor. */
app.listen(port, () => {
	console.log("Escutando na porta " + port + ".");
});
