const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        console.log('req--',req);
        fs.readFile(path.join(__dirname,'index.html'),(err,content)=>{
            if(err){
                res.writeHead(500)
                return res.end('Server Error')
            }else{
                res.writeHead(200) 
                res.end(content)
            }
        })
    }else{
       res.writeHead(404)
       res.end('there is no page')
       
    }
})

server.listen(4000,()=>{
    console.log('server is running on port 4000')
})