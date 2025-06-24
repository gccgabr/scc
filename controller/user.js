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
	db.all("SELECT * FROM User WHERE cpf=?", [cpf], (err, rows) => {
		if (err) {
			return err;
		}
		console.log(rows);
	});
};

const getUsersByName = (name) => {
	db.all("SELECT * FROM User WHERE name=?", [name], (err, rows) => {
		if (err) {
			return err;
		}
		console.log(rows);
	});
};

const getUsersByRole = (role) => {
	db.all("SELECT * FROM User WHERE role=?", [role], (err, rows) => {
		if (err) {
			return err;
		}
		console.log(rows);
	});
};

const getAllUsers = () => {
	db.all("SELECT * FROM User", [], (err, rows) => {
		if (err) {
			return err;
		}
		console.log(rows);
	});
};

//createNewUser("00000000000", "Teste", "teste@teste.com", "000000000000", 0, "h4sh3d");
//let result = getAllUsers();
//let result = getUserByCpf("00000000000");
//let result = getUsersByName("Teste");
let result = getUsersByRole(0);
