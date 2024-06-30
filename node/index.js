require('./sum')
const mult = require('./mult')
const superHero= require('./caching')

console.log('index.js');
console.log('mult(1,2) = ', mult(1, 2));

const  hero = new superHero('spiderman')
console.log('hero = ', hero.getName());
hero.setName('BatMan')
console.log('hero = ', hero.getName());
const hero2 = new superHero('superMan')
console.log('hero2 = ', hero2.getName());
// --------------------------------------------------

const {sum,multi} = require('./module.exports.js')

console.log('add',sum(10,22));
console.log('mult',multi(4,3));

