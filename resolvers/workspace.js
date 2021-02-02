const workspaceController = require('../controllers/workspace')

module.exports = {
  Query: {
    workspaces: workspaceController.getWorkspaces
  },
  Mutation: {
    addWorkspace: workspaceController.addWorkspace,
    updateWorkspace: workspaceController.updateWorkspace,
    deleteWorkspace: workspaceController.deleteWorkspace
  }
}
