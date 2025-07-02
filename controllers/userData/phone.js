"use strict";

const isValid = (phone) => {
	return phone.match(/\d{9,12}/);
};
