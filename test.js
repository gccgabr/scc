"use strict";

fetch("https://localhost:3000/api/user", {
	method: "GET"
})
.then(response => {
	console.log(response);
})
.catch(error => {
	console.log(error);
});
