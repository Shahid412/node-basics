const http =require('http')

const server = http.createServer((req, res) => {
    // run this callback everytime the req is sent
    console.log('request event')
    res.end('Hello world')

})

server.listen(5000, ()=> { // process stays alive, listen() is async -- just keep listening for those incoming requests
    console.log('server is listening on port : 5000....')
})