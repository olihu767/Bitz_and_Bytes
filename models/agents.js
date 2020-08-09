// Defined Schema necessary for use with MongoDB //
const mongoose = require('mongoose');

const AgentsSchema = new mongoose.Schema(
  {
    AgentId:     Number,
    AgtFirstName: String,
    AgtLastName:  String,
    AgtBusPhone:  String,
    AgtEmail:     String,
    AgtPosition:  String,
    AgencyId:     Number,
  }
);

// Compile and export this model using the above Schema //
// Mongoose automatically looks for the plural, lower-cased version of the model name. //
module.exports = mongoose.model('agent', AgentsSchema);
