"use strict";

// Configuração básica do Express.
const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/userRoutes.js");
const keyRoutes = require("./routes/keyRoutes.js");
const sectionRoutes = require("./routes/sectionRoutes.js");
const loanRoutes = require("./routes/loanRoutes.js");

// Middlewares.
app.use("/api/user", userRoutes);
app.use("/api/key", userRoutes);
app.use("/api/section", userRoutes);
app.use("/api/loan", userRoutes);

// Rota raiz do sistema.
app.get("/api", (req, res) => {
	res.send("Sistema de Controle de Chaves.");
});

// Início do sistema.
app.listen(port, () => {
	console.log("Escutando em on http://localhost:" + port);
});
