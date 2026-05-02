# luast-util-scope

Scope analysis for [luast][] trees — identify local and global identifiers.

## What is this?

This package walks a luast syntax tree and determines which identifiers are
local and which are global. It understands all Lua scoping rules: `local`
declarations, function parameters, `for` loop variables, and nested block
scopes.

## Install

```sh
npm install @friday-friday/luast-util-scope
```

## Use

```js
import luaparse from '@friday-friday/luaparse'
import {analyzeScope} from '@friday-friday/luast-util-scope'

const tree = luaparse.parse('local x = 1; print(x)', {ast: 'luast'})
const scope = analyzeScope(tree)

console.log(scope.globals)
// => [{type: 'identifier', name: 'print', …}]

console.log(scope.isLocal(tree.body[1].expression.base))
// => false (print is global)
```

## API

### `analyzeScope(tree)`

Analyze scopes in a luast `Root` tree.

Returns a `ScopeInfo` object:

- `globals` — array of `Identifier` nodes that are global
- `isLocal(node)` — returns `true` if the given `Identifier` node is local

## Related

- [`@friday-friday/luast`](../luast) — tree specification and types
- [`@friday-friday/luast-util-visit`](../luast-util-visit) — tree visitor
- [`@friday-friday/luaparse`](../../) — Lua parser

## License

[MIT](./LICENSE)

[luast]: ../luast
