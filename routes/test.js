"use strict";

fetch("http://localhost:3000/api/user", {
  method: "GET"
})
.then(data => {
	return data.text();
})
.then(data => {
	console.log(data);
})
.catch(error => {
  console.error('Error:', error);
});
