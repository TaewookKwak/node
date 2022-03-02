import express from 'express'
import fs from 'fs'
import fsAsync from 'fs/promises'

const app = express()

app.use(express.json())

app.get('/file1', (req, res) => {
  try {
    const data = fs.readFileSync('/file.txt') //동기적인 것들은 try catch를 쓰자
  } catch (error) {
    res.status(404).send('file not found')
  }
})

app.get('/file2', (req, res) => {
  fsAsync.readFile('/file.txt')
})

app.get('/file3', async (req, res) => {
  const data = await fsAsync.readFile('/file.txt')
})

app.use((error, req, res, next) => {
  console.error(error)
  res.status(500).json({ message: 'something went wrong' })
})

app.listen(8080)
