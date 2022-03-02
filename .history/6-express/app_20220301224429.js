import express from 'express'
import fs from 'fs'
import fsAsync from 'fs/promises'

const app = express()

app.use(express.json())

app.get('/file1', (req, res) => {
  // try {
  //   const data = fs.readFileSync('/file.txt') //동기적인 것들은 try catch를 쓰자
  // } catch (error) {
  //   res.status(404).send('file not found')
  // }

  fs.readFile('/file1.txt', (err, data) => {
    if (err) {
      res.status(404).send('file not found')
    }
  }) // 비동기적인것은 try catch 로 에러처리 불가능 그리고 마지막 use에서 error 처리 안딤. 왜냐하면 err를 콜백함수로 던져놓고 그냥 가기 때문에. 즉 콜백에 err처리 해야함
})

app.get('/file2', (req, res, next) => {
  fsAsync
    .readFile('/file.txt')
    .then((data) => {})
    .catch((error) => {
      next(error) //err 를 다음 middleware 로 전달
    })
})

app.get('/file3', async (req, res) => {
  try {
    const data = await fsAsync.readFile('/file.txt') // await 특성상 이것은 동기임 try catch로 err잡자, 함수 자체를 비동기, 즉 프로미스를 리턴.
  } catch (error) {
    res.status(404).send('file3 not found')
  }
})

app.use((error, req, res, next) => {
  console.error(error)
  res.status(500).json({ message: 'something went wrong' })
})

app.listen(8080)
