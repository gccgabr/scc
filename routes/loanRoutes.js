"use strict";

const express = require("express");
const router = express.Router();
const LOAN_CONTROLLER = require("../controllers/loanController.js");

/* Middleware configuration. */
router.use(express.json());

// Criar novo empréstimo.
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
			res.send(error);
		});
});

// Consultar empréstimo por código.
router.get("/record/code/:code", (req, res) => {
	console.log("GET /code/" + req.params.code + " request.");
	LOAN_CONTROLLER.getLoanByCode(
			req.params.code
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Consultar empréstimo por código da chave.
router.get("/record/key-code/:keyCode", (req, res) => {
	console.log("GET /key-code/" + req.params.keyCode + " request.");
	LOAN_CONTROLLER.getLoanByKeyCode(
			req.params.keyCode
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Consultar empréstimo por código da seção.
router.get("/record/section-code/:sectionCode", (req, res) => {
	console.log("GET /key-code/" + req.params.sectionCode + " request.");
	LOAN_CONTROLLER.getLoanBySectionCode(
			req.params.sectionCode
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Consultar empréstimo por CPF de usuário.
router.get("/record/user-cpf/:userCpf", (req, res) => {
	console.log("GET /user-cpf/" + req.params.userCpf + " request.");
	LOAN_CONTROLLER.getLoanByUserCpf(
			req.params.userCpf
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Consultar empréstimo por estado.
router.get("/record/loan-status/:loanStatus", (req, res) => {
	console.log("GET /user-cpf/" + req.params.loanStatus + " request.");
	LOAN_CONTROLLER.getLoanByStatus(
			req.params.loanStatus
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Consultar todos os empréstimos.
router.get("/record/all", (req, res) => {
	console.log("GET /all request.");
	LOAN_CONTROLLER.getAllLoans()
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Atualizar status de empréstimo.
router.put("/set/overdue", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("PUT /overdue request.");
	LOAN_CONTROLLER.setLoanOverdue(
			req.body.code
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Deletar um empréstimo.
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
			res.send(error);
		});
});

module.exports = router;
