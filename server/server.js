'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const expressValidator = require('express-validator');

// import all models
require('./models/Destination');
require('./models/User');


// import all controllers
require('./controllers/destinationController');
require('./controllers/authController');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('dotenv').config();

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true }).then(()=> console.log('connected'));
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

const routes = require('./routes/index');
app.use('/', routes);

app.listen(port, () => console.log(`Yipee! Listening on port ${port}`));
