const http = require('http')
const fs = require('fs')
const courses = [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JS' }]
const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method
  if (url === '/courses') {
    if (method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(courses)) //stringify 메소드는 json 객체를 String 객체로 변환시켜 줍니다.
    } else if (method === 'POST') {
      const body = []
      req.on('data', (chunk) => {
        //request 의 data처리
        console.log(chunk)
        body.push(chunk)
      })

      req.on('end', () => {
        //request 의 data 처리 가 끝나면
        const bodyStr = Buffer.concat(body).toString() //Buffer형태의 데이터를 문자열로 풀어준뒤 배열에 담는다.
        const course = JSON.parse(bodyStr) //parse 메소드는 string 객체를 json 객체로 변환시켜줍니다.
        courses.push(course)
        console.log(course)
        res.writeHead(201)
        res.end()
      })
    }
  }
})

server.listen(8080)
