const mongoose = require('mongoose');

const AgenciesSchema = new mongoose.Schema(
  {
    AgencyId:     Number,
    AgncyAddress: String,
    AgncyCity:    String,
    AgncyProv:    String,
    AgncyPostal:  String,
    AgncyCountry: String,
    AgncyPhone:   String,
    AgncyFax:     String,
  }
);

module.exports = mongoose.model('Agencies', AgenciesSchema);


