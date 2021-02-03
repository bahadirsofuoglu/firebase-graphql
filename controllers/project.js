const db = require('../db')
// example controller console.log(x.id)   tasks.push({ id: `${x.id}`, ...x.data() })
exports.getProjects = async _ => {
  const dbResponse = await db.collection('projects').get()
  const projects = []
  dbResponse.forEach(x => projects.push({ id: `${x.id}`, ...x.data() }))

  return projects
}

exports.addProject = async (_, req) => {
  const data = req
  await db
    .collection('workspaces')
    .doc(data.workspaceId)
    .collection('projects')
    .add(data)

  return data
}
