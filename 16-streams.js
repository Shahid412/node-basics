// Streams - To read/write sequentially
// Four different types of streams
// 1. Writeable - to write sequentially, 
// 2. Readable - to read data sequentially, 
// 3. Duplex - to both read and write sequentially, 
// 4. Tranform - to modify data for writing or reading
// Streams implement streaming interface like many built in modules
// Streams extend eventEmitter class

const {createReadStream} = require('fs'); // create stream

//const stream = createReadStream('./content/big-file.txt') // invoke

//control size: 90000, one chuck of 90000, and other chunk of the remainder data from 164k file
const stream = createReadStream('./content/big-file.txt', {highWaterMark: 90000, encoding:'utf8'})

// reads the chunks of data in 'result'
// default: 64k
// last buffer: remainder
// highWaterMark: control size -- by passing object in createReadStream

stream.on('data', (result) => { // 'data' built-in event
    console.log(`Recieved ${result.length} bytes of chunks`);
    console.log(result);
})
stream.on('error', (err)=>{console.log(err)}) // i.e. if '../content/big-file.txt' error
