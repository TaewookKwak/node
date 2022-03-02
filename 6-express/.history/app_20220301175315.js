import express from 'express'

const app = express()

app.get('/sky/:id', (req, res, next) => {
  //   console.log(req.path)
  //   console.log(req.headers)
  console.log(req.params)
  console.log(req.query)
  //   res.json({ name: 'Ellie' }) // json 형식으로 보냄

  //   res.sendStatus(400)
  res.setHeader('key', 'value') //key 와 value 로 보내질 수 있음 (key : value)
  res.status(400).send('created') // status 설정 -> send
})

app.listen(8080)
