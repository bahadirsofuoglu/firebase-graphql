const task = require('./task')
const workspace = require('./workspace')
const project = require('./project')
const { mergeResolvers } = require('@graphql-tools/merge')

const resolvers = [task, workspace, project]

module.exports = mergeResolvers(resolvers)
