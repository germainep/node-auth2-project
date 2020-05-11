const db = require('../data/config')


async function findUserById ( id ) {
  const user = await db('users').where('id', id)
  try {
    return user
  } catch (err) {
    return err
  }
}

async function add ( userData ) {
  const user = await db('users').insert(userData)
  try {
    return findUserById(user.id)
  } catch (err) {
    return err
  }

  async function findUserBy ( username ) {
    const user = await db('users').where('username', username)
    try {
      return user
    } catch (err) {
      return err
    }

  }

}

module.exports = {
  findUserBy,
  findUserById,
  add
}
