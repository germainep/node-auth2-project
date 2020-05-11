const express = require('express')
const Users = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const router = express.Router()

router.post('/login', async ( req, res, next ) => {
  const { username, password } = req.body
  const user = await Users.findUserBy(username)
  try {
    if (user && bcrypt.compareSync(password, user.password)) {

      req.session.user = user
      res.json({ message: `welcome ${ user.username }` })
    }
    else {
      res.status(401).json({ message: 'Invalid Credentials' })
    }
  } catch (err) {
    next(err)
  }


})

router.post('/register', async ( req, res, next ) => {
  const user = req.body
  const hash = bcrypt.hashSync(password, 8)
  user.pasword = hash
  const newUser = await Users.add(user)

  try {
    res.status(201).json(newUser, { message: 'new user created' })
  } catch (err) {
    next(err)
  }
})

router.get('/users', (req, res, next) => {})
