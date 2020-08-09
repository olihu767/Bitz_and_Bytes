// Defined Schema necessary for use with MongoDB //
const mongoose = require('mongoose');

const CommentsSchema = new mongoose.Schema(
  {
    CustName:     String,
    CustEmail:    String,
    CustComments: String,
  }
);

// Compile and export this model using the above Schema //
// Mongoose automatically looks for the plural, lower-cased version of the model name. //
module.exports = mongoose.model('comment', CommentsSchema);