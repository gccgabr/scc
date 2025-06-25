"use strict";

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

let dbConnection = null;

async function getDB() {
	if (!dbConnection) {
		dbConnection = await open({
			filename: "./scc.db",
			driver: sqlite3.Database
		});
		console.log("SQLite database connection opened.");
	}
	return dbConnection;
}
async function closeDB() {
	if (!dbConnection) {
		console.log("No database connection open.");
	} else {
		dbConnection.close();
		console.log("Database connection closed.");
	}
}

//async function getDB() {
//	if (!dbConnection) {
//		dbConnection = await new sqlite3.Database("./scc.db");
//		console.log("SQLite database connection opened.");
//	}
//	return dbConnection;
//}
//
//export class File{};

module.exports = {
	getDB,
	closeDB
};
