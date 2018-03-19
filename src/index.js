const express = require('express')
const app = express()

PORT = process.env.PORT || 8080

app.get('/', function (req, res) {
  res.send('Hello World!')
  console.log('got req')
})

app.get('/health', function (req, res) {
  res.send('Application is healthy')
  console.log('got a healthcheck req')
})

app.listen(PORT, function () {
  console.log(`HELLO WORLD listening on port ${PORT}!`)
})
