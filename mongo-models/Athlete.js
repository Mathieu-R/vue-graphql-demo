const mongoose = require('../mongoose');

const athleteSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  country: String,
  birth: Date,
  sb: [{field: String, perf: Number}],
  pb: [{field: String, perf: Number}]
});

athleteSchema.index({firstname: 1, lastname: 1}, {unique: true});

module.exports = mongoose.model('Athlete', athleteSchema);
