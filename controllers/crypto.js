'use strict';

const Joi = require('@hapi/joi');
const cryptoLib = require('../lib/node_crypto');

// Validation schema
const schema = Joi.object().keys({
	text: Joi.string().required()
}).required();

const encrypt = async (req, res) => {
	try {
		await schema.validateAsync(req.body);
	} catch (err) {
		let message;
		if (err instanceof Error) message = err.message;
		else message = err.details[0].message;

		return res.status(500).json({
			status: 'error',
			data: {
				message: message
			}
		});
	}

	let encryptedText;
	try {
		encryptedText = await cryptoLib.cipher(req.body.text);
	} catch (err) {
		return res.status(400).json({
			status: 'error',
			message: 'Something went wrong'
		});
	}

	res.json({
		status: 'success',
		data: {
			encrypted_text: encryptedText
		}
	});
};

const decrypt = async (req, res) => {
	try {
		await schema.validateAsync(req.body);
	} catch (err) {
		let message;
		if (err instanceof Error) message = err.message;
		else message = err.details[0].message;

		return res.status(500).json({
			status: 'error',
			data: {
				message: message
			}
		});
	}

	let decryptedText;
	try {
		decryptedText = await cryptoLib.decipher(req.body.text);
	} catch (err) {
		return res.status(400).json({
			status: 'error',
			message: 'Something went wrong'
		});
	}

	res.json({
		status: 'success',
		data: {
			decrypted_text: decryptedText
		}
	});
};

module.exports = {
	encrypt,
	decrypt
};
