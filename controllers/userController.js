/* Este subprograma deve ser responsável pela validação e pelo tratamento dos
 * dados recebidos da API. OBS.: A senha codificada presente no banco de dados
 * não é ordinariamente retornada pelas funções consulta. */
"use strict";

const BCRYPT = require("bcrypt");
const USER = require("../services/user.js");
const DATA = {
	cpf: require("../controllers/userData/cpf.js"),
	email: require("../controllers/userData/email.js"),
	phone: require("../controllers/userData/phone.js")
};

/* Para cada dado do usuário, é importado um conjunto de funções para validação e refinamento. */


/* Tratamento e validação dos dados recebidos para realização de operações
 * CRUD. */
// Create.
const createNewUser = async (cpf, name, email, phone, role, password) => {
	// Validar CPF.
	if (!DATA.cpf.isValid(cpf))
		throw "ERRO: CPF inválido.";

	// Validar nome.
	if (!name)
		throw "ERRO: Nome vazio.";

	// Validar endereço de e-mail.
	if (!DATA.email.isValid(email))
		throw "ERRO: Endereço de e-mail inválido.";

	// Validar número de telefone.
	if (!DATA.phone.isValid(phone))
		throw "ERRO: Número de telefone inválido.";

	// Validar código de função.
	if (role < 0 || role > 2)
		throw "ERRO: Código de função inválido.";	

	// Validar senha.
	if (!password || !password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/))
		throw "ERRO: Senha inválida.";

	// Codificar senha e gravar dados no banco de dados.
	let saltRounds = 10;
	return await BCRYPT.hash(password, saltRounds, async (err, hashedPassword) => {
		if (err) {
			throw err;
		}

		return await USER.createNewUser(cpf, name, email, phone, role, hashedPassword)
			.then(result => {
				return result;
			})
			.catch(error => {
				throw error;
			});
	});
};

// Read.
// Consulta de usuário por meio de CPF.
const getUserByCpf = async (cpf) => {
	return await USER.getUserByCpf(cpf)
		.then(result => {
			if (result.length > 0) {
				delete result[0]["hashed_password"]; // Remoção da senha codificada.
				return result[0];
			}
			return {};
		})
		.catch(error => {
			throw error;
		});
};

// Consulta de usuários por meio de nome.
const getUsersByName = async (name) => {
	return await USER.getUsersByName(name)
		.then(result => {
			if (result.length > 0) {
				result.forEach((obj) => { delete obj.hashed_password });
			}
			return result;
		})
		.catch(error => {
			throw error;
		});
};
					
// Consulta de usuários por meio de função.
const getUsersByRole = async (role) => {
	return await USER.getUsersByRole(role)
		.then(result => {
			if (result.length > 0) {
				result.forEach((obj) => { delete obj.hashed_password });
			}
			return result;
		})
		.catch(error => {
			throw error;
		});
};

// Consulta de todos os usuários.
const getAllUsers = async () => {
	return await USER.getAllUsers()
		.then(result => {
			if (result.length > 0) {
				result.forEach((obj) => { delete obj.hashed_password });
			}
			return result;
		})
		.catch(error => {
			throw error;
		});
};

const getUserCredential = async (cpf) => {
	// Validar CPF.
	if (!DATA.cpf.isValid(cpf))
		throw "ERRO: CPF inválido.";

	return await USER.getUserCredential(cpf)
		.then(result => {
			return result;
		})
		.catch(error => {
			return error;
		});
};


// Update.
// Atualizar nome de usuário.
const updateUserName = async (cpf, name) => {
	// Validar novo nome.
	if (!name) throw "ERRO: Nome vazio.";
	
	return await USER.updateUserName(cpf, name)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

// Atualizar endereço de e-mail de usuário.
const updateUserEmail = async (cpf, email) => {
	// Validar novo endereço de e-mail.
	if (!DATA.email.isValid(email))
		throw "ERRO: Endereço de e-mail inválido.";
	
	return await USER.updateUserEmail(cpf, email)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

// Atualizar número de telefone de usuário.
const updateUserPhone = async (cpf, phone) => {
	// Validar novo número de telefone.
	if (!DATA.phone.isValid(phone))
		throw "ERRO: Número de telefone inválido.";

	return await USER.updateUserPhone(cpf, phone)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

// Atualizar função de usuário.
const updateUserRole = async (cpf, role) => {
	// Validar código de função.
	if (role < 0 || role > 2)
		throw "ERRO: Código de função inválido.";	

	return await USER.updateUserRole(cpf, role)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

// Atualizar senha de usuário.
const updateUserPassword = async (cpf, password) => {
	// Validar senha.
	if (!password || !password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/))
		throw "ERRO: Senha inválida.";

	// Codificar senha e gravar dados no banco de dados.
	let saltRounds = 10;
	return await BCRYPT.hash(password, saltRounds, async (err, hashedPassword) => {
		if (err) {
			throw err;
		}

		return await USER.updateUserHashedPassword(cpf, hashedPassword)
			.then(result => {
				return result;
			})
			.catch(error => {
				throw error;
			});

	});

};

const deleteUser = async (cpf) => {
	// Validar CPF.
	if (!DATA.cpf.isValid(cpf))
		throw "ERRO: CPF inválido.";

	return await USER.deleteUser(cpf)
		.then(result => {
			return result;
		})
		.catch(error => {
			throw error;
		});
};

module.exports = {
	createNewUser,
	getUserByCpf,
	getUsersByName,
	getUsersByRole,
	getAllUsers,
	getUserCredential,
	updateUserName,
	updateUserEmail,
	updateUserPhone,
	updateUserRole,
	updateUserPassword,
	deleteUser
};
