const mongoose = require('mongoose');

const CommentsSchema = new mongoose.Schema(
  {
    CustName:     String,
    CustEmail:    String,
    CustComments: String,
  }
);

module.exports = mongoose.model('Comments', CommentsSchema);