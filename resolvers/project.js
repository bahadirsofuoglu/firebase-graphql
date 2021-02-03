const projectController = require('../controllers/project')

module.exports = {
  Query: {
    projects: projectController.getProjects
  },
  Mutation: {
    addProject: projectController.addProject
  }
}
