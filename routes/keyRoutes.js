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
