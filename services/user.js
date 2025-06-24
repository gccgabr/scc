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

// Update.
const updateUser = (cpf, newCpf, newName, newEmail, newPhone, newRole, newHashedPassword) => {
	let query = `UPDATE User
		SET cpf = ?, name = ?, email = ?, phone = ?, role = ?, hashed_password = ?
		WHERE cpf = ?`;
	let query_values = [newCpf, newName, newEmail, newPhone, newRole, newHashedPassword, cpf];
	db.run(query, query_values, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Successo.");
		}
	});
};

// Delete.
const deleteUser = (cpf) => {
	let query = "DELETE FROM User WHERE cpf = ?";
	db.run(query, [cpf], (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Sucesso.");
		}
	});
};
