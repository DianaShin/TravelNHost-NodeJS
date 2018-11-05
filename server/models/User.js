'use strict'

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const md5 = require('md5');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    true: true,
    required: 'Please enter a username!'
  },
  password: {
    type: String,
    true: true,
    required: 'Please enter password!'
  },
  firstName: {
    type: String,
    true: true,
    required: 'Please enter your first name!'
  },
  lastName: {
    type: String,
    true: true,
    required: 'Please enter your last name!'
  },
  destination: {
    type: String,
    true: true,
    required: 'Please enter where you live!'
  },
  lat: {
    type: Number,
    true: true,
    required: 'Please enter lat!'
  },
  lng: {
    type: Number,
    true: true,
    required: 'Please enter lng!'
  },
  age: {
    type: Number,
    true: true,
  },
  gender: {
    type: String,
    true: true,
  },
  about: {
    type: String,
    true: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', userSchema);
