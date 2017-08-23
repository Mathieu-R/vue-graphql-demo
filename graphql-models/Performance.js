import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import Athlete from './Athlete';

const Performance = new GraphQLObjectType({
  name: 'Performance',
  fields: {
    field: GraphQLString,
    athletes: GraphQLList
  }
});

module.exports = Performance;


