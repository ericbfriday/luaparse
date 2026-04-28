# luast

A Lua parser and syntax tree ecosystem for JavaScript, built on [unist][].

## Packages

This repository contains [luaparse][] and its ecosystem of packages for
the [unified][] / [syntax-tree][] pipeline:

| Package                    | Description                                | Status                                                                   |
| -------------------------- | ------------------------------------------ | ------------------------------------------------------------------------ |
| `luast`                    | Tree specification and TypeScript types    | [packages/luast](./packages/luast)                                       |
| `luast-util-from-luaparse` | Convert legacy luaparse AST → luast        | [packages/luast-util-from-luaparse](./packages/luast-util-from-luaparse) |
| `luast-util-visit`         | Tree visitor for luast (named-field aware) | [packages/luast-util-visit](./packages/luast-util-visit)                 |
| `luast-util-scope`         | Scope analysis over luast trees            | [packages/luast-util-scope](./packages/luast-util-scope)                 |
| `unified-lua`              | unified parser plugin for Lua              | [packages/unified-lua](./packages/unified-lua)                           |
| `luaparse`                 | Lua parser with native luast emission      | [v2.0.0](./luaparse.js)                                                  |

## Documentation

- **[LUAST-SPEC.md](./LUAST-SPEC.md)** — The luast tree specification.
  Defines every node type, the content model, the child-field registry, and
  the position format. This is the primary contract for the ecosystem.

- **[MIGRATION-PLAN.md](./MIGRATION-PLAN.md)** — The phased migration plan.
  Covers design decisions with rationale, package architecture, the six
  implementation phases, risk assessment, and resolved design questions.

- **[PORT-ANALYSIS.md](./PORT-ANALYSIS.md)** — The original gap analysis.
  Documents the structural differences between the current luaparse AST and
  what unist requires. Written before the spec and plan; superseded by them
  on any point of conflict.

## Usage

```js
// ESM
import luaparse from 'luaparse'

// Emit a luast (unist-compliant) tree
const tree = luaparse.parse('local x = 1', {ast: 'luast'})
// tree.type === 'root', tree.body[0].type === 'localStatement'

// Legacy mode (default, backwards compatible)
const legacy = luaparse.parse('local x = 1')
// legacy.type === 'Chunk', legacy.body[0].type === 'LocalStatement'
```

```js
// unified pipeline
import {unified} from 'unified'
import luaParse from 'unified-lua'

const tree = unified().use(luaParse, {luaVersion: '5.3'}).parse('local x = 1')
```

## Quick orientation

**If you want to understand the tree format**, read
[LUAST-SPEC.md](./LUAST-SPEC.md).

**If you want to understand the migration history**, read
[MIGRATION-PLAN.md](./MIGRATION-PLAN.md).

**If you want the original gap analysis**, read
[PORT-ANALYSIS.md](./PORT-ANALYSIS.md).

**If you want the legacy v0.x documentation**, see
[README.legacy.md](./README.legacy.md).

## Design summary

luast follows the [esast][] precedent — the only programming-language AST in
the unist ecosystem. Key choices:

- **Named fields, not `children`** — `condition`, `body`, `left`, `right`
  etc. are the canonical structural fields. A dedicated `luast-util-visit`
  handles traversal. Generic `unist-util-is` and `unist-util-position` work
  unchanged.
- **`root` as root type** — not `Chunk`, for unist consistency.
- **camelCase type names** — `ifStatement`, `binaryExpression`, matching the
  ecosystem majority.
- **Scope analysis as a separate utility** — not baked into the parser.
- **Comments on root only** — in `root.comments`, following esast convention.

## Ecosystem context

luast sits alongside other language-specific unist implementations:

- [mdast][] — Markdown
- [hast][] — HTML
- [xast][] — XML
- [nlcst][] — Natural language
- [esast][] — ECMAScript

## TODO: Review Observations

The following issues were identified during a codebase review. None are
blocking, but each deserves attention before a wider release.

### Type mismatch: `NilLiteral.value`

`luast/src/types.ts` declares `NilLiteral.value` as `undefined`, but the
runtime (both native emission and adapter) produces `null`. The spec requires
all values be JSON-expressible — `undefined` is not. The type should be
`value: null` to match runtime behavior and JSON compliance.

### `luaparse.d.ts` doesn't model luast return type

`parse()` always returns `AstNode` regardless of the `ast` option. When
`{ast: 'luast'}` is specified, the return type should narrow to `Root` (from
`luast`). TypeScript consumers currently lose type safety in luast mode.

### No workspace configuration

Packages use `file:` links in `dependencies` but the root `package.json` has
no `workspaces` field. Each package has its own `package-lock.json`, `npm
install` at root doesn't hoist or link packages, and `test:packages` relies on
a shell loop. Adding `"workspaces": ["packages/*"]` would unify dependency
management.

### Vestigial `index.js`

Root `index.js` just does `module.exports = require('./luaparse')`. Since
`package.json` already points `"main"` at `luaparse.js`, this file is dead
code and can be removed.

### Scope analysis duplicates traversal logic

`luast-util-scope` depends on `luast-util-visit` but implements its own
recursive walk using `childFields`/`arrayFields` directly. This avoids visitor
overhead but means adding new node types requires updating both `registry.ts`
and `scope.ts`.

### Deferred migration plan items

Three items remain unchecked in `MIGRATION-PLAN.md`:

- **Phase 3**: Performance benchmark (native emission vs. parse + adapter)
- **Phase 5**: `luast-util-attach-comments` (comment-to-node mapping utility)
- **Phase 5**: Migration guide for `parse({scope: true})` → `analyzeScope(tree)`

The first two are low-risk. The migration guide is a developer experience gap —
adopters currently need to read source to figure out the scope API transition.

## License

[MIT](./LICENSE)

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
