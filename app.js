const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schemas')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: error => ({
    name: error.name,
    message: error.message.replace('Context creation failed:', '')
  })
})

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`)
})
