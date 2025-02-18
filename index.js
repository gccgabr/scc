"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("sccDB.db");

db.serialize(() => {
	// Inserir dado.
	db.run(`
		INSERT INTO Servant (cpf, name, phone, email, password)
		VALUES (?, ?, ?, ?, ?)
	`, ["00000000000", "Pessoa", "000000000000000", "test@test.com", "k3y"]);

	// Recuperar dado.
	db.each("SELECT cpf FROM Servant", [], (err, row) => {
		if (err) {
			console.log(err.message);
		}
		console.log("CPF: " + row.cpf);
	});
});

db.close();
