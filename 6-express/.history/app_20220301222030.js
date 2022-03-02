import express from 'express'

const app = express()

app.post('/', (req, res, next) => {
  console.log(req.body)
})

app.listen(8080)
