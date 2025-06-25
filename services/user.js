"use strict";

const { getDB, closeDB } = require("../database/db.js");

// Create.
const createNewUser = async (cpf, name, email, phone, role, hashed_password) => {
	let insert_query = "INSERT INTO User(cpf, name, email, phone, role, hashed_password) VALUES(?, ?, ?, ?, ?, ?)";
	let query_values = [cpf, name, email, phone, role, hashed_password];
	let db = await getDB();
	return await db.run(insert_query, query_values, (err) => {
		if (err) {
			return err;
		}
		return true;
	});
};

// Read.
const getUserByCpf = async (cpf) => {
	let db = await getDB();
	return await db.all("SELECT * FROM User WHERE cpf=?", [cpf], (err, rows) => {
		if (err) {
			return err;
		}
		return rows;
	});
};

const getUsersByName = async (name) => {
	let db = await getDB();
	return await db.all("SELECT * FROM User WHERE name=?", [name], (err, rows) => {
		if (err) {
			return err;
		}
		return rows;
	});
};

const getUsersByRole = async (role) => {
	let db = await getDB();
	return await db.all("SELECT * FROM User WHERE role=?", [role], (err, rows) => {
		if (err) {
			return err;
		}
		return rows;
	});
};

const getAllUsers = async () => {
	let db = await getDB();
	let result = await db.all("SELECT * FROM User", [], (err, rows) => {
		if (err) {
			return err;
		}
		return rows;
	});
	return result;
};

// Update.
const updateUser = async (cpf, newCpf, newName, newEmail, newPhone, newRole, newHashedPassword) => {
	let query = `UPDATE User
		SET cpf = ?, name = ?, email = ?, phone = ?, role = ?, hashed_password = ?
		WHERE cpf = ?`;
	let query_values = [newCpf, newName, newEmail, newPhone, newRole, newHashedPassword, cpf];
	let db = await getDB();
	return await db.run(query, query_values, (err) => {
		if (err) {
			return err;
		} else {
			return true;
		}
	});
};

// Delete.
const deleteUser = async (cpf) => {
	let query = "DELETE FROM User WHERE cpf = ?";
	let db = await getDB();
	return await db.run(query, [cpf], (err) => {
		if (err) {
			return err;
		} else {
			return true;
		}
	});
};

//createNewUser("11111111111", "Teste", "teste", "000000000000", 0, "h4sh3d")
//	.then(result => {
//		console.log(result);
//	})
//	.catch(error => {
//		console.log(error);
//	});
//

//deleteUser("00000000000")
//	.then(result => {
//		console.log(result);
//	})
//	.catch(error => {
//		console.log(error);
//	});

updateUser("11111111111", "00000000000", "Teste", "teste", "000000000000", 0, "h4sh3d")
	.then(result => {
		console.log(result);
	})
	.catch(error => {
		console.log(error);
	});

getAllUsers()
	.then(users => {
		console.log(users);
	})
	.catch(error => {
		console.log(error);
	});
