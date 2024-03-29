const express = require('express')
const redis = require('redis')

const app = express()
const client = redis.createClient({
  host: 'redis-server', // networking for redis -- it use conjunction with docker-compose file
  port: 6379,
})

client.set('visits', 0)

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    // get number of time the page has been visited
    res.send('Number of visits is ' + visits) // send response back
    client.set('visits', parseInt(visits) + 1) // update the number of time the page has been visited
  })
})

app.listen(8081, () => {
  console.log('listening on port: 8081')
})
