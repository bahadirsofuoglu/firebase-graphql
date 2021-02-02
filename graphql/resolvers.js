const taskController = require('../controllers/task')

module.exports = {
  Query: {
    getTask: taskController.getTask
  },
  Mutation: {
    addPost: taskController.addTask
  }
}
