const db = require('../db')

exports.getTask = async _ => {
  const dbResponse = await db.collection('test').get()
  const tasks = []
  dbResponse.forEach(x => tasks.push(x.data()))

  return tasks
}

exports.addTask = async (_, { firstname, lastname }) => {
  const newPost = {
    firstname: firstname,
    lastname: lastname
  }
  await db
    .collection('test')
    .doc()
    .set(newPost)

  return newPost
}

exports.updateTask = async (_, { firstname, lastname, id }) => {
  const updatePost = {
    firstname: firstname,
    lastname: lastname
  }
  await db
    .collection('test')
    .doc(id)
    .update(updatePost)

  return updatePost
}
exports.deleteTask = async (_, { id }) => {
  await db
    .collection('test')
    .doc(id)
    .delete()
  return true
}
