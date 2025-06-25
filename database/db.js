"use strict";

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

let dbConnection = null;

async function getDB() {
	if (!dbConnection) {
		dbConnection = await open({
			filename: path.join(__dirname, "./scc.db"),
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

module.exports = {
	getDB,
	closeDB
};
