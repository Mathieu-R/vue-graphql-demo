const {
  GraphQLDate
} = require('graphql-iso-date');

const athleteModel = require('../mongo-models/Athlete');
const performanceModel = require('../mongo-models/Performance')

const resolvers = {
  Date: GraphQLDate,
  Query: {
    athletes() {
      return athleteModel.find({});
    },
    performances() {
      return performanceModel
        .find({})
        .populate('athletes')
        .exec();

    },
    athlete(root, {firstname, lastname}) {
      return athleteModel.findOne({firstname, lastname});
    },
    performance(root, {field}) {
      return performanceModel
        .findOne({field})
        .populate('athletes')
        .exec();
    }
  }
}

module.exports = resolvers;
