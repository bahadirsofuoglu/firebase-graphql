const { gql } = require('apollo-server')
const project = gql`
  type Project {
    workspaceId: ID!
    name: String!
  }

  extend type Query {
    projects: [Project]
  }
  extend type Mutation {
    addProject(workspaceId: ID!, name: String!): Project!
  }
`
module.exports = project
