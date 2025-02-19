/* Criação das tabelas. */

-- Servidor
CREATE TABLE IF NOT EXISTS Servant(
	cpf CHAR(11) PRIMARY KEY NOT NULL,
	name VARCHAR(100) NOT NULL,
	phone VARCHAR(15),
	email VARCHAR(15),
	password CHAR(256) NOT NULL,
	is_admin INTEGER CHECK (is_admin IN (0, 1)) NOT NULL
);


-- Empréstimo
CREATE TABLE IF NOT EXISTS Loan(
	id VARCHAR(8) PRIMARY KEY NOT NULL,
	datetime_loan INTEGER NOT NULL,
	datetime_return INTEGER NOT NULL,
	key_id VARCHAR(8),
	servant_cpf VARCHAR(11),
	FOREIGN KEY (key_id) REFERENCES Key(id),
	FOREIGN KEY (servant_cpf) REFERENCES Servant(cpf)
);


-- Chave
CREATE TABLE IF NOT EXISTS Key(
	id INTEGER PRIMARY KEY NOT NULL,
	description VARCHAR(50) NOT NULL,
	status INTEGER CHECK (status IN (0, 1))
);
