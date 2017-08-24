const typeDefs = `
  scalar Date
  type Perf {
    field: String!
    perf: Float!
  }
  type Athlete {
    _id: ID!
    firstname: String!
    lastname: String!
    country: String!
    birth: Date!
    sb: [Perf]
    pb: [Perf]
  }
  type Performances {
    _id: ID!
    field: String!
    athletes: [Athlete]
  }
  type Query {
    athletes: [Athlete]
    performances: [Performances]
    athlete(firstname: String!, lastname: String!): Athlete
    performances(field: String!): Performances
  }
`;

module.exports = typeDefs;

