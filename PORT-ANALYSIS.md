# Port Analysis: `luaparse` to the Unist Ecosystem

Date: 2026-04-27

## Scope

This document summarizes what would be required to port the existing `luaparse`
AST and package surface so that it aligns with the `unist` / `syntax-tree` /
`unified` ecosystem.

The analysis covers:

- `unist` core requirements
- current `luaparse` AST and package shape
- the concrete structural gaps
- the lowest-risk migration strategy
- source references for both the local codebase and upstream ecosystem docs

## Executive Summary

Porting `luaparse` to the `unist` ecosystem is feasible, but it is not a
mechanical rename of fields.

The parser itself can mostly stay. The main work is to define a Lua-specific
`unist` tree shape and either:

1. emit that tree directly, or
2. add an adapter layer from the current `luaparse` AST to a new `luast`
   representation.

The largest blockers are structural:

- `luaparse` uses many node-specific child fields such as `body`, `variables`,
  `init`, `clauses`, `fields`, `base`, `index`, and `arguments`, while generic
  `unist` tooling traverses `children`
- `luaparse` emits `loc` and `range`; `unist` expects `position`
- `luaparse` stores comments and scope metadata ad hoc on the tree and on
  identifier nodes instead of using an ecosystem metadata space such as `data`
- the current package is legacy CommonJS with no shipped type definitions,
  whereas current `syntax-tree` utilities are typed and modern ESM packages

The lowest-risk approach is:

- keep the current AST as the compatibility API
- define a new Lua `unist` spec (`luast`)
- add `toLuast(ast)` or `parse(code, {ast: 'luast'})`
- optionally add a `unified` parser wrapper after the tree shape is stable

## What Unist Requires

At the `unist` level, the hard requirements are small but important:

- every node has `type: string`
- nodes may have `data`
- nodes may have `position`
- parent nodes use `children`
- literal nodes use `value`
- trees should be JSON-safe and round-trip through JSON without semantic loss

`position` is also defined precisely:

- `line` is 1-based
- `column` is 1-based
- `offset` is optional and 0-based
- `position.end` is the first point after the node

This matters because generic utilities assume these shapes. For example:

- `unist-util-visit` and `unist-util-visit-parents` walk trees through
  `children`
- `unist-util-position` reads `position`
- `unist-util-is` assumes `type`-driven node testing

The broader `syntax-tree` ecosystem also has strong conventions even when they
are not strict `unist` requirements:

- root nodes are typically `type: 'root'`
- node names are typically lower camel case
- ecosystem metadata is attached through `data`
- packages are published with TypeScript types
- current maintained utilities are ESM-only and target modern Node.js versions

## Current `luaparse` Shape

### Root node and top-level metadata

The current AST root is `Chunk`, not `root`. It stores statements in `body` and
comments in `comments`.

Example from the README:

```json
{
  "type": "Chunk",
  "body": [...],
  "comments": []
}
```

When scope tracking is enabled, `chunk.globals` is also added.

### Node construction model

`luaparse` has a central mutable AST factory at `luaparse.ast`, which is a good
seam for a port. However, the parser also adds locations, comments, and root
metadata outside that factory, so the factory alone is not enough to switch the
tree format.

### Structural child fields

The current nodes are not organized around a single `children` property.
Important examples:

- `Chunk.body`
- `IfStatement.clauses`
- `IfClause.body`
- `WhileStatement.condition` and `WhileStatement.body`
- `LocalStatement.variables` and `LocalStatement.init`
- `AssignmentStatement.variables` and `AssignmentStatement.init`
- `FunctionDeclaration.identifier`, `parameters`, and `body`
- `TableConstructorExpression.fields`
- `BinaryExpression.left` and `BinaryExpression.right`
- `MemberExpression.base` and `MemberExpression.identifier`
- `CallExpression.base` and `arguments`

This is the biggest compatibility gap with generic `unist` tooling.

### Position data

`luaparse` can emit:

- `loc.start/end` with 0-based columns
- `range: [startOffset, endOffset]`

That is close to what `unist` needs, but not the same format.

### Comments and scope metadata

Comments are currently accumulated separately and attached to the root.

Scope analysis mutates the AST by:

- adding `isLocal` on identifier nodes
- adding `globals` on the root

The implementation also pushes the same identifier node object into
`globals`, so the globals list aliases nodes already inside the tree instead of
being separate analysis records.

### Package surface

The package currently ships:

- CommonJS entrypoint
- browser-focused single-file build
- no published `.d.ts` files

That package surface is usable, but it is behind current `syntax-tree` /
`unified` conventions.

## Gap Analysis

| Area | Current `luaparse` | Unist-aligned target | Impact |
| --- | --- | --- | --- |
| Root node | `Chunk` with `body` | usually `root` with `children` | high |
| Traversal | many bespoke child keys | canonical `children` | high |
| Positions | `loc` + `range` | `position` with `line`, `column`, `offset` | high |
| Metadata | `comments`, `globals`, `isLocal` ad hoc | `data` or separate utility output | medium-high |
| Comments | root-level side array | decide AST metadata vs first-class nodes | medium |
| Scope | parser mutates syntax nodes | likely separate semantic pass or `data` | medium |
| Node naming | ESTree-like / PascalCase | usually lower camel case in syntax-tree specs | medium |
| Types | no published tree types | first-class TS type package | medium |
| Module format | legacy CJS | modern ESM package surface | medium |
| Unified integration | none | parser wrapper returning a `unist` tree | low after tree exists |

## What Would Be Required

### 1. Define a Lua-specific Unist spec

`unist` is intentionally generic. The ecosystem normally introduces a language
spec on top of it, such as `mdast` or `hast`.

For Lua, this means creating and documenting a tree spec first. Call it
`luast` or similar.

Without that spec, a port would be ambiguous:

- should labels be strings or identifier child nodes?
- should comments be syntax nodes or side metadata?
- how should a function declaration encode parameters and body in `children`?
- how should `if` / `elseif` / `else` clauses be grouped?

That spec work is not optional if the goal is a stable ecosystem tree rather
than a private adapter.

### 2. Rebuild the tree around `children`

To work naturally with `unist-util-visit`, descendants need to be reachable
through `children`.

There are two broad design choices:

1. `children` is the single source of truth
2. keep existing named child fields and also add `children`

The second option is easier initially but is risky because it creates two
parallel structural representations that can drift out of sync after tree
transforms.

For real syntax-tree alignment, the first option is better.

That implies redesigning many node shapes. Likely examples:

- `root.children` for top-level statements
- `ifStatement.children` containing clause nodes
- `ifClause.children` containing condition plus consequent block content
- `functionDeclaration.children` containing optional name, parameters, and body
- `binaryExpression.children` containing left and right expressions
- `callExpression.children` containing callee plus argument nodes

For nodes that currently have multiple repeated roles, you may want explicit
container nodes such as:

- `parameterList`
- `argumentList`
- `variableList`
- `initializerList`
- `block`

Those wrapper nodes avoid ambiguous flat child arrays and preserve meaning
without relying on side conventions.

### 3. Convert `loc` / `range` into `position`

The existing location machinery is close enough to reuse.

Required changes:

- map `loc.start/end` to `position.start/end`
- change columns from 0-based to 1-based
- map `range[0]` to `position.start.offset`
- map `range[1]` to `position.end.offset`
- omit `position` on generated nodes

This is implementation work, not parser theory work.

### 4. Move ecosystem-specific data out of ad hoc top-level fields

`unist` provides `data` specifically so ecosystems can attach extra information
without redefining the core node model.

For `luaparse`, likely candidates are:

- raw lexeme details
- comment attachment data
- scope annotations
- original legacy node metadata needed during migration

The current `globals` and `isLocal` fields are useful, but they are semantic
analysis results, not syntax structure. They fit better as:

- a separate utility pass, or
- `data.scope`

### 5. Decide whether this is an AST or a CST-ish tree for comments

`unist` can represent both abstract and concrete syntax trees.

For Lua comments, there are two reasonable options:

- AST-first: keep comments out of the main `children` structure and store them
  in `data.comments` or expose a separate comment API
- CST-leaning: emit comment nodes directly in `children`

The current root-level `comments` array is a third model that does not map
particularly well to generic unist tooling.

If the target use case is linting / transforms, AST-first is probably the
cleaner default. If preservation and formatting are first-class goals, a more
concrete comment model may be better.

### 6. Preserve backward compatibility with an adapter layer

Breaking the existing AST by default would be expensive for downstream users.

A safer migration path is:

- keep `parse(code, options)` returning the legacy tree
- add `toLuast(legacyTree)`
- optionally add `parse(code, {ast: 'luast'})`

That allows:

- compatibility for existing users
- early experimentation with tree design
- unified integration without blocking on a major breaking release

### 7. Add first-class types

A genuine syntax-tree package should ship TypeScript types for:

- the node unions
- parent / literal node subsets
- parser return type
- option types
- any compatibility adapter APIs

This matters because much of the modern `unified` ecosystem relies on types to
make visitor-based transforms safe and ergonomic.

### 8. Modernize package boundaries

If the goal is not just structural compliance but ecosystem adoption, the
package surface should probably be split or layered:

- `luast` or `@scope/luast` for the tree spec and types
- `luaparse` or `@scope/luaparse` for parsing Lua into `luast`
- optional `unified-lua` or similar for a `unified` parser plugin

The `unified` wrapper is straightforward once the tree exists. The parser type
expected by `unified` is simply a function from document text and `VFile` to a
`Node`.

## Recommended Migration Plan

### Phase 1: Spec and types

- define the `luast` node model
- document root, parent, literal, comment, and block conventions
- publish TypeScript definitions

### Phase 2: Adapter

- implement `toLuast(legacyAst)`
- reuse existing parser output as the source of truth
- add tests that confirm full-tree traversal via `unist-util-visit`

### Phase 3: Optional native emission

- add `parse(code, {ast: 'luast'})`
- keep legacy AST as the default until the new tree is stable

### Phase 4: Unified integration

- add a small wrapper package that exposes a `unified` parser
- return `luast` root nodes directly from `parse`
- add fixtures proving compatibility with `visit`, `visitParents`,
  `position`, and `is`

### Phase 5: Scope and comment utilities

- move scope analysis into a dedicated utility or attach it under `data`
- define a stable comment model
- decide whether formatting / round-tripping needs a separate concrete tree

## Open Design Questions

These questions need explicit decisions before implementation:

- Should the root type remain `Chunk` for Lua familiarity, or become `root` for
  syntax-tree consistency?
- Should comments be first-class nodes, side metadata, or a separate tree?
- Should labels and identifiers remain node objects, or be flattened to scalar
  fields in some positions?
- Should named child fields be preserved in parallel with `children` during the
  transition?
- Should scope analysis remain a parser option, or become a separate semantic
  utility over `luast`?

## Conclusion

The required work is substantial, but it is mostly tree-design and API-surface
work, not a parser rewrite.

The critical observation is that `luaparse` is already close enough in spirit
to support a clean port:

- it already has a centralized AST factory
- it already tracks source locations and ranges
- it already produces JSON-safe plain objects

What it does not currently provide is the one thing the `unist` ecosystem most
depends on: a canonical `children`-based structural tree plus `position`.

Because of that, the best plan is to treat this as a new tree specification and
adapter project, not as a small refactor of field names.

## Local Repository References

- `README.md:43-76`
  - parser API, options, comments / scope / locations / ranges
- `README.md:94-126`
  - example AST shape with `Chunk`, `body`, and `comments`
- `README.md:154-182`
  - `luaparse.ast` factory customization seam
- `luaparse.js:228-483`
  - AST factory definitions for current node shapes
- `luaparse.js:487-495`
  - `finishNode`, which attaches location data outside the AST factory
- `luaparse.js:1237-1285`
  - comment scanning and manual comment node location handling
- `luaparse.js:1468-1505`
  - scope creation and `isLocal` / `globals` behavior
- `luaparse.js:1518-1570`
  - `Marker`, `loc`, and `range` attachment logic
- `luaparse.js:1739-1752`
  - `parseChunk`, current root creation
- `luaparse.js:2692-2744`
  - parser finalization, root `comments`, and root `globals`
- `package.json:15-25`
  - published files and CommonJS main entrypoint
- `index.js:1-2`
  - CommonJS re-export wrapper

## External Sources

- [syntax-tree/unist](https://github.com/syntax-tree/unist)
  - core `Node`, `Parent`, `Literal`, `Position`, `Point`, JSON-safety rules,
    and tree traversal glossary
- [syntax-tree/unist-util-visit](https://github.com/syntax-tree/unist-util-visit)
  - generic traversal API and the assumption that traversal happens through the
    tree structure
- [syntax-tree/unist-util-visit-parents](https://github.com/syntax-tree/unist-util-visit-parents)
  - parent-stack traversal and mutation semantics
- [syntax-tree/unist-util-position](https://github.com/syntax-tree/unist-util-position)
  - expected `position` access patterns
- [syntax-tree/unist-util-is](https://github.com/syntax-tree/unist-util-is)
  - `type`-driven node testing conventions
- [syntax-tree/unist-builder](https://github.com/syntax-tree/unist-builder)
  - idiomatic node creation conventions in the syntax-tree ecosystem
- [syntax-tree/mdast](https://github.com/syntax-tree/mdast)
  - example of a language-specific `unist` spec with `root`, `children`, and
    scalar metadata fields
- [syntax-tree/mdast-util-to-hast](https://github.com/syntax-tree/mdast-util-to-hast)
  - example of ecosystem use of `data` and custom node handling
- [unifiedjs/unified](https://github.com/unifiedjs/unified)
  - parser contract for integrating a syntax tree with `unified`
