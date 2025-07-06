"use strict";

const DB = require("../database/db.js");


// Create.
const createNewKey = async (code, roomName, keyStatus, sectionCode) => {
	let db = await DB.getDB();
	let query = "INSERT INTO Key VALUES (?, ?, ?, ?)";
	let query_values = [code, roomName, keyStatus, sectionCode];
	return await db.run(query, query_values, (err) => {
		if (err) {
			return err;
		}
		return true;
	});
};

// Read.
const getKeyByCode = async (code) => {
	let db = await DB.getDB();
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
	let db = await DB.getDB();
	let query = "SELECT * FROM Key WHERE section_code = ?";
	let query_values = [sectionCode];
	return await db.all(query, query_values, (err, rows) => {
		if (err) {
			return err;
		}
		return true;
	});
}

const getKeyByRoomName = async (roomName) => {
	let db = await DB.getDB();
	let query = "SELECT * FROM Key WHERE room_name = ?";
	let query_values = [roomName];
	return await db.all(query, query_values, (err, rows) => {
		if (err) {
			return err;
		}
		return true;
	});
};

const getKeyByStatus = async (keyStatus) => {
	let db = await DB.getDB();
	let query = "SELECT * FROM Key WHERE status = ?";
	let query_values = [keyStatus];
	return await db.all(query, query_values, (err, rows) => {
		if (err) {
			return err;
		}
		return true;
	});
};

// Update.
const updateKeySectionCode = async (code, sectionCode) => {
	let db = await DB.getDB();
	let query = "UPDATE Key SET section_code = ? WHERE code = ?";
	let query_values = [sectionCode, code];
	return await db.run(query, query_values, (err) => {
		if (err) {
			return err;
		}
		return true;
	});
};
const updateKeyRoomName = async (code, roomName) => {
	let db = await DB.getDB();
	let query = "UPDATE Key SET room_name = ? WHERE code = ?";
	let query_values = [roomName, code];
	return await db.run(query, query_values, (err) => {
		if (err) {
			return err;
		}
		return true;
	});
};

const updateKeyStatus = async (code, keyStatus) => {
	let db = await DB.getDB();
	let query = "UPDATE Key SET status = ? WHERE code = ?";
	let query_values = [keyStatus, code];
	return await db.run(query, query_values, (err) => {
		if (err) {
			return err;
		}
		return true;
	});
};


// Delete.
const deleteKey = async (code) => {
	let db = await DB.getDB();
	let query = "DELETE FROM Key WHERE code = ?";
	let query_values = [code];
	return await db.run(query, query_values, (err) => {
		if (err) {
			return err;
		}
		return true;
	});
}

module.exports = {
	createNewKey,
	getKeyByCode,
	getKeyBySectionCode,
	getKeyByRoomName,
	getKeyByStatus,
	updateKeyRoomName,
	updateKeyStatus,
	updateKeySectionCode,
	deleteKey
};
