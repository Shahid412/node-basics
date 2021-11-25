console.log('Before setInterval code')
setInterval(() => {
    console.log('Hello world, Im inside setInterval') // hence this is offloaded, and only when we are done with out immediate code, it is invoked
}, 2000) // invoke the inside code every 2000 ms or 2s  
console.log('Im after setInterval')

// Process stays alive unless
// Kill the Process Ctrl+C 
// Unexpected error 

// output 
// Before setInterval code
// Im after setInterval
// Hello world, Im inside setInterval
// Hello world, Im inside setInterval
// Hello world, Im inside setInterval
// Hello world, Im inside setInterval
// ... (and keeps on)

