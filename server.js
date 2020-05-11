require('dotenv').config()
const server = require('express')()
const session = require('express-session')

const userRouter = require('./Routes/userRoutes')

server.use(express.json())
server.use('/api/', userRouter)
server.use(
  session({
    secret: process.env.SECRET,
    saveUninitialized: false,
    cookie: {
      name: 'auth',
      maxAge: 1000 * 60 * 60,
    },
  })
)
server.use((err, req, res) => {
  res.status(500).json({ error: err })
})
server.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`)
})
