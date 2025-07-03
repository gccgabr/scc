"use strict";

const express = require("express");
const LOAN_CONTROLLER = require("../controllers/loanController.js");

/* Middleware configuration. */
app.use(express.json());

// Criar nova seção.
app.post("/api/loan/new", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/loan/new");

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
app.post("/api/section/new", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/new");
});

// Consultar seção por nome.
app.post("/api/section/new", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/new");
});

// Consultar seção por código.
app.post("/api/section/new", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/new");
});
