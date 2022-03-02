import express from 'express'

const app = express()

app.get(
  '/',
  (req, res, next) => {
    console.log('first')
  },
  (req, res, next) => {
    console.log('first2')
  },
)

app.get('/', (req, res, next) => {
  console.log('second')
})

app.listen(8080)
