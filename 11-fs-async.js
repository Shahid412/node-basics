// Read-write files using sync and async approaches

// 2nd - Alternate approach - async or Non-blocking code
const {readFile, writeFile} = require('fs')
// For asynch, we need to provide a callback 
// Callback: a function which is run when we are done with some functionality

// readFile('./content/first.txt',(err,result)=>{ // no encoding is provided
// rather use: 

console.log('Start')
readFile('./content/first.txt','utf8', (err,result)=>{ // (err,result) is callback
    if(err){
        console.log(err)
        return
    }
    // console.log(result)
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result)=> {
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt',
        `The result is : ${first} and ${second}`,
        (err, result)=> { // Callback of writeFile function
            if(err){
                console.log(err)
                return
            }
            console.log(result)
            console.log("Done with this task") // just to disinguish between sync and async approaches
        })
    })
})
console.log("Starting next task") // just to disinguish between sync and async approaches

// Result of async with callback is: 
// Start
// Starting next task
// Done with this task
// it shows that in this approach, we offload the task and continue to our code,
// and our application continues to serve the new users
