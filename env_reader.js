let fs = require('fs')
let path = require('path');

let pathFile = path.resolve(__dirname, '.env')
let fsFile = fs.readFileSync(pathFile, {encoding: "utf8"})

let obj = {}
let spl = fsFile.split('\n')

spl.map((elem)=>{
    let values = elem.split('=')
    let valKey = values[0]
    let valVar = values[1]
    obj[valKey]= valVar
})

Object.keys(obj).map((elem)=>{
    if(!Object.prototype.hasOwnProperty(process.env, elem)){
        process.env[elem] = obj[elem]
    }
})

console.log(process.env.AVR) // выводит some var
