"use strict";

const express = require("express");
const KEY_CONTROLLER = require("../controllers/key.js");

/* Middleware configuration. */
app.use(express.json());

/* Rotas. */
// Criação de nova chave.
app.post("/api/key/new", (req, res) => {
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
app.get("/api/key/code/:code", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/code/" + req.params.code + " request.");

	KEY_CONTROLLER.getKeyByCode(
			req.params.code
		)
		.then(result => {
			return result;
		})
		.catch(error => {
			return error;
		});

});

// Consulta de chave por código de seção.
app.get("/api/key/section/:section-code", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/section/" + req.params.sectionCode + " request.");

	return await KEY_CONTROLLER.getKeyBySectionCode(
			req.params.sectionCode
		)
		.then(result => {
			return result;
		})
		.catch(error => {
			return error;
		});
});

// Consulta de chave por nome da sala.
app.get("/api/key/room/:room-name", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/room/" + req.params.roomName + " request.");

	return await kEY_CONTROLLER.getKeyByRoomName(
			req.params.roomName
		)
		.then(result => {
			return result;
		})
		.catch(error => {
			return error;
		});
});

// Consulta de chave por status.
app.get("/api/key/status/:status", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/status/" + req.params.keyStatus + " request.");

	return await KEY_CONTROLLER.getKeyByStatus(
			req.params.keyStatus
		)
		.then(result => {
			return result;
		})
		.catch(error => {
			return error;
		});
});

// Atualizar nome da sala.
app.put("/api/key/room", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/new");
});

// Atualizar status da chave.
app.put("/api/key/status", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/new");
});

// Atualizar nome da sala.
app.put("/api/key/section", (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log("POST /api/key/new");
});
