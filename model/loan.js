"use strict";

const db = require("../utils/database");
const tableName = "Loan";

class Loan {
	// Adicionar novo empréstimo.
	async add(datetime_start, datetime_end, id_key, cpf_servant) {
		db.open();
		let res = await db.addEntry(tableName, [datetime_start, datetime_end, id_key, cpf_servant]);
		db.close();
		return res;
	}
}

let loan = new Loan();

loan.add(1741622235, 1741622240, 2, "00000000007");
