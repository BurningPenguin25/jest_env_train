const fs = require('node:fs');
const path = require('node:path')

jest.mock('node:fs');
jest.mock('node:path');

const readFileMocked = jest.fn()// указать значение .mockReturnValue(true)
const resolvePathMocked = jest.fn() // указать значение  .mockReturnValue(true)

fs.readFileSync = readFileMocked;
path.resolve = resolvePathMocked;

//const getVar = require('./env_reader') //импорт функции

describe('test function', () => {
 it('test 1', ()=>{
  //getVar()
  //expect().toBe()
 })
});