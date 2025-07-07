"use strict";

const express = require("express");
const router = express.Router();
const SECTION_CONTROLLER = require("../controllers/sectionController.js");

/* Middleware configuration. */
router.use(express.json());

// Criar nova seção.
router.post("/new", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("PUT /new request.");

	SECTION_CONTROLLER.createNewSection(
			req.body.name,
			req.body.userCpf
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error.message);
		});
});

// Consultar seção por código.
router.get("/record/code/:code", (req, res) => {
	console.log("GET /code/" + req.params.code + " request.");
	SECTION_CONTROLLER.getSectionByCode(
			req.params.code
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error.message);
		});
});

// Consultar seção por nome.
router.get("/record/name/:name", (req, res) => {
	console.log("GET /name/" + req.params.name + " request.");

	SECTION_CONTROLLER.getSectionByName(
			req.body.name
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error.message);
		});
});

// Consultar seção por CPF de usuário.
router.get("/record/user-cpf/:userCpf", (req, res) => {
	console.log("GET /user-cpf/" + req.params.userCpf + " request.");
	
	SECTION_CONTROLLER.getSectionByUserCpf(
			req.params.userCpf
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error.message);
		});
});

// Consultar todas as seções.
router.get("/record/all", (req, res) => {
	console.log("GET /all/codes request.");
	SECTION_CONTROLLER.getAllSections()
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error.message);
		});
});

// Consultar todos os códigos das seções.
router.get("/record/all/codes", (req, res) => {
	console.log("GET /all request.");
	SECTION_CONTROLLER.getAllSectionCodes()
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error.message);
		});
});

// Atualizar nome de seção.
router.put("/set/name", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("PUT /name request.");

	SECTION_CONTROLLER.updateSectionName(
			req.body.code,
			req.body.name
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error.message);
		});
});
// Atualizar CPF de usuário.
router.put("/set/user-cpf", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("PUT /name request.");

	SECTION_CONTROLLER.updateSectionUserCpf(
			req.body.code,
			req.body.userCpf
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error.message);
		});
});

// Deletar seção.
router.delete("/del", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("DELETE  request.");

	SECTION_CONTROLLER.deleteSection(
			req.body.code
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error.message);
		});
});

module.exports = router;
