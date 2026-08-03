const fs = require('fs');
let code = fs.readFileSync('luaparse.js', 'utf8');

code = code.replace(
  `  function indexOfObject(array, property, element) {
    for (var i = 0, length = array.length; i < length; ++i) {
      if (array[i][property] === element) return i;
    }
    return -1;
  }`,
  `  function indexOfObject(array, property, element) {
    for (var i = 0, length = array.length; i < length; ++i) {
      if (array[i][property] === element) return i;
    }
    return -1;
  }`
);

fs.writeFileSync('luaparse_opt7.js', code);
