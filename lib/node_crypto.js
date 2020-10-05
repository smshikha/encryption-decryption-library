'use strict';

const crypto = require('crypto');

const SALT_PASSWORD = 'P@$$W0R:)';

const cipher = (text) => {
	const algorithm = 'aes-192-cbc';
	const key = crypto.scryptSync(SALT_PASSWORD, 'salt', 24);
	const iv = Buffer.alloc(16, 0);

	let encryptedText;
	try {
		const cipher = crypto.createCipheriv(algorithm, key, iv);
		encryptedText = cipher.update(text, 'utf8', 'hex');
		encryptedText += cipher.final('hex');
	} catch (err) {
		throw err;
	}

	console.log(encryptedText);
	return encryptedText;
};

const decipher = (text) => {
	const algorithm = 'aes-192-cbc';
	const key = crypto.scryptSync(SALT_PASSWORD, 'salt', 24);
	const iv = Buffer.alloc(16, 0);

	let decryptedText;
	try {
		const decipher = crypto.createDecipheriv(algorithm, key, iv);
		decryptedText = decipher.update(text, 'hex', 'utf8');
		decryptedText += decipher.final('utf8');
	} catch (err) {
		throw err;
	}

	console.log(decryptedText);
	return decryptedText;
};

module.exports = {
	cipher,
	decipher
};
