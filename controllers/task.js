const firebase = require('../firebase/dbConfig')
const db = firebase.firestore()

exports.addTask = async (req, res, next) => {
  try {
    const data = req.body
    await db
      .collection('students')
      .doc()
      .set(data)
    res.send('Record saved successfuly')
  } catch (error) {
    res.status(400).send(error.message)
  }
}
