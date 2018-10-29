'use strict'

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    true: true,
    required: 'Please enter a destination name!'
  },
  country: {
    type: String,
    true: true,
    required: 'Please enter a country name!'
  },
  lat: {
    type: Number,
    true: true,
    required: 'Please enter lat!'
  },
  long: {
    type: Number,
    true: true,
    required: 'Please enter lng!'
  },
  image_url: {
    type: String,
    true: true,
    required: 'Needs an image!'
  },
  hero_url: {
    type: String,
    true: true,
    required: 'Needs an image!'
  }
});

module.exports = mongoose.model('Destination', destinationSchema);
