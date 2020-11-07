const me = {
  name: 'Matthew Pagan',
  role: 'Full-Stack Web Developer'
}

const resolvers = {
  Query: {
    me: () => me,
  }
}

module.exports = resolvers