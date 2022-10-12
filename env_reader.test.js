const fs = require('fs');
const path = require('path')

jest.mock('fs');
jest.mock('path');

const readFileMocked = jest.fn()// указать значение .mockReturnValue(true)
const resolvePathMocked = jest.fn() // указать значение  .mockReturnValue(true)

fs.readFileSync = readFileMocked;
path.resolve = resolvePathMocked;

describe('test function', () => {
 it('test 1', ()=>{

 })
});