"use strict";

const db = require("./utils/database");

db.open();
db.queryAll("Servant").then(rows => {
	console.log(rows);
});
db.queryByAttribute("Servant", "name", "Pessoa").then(row => {
	console.log(row)
});
db.close();
