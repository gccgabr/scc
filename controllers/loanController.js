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

	return await LOAN.createNewLoan(code, keyCode, sectionCode, userCpf)
		.then(result => {
			return result;
		})
		.catch(error => {
			return error;
		});
};

//// Read.
const getLoanByCode = async (code) => {
};

/* A consulta de empréstimos por código de seção deve possibilitar saber quais
 * empréstimos são pertencentes a uma seção específica. */
const getLoanBySectionCode = async (sectionCode) => {
}

/* A consulta de empréstimos por CPF de usuário deve possibilitar saber quais
 * empréstimos pertencem a um usuário específico. */
const getLoanByUserCpf = async (userCpf) => {
};

//// Update.
/* A atualização dos dados de empréstimo deve possibilitar, precipuamente, a finalização do empréstimo. */
const setLoanOverdue = async (code) => {
}

//// Delete.
const deleteLoan = async (code) => {
}

module.exports = {
	createNewLoan,
	getLoanByCode,
	getLoanBySectionCode,
	getLoanByUserCpf,
	setLoanOverdue,
	deleteLoan
};
