// Defined Schema necessary for use with MongoDB //
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


// Compile and export this model using the above Schema //
// Mongoose automatically looks for the plural, lower-cased version of the model name. //
module.exports = mongoose.model('agency', AgenciesSchema);


