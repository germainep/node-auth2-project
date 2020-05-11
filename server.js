require('dotenv').config()
const server = require('express')()
const userRouter = require('./Routes/userRoutes')

server.use('/api/', userRouter)
server.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`)
})
