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
  }) // 비동기적인것은 마지막 use에 걸리지 않음. 왜냐하면 err를 콜백함수로 던져놓고 그냥 가기 때문에. 즉 콜백에 err처리 해야함
})

app.get('/file2', (req, res) => {
  fsAsync
    .readFile('/file.txt')
    .then((data) => {})
    .catch((error) => {})
})

app.get('/file3', async (req, res) => {
  const data = await fsAsync.readFile('/file.txt')
})

app.use((error, req, res, next) => {
  console.error(error)
  res.status(500).json({ message: 'something went wrong' })
})

app.listen(8080)
