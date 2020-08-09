// Defined Schema necessary for use with MongoDB //
const mongoose = require('mongoose');

const BookingsSchema = new mongoose.Schema(
  {
    BookingDate:    Date,
    CustFirstName:  String,
    CustLastName:   String,
    CustHomePhone:  String,
    CustBusPhone:   String,
    id:             Number,
    BookingId:      Number,
    BookingNo:      String,
    TravelerCount:  Number,
    CustomerId:     Number,
    TripTypeId:     String,
    PackageId:      Number,
  }
);

// Compile and export this model using the above Schema //
// Mongoose automatically looks for the plural, lower-cased version of the model name. //
module.exports = mongoose.model('booking', BookingsSchema);
