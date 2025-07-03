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
	console.log("POST /api/key/new");

	KEY_CONTROLLER.getKeyByCode(
			req.body.code
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
	console.log("POST /api/key/new");

	return await KEY_CONTROLLER.getKeyBySectionCode(
			req.body.sectionCode
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
	console.log("POST /api/key/new");

	return await kEY_CONTROLLER.getKeyByRoomName(
			req.body.roomName
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
	console.log("POST /api/key/new");

});
