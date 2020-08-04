
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

module.exports = mongoose.model('Bookings', BookingsSchema);
