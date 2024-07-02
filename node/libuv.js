const crypto = require('crypto')

const start =  Date.now()
console.log('start time--',start);
crypto.pbkdf2Sync('password','salt',10000,512,'sha512')
crypto.pbkdf2Sync('password','salt',10000,512,'sha512')
crypto.pbkdf2Sync('password','salt',10000,512,'sha512')
crypto.pbkdf2Sync('password','salt',10000,512,'sha512')
crypto.pbkdf2Sync('password','salt',10000,512,'sha512')
console.log('endtime ---',Date.now()-start);