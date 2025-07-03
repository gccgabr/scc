/* Este subprograma deve ser responsável pela validação e pelo tratamento dos
 * dados recebidos da API. */
"use strict";

const SECTION = require("../services/section.js");
const KEY = require("../services/key.js");

// Create.
const createNewKey = async (code, roomName, keyStatus, sectionCode) => {
	// Validar código da chave.
	if (!code || !code.match(/[0-9]{1,3}/))
		return "ERRO: Código inválido.";

	// Validar status da chave.
	if (keyStatus < 0 || keyStatus > 2)
		return "ERRO: Status inválido.";

	// Validar código da seção.
	if (!sectionCode || !SECTION.getAllSectionCodes().includes(sectionCode))
		return "ERRO: Seção inexistente.";

	return await KEY.createNewKey(code, roomName, keyStatus, sectionCode)
		.then(result => {
			return result;
		})
		.catch(error => {
			return error;
		});
};

// Read.
const getKeyByCode = async (code) => {
	// Validar código da chave.
	if (!code || !code.match(/[0-9]{1,3}/))
		return "ERRO: Código inválido.";

	return await KEY.getKeyByCode(code)
		.then(result => {
			return result;
		})
		.catch(error => {
			return error;
		});
};

const getKeyBySectionCode = async (sectionCode) => {
	// Validar código da seção.
	if (!sectionCode || !SECTION.getAllSectionCodes().includes(sectionCode))
		return "ERRO: Seção inexistente.";

	return await KEY.getKeySectionCode(sectionCode)
		.then(result => {
			return result;
		})
		.catch(error => {
			return error;
		});
}

const getKeyByRoomName = async (roomName) => {
	return await KEY.getKeyByRoomName(roomName)
		.then(result => {
			return result;
		})
		.catch(error => {
			return error;
		});
};

const getKeyByStatus = async (keyStatus) => {
	// Validar status da chave.
	if (keyStatus < 0 || keyStatus > 2)
		return "ERRO: Status inválido.";

	return await KEY.getKeyByStatus(keyStatus)
		.then(result => {
			return result;
		})
		.catch(error => {
			return error;
		});
};

// Update.
const updateKey = async (code, newCode, newRoomName, newStatus, newSectionCode) => {
}

// Delete.
const deleteKey = async (code) => {
}
