'use strict'

const mongoose = require('mongoose');
const Destination = mongoose.model('Destination');

exports.getDestinations = async (req, res) => {
  // query the database
  const destinations = await Destination.find();
  res.send(destinations);
}
