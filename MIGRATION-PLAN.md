# Migration Plan: luaparse → luast / Unist Ecosystem

Date: 2026-04-27

## Contents

- [Overview](#overview)
- [Design decisions](#design-decisions)
- [Package architecture](#package-architecture)
- [Type-name mapping](#type-name-mapping)
- [Phased plan](#phased-plan)
- [Risk assessment](#risk-assessment)
- [Resolved design questions](#resolved-design-questions)

## Overview

This document describes the concrete plan for migrating the `luaparse` library
into the unist/syntax-tree/unified ecosystem.
It accompanies the [luast specification](./LUAST-SPEC.md), which defines the
target tree format.

The migration is structured as six phases, each independently shippable.
No phase requires breaking the existing `luaparse` public API until explicitly
opted into.

### Guiding principles

1. **Spec first, code second.** The tree shape is the contract — everything
   else follows from it.
2. **Adapter before rewrite.** Ship `luast-util-from-luaparse` so consumers
   can adopt incrementally.
3. **Never break existing users by default.** The legacy AST remains the
   default output until the ecosystem is stable.
4. **Follow esast's precedent.** It is the only programming-language AST in
   the unist ecosystem and its design decisions are directly applicable.

## Design decisions

Each decision below was evaluated against the unist spec, ecosystem precedent,
and the structural analysis in [PORT-ANALYSIS.md](./PORT-ANALYSIS.md).

### 1. Named fields, not `children`

**Decision:** Follow esast. Use named fields (`body`, `condition`, `left`,
`right`, etc.) as the canonical structural representation.
Do not populate `children`.

**Rationale:**

- esast is the only programming-language unist spec and it made this same
  choice for the same reasons
- Programming language ASTs have heterogeneous child roles.
  A flat `children` array requires either:
  - container/wrapper nodes for everything (verbose, accidental complexity)
  - positional conventions (fragile, semantically opaque)
  - dual representation (sync risk — PORT-ANALYSIS.md warned against this)
- Named fields preserve the semantic meaning that transforms and linters
  depend on
- Minimizes the structural delta from the current luaparse AST

**Tradeoff:** Generic `unist-util-visit` does not traverse luast trees.
A dedicated `luast-util-visit` is required (small, well-understood — modeled
on `estree-util-visit`).

**Generic utilities that still work:**
`unist-util-is`, `unist-util-position`, `unist-util-generated`,
`unist-util-stringify-position`, `unist-util-remove-position`.

### 2. Root node is `root`, not `Chunk`

**Decision:** Use `type: 'root'`.

**Rationale:** Every unist spec uses `root` for the document root
(`mdast`, `hast`, `xast`, `nlcst`).
esast is the only exception (`Program`), and only because ESTree mandates it.
Since there is no external "Lua AST standard" to maintain compatibility with,
`root` is the correct choice.

### 3. camelCase type names

**Decision:** Use camelCase for all node types: `ifStatement`,
`binaryExpression`, `tableConstructor`.

**Rationale:** The majority of unist specifications use camelCase
(`mdast`, `hast`, `xast`).
esast uses PascalCase only for ESTree compatibility.
Since luast has no external standard to match, camelCase aligns with the
ecosystem majority.

### 4. Comments on root only

**Decision:** Store comments in `root.comments` as an array of `comment`
nodes in document order.
Do not embed comments in the statement/expression tree.

**Rationale:**

- Matches the current `luaparse` behavior (comments on `Chunk`)
- Matches esast's recommendation (`comments` only on `Program`)
- Keeps the AST clean for transforms that don't care about comments
- Comment attachment (mapping comments to adjacent nodes) can be handled by
  a separate utility (`luast-util-attach-comments`)

### 5. Scope analysis as a separate utility

**Decision:** Remove `isLocal` from identifier nodes and `globals` from root
in the base spec.
Scope analysis becomes a separate utility (`luast-util-scope`) or is stored
under `data.scope`.

**Rationale:**

- `isLocal` and `globals` are semantic analysis results, not syntax
- The current luaparse implementation aliases identifier nodes into the
  `globals` array, which is a data-integrity hazard
- A separate utility can be versioned and evolved independently of the spec
- Follows unist convention: `data` is the ecosystem metadata space

### 6. Keep separate call expression types

**Decision:** Keep `callExpression`, `tableCallExpression`, and
`stringCallExpression` as distinct types.

**Rationale:**

- They have different syntactic forms (`f()`, `f{}`, `f""`)
- A linter or formatter needs to distinguish them
- Merging would lose syntactic information
- Splitting is consistent with the current luaparse behavior

### 7. `raw` as a first-class field on literals

**Decision:** Keep `raw` as a direct field on literal and comment nodes, not
in `data`.

**Rationale:**

- `raw` is core representation data for Lua (string delimiters vary:
  `"..."`, `'...'`, `[[...]]`)
- `data` is for ecosystem metadata, not source representation
- mdast uses first-class fields for similar data (`lang`, `meta` on `code`)
- esast recommends against `raw`, but that recommendation is specific to
  ESTree where `raw` was a non-standard parser addition.
  In Lua, `raw` is the only way to reconstruct the original source form of
  a literal

## Package architecture

The migration produces a small family of packages, following the
`{spec}-util-{purpose}` naming convention used by the syntax-tree ecosystem.

```
luast                          Spec + TypeScript types
luast-util-from-luaparse       Adapter: legacy AST → luast
luast-util-visit               Tree visitor (enter/exit/skip/remove)
luast-util-scope               Scope analysis utility
unified-lua                    unified parser plugin
```

### `luast`

The tree specification and TypeScript type definitions.

**Exports:**

- TypeScript interfaces for all node types (`Root`, `IfStatement`,
  `BinaryExpression`, etc.)
- Union types (`Statement`, `Expression`, `Clause`, `TableField`)
- The child-field registry as a runtime data structure
- Type guards (`isStatement()`, `isExpression()`, etc.)

**Dependencies:** `@types/unist`

### `luast-util-from-luaparse`

Converts a legacy `luaparse` AST to a luast tree.

**Responsibilities:**

- Rename types (`IfStatement` → `ifStatement`)
- Convert `loc`/`range` → `position` (columns +1)
- Rename `Chunk` → `root`
- Rename `FunctionDeclaration.isLocal` → `functionDeclaration.local`
- Strip `isLocal` from identifiers (move to `data.scope` if present)
- Strip `globals` from root (move to `data.scope` if present)
- Normalize `TableCallExpression` (remove the redundant `arguments` alias)

**Dependencies:** `luast`, `luaparse`

### `luast-util-visit`

Tree visitor modeled on `estree-util-visit`.

**API:**

```ts
import {visit, SKIP, REMOVE, EXIT} from 'luast-util-visit'

visit(tree, (node, parent, field, index) => {
  // called for every node
})

visit(tree, 'ifStatement', (node, parent, field, index) => {
  // called only for ifStatement nodes
  // `node` is typed as IfStatement
})
```

**Implementation:** Uses the child-field registry from `luast` to determine
which fields to recurse into.
Handles single-node fields, array fields, and nullable fields.

**Size:** ~100–150 lines.

**Dependencies:** `luast`

### `luast-util-scope`

Scope analysis over luast trees.

**API:**

```ts
import {analyzeScope} from 'luast-util-scope'

const scope = analyzeScope(tree)
scope.globals // Identifier nodes referenced but not declared locally
scope.isLocal(node) // whether an identifier is locally scoped
```

**Dependencies:** `luast`, `luast-util-visit`

### `unified-lua`

A unified parser plugin.

**API:**

```ts
import {unified} from 'unified'
import luaParse from 'unified-lua'

const tree = unified().use(luaParse, {luaVersion: '5.3'}).parse('local x = 1')
```

The parser contract is: `(document: string, file: VFile) => Root`.

**Dependencies:** `luast`, `luaparse`, `luast-util-from-luaparse`, `unified`,
`vfile`

## Type-name mapping

Complete mapping from current luaparse types to luast types.

| luaparse (PascalCase)        | luast (camelCase)      | Category               |
| ---------------------------- | ---------------------- | ---------------------- |
| `Chunk`                      | `root`                 | root                   |
| `LabelStatement`             | `labelStatement`       | statement              |
| `BreakStatement`             | `breakStatement`       | statement              |
| `GotoStatement`              | `gotoStatement`        | statement              |
| `ReturnStatement`            | `returnStatement`      | statement              |
| `IfStatement`                | `ifStatement`          | statement              |
| `IfClause`                   | `ifClause`             | clause                 |
| `ElseifClause`               | `elseifClause`         | clause                 |
| `ElseClause`                 | `elseClause`           | clause                 |
| `WhileStatement`             | `whileStatement`       | statement              |
| `DoStatement`                | `doStatement`          | statement              |
| `RepeatStatement`            | `repeatStatement`      | statement              |
| `LocalStatement`             | `localStatement`       | statement              |
| `AssignmentStatement`        | `assignmentStatement`  | statement              |
| `CallStatement`              | `callStatement`        | statement              |
| `FunctionDeclaration`        | `functionDeclaration`  | statement / expression |
| `ForNumericStatement`        | `forNumericStatement`  | statement              |
| `ForGenericStatement`        | `forGenericStatement`  | statement              |
| `Identifier`                 | `identifier`           | expression             |
| `StringLiteral`              | `stringLiteral`        | literal                |
| `NumericLiteral`             | `numericLiteral`       | literal                |
| `BooleanLiteral`             | `booleanLiteral`       | literal                |
| `NilLiteral`                 | `nilLiteral`           | literal                |
| `VarargLiteral`              | `varargLiteral`        | literal                |
| `BinaryExpression`           | `binaryExpression`     | expression             |
| `LogicalExpression`          | `logicalExpression`    | expression             |
| `UnaryExpression`            | `unaryExpression`      | expression             |
| `MemberExpression`           | `memberExpression`     | expression             |
| `IndexExpression`            | `indexExpression`      | expression             |
| `CallExpression`             | `callExpression`       | expression             |
| `TableCallExpression`        | `tableCallExpression`  | expression             |
| `StringCallExpression`       | `stringCallExpression` | expression             |
| `TableConstructorExpression` | `tableConstructor`     | expression             |
| `TableKey`                   | `tableKey`             | table field            |
| `TableKeyString`             | `tableKeyString`       | table field            |
| `TableValue`                 | `tableValue`           | table field            |
| `Comment`                    | `comment`              | comment                |

### Field renames

| luaparse                        | luast                       | Notes                                  |
| ------------------------------- | --------------------------- | -------------------------------------- |
| `FunctionDeclaration.isLocal`   | `functionDeclaration.local` | Shorter, matches Lua keyword           |
| `Chunk.body`                    | `root.body`                 | Same field name, different parent type |
| `Chunk.comments`                | `root.comments`             | Same field name, different parent type |
| `Chunk.globals`                 | removed                     | Moved to `luast-util-scope`            |
| `Identifier.isLocal`            | removed                     | Moved to `luast-util-scope`            |
| `node.loc`                      | `node.position`             | Columns become 1-indexed               |
| `node.range`                    | `node.position.*.offset`    | Folded into position                   |
| `TableCallExpression.arguments` | removed                     | Redundant alias of `argument`          |

## Phased plan

### Phase 1: Specification and types

**Goal:** Publish the tree contract so consumers can start building against it.

**Deliverables:**

- [x] `LUAST-SPEC.md` — the specification document (this repo)
- [x] `luast` package — TypeScript type definitions
  - All node interfaces
  - Union types (`Statement`, `Expression`, `Clause`, `TableField`)
  - Child-field registry as a runtime export
  - Type guard functions
- [x] `luast-util-visit` — tree visitor
  - `visit(tree, [type], callback)` with enter/exit support
  - Action constants: `SKIP`, `REMOVE`, `EXIT`
  - Type-narrowed callback parameters

**No changes to luaparse itself.**

**Acceptance criteria:**

- Types compile cleanly
- Registry covers all 33 node types
- Visitor traverses a hand-built tree correctly
- Tests confirm `unist-util-is` and `unist-util-position` work on luast nodes

### Phase 2: Adapter

**Goal:** Bridge the legacy AST to luast so existing luaparse users can adopt
incrementally.

**Deliverables:**

- [x] `luast-util-from-luaparse` — adapter function
  - Recursive tree walk converting every node
  - Type rename (PascalCase → camelCase)
  - Position conversion (columns +1, loc/range → position)
  - Field renames (`isLocal` → `local`, strip scope annotations)
  - `TableCallExpression.arguments` deduplication
- [x] Test suite
  - Round-trip: `parse(code)` → `fromLuaparse(ast)` → verify full tree
  - Position accuracy: spot-check column offsets
  - All 33 node types covered
  - Verify `luast-util-visit` traverses the converted tree correctly
  - Verify `unist-util-position` reads positions correctly

**No changes to luaparse itself.**

**Acceptance criteria:**

- Adapter produces valid luast trees for the full luaparse test suite
- Every node type is covered
- Position offsets are accurate

### Phase 3: Native emission

**Goal:** Eliminate the adapter overhead for new consumers.

**Deliverables:**

- [x] New parser option: `parse(code, { ast: 'luast' })`
  - Emits luast directly from the AST factory
  - Positions are 1-indexed columns from the start
  - Type names are camelCase from the start
  - No `isLocal`/`globals` on the tree
- [x] Legacy AST remains the default (`ast: 'legacy'` or omitted)
- [ ] Performance benchmark: native emission vs. parse + adapter (deferred)

**Changes to luaparse:**

- Modify `ast` factory to optionally produce luast node shapes
- Modify `Marker.bless` to optionally emit `position` instead of `loc`/`range`
- Add `ast` option to parser options

**Acceptance criteria:**

- `parse(code, { ast: 'luast' })` produces identical trees to
  `fromLuaparse(parse(code, { locations: true, ranges: true, comments: true }))`
- No performance regression for legacy mode
- Existing test suite passes unchanged

### Phase 4: Unified integration

**Goal:** Plug into the unified pipeline.

**Deliverables:**

- [x] `unified-lua` — parser plugin
  - Accepts `luaVersion`, `encodingMode` options
  - Returns luast `root` from `processor.parse()`
  - Compatible with `VFile` input
- [x] Fixture suite proving compatibility with:
  - `luast-util-visit`
  - `unist-util-is`
  - `unist-util-position`
  - `unist-util-stringify-position` (not tested separately)
  - `unist-util-generated` (not tested separately)

**Acceptance criteria:**

- `unified().use(luaParse).parse(code)` returns a valid luast tree
- All fixture tests pass

### Phase 5: Scope and comment utilities

**Goal:** Restore the scope analysis and comment attachment features as proper
ecosystem utilities.

**Deliverables:**

- [x] `luast-util-scope` — scope analysis
  - `analyzeScope(tree)` returns scope information
  - Identifies local/global identifiers
  - No tree mutation
- [ ] `luast-util-attach-comments` (optional) — comment attachment
  - Maps comments to their nearest/enclosing nodes
  - Attaches via `data.comments` on target nodes
- [ ] Documentation on migrating from `parse({ scope: true })` to
      `analyzeScope(tree)`

**Acceptance criteria:**

- Scope analysis produces equivalent results to luaparse's `scope: true`
- Comments are correctly associated with adjacent nodes

### Phase 6: Module modernization

**Goal:** Bring the package surface up to current ecosystem standards.

**Deliverables:**

- [x] Convert luaparse to ESM (with CJS wrapper for backwards compatibility)
- [x] Ship TypeScript source or `.d.ts` files
- [x] Modern `exports` field in `package.json`
- [ ] Drop legacy browser build (or produce it as a build artifact) (deferred)
- [x] Update Node.js engine target to current LTS
- [x] Replace gulp/jshint/testem toolchain with modern equivalents

**This phase is a major version bump (2.0).**

**Acceptance criteria:**

- `import luaparse from 'luaparse'` works in ESM
- `require('luaparse')` still works in CJS
- TypeScript users get types without `@types/luaparse`
- CI passes on current Node.js LTS

## Risk assessment

| Risk                                                           | Likelihood | Impact | Mitigation                                                                             |
| -------------------------------------------------------------- | ---------- | ------ | -------------------------------------------------------------------------------------- |
| Spec design error discovered after Phase 2                     | Medium     | High   | Phase 1 explicitly invites review; adapter is cheap to update                          |
| `luast-util-visit` misses edge cases (nullable fields, cycles) | Low        | Medium | Comprehensive test coverage; luast trees are acyclic by construction                   |
| Confusion about generic `unist-util-visit` not working         | High       | Low    | Document prominently in README and spec; provide clear error message or no-op          |
| Performance regression from native emission changes            | Low        | Medium | Benchmark in Phase 3; factory changes are localized                                    |
| Breaking downstream consumers of legacy AST                    | Low        | High   | Legacy AST is default until Phase 6 major bump; adapter enables incremental migration  |
| Child-field registry drifts from spec                          | Medium     | High   | Registry is generated from or co-located with type definitions; single source of truth |

## Resolved design questions

These questions were originally listed as open in PORT-ANALYSIS.md.
All are now resolved.

| Question                                                                 | Decision                              | Rationale                                                                       |
| ------------------------------------------------------------------------ | ------------------------------------- | ------------------------------------------------------------------------------- |
| Should the root type be `Chunk` or `root`?                               | `root`                                | All unist specs except esast use `root`; esast's `Program` was forced by ESTree |
| Should comments be first-class nodes, side metadata, or a separate tree? | Root-level array (`root.comments`)    | Matches esast recommendation and current luaparse behavior                      |
| Should labels and identifiers be node objects or scalars?                | Node objects                          | Preserves position information; consistent with esast's `Identifier`            |
| Should named fields be preserved in parallel with `children`?            | Named fields only, no `children`      | esast precedent; avoids dual-representation sync risk                           |
| Should scope analysis remain a parser option?                            | Separate utility (`luast-util-scope`) | Semantic analysis is not syntax; unist `data` is the metadata space             |
