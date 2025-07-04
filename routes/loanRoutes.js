"use strict";

const express = require("express");
const router = express.Router();
const LOAN_CONTROLLER = require("../controllers/loanController.js");

/* Middleware configuration. */
router.use(express.json());

// Criar nova seção.
router.post("/new", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /new request.");

	LOAN_CONTROLLER.createNewLoan(
			req.body.keyCode,
			req.body.sectionCode,
			req.body.userCpf
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.status(503).json(error);
		});
});

// Consultar seção por CPF de usuário.
router.get("/user-cpf/:user-cpf", (req, res) => {
	console.log("GET /user-cpf/" + req.params.userCpf + " request.");
	LOAN_CONTROLLER.getLoanByUserCpf(
			req.params.userCpf
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.status(503).json(error);
		});
});

// Consultar seção por nome.
router.get("/name/:name", (req, res) => {
	console.log("GET /name/" + req.params.name + " request.");
	LOAN_CONTROLLER.getLoanByName(
			req.params.name
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.status(503).json(error);
		});
});

// Consultar seção por código.
router.get("/code/:code", (req, res) => {
	console.log("GET /code/" + req.params.code + " request.");
	LOAN_CONTROLLER.getLoanByCode(
			req.params.code
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.status(503).json(error);
		});
});

// Consultar todos os empréstimos.
router.get("/all", (req, res) => {
	console.log("GET /all request.");
	LOAN_CONTROLLER.getAllLoans()
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			console.log(typeof error);
			res.send(error.message);
			//res.status(503).json({erro: error});
			//res.send(typeof error);
		});
});

// Atualizar status de empréstimo.
router.put("/overdue", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("PUT /overdue request.");
	LOAN_CONTROLLER.setLoanOverdue(
			req.body.code
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.status(503).json(error);
		});
});

// Atualizar status de empréstimo.
router.delete("/del", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("DELETE /new request.");
	LOAN_CONTROLLER.deleteLoan(
			req.body.code
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.status(503).json(error);
		});
});

module.exports = router;
