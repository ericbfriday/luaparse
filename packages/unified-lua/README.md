# unified-lua

[unified][] parser plugin for Lua — produces [luast][] syntax trees.

## What is this?

This package is a [unified][] plugin that teaches unified how to parse Lua
source code into a luast syntax tree. It uses `@friday-friday/luaparse` under
the hood with `{ast: 'luast'}` mode.

## Install

```sh
npm install @friday-friday/unified-lua
```

## Use

```js
import {unified} from 'unified'
import luaParse from '@friday-friday/unified-lua'

const tree = unified()
  .use(luaParse, {luaVersion: '5.3'})
  .parse('local x = 1')

// tree.type === 'root'
```

## API

### `unified().use(luaParse, options?)`

Configure the plugin.

**Options:**

- `luaVersion` (`'5.1' | '5.2' | '5.3' | 'LuaJIT'`, default: `'5.1'`) —
  Lua version to parse
- `encodingMode` (`'none' | 'x-user-defined' | 'pseudo-latin1'`, default:
  `'none'`) — string encoding mode

## Related

- [`@friday-friday/luast`](../luast) — tree specification and types
- [`@friday-friday/luast-util-visit`](../luast-util-visit) — tree visitor
- [`@friday-friday/luast-util-scope`](../luast-util-scope) — scope analysis
- [`@friday-friday/luaparse`](../../) — Lua parser

## License

[MIT](./LICENSE)

[unified]: https://github.com/unifiedjs/unified
[luast]: ../luast
