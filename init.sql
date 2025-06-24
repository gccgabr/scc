/* Rotina de inicialização do banco de dados do SCC. */

-- Usuário.
CREATE TABLE User(
	cpf CHARACTER(11) PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	email TEXT NOT NULL,
	phone CHARACTER(12),
	hashed_password TEXT NOT NULL
);

-- Seção.
CREATE TABLE Section(
	code INTEGER PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	user_cpf CHARACTER(11),
	FOREIGN KEY(user_cpf) REFERENCES User(cpf)
);

-- Chave.
CREATE TABLE Key(
	code VARCHAR(3) PRIMARY KEY,
	room_name VARCHAR(30) NOT NULL,
	status INTEGER NOT NULL,
	section_code INTEGER,
	FOREIGN KEY(section_code) REFERENCES Section(code)
);

-- Empréstimo.
CREATE TABLE Loan(
	code INTEGER PRIMARY KEY,
	timestamp DATATIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
	key_code VARCHAR(3),
	section_code INTEGER,
	user_cpf CHARACTER(11),
	FOREIGN KEY(key_code) REFERENCES Key(code),
	FOREIGN KEY(section_code) REFERENCES Section(code),
	FOREIGN KEY(user_cpf) REFERENCES User(cpf)
);
