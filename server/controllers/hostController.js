'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.getHostsByDestination = async (req, res) => {
  const hosts = await User.find({
    destination: req.params.destinationName
  });
  res.send(hosts);
}
