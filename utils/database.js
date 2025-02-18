"use strict";

const sqlite3 =  require("sqlite3").verbose();
const path = require("path");
const dbName = "sccDB.db";

class Database {
	constructor() {
		this.db = null;
		this.dbPath = path.join(__dirname, "..", "data", dbName);
	}

	// Estabelecer conexão com o banco de dados.
	open() {
		return new Promise((resolve, reject) => {
			if (this.db) {
				return resolve(this.db);
			}
			this.db = new sqlite3.Database(this.dbPath, (err) => {
				if (err) {
					console.log(err);
					return reject(err);
				}
				console.log("DB connection opened.");
				resolve(this.db);
			});
		});
	}

	// Encerrar conexão com o banco de dados.
	close() {
		return new Promise((resolve, reject) => {
			// Verificar se há uma conexão de banco de dados aberta.
			if (this.db) {
				this.db.close((err) => {
					if (err) {
						console.log("Error closing DB.");
						return reject(err);
					} else {
						console.log("Database connecton closed.");
						this.db = null;
						resolve();
					}
				});
			} else {
				resolve();
			}
		}
	}
}

module.exports = new Database();
