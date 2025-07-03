"use strict";

const express = require("express");
const SECTION_CONTROLLER = require("../controllers/sectionController.js");

/* Middleware configuration. */
app.use(express.json());

// Criar nova seção.
app.post("/api/section/new", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/section/new");

	SECTION_CONTROLLER.createNewSection(
			req.body.name,
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
app.get("/api/section/user-cpf/:user-cpf", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("GET /api/section/user-cpf/" + req.params.userCpf + " request.");

	SECTION_CONTROLLER.getSectionByUserCpf(
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
app.get("/api/section/name/:name", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("GET /api/section/name/:name" + req.params.name + " request.");

	SECTION_CONTROLLER.getSectionByName(
			req.body.name
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Consultar seção por código.
app.get("/api/section/code/:code", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("GET /api/section/code/:code" + req.params.code + " request.");

	SECTION_CONTROLLER.getSectionByCode(
			req.params.code
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Consultar todos os códigos das seções.
app.get("/api/section/all", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("GET /api/section/all request.");

	SECTION_CONTROLLER.getAllSectionCodes()
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});
