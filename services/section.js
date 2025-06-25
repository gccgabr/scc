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

createNewSection("IEG", "000000000")
	.then(result => {
		console.log(result);
	})
	.catch(error => {
		console.log(error);
	});
