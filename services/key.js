"use strict";

const { getDB, closeDB } = require("../database/db.js");


// Create.
const createNewKey = async (code, sectionCode, roomName, keyStatus) => {
	let db = await getDB();
	let query = "INSERT INTO Key VALUES (?, ?, ?, ?)";
	let query_values = [code, sectionCode, roomName, keyStatus];
	return await db.run(query, query_values, (err) => {
		if (err) {
			return err;
		}
		return true;
	});
};

// Read.
const getKeyByCode = async (code) => {
	let db = await getDB();
	let query = "SELECT * FROM Key WHERE code = ?";
	let query_values = [code];
	return await db.all(query, query_values, (err, rows) => {
		if (err) {
			return err;
		}
		return rows;
	});
};

const getKeyBySectionCode = async (sectionCode) => {
	let db = await getDB();
	let query = "SELECT * FROM Key WHERE section_code = ?";
	let query_values = [sectionCode];
	return await db.all(query, query_values, (err, rows) => {
		if (err) {
			return err;
		}
		return true;
	});
}

getKeyBySectionCode(0)
	.then(result => {
		console.log(result);
	})
	.catch(error => {
		console.log(error);
	});


//// Read.
//const getSectionByUserCpf = async (user_cpf) => {
//	let db = await getDB();
//	let query = "SELECT * FROM Section WHERE user_cpf = ?";
//	let query_values = [user_cpf];
//	return await db.all(query, query_values, (err, rows) => {
//		if (err) {
//			return err;
//		}
//		return rows;
//	});
//};
//
//const getSectionByName = async (name) => {
//	let db = await getDB();
//	let query = "SELECT * FROM Section WHERE name = ?";
//	let query_values = [name];
//	return await db.all(query, query_values, (err, rows) => {
//		if (err) {
//			return err;
//		}
//		return rows;
//	});
//};
//
//const getSectionByCode = async (code) => {
//	let db = await getDB();
//	let query = "SELECT * FROM Section WHERE code = ?";
//	let query_values = [code];
//	return await db.all(query, query_values, (err, rows) => {
//		if (err) {
//			return err;
//		}
//		return rows;
//	});
//}
//
//// Update.
//const updateSection = async (code, newName, newUserCpf) => {
//	let db = await getDB();
//	let query = "UPDATE Section SET name = ?, user_cpf = ? WHERE code = ?";
//	let query_values = [newName, newUserCpf, code];
//	return await db.run(query, query_values, (err) => {
//		if (err) {
//			return err;
//		}
//		return true;
//	});
//}
//
//// Delete.
//const deleteSection = async (code) => {
//	let db = await getDB();
//	let query = "DELETE FROM Section WHERE code = ?";
//	let query_values = [code];
//	return await db.run(query, query_values, (err) => {
//		if (err) {
//			return err;
//		}
//		return true;
//	});
//}
