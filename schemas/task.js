const { gql } = require('apollo-server')
const task = gql`
  type Task {
    id: ID!
    firstname: String!
    lastname: String!
  }

  type Query {
    tasks: [Task]
  }
  type Mutation {
    addTask(firstname: String!, lastname: String!): Task!
    updateTask(id: ID!, firstname: String!, lastname: String!): Task!
    deleteTask(id: ID!): Boolean!
  }
`
module.exports = task
