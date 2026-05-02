# luast

Lua Abstract Syntax Tree format — [unist][]-compliant tree specification and
TypeScript types.

## What is this?

This package provides the TypeScript type definitions and runtime utilities for
the **luast** syntax tree format. luast is to Lua what [esast][] is to
ECMAScript: a language-specific AST that follows the [unist][] specification.

## Install

```sh
npm install @friday-friday/luast
```

## Use

```js
import type {Root, Identifier, Statement} from '@friday-friday/luast'
import {childFields, forEachChild, isStatement} from '@friday-friday/luast'
```

## API

### Types

All node types are exported as TypeScript type aliases:

- **Root** — top-level node (`root`)
- **Statements** — `labelStatement`, `breakStatement`, `gotoStatement`,
  `returnStatement`, `ifStatement`, `whileStatement`, `doStatement`,
  `repeatStatement`, `localStatement`, `assignmentStatement`,
  `callStatement`, `functionDeclaration`, `forNumericStatement`,
  `forGenericStatement`
- **Clauses** — `ifClause`, `elseifClause`, `elseClause`
- **Expressions** — `identifier`, `binaryExpression`, `logicalExpression`,
  `unaryExpression`, `memberExpression`, `indexExpression`, `callExpression`,
  `tableCallExpression`, `stringCallExpression`, `tableConstructor`
- **Literals** — `stringLiteral`, `numericLiteral`, `booleanLiteral`,
  `nilLiteral`, `varargLiteral`
- **Table fields** — `tableKey`, `tableKeyString`, `tableValue`
- **Comment** — `comment`
- **Unions** — `Statement`, `Clause`, `Expression`, `TableField`,
  `LuastContent`, `LuastAnyNode`, `LuastNode`

### Child-field registry

- `childFields` — maps each node type to its ordered child field names
- `arrayFields` — maps node types to fields that contain arrays
- `nullableFields` — maps node types to fields that may be `null`
- `getChildFields(node)` — get child fields for a node
- `forEachChild(node, callback)` — iterate child nodes
- `isArrayField(type, field)` — check if a field is an array
- `isNullableField(type, field)` — check if a field is nullable

### Type guards

- `isStatement(node)`, `isExpression(node)`, `isClause(node)`,
  `isTableField(node)`, `isComment(node)`, `isRoot(node)`

## Related

- [`@friday-friday/luast-util-visit`](../luast-util-visit) — tree visitor
- [`@friday-friday/luast-util-scope`](../luast-util-scope) — scope analysis
- [`@friday-friday/luast-util-from-luaparse`](../luast-util-from-luaparse) — legacy AST converter
- [`@friday-friday/unified-lua`](../unified-lua) — unified plugin
- [`@friday-friday/luaparse`](../../) — Lua parser

## License

[MIT](./LICENSE)

[unist]: https://github.com/syntax-tree/unist
[esast]: https://github.com/syntax-tree/esast
