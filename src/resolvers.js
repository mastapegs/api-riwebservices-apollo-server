const todos = require('./data/todos')
const me = require('./data/me')

const resolvers = {
  Query: {
    me: () => me,
    allTodos: () => todos,
  }
}

module.exports = resolvers