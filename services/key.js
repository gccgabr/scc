"use strict";

const { getDB, closeDB } = require("../database/db.js");


// Create.
const createNewKey = async (code, roomName, keyStatus, sectionCode) => {
	let db = await getDB();
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

const getKeyByRoomName = async (roomName) => {
	let db = await getDB();
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
	let db = await getDB();
	let query = "SELECT * FROM Key WHERE status = ?";
	let query_values = [keyStatus];
	return await db.all(query, query_values, (err, rows) => {
		if (err) {
			return err;
		}
		return true;
	});
};

//createNewKey("0", "SALA 1", 0, 1)
//	.then(result => {
//		console.log(result);
//	})
//	.catch(error => {
//		console.log(error);
//	});



// Update.
const updateKey = async (code, newCode, newRoomName, newStatus, newSectionCode) => {
	let db = await getDB();
	let query = "UPDATE Key SET code = ?, room_name = ?, status = ?, section_code = ? WHERE code = ?";
	let query_values = [newCode, newRoomName, newStatus, newSectionCode, code];
	return await db.run(query, query_values, (err) => {
		if (err) {
			return err;
		}
		return true;
	});
}

getKeyByStatus(1)
	.then(result => {
		console.log(result);
	})
	.catch(error => {
		console.log(error);
	});

// Delete.
const deleteKey = async (code) => {
	let db = await getDB();
	let query = "DELETE FROM Key WHERE code = ?";
	let query_values = [code];
	return await db.run(query, query_values, (err) => {
		if (err) {
			return err;
		}
		return true;
	});
}

deleteKey(1)
	.then(result => {
		console.log(result);
	})
	.catch(error => {
		console.log(error);
	});

