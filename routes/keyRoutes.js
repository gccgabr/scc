"use strict";

const express = require("express");
const router = express.Router();
const KEY_CONTROLLER = require("../controllers/keyController.js");

/* Middleware configuration. */
router.use(express.json());

/* Rotas. */
// Criação de nova chave.
router.post("/new", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /new");
	
	KEY_CONTROLLER.createNewKey(
			req.body.code,
			req.body.roomName,
			req.body.keyStatus,
			req.body.sectionCode
		)
		.then(result => {
			console.log(result);
			res.send(result);
		})
		.catch(error => {
			res.status(503).json(error);
		});
});

// Consulta de chave por código.
router.get("/code/:code", (req, res) => {
	console.log("GET /code/" + req.params.code + " request.");

	KEY_CONTROLLER.getKeyByCode(
			req.params.code
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.status(503).json(error);
		});

});

// Consulta de chave por código de seção.
router.get("/section/:section-code", (req, res) => {
	console.log("GET /section/" + req.params.sectionCode + " request.");

	KEY_CONTROLLER.getKeyBySectionCode(
			req.params.sectionCode
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.status(503).json(error);
		});
});

// Consulta de chave por nome da sala.
router.get("/room/:room-name", (req, res) => {
	console.log("GET /room/" + req.params.roomName + " request.");

	kEY_CONTROLLER.getKeyByRoomName(
			req.params.roomName
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.status(503).json(error);
		});
});

// Consulta de chave por status.
router.get("/status/:status", (req, res) => {
	console.log("GET /status/" + req.params.status + " request.");

	KEY_CONTROLLER.getKeyByStatus(
			req.params.status
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.status(503).json(error);
		});
});

// Atualizar nome da sala.
router.put("/room", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /room request.");

	KEY_CONTROLLER.updateKeyRoomName(
			req.body.code,
			req.body.roomName
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.status(503).json(error);
		});
});

// Atualizar status da chave.
router.put("/status", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /status");

	KEY_CONTROLLER.updateKeyStatus(
			req.body.code,
			req.body.keyStatus
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.status(503).json(error);
		});
});

// Atualizar nome da sala.
router.put("/section", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /section request");

	KEY_CONTROLLER.updateKeyRoomName(
			req.body.code,
			req.body.sectionCode
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.status(503).json(error);
		});
});

// Deletar chave.
router.delete("/del", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /section request");

	KEY_CONTROLLER.deleteKey(
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
