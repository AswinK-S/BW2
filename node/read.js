const fs = require('node:fs');

//--------------------------------------reading the data synchronously
const content = fs.readFileSync('./test.txt')
console.log('data with out utf8 ',content);

const contents = fs.readFileSync('./test.txt','utf8')   
console.log('data with out utf8 --->',contents);


//-------------------------------------------reading the data asynchronously
fs.readFile('test.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(data);
})

//----------------------------------------write file sychronously
fs.writeFileSync('test1.txt','created file sychronously')
console.log('file created sychronously')

//--------------------------------------------write file asynchronously
fs.writeFile('test2.txt','created file 2 asychronoulsy',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file created asychronously')
    }
})

//--------------------------------------read file using promise

const fsP= require('node:fs/promises')

fsP.readFile('test1.txt','utf8').then((data)=>console.log('read file using promise---->',data)).catch((err)=>console.log(err))

//-----------------------------------------read file using async await

 async function readFile(){
    try{
        const data = await fsP.readFile('test2.txt','utf8')
        console.log('data read using async await===>', data);
    }catch(err){
        console.log(err);
    }
}

readFile()
//---------------------------------------------------append content

const newContent ='\n this is the new contet appended'

fs.appendFile('test.txt',newContent,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('content appended successfully')
    }
})