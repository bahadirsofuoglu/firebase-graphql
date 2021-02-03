const { gql } = require('apollo-server')
const workspace = gql`
  type Workspace {
    id: ID!
    name: String!
  }

  extend type Query {
    workspaces: [Workspace]
  }
  extend type Mutation {
    addWorkspace(name: String!): Workspace!
    updateWorkspace(id: ID!, name: String!): Workspace!
    deleteWorkspace(id: ID!): Boolean!
  }
`
module.exports = workspace
