const { mergeTypeDefs } = require('@graphql-toolkit/schema-merging')
const task = require('./task')
const workspace = require('./workspace')
const project = require('./project')

module.exports = mergeTypeDefs([task, workspace, project])
