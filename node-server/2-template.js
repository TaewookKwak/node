const http = require('http')
const fs = require('fs')
const ejs = require('ejs')

// console.log(http.STATUS_CODES)
// console.log(http.METHODS)
const name = 'Sam'
const courses = [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JS' }]
const server = http.createServer((req, res) => {
  console.log('incomming...')

  const url = req.url
  res.setHeader('Content-Type', 'text/html')
  if (url === '/') {
    ejs
      .renderFile('./template/main.ejs', { name: name })
      .then((data) => res.end(data))
  } else if (url === '/courses') {
    ejs
      .renderFile('./template/courses.ejs', { courses: courses })
      .then((data) => res.end(data))
  } else {
    res.write(':Not Found')
  }
})

server.listen(8080)
