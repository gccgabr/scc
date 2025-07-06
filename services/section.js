"use strict";

const DB = require("../database/db.js");

// Create.
const createNewSection = async (name, userCpf) => {
	let db = await DB.getDB();
	let query = "INSERT INTO Section (name, user_cpf) VALUES (?, ?)";
	let query_values = [name, userCpf];
	return await db.run(query, query_values, (err) => {
		if (err) {
			return err;
		}
		return true;
	});
};

// Read.
const getSectionByCode = async (code) => {
	let db = await DB.getDB();
	let query = "SELECT * FROM Section WHERE code = ?";
	let query_values = [code];
	return await db.all(query, query_values, (err, rows) => {
		if (err) {
			return err;
		}
		return rows;
	});
}

const getSectionByName = async (name) => {
	let db = await DB.getDB();
	let query = "SELECT * FROM Section WHERE name = ?";
	let query_values = [name];
	return await db.all(query, query_values, (err, rows) => {
		if (err) {
			return err;
		}
		return rows;
	});
};

const getSectionByUserCpf = async (user_cpf) => {
	let db = await DB.getDB();
	let query = "SELECT * FROM Section WHERE user_cpf = ?";
	let query_values = [user_cpf];
	return await db.all(query, query_values, (err, rows) => {
		if (err) {
			return err;
		}
		return rows;
	});
};

const getAllSectionCodes = async () => {
	let db = await DB.getDB();
	let query = "SELECT * FROM Section";
	return await db.all(query, (err, rows) => {
		if (err) {
			return err;
		}
		return rows;
	});
};

const getAllSectionCodes = async () => {
	let db = await DB.getDB();
	let query = "SELECT code FROM Section";
	return await db.all(query, (err, rows) => {
		if (err) {
			return err;
		}
		return rows;
	});
};

// Update.
const updateSectionName = async (code, name) => {
	let db = await DB.getDB();
	let query = "UPDATE Section SET name = ? WHERE code = ?";
	let query_values = [name, code];
	return await db.run(query, query_values, (err) => {
		if (err) {
			return err;
		}
		return true;
	});
};

const updateSectionUserCpf = async (code, userCpf) => {
	let db = await DB.getDB();
	let query = "UPDATE Section SET user_cpf WHERE code = ?";
	let query_values = [userCpf, code];
	return await db.run(query, query_values, (err) => {
		if (err) {
			return err;
		}
		return true;
	});
};

// Delete.
const deleteSection = async (code) => {
	let db = await DB.getDB();
	let query = "DELETE FROM Section WHERE code = ?";
	let query_values = [code];
	return await db.run(query, query_values, (err) => {
		if (err) {
			return err;
		}
		return true;
	});
};

module.exports = {
	createNewSection,
	getSectionByCode,
	getSectionByName,
	getSectionByUserCpf,
	getAllSections,
	getAllSectionCodes,
	updateSectionName,
	updateSectionUserCpf,
	deleteSection
};
