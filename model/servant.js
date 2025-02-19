"use strict";

const db = require("../utils/database");
const tableName = "Servant";

class Servant {
	// Adicionar novo servidor.
	addNewServant(cpf, name, phone, email, hashedPassword, isAdmin) {
		db.open();
		db.addEntry(tableName, [cpf, name, phone, email, hashedPassword, isAdmin]);
		db.close();
	}

	queryByCPF(cpf) {
		db.open();
		db.queryByAttribute(tableName, "cpf", cpf).then(rows => {
			return rows;
		});;
		db.close();
	}
}

let srv = new Servant();
//srv.addNewServant("00000000002", "Pessoa", "000000000000000", "h4sh3d", 1);
//srv.queryByCPF("00000000001");
