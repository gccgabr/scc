"use strict";

const { getAllUsers } = require("../services/user.js");

const express = require("express");
const app = express();
const port = 3000;

/* Middleware. */
app.use(express.json());

/* Rotas. (CRUD) */
// Read.
app.get("/api/user", (req, res) => {
	console.log("GET /api/user request.");
	res.send("HI");
});

app.listen(port, () => {
	console.log("Escutando na porta " + port + ".");
});
