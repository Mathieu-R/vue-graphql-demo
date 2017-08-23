const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require('graphql');

const {
  GraphQLDate
} = require('graphql-iso-date');

const Perf = new GraphQLObjectType({
  name: 'Perf',
  fields: {
    field: {type: GraphQLString},
    perf: {type: GraphQLInt}
  }
});

const Athlete = new GraphQLObjectType({
  name: 'Athlete',
  fields: {
    _id: {type: GraphQLID},
    firstname: {type: GraphQLString},
    lastname: {type: GraphQLString},
    country: {type: GraphQLString},
    birth: {type: GraphQLDate},
    sb: {type: new GraphQLList(Perf)},
    pb: {type: new GraphQLList(Perf)}
  }
});

module.exports = Athlete;

