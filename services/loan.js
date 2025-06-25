"use strict";

const { getDB, closeDB } = require("../database/db.js");

// Create.
const createNewLoan = async (code, keyCode, sectionCode, userCpf) => {
	let db = await getDB();
	let timestamp = Date.now();
	let query = "INSERT INTO Loan VALUES (?, ?, ?, ?, ?)";
	let query_values = [code, timestamp, keyCode, sectionCode, userCpf];
	return await db.run(query, query_values, (err) => {
		if (err) {
			return err;
		}
		return true;
	});
};

//createNewLoan(0, 1, 1, "00000000000")
//	.then(result => {
//		console.log(result);
//	})
//	.catch(error => {
//		console.log(error);
//	});

// Read.
const getLoanByCode = async (code) => {
	let db = await getDB();
	let query = "SELECT * FROM Loan WHERE code = ?";
	let query_values = [code];
	return await db.all(query, query_values, (err, rows) => {
		if (err) {
			return err;
		}
		return rows;
	});
};

/* A consulta de empréstimos por código de seção deve possibilitar saber quais
 * empréstimos são pertencentes a uma seção específica. */
const getLoanBySectionCode = async (sectionCode) => {
	let db = await getDB();
	let query = "SELECT * FROM Loan WHERE section_code = ?";
	let query_values = [sectionCode];
	return await db.all(query, query_values, (err, rows) => {
		if (err) {
			return err;
		}
		return true;
	});
}

/* A consulta de empréstimos por CPF de usuário deve possibilitar saber quais
 * empréstimos pertencem a um usuário específico. */
const getLoanByUserCpf = async (userCpf) => {
	let db = await getDB();
	let query = "SELECT * FROM Loan WHERE user_cpf = ?";
	let query_values = [userCpf];
	return await db.all(query, query_values, (err, rows) => {
		if (err) {
			return err;
		}
		return true;
	});
};

getLoanByUserCpf("00000000000")
	.then(result => {
		console.log(result);
	})
	.catch(error => {
		console.log(error);
	});

//const getKeyByStatus = async (keyStatus) => {
//	let db = await getDB();
//	let query = "SELECT * FROM Key WHERE status = ?";
//	let query_values = [keyStatus];
//	return await db.all(query, query_values, (err, rows) => {
//		if (err) {
//			return err;
//		}
//		return true;
//	});
//};
//
//// Update.
//const updateKey = async (code, newCode, newRoomName, newStatus, newSectionCode) => {
//	let db = await getDB();
//	let query = "UPDATE Key SET code = ?, room_name = ?, status = ?, section_code = ? WHERE code = ?";
//	let query_values = [newCode, newRoomName, newStatus, newSectionCode, code];
//	return await db.run(query, query_values, (err) => {
//		if (err) {
//			return err;
//		}
//		return true;
//	});
//}
//
//// Delete.
//const deleteKey = async (code) => {
//	let db = await getDB();
//	let query = "DELETE FROM Key WHERE code = ?";
//	let query_values = [code];
//	return await db.run(query, query_values, (err) => {
//		if (err) {
//			return err;
//		}
//		return true;
//	});
//}
