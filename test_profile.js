const { readFileSync } = require('fs');
const luaparse = require('./luaparse');
const { fromLuaparse } = require('./packages/luast-util-from-luaparse/dist/index.js');

const code = readFileSync('./benchmarks/lib/ParseLua.lua', 'utf8');

const t0 = performance.now();
for(let i = 0; i < 100; i++) {
  const ast = luaparse.parse(code, { locations: true, ranges: true });
  fromLuaparse(ast);
}
const t1 = performance.now();
console.log(`Took ${t1 - t0} milliseconds.`);
