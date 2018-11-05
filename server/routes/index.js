'use strict'

const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');
const authController = require('../controllers/authController');
const passport = require('passport');

router.get('/api/destinations', destinationController.getDestinations);

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
  });
})

module.exports = router;
