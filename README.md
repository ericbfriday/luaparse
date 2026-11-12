# luast

A Lua parser and syntax tree ecosystem for JavaScript, built on [unist][].

## Packages

This repository contains [luaparse][] and its ecosystem of packages for
the [unified][] / [syntax-tree][] pipeline:

| Package                                   | Description                                         | Status                                                                   |
| ----------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------ |
| `@friday-friday/luast`                    | Tree specification and TypeScript types             | [packages/luast](./packages/luast)                                       |
| `@friday-friday/luast-util-from-luaparse` | Convert original luaparse ASTs → luast (deprecated) | [packages/luast-util-from-luaparse](./packages/luast-util-from-luaparse) |
| `@friday-friday/luast-util-visit`         | Tree visitor for luast (named-field aware)          | [packages/luast-util-visit](./packages/luast-util-visit)                 |
| `@friday-friday/luast-util-scope`         | Scope analysis over luast trees                     | [packages/luast-util-scope](./packages/luast-util-scope)                 |
| `@friday-friday/unified-lua`              | unified parser plugin for Lua                       | [packages/unified-lua](./packages/unified-lua)                           |
| `@friday-friday/luaparse`                 | Lua parser with native luast emission               | [luaparse.js](./luaparse.js)                                             |

## Documentation

* **[LUAST-SPEC.md](./LUAST-SPEC.md)** — The luast tree specification.
  Defines every node type, the content model, the child-field registry, and
  the position format. This is the primary contract for the ecosystem.

## Usage

```js
// ESM
import luaparse from '@friday-friday/luaparse'

// parse() emits a luast (unist-compliant) tree
const tree = luaparse.parse('local x = 1')
// tree.type === 'root', tree.body[0].type === 'localStatement'

// Comments are collected on the root; positions are always tracked
// (1-based line/column, 0-based offset).
```

```js
// unified pipeline
import {unified} from 'unified'
import luaParse from '@friday-friday/unified-lua'

const tree = unified().use(luaParse, {luaVersion: '5.3'}).parse('local x = 1')
```

## Quick orientation

**If you want to understand the tree format**, read
[LUAST-SPEC.md](./LUAST-SPEC.md).

**Migrating from the original luaparse?** `parse()` now emits luast trees:
camelCase node types, unist `position` instead of `loc`/`range`, `root`
instead of `Chunk`, and scope analysis via `luast-util-scope` instead of
inline `isLocal`/`globals` annotations. Use
[`luast-util-from-luaparse`](./packages/luast-util-from-luaparse) to convert
trees produced by the original `luaparse` package.

## Design summary

luast follows the [esast][] precedent — the only programming-language AST in
the unist ecosystem. Key choices:

* **Named fields, not `children`** — `condition`, `body`, `left`, `right`
  etc. are the canonical structural fields. A dedicated `luast-util-visit`
  handles traversal. Generic `unist-util-is` and `unist-util-position` work
  unchanged.
* **`root` as root type** — not `Chunk`, for unist consistency.
* **camelCase type names** — `ifStatement`, `binaryExpression`, matching the
  ecosystem majority.
* **Scope analysis as a separate utility** — not baked into the parser.
* **Comments on root only** — in `root.comments`, following esast convention.

## Ecosystem context

luast sits alongside other language-specific unist implementations:

* [mdast][] — Markdown
* [hast][] — HTML
* [xast][] — XML
* [nlcst][] — Natural language
* [esast][] — ECMAScript

## Security

The parser is hardened against denial-of-service inputs:

* Expression and block nesting depths are capped (512 each) with clear
  errors instead of call-stack exhaustion.
* Long-string and long-comment terminator scanning is linear-time.
* Scope dictionaries are prototype-free (`Object.create(null)`), so
  identifiers like `__proto__` cannot pollute `Object.prototype`.
* `maxInputLength` caps input size when streaming untrusted data via
  `parse({wait: true})`.

## Acknowledgements

This project is a rewrite and ecosystem extension of
[luaparse](https://github.com/fstirlitz/luaparse), originally created by
**Oskar Schöldström** ([oxy.fi](http://www.oxy.fi/)) as part of his
bachelor's thesis at Arcada University of Applied Sciences.

The core parser (`luaparse.js`) retains substantial portions of the original
luaparse codebase. The unist-compliant luast ecosystem — the tree
specification, utilities, and unified plugin — is new work by
**Eric Friday**.

### Original acknowledgements

The original luaparse project acknowledged the following:

* Initial tests scaffolded from [yueliang](http://yueliang.luaforge.net/) and
  manually checked for errors.
* Much of the code based on [LuaMinify](https://github.com/stravant/LuaMinify),
  the [Lua](https://www.lua.org) source, and
  [Esprima](http://esprima.org).
* [luamin](http://mths.be/luamin), a Lua minifier by Mathias Bynens.
* [Ace](https://github.com/ajaxorg/ace), an online code editor.

## License

[MIT](./LICENSE) — Copyright (c) Oskar Schöldström 2012–2014 (original
luaparse). Copyright (c) Eric Friday 2025 (luast ecosystem and rewrite).

<!-- Definitions -->

[unist]: https://github.com/syntax-tree/unist

[unified]: https://github.com/unifiedjs/unified

[syntax-tree]: https://github.com/syntax-tree

[esast]: https://github.com/syntax-tree/esast

[mdast]: https://github.com/syntax-tree/mdast

[hast]: https://github.com/syntax-tree/hast

[xast]: https://github.com/syntax-tree/xast

[nlcst]: https://github.com/syntax-tree/nlcst

[luaparse]: https://github.com/fstirlitz/luaparse
