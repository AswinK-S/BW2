const http = require('node:http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text'})
    res.end('server using node')
})

server.listen(4000,()=>{
    console.log('server is running on port 4000')
})