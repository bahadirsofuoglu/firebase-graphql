const { ApolloServer } = require('apollo-server')

/* const fs = require('fs')
const path = require('path')

// Import typeDefs and resolvers
const filePath = path.join(__dirname, 'schemas', 'typeDefs.gql')
const typeDefs = fs.readFileSync(filePath, 'utf-8') */

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
