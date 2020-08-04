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
    imgId:                String
  }
);

module.exports = mongoose.model('Packages', packagesSchema);
