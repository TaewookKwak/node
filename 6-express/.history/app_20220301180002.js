import express from 'express'

const app = express()

app.get(
  '/',
  (req, res, next) => {
    console.log('first')
    next()
  },
  (req, res, next) => {
    console.log('first2')
    next()
  },
)

app.get('/', (req, res, next) => {
  console.log('second')
})

app.listen(8080)
