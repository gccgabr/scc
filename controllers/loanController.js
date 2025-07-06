"use strict";

const LOAN = require("../services/loan.js");

//// Create.
const createNewLoan = async (code, keyCode, sectionCode, userCpf) => {
	// Validar código de empréstimo.
	if (code == null || Number(code) < 0)
		throw "ERRO: Código inválido.";

	// Validar código de chave.
	if (!keyCode || !keyCode.match(/[0-9]{1,3}/))
		throw "ERRO: Código de chave inválido.";

	// Validar código da seção.
	await SECTION.getAllSectionCodes()
		.then(result => {
			if (!sectionCode || !result.includes(sectionCode))
				throw "ERRO: Código de seção inválido.";
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

const getLoanByKeyCode = async (keyCode) => {
	// Validar código de chave.
	if (!keyCode || !keyCode.match(/[0-9]{1,3}/))
		throw "ERRO: Código de chave inválido.";

	return await LOAN.getLoanByKeyCode(keyCode)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

const getLoanBySectionCode = async (sectionCode) => {
	// Validar código da seção.
	await SECTION.getAllSectionCodes()
		.then(result => {
			if (!sectionCode || !result.includes(sectionCode))
				throw "ERRO: Código de seção inválido.";
		})
		.catch(error => {
			throw error;
		});

	return await LOAN.getLoanBySectionCode(sectionCode)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

const getLoanByUserCpf = async (userCpf) => {
	// Validar CPF de usuário.
	if (!CPF.isValid(userCpf))
		throw "ERRO: CPF inválido.";

	return await LOAN.getLoanByUserCpf(userCpf)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

const getLoanByStatus = async (loanStatus) => {
	// Validar status.
	if (loanStatus < 0 || loanStatus > 1)
		throw "ERRO: Código de estado do empréstimo inválido.";

	return await LOAN.getLoanByStatus(loanStatus)
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
	getLoanByKeyCode,
	getLoanBySectionCode,
	getLoanByUserCpf,
	getLoanByStatus,
	getAllLoans,
	setLoanOverdue,
	deleteLoan
};
