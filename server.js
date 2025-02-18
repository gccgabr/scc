"use strict";

const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3000;

app.use(cors());

//app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/data", (req, res) => {
	const data = {
		message: "Hello from the server!",
	};
	res.json(data);
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
