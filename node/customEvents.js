const Pizza = require('./make-pizza')
const ServeDrink = require('./drinksForPizza')

const pizza = new Pizza()
const serveDrink = new ServeDrink()
pizza.on('makeOrder',(size,toppings)=>{
    console.log(`Pizza order received: ${size} ${toppings}`)
    serveDrink.serveDrink(size)
})

pizza.takeOrder('large','beef')
pizza.getOrder()

