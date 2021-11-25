const { readFile } = require('fs') // async version of readFile method
// For async, we need to provide a callback 
// Callback: a function which is run when we are done with some functionality

console.log('Starting first task')
readFile('./content/first.txt','utf8', (err,result)=>{ // (err,result) is callback
    if(err){
        console.log(err)
        return
    }

    // callback 
    // offload this one, and keep reading the code after this
    console.log(result)
    console.log('Completed first task')
})
console.log("Starting next task") // just to disinguish between sync and async approaches

// Result of async with callback is: 
// Starting first task
// Starting next task
// Completed first task
// it shows that in this approach, we offload the task and continue to our code,
// and our application continues to serve the new users

// i.e. output : 
// Starting first task
// Starting next task
// Hello, This is the first text file. // console log file contents
// Completed first task
