// Modules - Encapsulated Code (only share minimum)

// CommonJS, every file is module (by default) i.e. No need to do anything, rather get them by default 

const secter ='SUPER SECRET' // variable in everywhere in this module
const peter ='peter'
const kat = 'katerine'

const sayHi= (name) => {
    console.log(`Hello there ${name}`) // notice `` works here
    // console.log('Hello there ${name}') // is not gonna work :-P
}

sayHi("Blank")
sayHi(peter)
sayHi(kat)

// console.log(module);
