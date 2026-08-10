const fs = require('fs');
let code = fs.readFileSync('luaparse.js', 'utf8');

code = code.replace(/      globals = \[\];\n      globalsMap = Object\.create\(null\);/g,
`      globals = [];
      globalsMap = Object.create ? Object.create(null) : {};`);

fs.writeFileSync('luaparse.js', code);
