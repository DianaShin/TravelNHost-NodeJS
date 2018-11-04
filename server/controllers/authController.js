'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');
// const promisify = require('es6-promisify');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const passport = require('passport');
// const Validator = require('validator');

exports.register = async (req, res) => {
  console.log(req.body);
  await User.findOne({ username: req.body.username })
    .then(user => {
      if (user) {
        return res.status(400).json({username: "That username already exists!"})
      } else
      {
        const user = new User({
          username: req.body.username,
          password: req.body.password,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
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
                    jwt.sign(payload, process.env.SECRET, { expiresIn: 3600 }, (err, token) => {
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
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username })
    .then(user => {
      if (!user) {
        return res.status(404).json({username: "That username doesn't exist!"})
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
            return res.status(400).json({ msg: "Passwords don't match!!"});
          }
        })
    })
}
