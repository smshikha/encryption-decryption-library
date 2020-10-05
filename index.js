'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(port, () => {
	console.log('\x1b[32m%s\x1b[0m', `The server is listening on http://localhost:${port}`);
});
