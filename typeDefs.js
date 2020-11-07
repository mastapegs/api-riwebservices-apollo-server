const { gql } = require('apollo-server')

const typeDefs = gql`
  type Person {
    name: String
    role: String
  }
  type Query {
    me: Person
  }
`

module.exports = typeDefs