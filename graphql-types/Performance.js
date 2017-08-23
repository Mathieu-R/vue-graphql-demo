const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

const Athlete = require('./Athlete');

const Performance = new GraphQLObjectType({
  name: 'Performance',
  fields: {
    _id: {type: GraphQLID},
    field: {type: GraphQLString},
    athletes: {type: new GraphQLList(Athlete)}
  }
});

module.exports = Performance;


