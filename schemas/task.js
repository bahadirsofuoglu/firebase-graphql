const { gql } = require('apollo-server')
const task = gql`
  extend type Task {
    id: ID!
    firstname: String!
    lastname: String!
  }

  extend type Query {
    tasks: [Task]
  }
  extend type Mutation {
    addTask(firstname: String!, lastname: String!): Task!
    updateTask(id: ID!, firstname: String!, lastname: String!): Task!
    deleteTask(id: ID!): Boolean!
  }
`
module.exports = { task }
