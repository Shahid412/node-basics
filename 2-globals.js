// GLOBALS (objects)

// __dirname  - path to current directory
// __filename - file name
// require    - function required to use modules
// module     - info about current module
// process    - info about current env the program is being executed in
// And many others 

// Simply write 

console.log(__dirname); // gives current directory information

// console.log(process); // gives information about current executing env


// Write "Hello World" every second on console
setInterval(() => {
    console.log("Hello World")
}, 1000);

// Just type "node app" or "node app.js" in terminal below, and you'll get the results of console
