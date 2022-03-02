import express from 'express'

const app = express()

app.get('/sky/:id', (req, res, next) => {
  //   console.log(req.path)
  //   console.log(req.headers)
  console.log(req.params)
  console.log(req.query)
  //   res.json({ name: 'Ellie' }) // json 형식으로 보냄
  //   res.status(400).send('created') // status 설정 -> send
  res.sendStatus(400)
})

app.listen(8080)
