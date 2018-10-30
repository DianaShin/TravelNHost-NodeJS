'use strict'

const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

router.get('/api/destinations', destinationController.getDestinations);

module.exports = router;
