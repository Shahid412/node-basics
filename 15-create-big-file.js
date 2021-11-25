const {writeFileSync} = require('fs')

for (let i=1; i<=100000; i++){
    writeFileSync('./content/even-bigger-file.txt', `Hello world ${i}\n`, {flag: 'a'})
}
