
const fs = require('node:fs'); // экспорт модулей
const path = require('node:path')

jest.mock('node:fs'); // мокаем функций
jest.mock('node:path');

const readFileMocked = jest.fn().mockReturnValue(true)// указать возврат и значение .mockReturnValue()
const resolvePathMocked = jest.fn().mockReturnValue() // указать возврат и значение  .mockReturnValue()

fs.readFileSync = readFileMocked;
path.resolve = resolvePathMocked;

const getVar = require('./env_reader') //импорт функции

describe('test function', () => {
 it('test 1', ()=>{
  getVar()
  //expect(readFileMocked.).toBe()
 })
});