// npm - global command, comes with node
// npm --v

// local dependency - use it only in this particular project 
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important information abour project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything defualt)

const _ = require('lodash')
const items = [1,[2,[3,[4,[5]]]]]
const new_items = _.join(items)
console.log(new_items)

console.log('Hello people') // change and save in whatever code, nodemon will auto refresh the results

// execute using the following command
// node app.js

// or the following
// npm start ("start" script must be specified in package.json as "start": "node app.js")
// along with nodemon module (developer module)
// 1. npm i nodemon -D (install and build a developer dependency in package.json)
// 2. "dev" script in package.json as "dev":"nodemon app.js"
// 3. "npm run dev" in terminal (now nodemon is watching your app) 
// i.e. everytime you change your code, save it and nodemon automatically updates the result or output

// or simply using nodemon module
// 1. npm i nodemon -D (same as above)
// 2. now use the only script "start": "nodemon app.js" 
// 3. and remove "dev" script in package.json i.e. remove "dev":"nodemon app.js"
// 4. "npm start" in terminal (same behavior as that of above)
