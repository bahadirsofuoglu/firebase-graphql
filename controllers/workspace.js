const db = require('../db')
// example controller console.log(x.id)   tasks.push({ id: `${x.id}`, ...x.data() })
exports.getWorkspaces = async _ => {
  const dbResponse = await db.collection('workspaces').get()
  const workspaces = []
  dbResponse.forEach(x => workspaces.push({ id: `${x.id}`, ...x.data() }))

  return workspaces
}

exports.addWorkspace = async (_, req) => {
  const data = req
  await db
    .collection('workspaces')
    .doc()
    .set(data)

  return data
}

exports.updateWorkspace = async (_, req) => {
  const id = req.id
  delete req.id
  const data = req
  await db
    .collection('workspaces')
    .doc(id)
    .update(data)

  return data
}
exports.deleteTask = async (_, req) => {
  const id = req.id
  await db
    .collection('workspaces')
    .doc(id)
    .delete()
  return true
}
