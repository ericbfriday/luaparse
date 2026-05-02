# luast-util-from-luaparse

Convert legacy [luaparse][] AST to [luast][] format.

## What is this?

This package converts the PascalCase AST emitted by luaparse's legacy mode
(e.g. `Chunk`, `LocalStatement`, `Identifier`) into the camelCase,
[unist][]-compliant luast format (e.g. `root`, `localStatement`,
`identifier`). It also converts position data to the unist `position` format
(1-indexed columns).

## Install

```sh
npm install @friday-friday/luast-util-from-luaparse
```

## Use

```js
import luaparse from '@friday-friday/luaparse'
import {fromLuaparse} from '@friday-friday/luast-util-from-luaparse'

// Parse in legacy mode
const legacy = luaparse.parse('local x = 1', {
  locations: true,
  ranges: true
})

// Convert to luast
const tree = fromLuaparse(legacy)
// tree.type === 'root'
// tree.body[0].type === 'localStatement'
```

## API

### `fromLuaparse(legacy)`

Convert a legacy luaparse AST node (typically a `Chunk`) into a luast `Root`.

**Parameters:**
- `legacy` — the legacy AST object from `luaparse.parse()`

**Returns:** a luast `Root` node

## Related

- [`@friday-friday/luast`](../luast) — tree specification and types
- [`@friday-friday/luast-util-visit`](../luast-util-visit) — tree visitor
- [`@friday-friday/luaparse`](../../) — Lua parser

## License

[MIT](./LICENSE)

[luaparse]: ../../
[luast]: ../luast
[unist]: https://github.com/syntax-tree/unist
