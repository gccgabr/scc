"use strict";

const loan = require("./services/loan");

//console.log(loan);
//user.getAllUsers();



async function createLoans() {
	// Criar alguns empréstimos
	console.log("Criando empréstimos:");
	await loan.createNewLoan(1, "1", 1, "11111111111")
		.then(result => {
			console.log(result);
		})
		.catch(error => {
			console.log(error);
		});
	await loan.createNewLoan(2, "2", 1, "22222222222")
		.then(result => {
			console.log(result);
		})
		.catch(error => {
			console.log(error);
		});
}


async function getLoanByCode
	// Consultar empréstimo por código.
	console.log("\n\nConsulando empréstimos:");
	await loan.getLoanByCode(1)
		.then(result => {
			console.log(result);
		})
		.catch(error => {
			console.log(error);
		});
	await loan.getLoanByCode(2)
		.then(result => {
			console.log(result);
		})
		.catch(error => {
			console.log(error);
		});

	// Ativar atraso de empréstimo.
	console.log("\n\nAtrasando empréstimos:");
	await loan.setLoanOverdue(1)
		.then(result => {
			console.log(result);
		})
		.catch(error => {
			console.log(error);
		});
	await loan.setLoanOverdue(1)
		.then(result => {
			console.log(result);
		})
		.catch(error => {
			console.log(error);
		});
}

testLoan();
