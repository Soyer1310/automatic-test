import assert from 'power-assert'
import capitalize from '../src/capitalize.js';

assert.equal(capitalize('hello'),  'Hello');
assert.equal(capitalize(''),  '');
  
console.log('Все тесты пройдены!');