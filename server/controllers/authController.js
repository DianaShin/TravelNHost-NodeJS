'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');
// const promisify = require('es6-promisify');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const passport = require('passport');
// const Validator = require('validator');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

exports.register = async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  await User.findOne({ username: req.body.username })
    .then(user => {
      if (user) {
        errors.email = "That username already exists!";
        return res.status(400).json(errors);
      } else  {
          const user = new User({
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            destination: req.body.destination,
            lat: req.body.lat,
            lng: req.body.lng,
            age: req.body.age,
            gender: req.body.gender,
            about: req.body.about,
        })

        user.save();

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) { console.log(err) }
            user.password = hash;
            user.save()
                .then(user => {
                  const payload = { id: user.id, username: user.username };
                    jwt.sign(
                      payload,
                      process.env.SECRET,
                      { expiresIn: 3600 },
                      (err, token) => {
                        res.json({
                          success: true,
                          token: "Bearer " + token
                      });
                    });
                  })
              .catch(err => console.log(err));
          })
        })
        res.send("good");
      }
    })
}

exports.login = async (req, res) => {
  console.log(req.body);
  const { errors, isValid } = validateLoginInput(req.body);

   if (!isValid) {
     return res.status(400).json(errors);
   }

  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username })
    .then(user => {
      if (!user) {
        errors.username = 'User not found';
        return res.status(404).json(errors);
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {id: user.id, username: user.username};

            jwt.sign(
              payload,
              process.env.SECRET,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                })
              }
            )
          } else {
            errors.password = 'Incorrect password'
            return res.status(400).json(errors);
          }
        })
    })
}
