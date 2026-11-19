# @friday-friday/luast-util-scope

## 0.4.0

### Minor Changes

- [`660dfdd`](https://github.com/ericbfriday/luaparse/commit/660dfddd83d95620a194b56043e82fd38ca428ae) Thanks [@ericbfriday](https://github.com/ericbfriday)! - Purge the legacy luaparse AST — `parse()` now emits luast (unist) trees only

  **Breaking.** The dual AST mode is gone; the library is unist-first.

  `@friday-friday/luaparse`:
  - `parse()` always emits the luast tree (previously the default output was
    the legacy PascalCase AST; luast required `{ast: 'luast'}`)
  - The `ast`, `locations`, and `ranges` options are removed — every node
    carries a unist `position` (`{start, end}` with 1-based `line`/`column`
    and 0-based `offset`)
  - `{comments: false}` is now respected in all modes (it was previously
    forced on in luast mode)
  - Inline scope annotations (`isLocal`, root `globals`) are gone; use
    `@friday-friday/luast-util-scope` for scope analysis (the `scope` option
    still drives the `onCreateScope`/`onDestroyScope`/`onLocalDeclaration`
    callbacks)
  - Root node type is `root` (was `Chunk`); node types are camelCase
    (`localStatement`, was `LocalStatement`); `FunctionDeclaration.isLocal`
    is now `functionDeclaration.local`
  - The CLI drops the `--locations`, `--ranges`, and `--scope` flags
  - Removed the stale `luaparse.js.orig` snapshot and the superseded planning
    documents (`PROMPT.md`, `FUTURE-README.md`, `PORT-ANALYSIS.md`,
    `MIGRATION-PLAN.md`, `README.legacy.md`)
  - Fixed `misc.js` spec tests that were silently skipped (object-shaped spec
    was never executed by the runner)
  - New `luast conformance` suite: walks every fixture through the
    child-field registry, validates unist positions, and checks JSON
    round-trip stability

  `@friday-friday/luast-util-from-luaparse`: deprecated. It now exists solely
  to convert trees from the **original** [`luaparse`](https://github.com/fstirlitz/luaparse)
  package (added as a dev dependency for tests). Fixed table-call conversion:
  the original parser emits `arguments` where luast expects `argument`.

  Migrating: replace `{ast: 'luast'}` option objects (the key is now inert),
  read `position` instead of `loc`/`range`, and switch scope consumers to
  `luast-util-scope`. Trees from the original luaparse can be converted with
  `fromLuaparse()`.

### Patch Changes

- Updated dependencies [[`660dfdd`](https://github.com/ericbfriday/luaparse/commit/660dfddd83d95620a194b56043e82fd38ca428ae)]:
  - @friday-friday/luast@0.4.0
  - @friday-friday/luast-util-visit@0.4.0
