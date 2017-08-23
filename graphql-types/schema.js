const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} = require('graphql');

const athleteType = require('./Athlete');
const performanceType = require('./Performance');
const athleteModel = require('../mongo-models/Athlete');
const performanceModel = require('../mongo-models/Performance')

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      athlete: {
        type: athleteType,
        args: {
          firstname: {
            type: GraphQLString
          },
          lastname: {
            type: GraphQLString
          }
        },
        resolve (root, {firstname, lastname}, options) {
          return athleteModel.find({firstname, lastname})
            .then(athlete => athlete)
            .catch(err => console.log(err));
        }
      },
      performancesOfTheYear: {
        type: performanceType,
        args: {
          field: {
            type: GraphQLString
          }
        },
        resolve (root, {field}, options) {
          return performanceModel
            .find({field})
            .populate('athletes')
            .exec()
            .then(performance => performance)
            .catch(err => console.log(err));
        }
      }
    })
  })
});

module.exports = schema;
