

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

    it('test 2', ()=>{
        const env = process.env
        getVar()
        expect(getVar()).toBe(env)
    })

    it('test 3', ()=>{
        expect( typeof getVar()).toBe('object')
    })
});
