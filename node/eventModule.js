const eventEmitter = require('node:events')

const event = new eventEmitter()
event.on('practise',(sub)=>{
    if(sub==='mongo'){
        console.log('practise more practical')
    }
})

console.log('code every day');
event.emit('practise','mongo')

