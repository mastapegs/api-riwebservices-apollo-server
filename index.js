const { ApolloServer, gql } = require('apollo-server')

const me = {
  name: 'Matthew Pagan',
  role: 'Full-Stack Web Developer'
}

const typeDefs = gql`
  type Person {
    name: String
    role: String
  }
  type Query {
    me: Person
  }
`

const resolvers = {
  Query: {
    me: () => me,
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server Ready at ${url}`)
})