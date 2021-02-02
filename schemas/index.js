const { gql } = require('apollo-server')

const task = require('./task')
const workspace = require('./workspace')

const linkSchema = gql`
  scalar Date
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`

module.exports = { linkSchema, task, workspace }
