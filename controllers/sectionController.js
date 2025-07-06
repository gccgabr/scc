"use strict";

const SECTION = require("../services/section.js");
const CPF = require("../controllers/userData/cpf.js");

// Create.
const createNewSection = async (name, userCpf) => {
	// Validar nome da seção.
	if (!name)
		throw "ERRO: Nome de seção inválido.";

	// Validar CPF de usuário.
	if (!CPF.isValid(userCpf))
		throw "ERRO: CPF inválido.";

	return await SECTION.createNewSection(name, userCpf)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

// Read.
const getSectionByCode = async (code) => {
	// Validar código da seção.
	if (!Number.isInteger(code))
		throw "ERRO: Código inválido.";

	return await SECTION.getSectionByCode(code)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
}

const getSectionByName = async (name) => {
	// Validar nome da seção.
	if (!name)
		throw "ERRO: Nome de seção inválido.";

	return await SECTION.getSectionByName(name)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

const getSectionByUserCpf = async (userCpf) => {
	// Validar CPF de usuário.
	if (!CPF.isValid(userCpf))
		throw "ERRO: CPF inválido.";

	return await SECTION.getSectionByUserCpf(userCpf)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

const getAllSections = async () => {
	return await SECTION.getAllSections()
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

const getAllSectionCodes = async () => {
	return await SECTION.getAllSectionCodes()
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

// Update.
const updateSectionName = async (code, name) => {
	// Validar código da seção.
	if (!Number.isInteger(code))
		throw "ERRO: Código inválido.";

	// Validar nome da seção.
	if (!name)
		throw "ERRO: Nome de seção inválido.";

	return await SECTION.updateSectionName(code, name)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

const updateSectionUserCpf = async (code, userCpf) => {
	// Validar código da seção.
	if (!Number.isInteger(code))
		throw "ERRO: Código inválido.";

	// Validar CPF de usuário.
	if (!CPF.isValid(userCpf))
		throw "ERRO: CPF inválido.";

	return await SECTION.updateSectionUserCpf(code, userCpf)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

// Delete.
const deleteSection = async (code) => {
	// Validar código da seção.
	if (!Number.isInteger(code))
		throw "ERRO: Código inválido.";
	
	return await SECTION.deleteSection(code)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
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
