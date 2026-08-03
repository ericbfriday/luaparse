const fs = require('fs');
let code = fs.readFileSync('luaparse.js', 'utf8');

code = code.replace(
  `    , globals;`,
  `    , globals
    // ⚡ Bolt: Added globalNames to optimize O(N) indexOfObject lookup in attachScope
    , globalNames;`
);

code = code.replace(
  `      globals = [];`,
  `      globals = [];
      globalNames = Object.create ? Object.create(null) : {};`
);

code = code.replace(
  `  function attachScope(node, isLocal) {
    if (luastMode) return;
    if (!isLocal && -1 === indexOfObject(globals, 'name', node.name))
      globals.push(node);

    node.isLocal = isLocal;
  }`,
  `  function attachScope(node, isLocal) {
    if (luastMode) return;
    if (!isLocal && !globalNames[node.name]) {
      globalNames[node.name] = true;
      globals.push(node);
    }

    node.isLocal = isLocal;
  }`
);

fs.writeFileSync('luaparse_opt6.js', code);
