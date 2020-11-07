const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    me: Person
  }
  type Person {
    name: String
    role: String
  }
`

module.exports = typeDefs