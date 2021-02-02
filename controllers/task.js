const db = require('../db')

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

exports.getTask = async _ => {
  const res = await db.collection('test').get()
  const test = []
  res.forEach(x => test.push(x.data()))

  return test
}
