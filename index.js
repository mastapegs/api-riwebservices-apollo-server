const { ApolloServer, gql } = require('apollo-server')

const books = [
  {
    title: 'Dresden Files',
    author: 'Jim Butcher',
  },
  {
    title: 'Harry Potter',
    author: 'JK Rowling',
  },
]

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`

const resolvers = {
  Query: {
    books: () => books,
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server Ready at ${url}`)
})