const eventEmitter = require('node:events')

class Pizza  extends eventEmitter{
    constructor(){
        super()
        this.order=0
    }

    takeOrder(size,toppings){
        this.order++
        this.emit('makeOrder',size,toppings)
    }

    getOrder(){
        console.log(`${this.order} placed`)
    }

}

module.exports = Pizza