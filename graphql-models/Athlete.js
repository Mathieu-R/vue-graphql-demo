import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

import {
  GraphQLDate
} from 'graphql-iso-date';

const Athlete = new GraphQLObjectType({
  name: 'Athlete',
  fields: {
    firstname: {type: GraphQLString},
    lastname: {type: GraphQLString},
    country: {type: GraphQLString},
    birth: {type: GraphQLDate},
    sb: {type: GraphQLList},
    pb: {type: GraphQLList}
  }
});

module.exports = Athlete;

