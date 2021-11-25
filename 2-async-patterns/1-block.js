const http =require('http')
const { reduce } = require('lodash')

const server = http.createServer((req, res) => {
    // run this callback everytime the req is sent
    if (req.url=== '/'){
        res.end('Home page')
    }
    else if (req.url=== '/about'){
        // BLOCKING CODE
        // page keeps loading, until following time consuming code completes executing
        // not only this page, but also all other pages continue to keep loading 
        // i.e. blocks execution of code - waiting code
        // so always use async code for non-blocking
        for (let i=0;i<1000;i++){
            for (let j=0;j<1000;j++){
                console.log(`${i} ${j} `);
            }
        }
        res.end('About page')
    }
    else if (req.url=== '/contact'){
        res.end('Contact page')
    }
    else res.end('Error page')

})

server.listen(5000, ()=> { // process stays alive, listen() is async -- just keep listening for those incoming requests
    console.log('server is listening on port : 5000....')
})