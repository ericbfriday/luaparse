const fs = require('fs');

function isKeywordOld(id) {
  switch (id) {
    case 'and': case 'break': case 'do': case 'else': case 'elseif':
    case 'end': case 'for': case 'function': case 'if':
    case 'in': case 'local': case 'not': case 'or': case 'repeat':
    case 'return': case 'then': case 'until': case 'while':
      return true;
    case 'goto':
      return true;
    default:
      return false;
  }
}

function isKeywordNew(id) {
  switch (id.length) {
    case 2: return 'do' === id || 'if' === id || 'in' === id || 'or' === id;
    case 3: return 'and' === id || 'end' === id || 'for' === id || 'not' === id;
    case 4: return 'else' === id || 'goto' === id || 'then' === id;
    case 5: return 'break' === id || 'local' === id || 'until' === id || 'while' === id;
    case 6: return 'elseif' === id || 'repeat' === id || 'return' === id;
    case 8: return 'function' === id;
    default: return false;
  }
}

const words = ['and', 'break', 'do', 'else', 'elseif', 'end', 'for', 'function', 'if', 'in', 'local', 'not', 'or', 'repeat', 'return', 'then', 'until', 'while', 'goto', 'hello', 'world', 'foo', 'bar'];

console.time('isKeywordOld');
for (let i = 0; i < 10000000; i++) {
  isKeywordOld(words[i % words.length]);
}
console.timeEnd('isKeywordOld');

console.time('isKeywordNew');
for (let i = 0; i < 10000000; i++) {
  isKeywordNew(words[i % words.length]);
}
console.timeEnd('isKeywordNew');
