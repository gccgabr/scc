"use strict";

const db = require("./utils/database");

db.open();
db.queryAll("Servant").then(rows => {
	console.log(rows);
});
//db.addEntry("Servant", ["00000000000", "Pessoa", "000000000000000", "test@test.com", "k3y", 1]);
//db.queryByAttribute("Servant", "name", "Pessoa").then(row => {
//	console.log(row)
//});
//db.alterAttributeValue("Servant", "name", "Criatura", "cpf", "00000000000");
//db.queryByAttribute("Servant", "name", "Criatura").then(row => {
//	console.log(row)
//});
//db.addEntry("Servant", ["00000000001", "Pessoa", "000000000000000", "test@test.com", "k3y", 1]);
//db.queryByAttribute("Servant", "name", "Pessoa").then(row => {
//	console.log(row)
//});
//db.deleteEntry("Servant", "cpf", "00000000000");
db.close();
