const task = require('./task')
const workspace = require('./workspace')
const { mergeResolvers } = require('@graphql-tools/merge')

const resolvers = [task, workspace]

module.exports = mergeResolvers(resolvers)
