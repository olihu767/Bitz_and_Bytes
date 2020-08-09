// Import modules //
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// Import seed data //
const dbSeed = require('./seeds/packages.js');

// Define model //
const Packages = require('./models/packages.js');

// Mongoose/MongoDB Connection //

const dbURI = process.env.MONGODB_URL;
mongoose.connect(dbURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', function(error){
  console.log(`Connection Error: ${error.message}`)
});

db.once('open', function() {
  console.log('Connected to DB...');
  Packages.insertMany(dbSeed, function(error, packages) {
    console.log('Data import completed.')
    mongoose.connection.close();
  });
});

// -----------------------------//