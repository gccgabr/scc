"use strict";

const { getDB, closeDB } = require("../database/db.js");

// Create.
const createNewSection = async (name, user_cpf) => {
	let db = await getDB();
	let query = "INSERT INTO Section (name, user_cpf) VALUES (?, ?)";
	let query_values = [name, user_cpf];
	return await db.run(query, query_values, (err) => {
		if (err) {
			return err;
		}
		return true;
	});
};

// Read.
const getSectionByUserCpf = async (user_cpf) => {
	let db = await getDB();
	let query = "SELECT * FROM Section WHERE user_cpf = ?";
	let query_values = [user_cpf];
	return await db.all(query, query_values, (err, rows) => {
		if (err) {
			return err;
		}
		return rows;
	});
};

const getSectionByName = async (name) => {
	let db = await getDB();
	let query = "SELECT * FROM Section WHERE name = ?";
	let query_values = [name];
	return await db.all(query, query_values, (err, rows) => {
		if (err) {
			return err;
		}
		return rows;
	});
};

//createNewSection("IEG", "00000000000")
//	.then(result => {
//		console.log(result);
//	})
//	.catch(error => {
//		console.log(error);
//	});

getSectionByName("IEG")
	.then(result => {
		console.log(result);
	})
	.catch(error => {
		console.log(error);
	});
