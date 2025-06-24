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
-- Empréstimo.
