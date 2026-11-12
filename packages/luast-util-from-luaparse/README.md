# luast-util-from-luaparse

> **Deprecated.** [`@friday-friday/luaparse`][fork] now emits [luast][] trees
> natively — no conversion step is needed. This package remains only for
> converting trees produced by the **original** [luaparse][] package
> (`fstirlitz/luaparse`).

Convert original-luaparse ASTs to [luast][] format.

## What is this?

This package converts the PascalCase AST emitted by the original
[fstirlitz/luaparse][] parser (e.g. `Chunk`, `LocalStatement`, `Identifier`)
into the camelCase, [unist][]-compliant luast format (e.g. `root`,
`localStatement`, `identifier`). It also converts position data to the unist
`position` format (1-based columns).

## Install

```sh
npm install @friday-friday/luast-util-from-luaparse
```

## Use

```js
import luaparse from 'luaparse' // the ORIGINAL package
import {fromLuaparse} from '@friday-friday/luast-util-from-luaparse'

// Original luaparse emits the legacy AST
const legacy = luaparse.parse('local x = 1', {
  locations: true,
  ranges: true
})

// Convert to luast
const tree = fromLuaparse(legacy)
// tree.type === 'root'
// tree.body[0].type === 'localStatement'
```

Starting a new project? Skip the conversion entirely:

```js
import luaparse from '@friday-friday/luaparse'

const tree = luaparse.parse('local x = 1') // already luast
```

## API

### `fromLuaparse(legacy)`

Convert a legacy luaparse AST node (typically a `Chunk`) into a luast `Root`.

**Parameters:**
- `legacy` — the legacy AST object from the original `luaparse.parse()`

**Returns:** a luast `Root` node

## Related

- [`@friday-friday/luast`](../luast) — tree specification and types
- [`@friday-friday/luast-util-visit`](../luast-util-visit) — tree visitor
- [`@friday-friday/luaparse`](../../) — Lua parser with native luast emission

## License

[MIT](./LICENSE)

[fork]: ../../
[luaparse]: https://github.com/fstirlitz/luaparse
[fstirlitz/luaparse]: https://github.com/fstirlitz/luaparse
[luast]: ../luast
[unist]: https://github.com/syntax-tree/unist
