const db = require('../db')

exports.addTask = async (_, { firstname, lastname }) => {
  const newPost = {
    firstname: firstname,
    lastname: lastname
  }
  await db
    .collection('students')
    .doc()
    .set(newPost)
  return newPost
}
/* exports.addTask = async (req, res, next) => {
  try {
      const data = req.body;
      await db.collection('students').doc().set(data);
      res.send('Record saved successfuly');
  } catch (error) {
      res.status(400).send(error.message);
  }
} */
