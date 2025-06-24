"use strict";

const sqlite3 = require("sqlite3");
let db = new sqlite3.Database("../scc.db", (err) => {
	if (err) {
		return console.error(err);
	}
	console.log("Success!");
});

// Create.
const createNewUser = (cpf, name, email, phone, role, hashed_password) => {
	let insert_query = "INSERT INTO User(cpf, name, email, phone, role, hashed_password) VALUES(?, ?, ?, ?, ?, ?)";
	let query_values = [cpf, name, email, phone, role, hashed_password];
	db.run(insert_query, query_values);
};

// Read.
const getUserByCpf = (cpf) => {
};

const getUsersByName = (name) => {
};

const getUsersByRole = (role) => {
};

const getAllUsers = () => {
	db.all("SELECT * FROM User", [], (err, rows) => {
		if (err) {
			return err;
		}
		console.log(rows);
		return rows;
	});
};

//createNewUser("00000000000", "Teste", "teste@teste.com", "000000000000", 0, "h4sh3d");
let result = getAllUsers();
