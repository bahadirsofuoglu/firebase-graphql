const taskController = require('../controllers/task')

module.exports = {
  Mutation: {
    addPost: taskController.addTask
  }
}
