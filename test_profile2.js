const { readFileSync } = require('fs');
const luaparse = require('./luaparse');
const { fromLuaparse } = require('./packages/luast-util-from-luaparse/dist/index.js');

const code = readFileSync('./benchmarks/lib/ParseLua.lua', 'utf8');

const t0 = performance.now();
for(let i = 0; i < 100; i++) {
  const ast = luaparse.parse(code, { locations: true, ranges: true });
}
const t1 = performance.now();
console.log(`Parsing took ${t1 - t0} milliseconds.`);

const ast = luaparse.parse(code, { locations: true, ranges: true });

const t2 = performance.now();
for(let i = 0; i < 100; i++) {
  fromLuaparse(ast);
}
const t3 = performance.now();
console.log(`Converting took ${t3 - t2} milliseconds.`);
