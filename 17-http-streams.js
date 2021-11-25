const http = require('http')
const fs = require('fs')
const { startCase } = require('lodash')

const server = http.createServer()

server.on('request', (req ,res)=>{
    // send the file in one large instance
    // const data = fs.readFileSync('./content/even-bigger-file.txt','utf8')
    // res.end(data)

    const stream= fs.createReadStream('./content/even-bigger-file.txt','utf8')
    stream.on('open', ()=>{ // pass the 'res' object
        stream.pipe(res) // pipe() - pushing the data from a readstream to writestream
        // but now, response headers are chunked instead of one large instance
        // pipe() into a writeable stream 
    })
    stream.on('error', (err)=>{
        console.log(err)
    })
    
})

server.listen(5000, () => {
    console.log('Server listening on 5000... ');
})