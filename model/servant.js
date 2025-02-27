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
		console.log(rows);
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

	/* Métodos para deleção. */
	async delete(cpf) {
		db.open();
		let res = await db.deleteEntry(tableName, "cpf", cpf);
		db.close();
		return res;
	}
}

let srv = new Servant();

srv.addNewServant("00000000007", "Pessoa", "000000000000000", "test@test.com", "h4sh3d", 1)
	.then((res) => {
		if (res) {
			console.log("Usuário adicionado com êxito.");
		}
	});
srv.queryByCPF("00000000007")
	.then((res) => {
		console.log(res);
	});
//
//srv.delete("00000000009")
//	.then((res) => {
//		if (res) {
//			console.log(res);
//		}
//	});
//
//srv.queryByCPF("00000000009")
//	.then((rows) => {
//		console.log(rows);
//	});

//srv.queryByCPF("000000000010")
//	.then((res) => {
//		if (res) {
//			console.log(res);
//		}
//	});
