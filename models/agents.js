const mongoose = require('mongoose');

const AgentsSchema = new mongoose.Schema(
  {
    AgentId:     Number,
    AgtFirstName: String,
    AgtLastName:  String,
    AgtBusphone:  String,
    AgtEmail:     String,
    AgencyId:     Number,
  }
);

module.exports = mongoose.model('Agents', AgentsSchema);
