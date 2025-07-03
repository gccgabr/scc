"use strict";

const express = require("express");
const router = express.Router();
const KEY_CONTROLLER = require("../controllers/key.js");

/* Middleware configuration. */
router.use(express.json());

/* Rotas. */
// Criação de nova chave.
router.post("/api/key/new", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/new");
	
	KEY_CONTROLLER.createNewKey(
			req.body.code,
			req.body.roomName,
			req.body.keyStatus,
			req.body.sectionCode
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Consulta de chave por código.
router.get("/api/key/code/:code", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/code/" + req.params.code + " request.");

	KEY_CONTROLLER.getKeyByCode(
			req.params.code
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});

});

// Consulta de chave por código de seção.
router.get("/api/key/section/:section-code", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/section/" + req.params.sectionCode + " request.");

	KEY_CONTROLLER.getKeyBySectionCode(
			req.params.sectionCode
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Consulta de chave por nome da sala.
router.get("/api/key/room/:room-name", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/room/" + req.params.roomName + " request.");

	kEY_CONTROLLER.getKeyByRoomName(
			req.params.roomName
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Consulta de chave por status.
router.get("/api/key/status/:status", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/status/" + req.params.keyStatus + " request.");

	KEY_CONTROLLER.getKeyByStatus(
			req.params.keyStatus
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Atualizar nome da sala.
router.put("/api/key/room", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/room request.");

	KEY_CONTROLLER.updateKeyRoomName(
			req.body.code,
			req.body.roomName
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Atualizar status da chave.
router.put("/api/key/status", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/status");

	KEY_CONTROLLER.updateKeyStatus(
			req.body.code,
			req.body.keyStatus
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Atualizar nome da sala.
router.put("/api/key/section", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/section request");

	KEY_CONTROLLER.updateKeyRoomName(
			req.body.code,
			req.body.sectionCode
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

// Deletar chave.
router.delete("/api/key/del", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/section request");

	KEY_CONTROLLER.deleteKey(
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
