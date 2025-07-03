"use strict";

const express = require("express");
const LOAN_CONTROLLER = require("../controllers/loanController.js");

/* Middleware configuration. */
app.use(express.json());

// Criar nova seção.
app.post("/api/loan/new", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/loan/new request.");

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

// Consultar seção por CPF de usuário.
app.get("/api/loan/user-cpf/:user-cpf", (req, res) => {
	console.log("GET /api/loan/user-cpf/" + req.params.userCpf + " request.");
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

// Consultar seção por nome.
app.get("/api/loan/name/:name", (req, res) => {
	console.log("GET /api/loan/name/" + req.params.name + " request.");
	LOAN_CONTROLLER.getLoanByName(
			req.params.name
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Consultar seção por código.
app.get("/api/loan/code/:code", (req, res) => {
	console.log("GET /api/loan/code/" + req.params.code + " request.");
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

// Consultar todos os empréstimos.
app.get("/api/loan/all", (req, res) => {
	console.log("GET /api/loan/all request.");
	LOAN_CONTROLLER.getAllLoans()
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Atualizar status de empréstimo.
app.put("/api/loan/overdue", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("PUT /api/loan/overdue request.");
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

// Atualizar status de empréstimo.
app.delete("/api/loan/del", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("DELETE /api/loan/new request.");
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
