# luast

A Lua parser and syntax tree ecosystem for JavaScript, built on [unist][].

## Packages

This repository is the staging ground for porting [luaparse][] into the
[unified][] / [syntax-tree][] ecosystem. The port produces several packages:

| Package | Description | Status |
| --- | --- | --- |
| `luast` | Tree specification and TypeScript types | [packages/luast](./packages/luast) |
| `luast-util-from-luaparse` | Convert legacy luaparse AST → luast | [packages/luast-util-from-luaparse](./packages/luast-util-from-luaparse) |
| `luast-util-visit` | Tree visitor for luast (named-field aware) | [packages/luast-util-visit](./packages/luast-util-visit) |
| `luast-util-scope` | Scope analysis over luast trees | [packages/luast-util-scope](./packages/luast-util-scope) |
| `unified-lua` | unified parser plugin for Lua | [packages/unified-lua](./packages/unified-lua) |
| `luaparse` | Lua parser with native luast emission | [v2.0.0](./luaparse.js) |

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

## Quick orientation

**If you want to understand the target tree format**, read
[LUAST-SPEC.md](./LUAST-SPEC.md).

**If you want to understand how we get there**, read
[MIGRATION-PLAN.md](./MIGRATION-PLAN.md).

**If you want to understand where we started**, read
[PORT-ANALYSIS.md](./PORT-ANALYSIS.md).

**If you want to see the legacy v0.x documentation**, see
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
