# luaparse → luast: Implementation Loop

You are implementing the port of `luaparse` into the unist/syntax-tree/unified
ecosystem. This prompt is fed to you repeatedly. Each iteration you must:

1. **Orient** — determine what phase you are in and what remains
2. **Act** — do one concrete unit of work
3. **Verify** — confirm the work is correct (types compile, tests pass)
4. **Commit** — stage and commit your changes with a descriptive message
5. **Report** — state what you did and what comes next

When **all six phases are complete and verified**, output:

```
<promise>LUAST PORT COMPLETE</promise>
```

Do not output the promise tag until every phase's acceptance criteria is met.

---

## Reference documents

Read these before your first unit of work. On subsequent iterations, refer to
them only as needed.

- **`LUAST-SPEC.md`** — The tree specification. Defines all 33 node types,
  the content model, the child-field registry, position format, and the
  esast-aligned design (named fields, no `children`). This is the contract.
- **`MIGRATION-PLAN.md`** — The phased plan. Defines the six phases, package
  architecture, type-name mapping, field renames, acceptance criteria, and
  risk assessment.
- **`PORT-ANALYSIS.md`** — The original gap analysis. Background context.
  Superseded by the spec and plan on any conflict.
- **`FUTURE-README.md`** — The future README. Update the package table's
  Status column as packages are completed.
- **`luaparse.js`** — The existing parser. The AST factory starts at line
  228. Position handling is in `Marker`/`finishNode`. Do not break its
  existing public API until Phase 6.

---

## How to orient

Run this checklist each iteration to find your current position:

```
Phase 1 — Spec and types
  [ ] packages/luast/src/types.ts exists with all 33 node interfaces
  [ ] packages/luast/src/registry.ts exports the child-field registry
  [ ] packages/luast/src/guards.ts exports type guard functions
  [ ] packages/luast/src/index.ts re-exports everything
  [ ] packages/luast/package.json exists (ESM, TypeScript)
  [ ] packages/luast-util-visit/src/index.ts implements visit()
  [ ] packages/luast-util-visit/src/index.ts exports SKIP, REMOVE, EXIT
  [ ] packages/luast-util-visit/package.json exists
  [ ] All packages compile with tsc --noEmit
  [ ] Tests confirm visitor traverses a hand-built tree
  [ ] Tests confirm unist-util-is works on luast nodes
  [ ] Tests confirm unist-util-position works on luast nodes

Phase 2 — Adapter
  [ ] packages/luast-util-from-luaparse/src/index.ts implements fromLuaparse()
  [ ] Converts all 33 node types (type rename, field rename)
  [ ] Converts loc/range → position (columns +1)
  [ ] Strips isLocal from identifiers, globals from root
  [ ] Renames FunctionDeclaration.isLocal → local
  [ ] Removes TableCallExpression.arguments redundancy
  [ ] Tests: round-trip parse(code) → fromLuaparse(ast) for every node type
  [ ] Tests: position accuracy spot checks
  [ ] Tests: visitor traverses converted trees correctly

Phase 3 — Native emission
  [ ] luaparse.js supports parse(code, { ast: 'luast' })
  [ ] AST factory has luast mode (camelCase types, position format)
  [ ] Marker.bless has luast mode (position instead of loc/range)
  [ ] Legacy mode is default and unchanged
  [ ] Tests: native output matches adapter output for all fixtures
  [ ] Existing luaparse test suite still passes

Phase 4 — Unified integration
  [ ] packages/unified-lua/src/index.ts implements the unified parser plugin
  [ ] Parser contract: (document, file) => Root
  [ ] Accepts luaVersion, encodingMode options
  [ ] Tests: unified().use(luaParse).parse(code) returns valid luast
  [ ] Fixture suite confirms compatibility with unist utilities

Phase 5 — Scope and comments
  [ ] packages/luast-util-scope/src/index.ts implements analyzeScope()
  [ ] Returns globals list and isLocal(node) check
  [ ] No tree mutation — read-only analysis
  [ ] Tests: equivalent output to luaparse's scope: true
  [ ] Optional: luast-util-attach-comments maps comments to nodes

Phase 6 — Module modernization
  [ ] luaparse.js converted to ESM with CJS wrapper
  [ ] TypeScript types shipped (.d.ts or source)
  [ ] package.json has modern exports field
  [ ] Node.js engine target is current LTS
  [ ] CI passes (replace gulp/jshint/testem if needed)
  [ ] FUTURE-README.md moved to README.md (old README archived)
```

Find the first unchecked item. That is your work for this iteration.

---

## Phase instructions

### Phase 1: Spec and types

Set up the monorepo package structure and implement the foundational packages.

**Workspace layout:**

```
packages/
  luast/
    src/
      types.ts          — Node interfaces + union types
      registry.ts       — Child-field registry (runtime)
      guards.ts         — Type guards: isStatement(), isExpression(), etc.
      index.ts          — Public re-exports
    test/
      types.test.ts     — Compile-time type tests
      registry.test.ts  — Registry completeness
      interop.test.ts   — unist-util-is, unist-util-position compat
    package.json
    tsconfig.json
  luast-util-visit/
    src/
      index.ts          — visit() implementation
    test/
      visit.test.ts     — Traversal, SKIP, REMOVE, EXIT
    package.json
    tsconfig.json
```

**Implementation details for `luast` types:**

Derive every interface from `LUAST-SPEC.md` § Nodes. The root interface:

```ts
import type { Data, Position } from 'unist'

interface LuastNode {
  type: string
  data?: Data
  position?: Position
}
```

All node interfaces extend `LuastNode`. Literal nodes also carry `value`.
Union types: `Statement`, `Expression`, `Clause`, `TableField`, `LuastContent`.

**Implementation details for the child-field registry:**

The registry from `LUAST-SPEC.md` § Child-field registry must be a runtime
export (not just types), because `luast-util-visit` consumes it at runtime.
Export it as:

```ts
export const childFields: Record<string, readonly string[]>
```

Add metadata exports for nullable fields and array fields so the visitor
handles them correctly:

```ts
export const nullableFields: Record<string, readonly string[]>
// e.g. { functionDeclaration: ['identifier'], forNumericStatement: ['step'] }

export const arrayFields: Record<string, readonly string[]>
// e.g. { root: ['body'], ifStatement: ['clauses'], ... }
```

**Implementation details for `luast-util-visit`:**

Model on `estree-util-visit`. Core signature:

```ts
type Visitor = (
  node: LuastNode,
  parent: LuastNode | null,
  field: string | null,
  index: number | null
) => void | typeof SKIP | typeof REMOVE | typeof EXIT

export function visit(tree: LuastNode, visitor: Visitor): void
export function visit(tree: LuastNode, type: string, visitor: Visitor): void
export const SKIP: unique symbol
export const REMOVE: unique symbol
export const EXIT: unique symbol
```

The visitor iterates `childFields[node.type]` for each node. For each field:
- If the field value is an array, visit each element in order
- If the field value is a single node, visit it
- If the field value is `null`, skip it (nullable fields)

**Monorepo setup:**

- Use a root `package.json` with `workspaces: ["packages/*"]`
- Use a root `tsconfig.json` with project references
- Each package is ESM (`"type": "module"` in package.json)
- Test runner: `vitest` (or `node:test` — pick one and stick with it)
- Do NOT add workspace config to the existing root `package.json` — create a
  `packages/` directory and give each package its own `package.json`

**Dependencies to install:**

- `@types/unist` — unist type definitions
- `unist-util-is` — for interop tests
- `unist-util-position` — for interop tests
- `vitest` or `@types/node` — for tests
- `typescript` — for compilation

### Phase 2: Adapter

Implement `luast-util-from-luaparse` in `packages/luast-util-from-luaparse/`.

**The adapter is a recursive tree walk.** For each node:

1. Look up the type-name mapping (see `MIGRATION-PLAN.md` § Type-name mapping)
2. Create a new object with the camelCase type
3. Convert position: `loc.start.column + 1`, `loc.end.column + 1`, fold
   `range` into `position.start.offset` / `position.end.offset`
4. Recursively convert child fields (use the registry to know which fields
   are child-bearing)
5. Copy scalar fields (operator, name, indexer, raw, value, local)
6. Apply field renames (isLocal → local, strip isLocal from identifiers,
   strip globals from root, remove TableCallExpression.arguments alias)

**Critical edge cases:**

- `functionDeclaration.identifier` can be `null` — preserve it
- `forNumericStatement.step` can be `null` — preserve it
- `stringLiteral.value` can be `null` (encoding mode 'none') — preserve it
- When `loc` or `range` is absent (locations/ranges not enabled), do NOT add
  a `position` field

**Testing strategy:**

- Parse every Lua construct with luaparse (locations + ranges + comments on)
- Convert with `fromLuaparse()`
- Assert the output matches a hand-written expected tree
- Verify `visit()` from `luast-util-visit` reaches every node
- Verify `unist-util-position` reads positions correctly

### Phase 3: Native emission

Modify `luaparse.js` to optionally emit luast directly.

**Changes to the AST factory (line 228+):**

- Add a boolean flag `luastMode` derived from `options.ast === 'luast'`
- When `luastMode` is true, the factory functions return camelCase types and
  luast field names
- `FunctionDeclaration` → `functionDeclaration` with `local` instead of
  `isLocal`
- `TableConstructorExpression` → `tableConstructor`
- `TableCallExpression` omits the redundant `arguments` field

**Changes to Marker.bless (line 1550+):**

- When `luastMode` is true, emit `position` (1-indexed columns, offsets)
  instead of `loc`/`range`
- Always emit both `start.offset` and `end.offset` in luast mode

**Changes to parser finalization (line 2736+):**

- When `luastMode` is true, do NOT add `globals` to root
- Do NOT add `isLocal` to identifiers (skip `attachScope` mutations)
- Root type is `root` instead of `Chunk`

**Testing:**

- For every existing test fixture, verify:
  `parse(code, { ast: 'luast', locations: true, ranges: true, comments: true })`
  produces the same tree as
  `fromLuaparse(parse(code, { locations: true, ranges: true, comments: true }))`
- Verify the existing test suite passes unchanged (legacy mode)

### Phase 4: Unified integration

Implement `unified-lua` in `packages/unified-lua/`.

This is a thin wrapper. The unified parser contract is a function:

```ts
import type { Plugin } from 'unified'
import type { Root } from 'luast'

const luaParse: Plugin<[Options?], string, Root>
```

**Implementation:** ~20 lines.

```ts
export default function luaParse(options) {
  const settings = { ...options, ast: 'luast', locations: true, ranges: true, comments: true }
  Object.assign(this, { Parser: (doc) => parse(doc, settings) })
}
```

**Tests:**

- `unified().use(luaParse).parse(code)` returns a `Root`
- The tree passes `unist-util-is(tree, 'root')` → true
- `unist-util-position(tree)` returns valid positions

### Phase 5: Scope and comments

Implement `luast-util-scope` in `packages/luast-util-scope/`.

**Scope analysis algorithm:**

1. Walk the tree with `luast-util-visit`
2. Track a scope stack (array of `Set<string>`)
3. `functionDeclaration`, `forNumericStatement`, `forGenericStatement`,
   `doStatement` create new scopes
4. `localStatement` variables are added to the current scope
5. `functionDeclaration` parameters are added to its inner scope
6. `identifier` references are checked against the scope stack:
   - If found in any enclosing scope → local
   - If not found → global

**API:**

```ts
interface ScopeInfo {
  globals: Identifier[]
  isLocal(node: Identifier): boolean
}
export function analyzeScope(tree: Root): ScopeInfo
```

**Tests:**

- Compare output to luaparse's `parse(code, { scope: true })` for a suite
  of Lua programs covering: local variables, globals, function params,
  nested scopes, for-loop variables, shadowing

### Phase 6: Module modernization

Convert the parser to modern package standards. **This is a major version.**

1. Convert `luaparse.js` to ESM (add `export` instead of UMD wrapper)
2. Add a CJS wrapper (`index.cjs`) for backwards compatibility
3. Add `package.json` `"exports"` field with ESM + CJS conditions
4. Ship `.d.ts` type declarations for the parser
5. Update `"type": "module"` in package.json
6. Replace `gulp`/`jshint`/`testem` with modern alternatives
7. Move `FUTURE-README.md` → `README.md` (archive old README)
8. Update `FUTURE-README.md` package table statuses to reflect completion
9. Bump version to 2.0.0

---

## Rules

1. **One phase at a time.** Complete all items in a phase before starting the
   next. Do not skip ahead.
2. **Never break existing tests.** The legacy luaparse API must remain
   functional through Phases 1–5. Phase 6 is the only breaking change.
3. **Commit after each meaningful unit.** One commit per feature, not one
   commit per phase.
4. **Run verification after every change.** Types must compile. Tests must
   pass. Diagnostics must be clean.
5. **Follow the spec exactly.** `LUAST-SPEC.md` is the source of truth for
   node shapes, type names, and field names. Do not deviate.
6. **Follow existing code style.** Match the conventions of whatever package
   you are working in. New packages use modern TypeScript/ESM conventions.
7. **Do not add unnecessary dependencies.** Keep packages minimal.
8. **Use the child-field registry.** The visitor, adapter, and scope utility
   all consume the same registry from the `luast` package. Do not hardcode
   field names in multiple places.
9. **Update FUTURE-README.md** as packages are completed (change Status from
   "Planned" to a link to the package).

---

## Completion

All phases complete means:
- 6 packages exist under `packages/` and compile
- All tests pass
- Legacy luaparse tests still pass
- `FUTURE-README.md` reflects all completed packages

Then and only then:

```
<promise>LUAST PORT COMPLETE</promise>
```
