const os = require('os')

// info about current user
user = os.userInfo()
console.log(user)

// system uptime 
console.log(`The system uptime is ${os.uptime()} seconds`)

// Current OS object
const currentOS = {
    name: os.type(), 
    rel: os.release(), 
    totMem: os.totalmem(), 
    freeMem: os.freemem()
}
console.log(currentOS);
