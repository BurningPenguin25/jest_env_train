

const fs = require('node:fs');
jest.mock('node:fs'); // импорт пакета и мок
const fsMocked = jest.fn().mockReturnValue('AVR=some\nvar TODOT=fdf')//  преобразование в функцию
fs.readFileSync = fsMocked //

const path = require('node:path')
jest.mock('node:path')
const pathMocked = jest.fn()
path.resolve = pathMocked

const getVar = require('./env_reader') //импорт функции

describe('test function', () => {
 it('test 1', ()=>{
getVar()
expect(fsMocked.mock.calls.length).toBe(1)
  expect(pathMocked.mock.calls.length).toBe(1)
})

//тесты 2 и 3 работают с return process.env
    it('test 2', ()=>{
        getVar()
        const env = process.env
        expect(getVar()).toBe(env)
    })

    it('test 3', ()=>{
        getVar()
        expect( typeof getVar()).toBe('object')
    })
//-------------------------------
// тесты 4 и 5 без return process.env
    it('test 4', ()=>{
        getVar()
        expect(typeof  fsMocked.mock.calls).toBe('object')
        })

    it('test 5', ()=>{
        getVar()
        const elemEnvAVR = process.env.AVR
        const elemEnvTODOT = process.env.TODOT
        expect(elemEnvAVR).toBe('some');
        expect(elemEnvTODOT).not.toBe('fdf')
    })
});


