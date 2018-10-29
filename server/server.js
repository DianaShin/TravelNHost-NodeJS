'use strict'

const express = require('express');
const mongoose = require('mongoose');

// import all models
require('./models/Destination');


// import all controllers
require('./controllers/destinationController');

const app = express();
const port = process.env.PORT || 5000;

const routes = require('./routes/index');

require('dotenv').config();

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true }).then(()=> console.log('connected'));
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

app.use('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
