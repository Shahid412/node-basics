// Modules - Encapsulated Code (only share minimum) 

// CommonJS, every file is module (by default), 
// No need to do anything, rather get them by default 

const names = require('./4-names')
const say = require('./5-utils')

// Now run the following, you will get the variables from names.js file
console.log(names)

// Execute the data from names.js and the function from utils.js in below
say("Blank")
say(names.peter)
say(names.kat)

// exports with alternate flavor
const data = require('./6-alternative-flavor')
console.log(data)

// add() function from mind-grenade.js is executed, not assigned to any var here
require('./7-mind-grenade')

