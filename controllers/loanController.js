"use strict";

const LOAN = require("../services/loan.js");

//// Create.
const createNewLoan = async (code, keyCode, sectionCode, userCpf) => {
	// Validar código de empréstimo.
	if (code == null || Number(code) < 0)
		return "ERRO: Código inválido.";

	// Validar código de chave.
	if (!code || !code.match(/[0-9]{1,3}/))
		return "ERRO: Código inválido.";

	// Validar código da seção.
	if (!sectionCode || !SECTION.getAllSectionCodes().includes(sectionCode))
		return "ERRO: Seção inexistente.";

	// Validar CPF de usuário.
	if (!CPF.isValid(userCpf))
		return "ERRO: CPF inválido.";

	return await LOAN.createNewLoan(keyCode, sectionCode, userCpf)
		.then(result => {
			return result;
		})
		.catch(error => {
			return error;
		});
};

//// Read.
const getLoanByCode = async (code) => {
	// Validar código de empréstimo.
	if (code == null || Number(code) < 0)
		return "ERRO: Código inválido.";

	return await LOAN.getLoanByCode(code)
		.then(result => {
			return result;
		})
		.catch(error => {
			return error;
		});
};

const getAllLoans = async () => {
	return LOAN.getAllLoans()
		.then(result => {
			return result;
		})
		.catch(error => {
			return error;
		});
};

//// Update.
/* A atualização dos dados de empréstimo deve possibilitar, precipuamente, a finalização do empréstimo. */
const setLoanOverdue = async (code) => {
	// Validar código de empréstimo.
	if (code == null || Number(code) < 0)
		return "ERRO: Código inválido.";

	return await LOAN.setLoanOverdue(code)
		.then(result => {
			return result;
		})
		.catch(error => {
			return error;
		});
};

//// Delete.
const deleteLoan = async (code) => {
	// Validar código de empréstimo.
	if (code == null || Number(code) < 0)
		return "ERRO: Código inválido.";

	return await LOAN.deleteLoan(code)
		.then(result => {
			return result;
		})
		.catch(error => {
			return error;
		});
};

module.exports = {
	createNewLoan,
	getLoanByCode,
	getAllLoans,
	setLoanOverdue,
	deleteLoan
};
