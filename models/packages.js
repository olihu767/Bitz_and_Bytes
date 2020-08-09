// Defined Schema necessary for use with MongoDB //
const mongoose = require('mongoose');

const packagesSchema = new mongoose.Schema(
  {
    PackageId:            Number,
    PkgName:              String,
    PkgStartDate:         String,
    PkgEndDate:           String,
    PkgDesc:              String,
    PkgBasePrice:         Number,
    PkgAgencyCommission:  Number,
    imgId:                String,
    PkgPage:              String
  }
);

// Compile and export this model using the above Schema //
// Mongoose automatically looks for the plural, lower-cased version of the model name. //
module.exports = mongoose.model('package', packagesSchema);
