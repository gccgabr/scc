"use strict";

let dbConnection = null;

async function getDB() {
	if (!dbConnection) {
		dbConnection = await open("./scc.db");
		console.log("SQLite database connection opened.");
	}
	return dbConnection;
}
