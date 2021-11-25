const http =require('http')

// creating a server
// const server = http. createServer((req, res) => {
//     res.end('Welcome to site')
// })

// creating the server using event emitter api
const server = http.createServer()
// server emits request event behind the scene
server.on('request', (req, res) => {
    res.end('Welcome to site')
})

server.listen(5000, () => {
    console.log('Server listening ... ')
})
