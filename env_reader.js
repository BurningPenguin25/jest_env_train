let fs = require('node:fs')
let path = require('node:path');

let pathFile = path.resolve(__dirname, '.env')
let fsFile = fs.readFileSync(pathFile, {encoding: "utf8"})

//console.log(pathFile)
//console.log(fsFile) //AVR=some var TODOT=fdf


const getVar = () => {
     let obj = {}
     let spl = fsFile.split('\n')
//console.log(spl)

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
    return process.env //добавил после
}

module.exports = getVar


