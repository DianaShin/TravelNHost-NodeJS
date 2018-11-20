'use strict'

const mongoose = require('mongoose');
const Destination = mongoose.model('Destination');

exports.getDestinations = async (req, res) => {
  const destinations = await Destination.find();
  res.send(destinations);
}

exports.getDestination = async (req, res) => {
  const destination = await Destination.findOne({
    name: req.params.destinationName
  });
  res.send(destination);
}
