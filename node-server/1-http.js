const http = require('http')
const fs = require('fs')

// console.log(http.STATUS_CODES)
// console.log(http.METHODS)

const server = http.createServer((req, res) => {
  console.log('incomming...')
  console.log(req.headers)
  console.log(req.httpVersion)
  console.log(req.method)
  console.log(req.url)

  const url = req.url
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html')
    const read = fs.createReadStream('./html/main.html')
    read.pipe(res)
  } else if (url === '/courses') {
    res.write('Courses')
  } else {
    res.write(':Not Found')
  }
})

server.listen(8080)
