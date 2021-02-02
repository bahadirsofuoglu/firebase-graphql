const taskController = require('../controllers/task')

module.exports = {
  Query: {
    getTask: taskController.getTask
  },
  Mutation: {
    addTask: taskController.addTask,
    updateTask: taskController.updateTask,
    deleteTask: taskController.deleteTask
  }
}
