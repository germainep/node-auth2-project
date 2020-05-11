require('dotenv').config()
const server = require('express')()

server.listen(process.env.PORT, () => {
  console.log(`server listening on port ${ process.env.PORT }`)
})
