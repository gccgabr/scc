"use strict";

/* Em cada rota, deve-se invocar a função cabível, presente na construção do
 * controlador do usuário. A função controladora deverá intermediar o acesso
 * aos dados no banco de dados, e tratar alguns aspectos de segurança. */

const { createNewUser } = require("../services/user.js");
const USER_CONTROLLER = require("../controllers/userController.js");
const express = require("express");
const router = express.Router();

/* Middleware. */
router.use(express.json());

/* Rotas. (CRUD) */
// Criar novo usuário.
router.post("/new", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/user/new");
	USER_CONTROLLER.createNewUser(
		req.body.cpf,
		req.body.name,
		req.body.email,
		req.body.phone,
		req.body.role,
		req.body.password
	)
	.then(result => {
		res.send("Usuário cadastrado com sucesso.");
	})
	.catch(error => {
		res.send(error.message);
	});
});

// Consultar um usuário por meio do CPF.
router.get("/record/cpf/:cpf", (req, res) => {
	console.log("GET /api/user/cpf/:" + req.params.cpf + " request.");
	USER_CONTROLLER.getUserByCpf(req.params.cpf)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error.message);
		});
});

// Consultar usuários por meio de nome.
router.get("/record/name/:name", (req, res) => {
	console.log("GET /api/user/name/:" + req.params.name + " request.");
	USER_CONTROLLER.getUsersByName(req.params.name)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error.message);
		});
});

// Consultar usuários por meio de função.
router.get("/record/role/:role", (req, res) => {
	console.log("GET /api/user/role/:" + req.params.role + " request.");
	USER_CONTROLLER.getUsersByRole(req.params.role)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error.message);
		});
});

// Consultar todos os usuários.
router.get("/record/all", (req, res) => {
	console.log("GET /api/user/all request.");
	USER_CONTROLLER.getAllUsers()
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error.message);
		});
});

/* Update. */
// Atualizar nome de usuário. */
router.put("/set/name", (req, res) => {
	console.log("PUT /api/user/name request.");
	if (!req.body) return res.sendStatus(400);
	USER_CONTROLLER.updateUserName(
			req.body.cpf,
			req.body.name
		)
		.then(result => {
			res.send("Nome de usuário atualizado com sucesso.");
		})
		.catch(error => {
			res.send(error.message);
		});
});

// Atualizar endereço de e-mail de usuário.
router.put("/set/email", (req, res) => {
	console.log("PUT /api/user/email request.");
	if (!req.body) return res.sendStatus(400);
	USER_CONTROLLER.updateUserEmail(
			req.body.cpf,
			req.body.email
		)
		.then(result => {
			res.send("Endereço de e-mail de usuário atualizado com sucesso.");
		})
		.catch(error => {
			res.send(error.message);
		});
});

// Atualizar número de telefone de usuário.
router.put("/set/phone", (req, res) => {
	console.log("PUT /api/user/phone request.");
	if (!req.body) return res.sendStatus(400);
	USER_CONTROLLER.updateUserPhone(
			req.body.cpf,
			req.body.phone
		)
		.then(result => {
			res.send("Número de telefone de usuário atualizado com sucesso.");
		})
		.catch(error => {
			res.send(error.message);
		});
});

// Atualizar função de usuário.
router.put("/set/role", (req, res) => {
	console.log("PUT /api/user/role request.");
	if (!req.body) return res.sendStatus(400);
	USER_CONTROLLER.updateUserRole(
			req.body.cpf,
			req.body.role
		)
		.then(result => {
			res.send("Código de função de usuário atualizado com sucesso.");
		})
		.catch(error => {
			res.send(error.message);
		});
});

// Alterar senha de usuário.
router.put("/set/password", (req, res) => {
	console.log("PUT /api/user/password request.");
	if (!req.body) return res.sendStatus(400);
	USER_CONTROLLER.updateUserPassword(
			req.body.cpf,
			req.body.password
		)
		.then(result => {
			res.send("Senha de usuário atualizado com sucesso.");
		})
		.catch(error => {
			res.send(error.message);
		});
});

// Deletar usuário.
router.delete("/del", (req, res) => {
	console.log("PUT /api/user/del request.");
	if (!req.body) return res.sendStatus(400);

	USER_CONTROLLER.deleteUser(
			req.body.cpf
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error.message);
		});
});

module.exports = router;
