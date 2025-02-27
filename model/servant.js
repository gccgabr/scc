"use strict";

const db = require("../utils/database");
const tableName = "Servant";

class Servant {
	// Adicionar novo servidor.
	async addNewServant(cpf, name, phone, email, hashedPassword, isAdmin) {
		db.open();
		let res = await db.addEntry(tableName, [cpf, name, phone, email, hashedPassword, isAdmin]);
		db.close();
		return res;
	}

	/* Métodos para leitura. */
	async queryByCPF(cpf) {
		db.open();
		let rows = await db.queryByAttribute(tableName, "cpf", cpf);
		db.close();
		return rows;
	}

	queryByName(name) {
		db.open()
		let rows = db.queryByAttribute(tableName, "name", name);
		db.close();
		return rows;
	}

	queryByPhoneNumber(phone) {
		db.open();
		let rows = db.queryByAttribute(tableName, "phone", phone);
		db.close();
		return rows;
	}

	queryByEmailAddress(email) {
		db.open();
		let rows = db.queryByAttribute(tableName, "email", email);
		db.close();
		return rows;
	}

	queryByPrivilege(isAdmin) {
		db.open();
		let rows = db.queryByAttribute(tableName, "is_admin", isAdmin);
		db.close();
		return rows;
	}


	/* Métodos para atualização.*/
	async alterCPF(cpf, newCpf) {
		db.open();
		let res = await db.alterAttributeValue(tableName, "cpf", newCpf, "cpf", cpf);
		db.close();
	}
}

let srv = new Servant();
//srv.addNewServant("00000000003", "Pessoa", "000000000000000", "test@test.com", "h4sh3d", 1);
//srv.queryByCPF("00000000003").then((rows) => {
//	console.log(rows);
//});
//srv.queryByName("Pessoa").then((rows) => {
//	console.log(rows);
//});
//srv.queryByPhoneNumber("000000000000000").then((rows) => {
//	console.log(rows);
//});
//srv.queryByEmailAddress("test@test.com").then((rows) => {
//	console.log(rows);
//});
//srv.queryByPrivilege(1).then((rows) => {
//	console.log(rows);
//});


// srv.addNewServant("00000000007", "Pessoa", "000000000000000", "test@test.com", "h4sh3d", 1)
// 	.then((res) => {
// 		if (res) {
// 			console.log("Usuário adicionado com êxito.");
// 		}
// 	});
srv.queryByCPF("00000000009")
	.then((rows) => {
		console.log(rows);
	});

srv.alterCPF("00000000009", "000000000010")
	.then((res) => {
		if (res) {
			console.log("CPF alterado com êxito.");
		}
	});

srv.queryByCPF("000000000010")
	.then((res) => {
		if (res) {
			console.log(res);
		}
	});
