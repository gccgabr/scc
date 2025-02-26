"use strict";

const db = require("../utils/database");
const tableName = "Servant";

class Servant {
	// Adicionar novo servidor.
	addNewServant(cpf, name, phone, email, hashedPassword, isAdmin) {
		(async() => {
			await db.open();
			await db.addEntry(tableName, [cpf, name, phone, email, hashedPassword, isAdmin]);
			await db.close();
		})();
	}

	/* Métodos para leitura. */
	queryByCPF(cpf) {
		db.open();
		db.queryByAttribute(tableName, "cpf", cpf).then(rows => {
			return rows;
		});
		db.close();
	}

	queryByName(name) {
		db.open()
		db.queryByAttribute(tableName, "name", name).then(rows => {
			return rows;
		});
		db.close();
	}

	queryByPhoneNumber(phone) {
		db.open();
		db.queryByAttribute(tableName, "phone", phone).then(rows => {
			return rows;
		});
		db.close();
	}

	queryByEmailAddress(email) {
		db.open();
		db.queryByAttribute(tableName, "email", email).then(rows => {
			console.log(rows);
			return rows;
		});
		db.close();
	}

	queryByPrivilege(isAdmin) {
		db.open();
		let rows = db.queryByAttribute(tableName, "is_admin", isAdmin);
		db.close();
		return rows;
	}


	/* Métodos para atualização.*/
	alterCPF(cpf, newCpf) {
		db.open();
		db.alterAttributeValue(tableName, "cpf", newCpf, "cpf", cpf);
		db.close();
	}
}

let srv = new Servant();
//srv.addNewServant("00000000002", "Pessoa", "000000000000000", "test@test.com", "h4sh3d", 1);
//srv.queryByCPF("00000000001");
//srv.queryByName("Pessoa");
//srv.queryByPhoneNumber("000000000000000");
//srv.queryByEmailAddress("test@test.com");
srv.queryByPrivilege(1).then((rows) => {
	console.log(rows);
});
//srv.queryByPrivilege(1);
