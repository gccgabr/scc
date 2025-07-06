"use strict";

const DB = require("../database/db.js");
const CPF = require("../controllers/userData/cpf.js");

//// Create.
const createNewLoan = async (keyCode, sectionCode, userCpf) => {
	let db = await DB.getDB();
	let start_timestamp = Date.now();
	let query = "INSERT INTO Loan(key_code, section_code, user_cpf) VALUES (?, ?, ?, ?, ?, ?)";
	let query_values = [start_timestamp, null, 0, keyCode, sectionCode, userCpf];
	return await db.run(query, query_values, (err) => {
		if (err) {
			return err;
		}
		return true;
	});
};

//// Read.
const getLoanByCode = async (code) => {
	let db = await DB.getDB();
	let query = "SELECT * FROM Loan WHERE code = ?";
	let query_values = [code];
	return await db.all(query, query_values, (err, rows) => {
		if (err) {
			return err;
		}
		return rows;
	});
};

const getLoanByKeyCode = async (keyCode) => {
	let db = await DB.getDB();
	let query = "SELECT * FROM Loan WHERE key_code = ?";
	let query_values = [keyCode];
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
	let db = await DB.getDB();
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
	let db = await DB.getDB();
	let query = "SELECT * FROM Loan WHERE user_cpf = ?";
	let query_values = [userCpf];
	return await db.all(query, query_values, (err, rows) => {
		if (err) {
			return err;
		}
		return true;
	});
};

const getLoanByStatus = async (overdue) => {
	let db = await DB.getDB();
	let query = "SELECT * FROM Loan WHERE overdue = ?";
	let query_values = [overdue];
	return await db.all(query, query_values, (err, rows) => {
		if (err) {
			return err;
		}
		return true;
	});
};

const getAllLoans = async () => {
	let db = await DB.getDB();
	let query = "SELECT * FROM Loan;";
	return await db.all(query, (err, rows) => {
		if (err) {
			return err;
		}
		return rows;
	});
};

//// Update.
/* A atualização dos dados de empréstimo deve possibilitar, precipuamente, a finalização do empréstimo. */
const setLoanOverdue = async (code) => {
	let db = await DB.getDB();
	let query = "UPDATE Loan SET overdue = 1 WHERE code = ?";
	let query_values = [code];
	return await db.run(query, query_values, (err) => {
		if (err) {
			return err;
		}
		return true;
	});
}

//// Delete.
const deleteLoan = async (code) => {
	let db = await DB.getDB();
	let query = "DELETE FROM Loan WHERE code = ?";
	let query_values = [code];
	return await db.run(query, query_values, (err) => {
		if (err) {
			return err;
		}
		return true;
	});
}

module.exports = {
	createNewLoan,
	getLoanByCode,
	getLoanByKeyCode,
	getLoanBySectionCode,
	getLoanByUserCpf,
	getLoanByStatus,
	getAllLoans,
	setLoanOverdue,
	deleteLoan
};
