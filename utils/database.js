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
				console.log("Conexão com o banco de dados estabelecida.");
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
						console.log("Erro ao encerrar conexão com banco de dados.");
						return reject(err);
					} else {
						console.log("Conexão com o banco de dados encerrada.");
						this.db = null;
						resolve();
					}
				});
			} else {
				resolve();
			}
		});
	}

	// Adicionar registro a uma tabela.
	addEntry(tableName, entryValues) {
		return new Promise((resolve, reject) => {
			if (this.db) {
				// Construir uma consulta SQL dinamicamente.
				let sql = `INSERT INTO ${tableName} VALUES (`;
				sql += entryValues.map(() => "?").join(", ");
				sql += ")";

				this.db.run(sql, entryValues, (err) => {
					if (err) {
						console.log(err);
						return reject(err);
					}
				});
			} else {
				reject(new Error("Não há uma conexão com banco de dados."));
			}
		});
	}

	// Consultar registros gerais de uma tabela.
	queryAll(tableName) {
		return new Promise((resolve, reject) => {
			if (this.db) {
				this.db.all(`SELECT * FROM ${tableName}`, (err, rows) => {
					if (err) {
						console.log("Erro ao consultar registros no banco de dados.");
						return reject(err);
					} else {
						if (rows.length < 1) {
							console.log("Nenhum registro encontrado.");
							resolve();
						} else {
							console.log("Foram encontrado(s) " + rows.length + " registros.");
							resolve(rows);
						}
					}
				});
			} else {
				reject(new Error("Não há uma conexão com banco de dados."));
			}
		});
	}

	// Consultar registros específicos de uma tabela.
	queryByAttribute(tableName, attributeName, attributeValue) {
		return new Promise((resolve, reject) => {
			if (this.db) {
				this.db.all(`SELECT * FROM ${tableName} WHERE ${attributeName} = '${attributeValue}'`, (err, rows) => {
						if (err) {
							console.log("Erro ao consultar registro no banco de dados.");
							return reject(err);
						} else {
							if (rows.length == 0) {
								console.log("Nenhum registro encontrado.");
								resolve(rows);
							} else {
								resolve(rows);
							}
						}
					});
			} else {
				reject(new Error("Não há uma conexão com banco de dados."));
			}
		});
	}


	// Alterar campo de um registro.
	alterAttributeValue(tableName, attributeName, newAttributeValue, primaryKeyName, primaryKeyValue) {
		return new Promise((resolve, reject) => {
			if (this.db) {
				this.db.run(`
					UPDATE ${tableName}
					SET ${attributeName} = '${newAttributeValue}'
					WHERE ${primaryKeyName} = '${primaryKeyValue}'`, (err) => {
						if (err) {
							console.log("Erro ao alterar registro.");
							return reject(err);
						}
						resolve();
					});
			} else {
				reject(new Error("Não há uma conexão com banco de dados."));
			}
		});
	}

	// Deletar registro.
	deleteEntry(tableName, primaryKeyName, primaryKeyValue) {
		return new Promise((resolve, reject) => {
			if (this.db) {
				this.db.run(`DELETE FROM ${tableName} WHERE ${primaryKeyName} = '${primaryKeyValue}'`, (err) => {
					if (err) {
						console.log("Erro ao tentar deletar registro.");
						return reject(err);
					}
					resolve();
				});
			} else {
				reject(new Error("Não há uma conexão com banco de dados."));
			}
		});
	}
}

module.exports = new Database();
