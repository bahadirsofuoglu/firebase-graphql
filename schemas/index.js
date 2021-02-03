const { mergeTypeDefs } = require('@graphql-toolkit/schema-merging')
const task = require('./task')
const workspace = require('./workspace')

module.exports = mergeTypeDefs([task, workspace])
