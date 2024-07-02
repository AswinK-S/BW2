const http = require('http')


const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.writeHead(200)
        res.end('home page')
    }else if(req.url==='/about'){
        res.writeHead(200,{ 'Content-Type': 'text/plain' })
        res.end('about page')
    }else{
        res.writeHead(404)
        res.end('there is no such page')
    }
})

server.listen(3000,()=>{
    console.log('server is running')
})