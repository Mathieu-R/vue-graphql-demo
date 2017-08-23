import Athlete from './Athlete';
import Medal from './Medal';

const schema = new GraphQLSchema({
  Athlete,
  Medal
});

module.exports = schema;
