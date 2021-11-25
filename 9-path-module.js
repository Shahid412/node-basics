const path = require('path')

//console.log(path)
console.log(path.sep)

// join file path in a normalized way
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// base path
const base = path.basename(filePath)
console.log(base)

// absolute path 
const abs = path.resolve(__filename, 'content', 'subfolder', 'test.txt')
console.log(abs)