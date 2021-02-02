const task = require('./task')
const workspace = require('./workspace')
const { GraphQLDateTime } = require('graphql-iso-date')

const customScalarResolver = {
  Date: GraphQLDateTime
}
module.exports = { customScalarResolver, workspace, task }
