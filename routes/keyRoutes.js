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
			res.send(error.message);
		});
});

// Consulta de chave por código.
router.get("/record/code/:code", (req, res) => {
	console.log("GET /code/" + req.params.code + " request.");

	KEY_CONTROLLER.getKeyByCode(
			req.params.code
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error.message);
		});

});

// Consulta de chave por código de seção.
router.get("/record/section-code/:sectionCode", (req, res) => {
	console.log("GET /section/" + req.params.sectionCode + " request.");

	KEY_CONTROLLER.getKeyBySectionCode(
			req.params.sectionCode
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error.message);
		});
});

// Consulta de chave por nome da sala.
router.get("/record/room-name/:roomName", (req, res) => {
	console.log("GET /room/" + req.params.roomName + " request.");

	kEY_CONTROLLER.getKeyByRoomName(
			req.params.roomName
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error.message);
		});
});

// Consulta de chave por status.
router.get("/record/status/:keyStatus", (req, res) => {
	console.log("GET /status/" + req.params.keyStatus + " request.");

	KEY_CONTROLLER.getKeyByStatus(
			req.params.keyStatus
		)
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error.message);
		});
});

// Atualizar código da seção.
router.put("/set/section-code", (req, res) => {
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
			res.send(error.message);
		});
});

// Atualizar nome da sala.
router.put("/set/room-name", (req, res) => {
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
			res.send(error.message);
		});
});

// Atualizar status da chave.
router.put("/set/status", (req, res) => {
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
			res.send(error.message);
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
			res.send(error.message);
		});
});

module.exports = router;
