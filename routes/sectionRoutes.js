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
			res.status(503).json(error);
		});
});

// Consultar seção por CPF de usuário.
router.get("/user-cpf/:userCpf", (req, res) => {
	console.log("GET /user-cpf/" + req.params.userCpf + " request.");
	
	SECTION_CONTROLLER.getSectionByUserCpf(
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
	console.log(req.params.name);

	SECTION_CONTROLLER.getSectionByName(
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
	SECTION_CONTROLLER.getSectionByCode(
			req.params.code
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.status(503).json(error);
		});
});

// Consultar todos os códigos das seções.
router.get("/all", (req, res) => {
	console.log("GET /all request.");
	SECTION_CONTROLLER.getAllSectionCodes()
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.status(503).json(error);
		});
});

// Atualizar nome de seção.
router.put("/name", (req, res) => {
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
			res.status(503).json(error);
		});
});
// Atualizar CPF de usuário.
router.put("/user-cpf", (req, res) => {
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
			res.status(503).json(error);
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
			res.status(503).json(error);
		});
});

module.exports = router;
