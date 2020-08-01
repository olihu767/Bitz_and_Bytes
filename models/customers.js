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
    CustUserid:    String,
    CustPsswd:     String
  }
);

module.exports = mongoose.model('Customer', CustomerSchema);