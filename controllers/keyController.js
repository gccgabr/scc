/* Este subprograma deve ser responsável pela validação e pelo tratamento dos
 * dados recebidos da API. */
"use strict";

const SECTION = require("../services/section.js");
const KEY = require("../services/key.js");

// Validar código da seção.
const validateSectionCode = async (sectionCode) => {
	let sectionExists = true;
	await SECTION.getAllSectionCodes()
		.then(result => {
			if (isNaN(sectionCode) || sectionCode < 0 || !result.includes(sectionCode))
				sectionExists = false;
		})
		.catch(error => {
			throw error;
		});

	return sectionExists ? true : false;
};

// Create.
const createNewKey = async (code, roomName, keyStatus, sectionCode) => {
	// Validar código da chave.
	if (!code || !code.match(/[0-9]{1,3}/))
		throw "ERRO: Código inválido.";

	// Validar status da chave.
	if (keyStatus < 0 || keyStatus > 2)
		throw "ERRO: Status inválido.";

	// Validar código da seção.
	let sectionExists = 1;
	await SECTION.getAllSectionCodes()
		.then(result => {
			if (!sectionCode || !result.includes(sectionCode))
				sectionExists = 0;
		})
		.catch(error => {
			throw error;
		});
	if (sectionExists)
		throw "ERRO: Seção inexistente.";

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
	let sectionExists = 1;
	await SECTION.getAllSectionCodes()
		.then(result => {
			if (!sectionCode || !result.includes(sectionCode))
				sectionExists = 0;
		})
		.catch(error => {
			throw error;
		});
	if (sectionExists)
		throw "ERRO: Seção inexistente.";

	return await KEY.getKeyBySectionCode(sectionCode)
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

const getAllKeys = async () => {
	return await KEY.getAllKeys()
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

	if (!await validateSectionCode(sectionCode))
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
