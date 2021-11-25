const eventEmitter= require('events')

const customEmitter = new eventEmitter()

customEmitter.on('res', () => { // callback is : () => {}
    console.log(`data recieved`)
})

// can have as many function for the same event which can have different logic
customEmitter.on('res', () => { // callback is : () => {}
    console.log(`some other logic`)
})

customEmitter.on('res', (name, id) => { // callback is : () => {}
    console.log(`callback event parameters for user ${name} with id: ${id}`)
})

// order matters. i.e. first listen for the event and then emit it
customEmitter.emit('res') // must match with 'res'
// can also pass arguments when we are amitting the event, which we can recieve in callback
customEmitter.emit('res', 'john', 34)

// notice: for simple call .emit('res') above, user and id are undefined