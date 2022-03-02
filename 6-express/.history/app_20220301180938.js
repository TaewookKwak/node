import express from 'express'

const app = express()

// app.all('/api', (req, res, next) => {
//   console.log('all')
// })

// app.use('/sky', (req, res, next) => {
//   console.log('use')
// })

//  all vs use 차이점
//  all : /api 만 반응함
//  use : /sky 뿐 만아니라 모든 /sky~~~~를 반응함

app.get(
  '/',
  (req, res, next) => {
    console.log('first')
    // next('route') // second 로 넘어감
    next(new Error('error'))
  },
  (req, res, next) => {
    console.log('first2')
  },
)

app.get('/', (req, res, next) => {
  console.log('second')
})

app.use((req, res, next) => {
  res.status(404).send('Not Found@@')
})

app.use((error, req, res, next) => {
  console.error(error)
  res.status(500).send('Sorry, try again')
})

app.listen(8080)
