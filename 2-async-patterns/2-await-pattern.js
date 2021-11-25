const {readFile, writeFile, write} = require('fs').promises

// use promise if you have to perform multiple tasks, e.g. reading two files and writing one file

// async

// instead of following, just require .promises in above require('fs') module, and use readFile and writeFile simply
// const util =require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async()=> {
    try{
        // use read/writeFilePromise for util.promisify
        // const first = await readFilePromise('./content/first.txt', 'utf8')
        // const second = await readFilePromise('./content/second.txt', 'utf8')
        // await writeFilePromise('./content/result-promise-mind-grenade.txt'
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-promise-mind-grenade.txt'
        , `Awesome result : ${first}, ${second}`
        , {flag:'a'})
        // console.log(first, second);
    
    }
    catch(error){console.log(error);}
}

start()

// const get = (path) => {
//     return new Promise((resolve, reject)=>{
//         // place here the code for reading a file 
//         readFile('./content/first.txt', 'utf8', (err, data) => {
//             if (err){
//                 // return;
//                 // but here, use reject 
//                 reject(err)
//             }
//             else{
//                 // console.log(data);
//                 resolve(data)
//             }
//         })
        
        
//     })
// }

// get('./content/first.txt')
// .then((result)=> console.log(result))
// .catch((err)=>console.log(err))
