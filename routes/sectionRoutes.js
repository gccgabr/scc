"use strict";

const express = require("express");
const SECTION_CONTROLLER = require("../controllers/sectionController.js");

/* Middleware configuration. */
app.use(express.json());

// Criar nova seção.
app.post("/api/section/new", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("PUT /api/section/new request.");

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
	console.log("GET /api/section/name/" + req.params.name + " request.");

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
	console.log("GET /api/section/code/" + req.params.code + " request.");
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
	console.log("GET /api/section/all request.");
	SECTION_CONTROLLER.getAllSectionCodes()
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Atualizar nome de seção.
app.put("/api/section/name", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("PUT /api/section/name request.");

	SECTION_CONTROLLER.updateSectionName(
			req.body.code,
			req.body.name
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});
// Atualizar CPF de usuário.
app.put("/api/section/user-cpf", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("PUT /api/section/name request.");

	SECTION_CONTROLLER.updateSectionUserCpf(
			req.body.code,
			req.body.userCpf
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Deletar seção.
app.delete("/api/section/del", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("DELETE /api/section request.");

	SECTION_CONTROLLER.deleteSection(
			req.body.code
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});
