const { readFileSync } = require('fs');
const luaparse = require('./luaparse');

const code = readFileSync('./benchmarks/lib/ParseLua.lua', 'utf8');

// Use the dynamic import for the ES modules to get fromLuaparse
async function run() {
  const { fromLuaparse } = await import('./packages/luast-util-from-luaparse/dist/index.js');
  const ast = luaparse.parse(code, { locations: true, ranges: true });

  const t2 = performance.now();
  for(let i = 0; i < 100; i++) {
    fromLuaparse(ast);
  }
  const t3 = performance.now();
  console.log(`Converting ORIGINAL took ${t3 - t2} milliseconds.`);
}

run();
