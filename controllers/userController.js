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
		return"ERRO: CPF inválido.";

	// Validar nome.
	if (!name)
		return"ERRO: Nome vazio.";

	// Validar endereço de e-mail.
	if (!DATA.email.isValid(email))
		return "ERRO: Endereço de e-mail inválido.";

	// Validar número de telefone.
	if (!DATA.phone.isValid(phone))
		return"ERRO: Número de telefone inválido.";

	// Validar código de função.
	if (role < 0 || role > 2)
		return"ERRO: Código de função inválido.";	

	// Validar senha.
	if (!password || !password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/))
		return"ERRO: Senha inválida.";

	// Codificar senha e gravar dados no banco de dados.
	let saltRounds = 10;
	return await BCRYPT.hash(password, saltRounds, async (err, hashed_password) => {
		if (err) {
			return err;
		}

		return await USER.createNewUser(cpf, name, email, phone, role, hashed_password)
			.then(result => {
				return result;
			})
			.catch(error => {
				return error;
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
			return error;
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
			return error;
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
			return error;
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
			return error;
		});
};

module.exports = {
	createNewUser,
	getUserByCpf,
	getUsersByName,
	getUsersByRole,
	getAllUsers
};
