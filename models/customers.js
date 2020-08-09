// Defined Schema necessary for use with MongoDB //
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema(
  {
    CustFirstName: String,
    CustLastName:  String,
    CustAddress:   String,
    CustCity:      String,
    CustProv:      String,
    CustPostal:    String,
    CustCountry:   String,
    CustHomePhone: String,
    CustBusPhone:  String,
    CustEmail:     String,
    userid:        String,
    passwd:        String
  }
);
// Compile and export this model using the above Schema //
// Mongoose automatically looks for the plural, lower-cased version of the model name. //
module.exports = mongoose.model('customer', CustomerSchema);