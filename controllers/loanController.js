"use strict";

const LOAN = require("../services/loan.js");
const SECTION = require("../services/section.js");
const CPF = require("../controllers/userData/cpf.js");

//// Create.
const createNewLoan = async (keyCode, sectionCode, userCpf) => {
	// Validar código de chave.
	if (!keyCode || !keyCode.match(/[0-9]{1,3}/))
		throw "ERRO: Código inválido.";

	await SECTION.getAllSectionCodes()
		.then(result => {
			if (!sectionCode || !result.includes(sectionCode))
				throw "ERRO: Seção inexistente.";
		})
		.catch(error => {
			throw error;
		});

	// Validar CPF de usuário.
	if (!CPF.isValid(userCpf))
		throw "ERRO: CPF inválido.";

	return await LOAN.createNewLoan(keyCode, sectionCode, userCpf)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

//// Read.
const getLoanByCode = async (code) => {
	// Validar código de empréstimo.
	if (code == null || Number(code) < 0)
		throw "ERRO: Código inválido.";

	return await LOAN.getLoanByCode(code)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

const getAllLoans = async () => {
	return LOAN.getAllLoans()
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

//// Update.
/* A atualização dos dados de empréstimo deve possibilitar, precipuamente, a finalização do empréstimo. */
const setLoanOverdue = async (code) => {
	// Validar código de empréstimo.
	if (code == null || Number(code) < 0)
		throw "ERRO: Código inválido.";

	return await LOAN.setLoanOverdue(code)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

//// Delete.
const deleteLoan = async (code) => {
	// Validar código de empréstimo.
	if (code == null || Number(code) < 0)
		throw "ERRO: Código inválido.";

	return await LOAN.deleteLoan(code)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

module.exports = {
	createNewLoan,
	getLoanByCode,
	getAllLoans,
	setLoanOverdue,
	deleteLoan
};
