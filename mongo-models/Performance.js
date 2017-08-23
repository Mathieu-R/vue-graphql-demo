const mongoose = require('../mongoose');
const objectID = mongoose.Schema.Types.ObjectId;

const performanceSchema = new mongoose.Schema({
  // type of perf (ex: 100m)
  field: String,
  // list of top 3 athletes for this perf
  athletes: [{type: objectID, ref: 'Athlete'}]
});

module.exports = mongoose.model('Performance', performanceSchema);
