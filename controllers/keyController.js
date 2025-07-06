/* Este subprograma deve ser responsável pela validação e pelo tratamento dos
 * dados recebidos da API. */
"use strict";

const SECTION = require("../services/section.js");
const KEY = require("../services/key.js");

// Create.
const createNewKey = async (code, roomName, keyStatus, sectionCode) => {
	// Validar código da chave.
	if (!code || !code.match(/[0-9]{1,3}/))
		throw "ERRO: Código inválido.";

	// Validar status da chave.
	if (keyStatus < 0 || keyStatus > 2)
		throw "ERRO: Status inválido.";

	// Validar código da seção.
	await SECTION.getAllSectionCodes()
		.then(result => {
			if (!sectionCode || !result.includes(sectionCode))
				throw "ERRO: Seção inexistente.";
		})
		.catch(error => {
			throw error;
		});

	return await KEY.createNewKey(code, roomName, keyStatus, sectionCode)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

// Read.
const getKeyByCode = async (code) => {
	// Validar código da chave.
	if (!code || !code.match(/[0-9]{1,3}/))
		throw "ERRO: Código inválido.";

	return await KEY.getKeyByCode(code)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

const getKeyBySectionCode = async (sectionCode) => {
	// Validar código da seção.
	if (!sectionCode || !SECTION.getAllSectionCodes().includes(sectionCode))
		throw "ERRO: Seção inexistente.";

	return await KEY.getKeySectionCode(sectionCode)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
}

const getKeyByRoomName = async (roomName) => {
	return await KEY.getKeyByRoomName(roomName)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

const getKeyByStatus = async (keyStatus) => {
	// Validar status da chave.
	if (keyStatus < 0 || keyStatus > 2)
		throw "ERRO: Status inválido.";

	return await KEY.getKeyByStatus(keyStatus)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

// Update.
const updateKeySectionCode = async (code, sectionCode) => {
	// Validar código da chave.
	if (!code || !code.match(/[0-9]{1,3}/))
		throw "ERRO: Código inválido.";

	// Validar código da seção.
	if (!sectionCode || !SECTION.getAllSectionCodes().includes(sectionCode))
		throw "ERRO: Seção inexistente.";

	return await KEY.updateKeySectionCode(code, sectionCode)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

const updateKeyRoomName = async (code, roomName) => {
	// Validar código da chave.
	if (!code || !code.match(/[0-9]{1,3}/))
		throw "ERRO: Código inválido.";

	return await KEY.updateKeyRoomName(code, roomName)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

const updateKeyStatus = async (code, keyStatus) => {
	// Validar código da chave.
	if (!code || !code.match(/[0-9]{1,3}/))
		throw "ERRO: Código inválido.";

	// Validar status da chave.
	if (keyStatus < 0 || keyStatus > 2)
		throw "ERRO: Status inválido.";

	return await KEY.updateKeyStatus(code, keyStatus)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};


// Delete.
const deleteKey = async (code) => {
	// Validar código da chave.
	if (!code || !code.match(/[0-9]{1,3}/))
		throw "ERRO: Código inválido.";

	return await KEY.deleteKey(code)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
}

module.exports = {
	createNewKey,
	getKeyByCode,
	getKeyBySectionCode,
	getKeyByRoomName,
	getKeyByStatus,
	updateKeySectionCode,
	updateKeyRoomName,
	updateKeyStatus,
	deleteKey
};
