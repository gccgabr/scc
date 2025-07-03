"use strict";

const SECTION = require("../services/section.js");
const CPF = require("../controllers/userData/cpf.js");

// Create.
const createNewSection = async (name, userCpf) => {
	// Validar nome da seção.
	if (!name)
		return "ERRO: Nome de seção inválido.";

	// Validar CPF de usuário.
	if (!CPF.isValid(userCpf))
		return "ERRO: CPF inválido.";

	return await SECTION.createNewSection(name, userCpf)
		.then(result => {
			return result;
		})
		.catch(error => {
			return error;
		});
};

// Read.
const getSectionByUserCpf = async (user_cpf) => {
};

const getSectionByName = async (name) => {
};

const getSectionByCode = async (code) => {
}

const getAllSectionCodes = async () => {
};

// Update.
const updateSection = async (code, newName, newUserCpf) => {
};

// Delete.
const deleteSection = async (code) => {
};
