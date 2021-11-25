// Read-write files using sync and async approaches

// 1st - sync or blocking approach/code 

const {readFileSync, writeFileSync} = require('fs')

console.log("Start") // just to disinguish between sync and async approaches

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first, second)
 
writeFileSync(
    './content/result-sync.txt',
    `The result is ${first}, ${second}`, // overrides everything in result file
    { flag: 'a' } // flag for appending to result file
)

console.log("Done with this task") // just to disinguish between sync and async approaches
console.log("Starting next task") // just to disinguish between sync and async approaches

// Result of sync without callback is: 
// Start
// Done with this task
// Starting next task
// sync: goes line by line. next is done after having done the previous
// if there are thousands of users, they will have to wait while reading the same resource 
// as when the process will once completed for one user, only then the next user can access the resource
