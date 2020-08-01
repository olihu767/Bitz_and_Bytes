const mongoose = require('mongoose');

const PackagesSchema = new mongoose.Schema(
  {
    id:                   Number,
    PackageId:            Number,
    PkgName:              String,
    PkgStartDate:         Number,
    PkgEndDate:           Number,
    PkgDesc:              String,
    PkgBasePrice:         Number,
    PkgAgencyCommission:  Number
  }
);

module.exports = mongoose.model('Packages', packagesSchema);
