/* Este subprograma deve ser responsável pela validação e pelo tratamento dos
 * dados recebidos da API. OBS.: A senha codificada presente no banco de dados
 * não é ordinariamente retornada pelas funções consulta. */
"use strict";

const USER = require("../services/user.js");

/* Para cada dado do usuário, é importado um conjunto de funções para validação e refinamento. */


/* Tratamento e validação dos dados recebidos para realização de operações
 * CRUD. */
// Create.
//const createNewUser = async (cpf, name, email, phone, role, hashed_password) => {
//};

// Read.
// Consulta de usuário por meio de CPF.
const getUserByCpf = async (cpf) => {
	USER.getUserByCpf(cpf)
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
	USER.getUsersByName(name)
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
	USER.getUsersByRole(role)
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
