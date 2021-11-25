// starting operating system process
console.log('first')
setTimeout(() => {
    console.log('second') // hence this is offloaded, and only when we are done with out immediate code, it is invoked
}, 0) // even if setTimeout is set to '0' but setTimeout is async
console.log('third')
// completed and exiting operating system process

// output 
// first
// third
// second

