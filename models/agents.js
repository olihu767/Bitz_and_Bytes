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

module.exports = mongoose.model('Agents', AgentsSchema);
