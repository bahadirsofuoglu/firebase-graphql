const taskController = require('../controllers/task')

module.exports = {
  Query: {},
  Mutation: {
    addPost: taskController.addTask
  }
}
