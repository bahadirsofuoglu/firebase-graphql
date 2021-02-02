const db = require('../db')

exports.getTask = async _ => {
  const dbResponse = await db.collection('test').get()
  const res = []
  dbResponse.forEach(x => res.push(x.data()))

  return res
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
