"use strict";

// Validação do CPF.
const isValid = (cpf) => {	
	let sum = 0;
	let mod = 0;
	let digits = [];
	// Verificar se todos os caracteres são alfanuméricos, e se são 11.
	if (!/[0-9]{11}/.test(cpf) || /(.)\1{10}/.test(cpf))
		return false;
	
	// Obter o primeiro dígito verificador.
	for (let i = 0, j = 10; i < 9; i++, j--) {
		sum += Number(cpf[i]) * j;
	}
	
	if (sum % 11 >= 2)
		digits.push(11 - sum % 11);
	else
		digits.push(mod);

	// Verificar se equivale ao primeiro dígito verificador do CPF recebido.
	if (digits[0] != cpf[9])
		return false;

	// Obter o segundo dígito verificador.
	sum = 0;
	mod = 0;
	for (let i = 0, j = 11; i < 10; i++, j--) {
		sum += Number(cpf[i]) * j;
	}

	if (sum % 11 >= 2)
		digits.push(11 - sum % 11);
	else
		digits.push(mod)

	// Verificar se equivale ao segundo dígito verificador do CPF recebido.
	if (digits[1] != cpf[10])
		return false;

	return true;
};
