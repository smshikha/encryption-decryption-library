'use strict';

const express = require('express');
const router = express.Router();

const crypto = require('./controllers/crypto');

// Routes
router.post('/v1/encrypt', crypto.encrypt);
router.post('/v1/decrypt', crypto.decrypt);

module.exports = router;
