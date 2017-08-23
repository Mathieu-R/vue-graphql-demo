const mongoose = require('../mongoose');

const athleteSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  country: String,
  birth: Date,
  sb: [{field: String, perf: Number}],
  pb: [{field: String, perf: Number}]
});

module.exports = mongoose.model('Athlete', athleteSchema);
