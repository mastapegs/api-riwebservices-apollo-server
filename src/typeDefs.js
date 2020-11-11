const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    me: Person
    allTodos: [Todo]
  }
  type Person {
    name: String
    role: String
  }
  type Todo {
    checked: Boolean
    description: String
  }
`

module.exports = typeDefs