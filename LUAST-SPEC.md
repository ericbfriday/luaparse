# luast

**Lu**a **A**bstract **S**yntax **T**ree format.

---

**luast** is a specification for representing [Lua][] as an abstract
[syntax tree][syntax-tree].
It implements the **[unist][]** spec.

## Contents

- [Introduction](#introduction)
  - [Where this specification fits](#where-this-specification-fits)
  - [Relationship to unist](#relationship-to-unist)
  - [Relationship to luaparse](#relationship-to-luaparse)
- [Nodes](#nodes)
  - [`Node`](#node)
  - [`Root`](#root)
  - [Statements](#statements)
  - [Clauses](#clauses)
  - [Expressions](#expressions)
  - [Literals](#literals)
  - [Table fields](#table-fields)
  - [Comments](#comments)
- [Content model](#content-model)
- [Child-field registry](#child-field-registry)
- [Position](#position)
- [Recommendations](#recommendations)
- [Glossary](#glossary)
- [References](#references)

## Introduction

This document defines a format for representing Lua source code as an
[abstract syntax tree][syntax-tree].
This specification is written in a [Web IDL][webidl]-like grammar.

luast covers Lua 5.1, 5.2, 5.3, and LuaJIT.
Version-specific nodes (such as `gotoStatement` and `labelStatement`, which
require Lua 5.2+) are documented alongside the Lua version that introduced them.

### Where this specification fits

luast extends [unist][], a format for syntax trees, to benefit from its
[ecosystem of utilities][unist-utilities].

luast relates to [luaparse][] in that luaparse is the reference parser for
producing luast trees.
The legacy `luaparse` AST format and the `luast` format are related but
distinct: a utility (`luast-util-from-luaparse`) converts between them.

luast relates to [Lua][], other than that it represents it, in that it has
an ecosystem of utilities for working with compliant syntax trees in
JavaScript.

luast relates to the [unified][] project in that luast syntax trees are used
throughout its ecosystem.

### Relationship to unist

There is one important difference with other implementations of unist:
**children are added at fields other than the `children` array and the
`children` field is not used.**

This follows the precedent established by [esast][] (the ECMAScript unist
specification, maintained by the syntax-tree organization), which made the
same design decision for the same reason: programming language ASTs have
heterogeneous child roles (`condition`, `body`, `left`, `right`, etc.) that
map poorly to a flat `children` array.

As a consequence, generic utilities that traverse via `children` (such as
`unist-util-visit`) do not walk luast trees.
Instead, use `luast-util-visit`, which understands the named-field structure.

The following generic unist utilities **do** work with luast trees unchanged:

- `unist-util-is` — type-driven node testing
- `unist-util-position` — reading positional info
- `unist-util-generated` — checking if a node is generated
- `unist-util-stringify-position` — stringifying positions
- `unist-util-remove-position` — removing positional info

### Relationship to luaparse

luaparse is the reference parser implementation.
The legacy luaparse AST format differs from luast in several ways:

- type names are PascalCase (`IfStatement`), luast uses camelCase
  (`ifStatement`)
- positions use `loc`/`range`, luast uses unist `position`
- the root node is `Chunk`, luast uses `root`
- scope annotations (`isLocal`, `globals`) are inline, luast moves them to
  `data` or a separate utility
- `FunctionDeclaration.isLocal` becomes `functionDeclaration.local`

A `luast-util-from-luaparse` adapter handles the conversion.

## Nodes

### `Node`

```idl
extend interface Node <: UnistNode {}
```

All luast nodes inherit from unist's [Node][unist-node].
Every node has a `type` (non-empty string), and optionally `data` and
`position`.

All values in luast must be expressible in JSON.
A tree can be passed through `JSON.parse(JSON.stringify(tree))` and produce
the same tree.

### `Root`

```idl
interface Root <: Node {
  type: 'root'
  body: [Statement]
  comments: [Comment]?
}
```

**Root** represents a complete Lua chunk (source file or string).

- `body` contains the top-level statements
- `comments` is an optional array of all comments in the source, in document
  order (following esast's recommendation to only attach comments at the root)

The `root` type name follows unist convention (all unist specs use `root` for
the document root).

### Statements

#### `labelStatement`

```idl
interface LabelStatement <: Node {
  type: 'labelStatement'
  label: Identifier
}
```

Represents `::name::` (Lua 5.2+).

#### `breakStatement`

```idl
interface BreakStatement <: Node {
  type: 'breakStatement'
}
```

Represents `break`.
This is a leaf node (no child fields).

#### `gotoStatement`

```idl
interface GotoStatement <: Node {
  type: 'gotoStatement'
  label: Identifier
}
```

Represents `goto name` (Lua 5.2+).

#### `returnStatement`

```idl
interface ReturnStatement <: Node {
  type: 'returnStatement'
  arguments: [Expression]
}
```

Represents `return explist`.
`arguments` may be empty.

#### `ifStatement`

```idl
interface IfStatement <: Node {
  type: 'ifStatement'
  clauses: [IfClause | ElseifClause | ElseClause]
}
```

Represents a complete `if ... elseif ... else ... end` construct.
`clauses` always starts with one `ifClause`, followed by zero or more
`elseifClause` nodes, and optionally one `elseClause` at the end.

#### `whileStatement`

```idl
interface WhileStatement <: Node {
  type: 'whileStatement'
  condition: Expression
  body: [Statement]
}
```

Represents `while condition do ... end`.

#### `doStatement`

```idl
interface DoStatement <: Node {
  type: 'doStatement'
  body: [Statement]
}
```

Represents `do ... end`.

#### `repeatStatement`

```idl
interface RepeatStatement <: Node {
  type: 'repeatStatement'
  condition: Expression
  body: [Statement]
}
```

Represents `repeat ... until condition`.

#### `localStatement`

```idl
interface LocalStatement <: Node {
  type: 'localStatement'
  variables: [Identifier]
  init: [Expression]
}
```

Represents `local namelist = explist`.
`init` may be empty (a declaration without assignment).

#### `assignmentStatement`

```idl
interface AssignmentStatement <: Node {
  type: 'assignmentStatement'
  variables: [Identifier | MemberExpression | IndexExpression]
  init: [Expression]
}
```

Represents `varlist = explist`.

#### `callStatement`

```idl
interface CallStatement <: Node {
  type: 'callStatement'
  expression: CallExpression | TableCallExpression | StringCallExpression
}
```

Represents a function call used as a statement.

#### `functionDeclaration`

```idl
interface FunctionDeclaration <: Node {
  type: 'functionDeclaration'
  identifier: Identifier | MemberExpression | null
  parameters: [Identifier | VarargLiteral]
  body: [Statement]
  local: boolean
}
```

Represents both `function name(...) ... end` and
`local function name(...) ... end`.

- `identifier` is `null` for anonymous function expressions
  (`function(...) ... end`)
- `local` is `true` for `local function` declarations
- `parameters` may include a `varargLiteral` as the last element

#### `forNumericStatement`

```idl
interface ForNumericStatement <: Node {
  type: 'forNumericStatement'
  variable: Identifier
  start: Expression
  end: Expression
  step: Expression | null
  body: [Statement]
}
```

Represents `for name = start, end [, step] do ... end`.
`step` is `null` when omitted.

#### `forGenericStatement`

```idl
interface ForGenericStatement <: Node {
  type: 'forGenericStatement'
  variables: [Identifier]
  iterators: [Expression]
  body: [Statement]
}
```

Represents `for namelist in explist do ... end`.

### Clauses

#### `ifClause`

```idl
interface IfClause <: Node {
  type: 'ifClause'
  condition: Expression
  body: [Statement]
}
```

The `if condition then` branch of an `ifStatement`.

#### `elseifClause`

```idl
interface ElseifClause <: Node {
  type: 'elseifClause'
  condition: Expression
  body: [Statement]
}
```

An `elseif condition then` branch.

#### `elseClause`

```idl
interface ElseClause <: Node {
  type: 'elseClause'
  body: [Statement]
}
```

The `else` branch.

### Expressions

#### `identifier`

```idl
interface Identifier <: Node {
  type: 'identifier'
  name: string
}
```

Represents a name.
This is a leaf node (no child fields).

#### `binaryExpression`

```idl
interface BinaryExpression <: Node {
  type: 'binaryExpression'
  operator: '+' | '-' | '*' | '/' | '//' | '%' | '^' | '..'
            | '==' | '~=' | '<' | '>' | '<=' | '>='
            | '&' | '|' | '~' | '<<' | '>>'
  left: Expression
  right: Expression
}
```

Arithmetic, string concatenation, comparison, and bitwise operators.
`//` (floor division) and bitwise operators require Lua 5.3+.

#### `logicalExpression`

```idl
interface LogicalExpression <: Node {
  type: 'logicalExpression'
  operator: 'and' | 'or'
  left: Expression
  right: Expression
}
```

Kept separate from `binaryExpression` because `and`/`or` have short-circuit
evaluation semantics.

#### `unaryExpression`

```idl
interface UnaryExpression <: Node {
  type: 'unaryExpression'
  operator: 'not' | '-' | '#' | '~'
  argument: Expression
}
```

`~` (bitwise NOT) requires Lua 5.3+.

#### `memberExpression`

```idl
interface MemberExpression <: Node {
  type: 'memberExpression'
  base: Expression
  indexer: '.' | ':'
  identifier: Identifier
}
```

Represents `expr.name` or `expr:name`.

#### `indexExpression`

```idl
interface IndexExpression <: Node {
  type: 'indexExpression'
  base: Expression
  index: Expression
}
```

Represents `expr[expr]`.

#### `callExpression`

```idl
interface CallExpression <: Node {
  type: 'callExpression'
  base: Expression
  arguments: [Expression]
}
```

Represents `expr(explist)`.

#### `tableCallExpression`

```idl
interface TableCallExpression <: Node {
  type: 'tableCallExpression'
  base: Expression
  argument: TableConstructor
}
```

Represents `expr { ... }` (syntactic sugar for a single-table-argument call).

#### `stringCallExpression`

```idl
interface StringCallExpression <: Node {
  type: 'stringCallExpression'
  base: Expression
  argument: StringLiteral
}
```

Represents `expr "..."` or `expr '...'` (syntactic sugar for a
single-string-argument call).

#### `tableConstructor`

```idl
interface TableConstructor <: Node {
  type: 'tableConstructor'
  fields: [TableKey | TableKeyString | TableValue]
}
```

Represents `{ fieldlist }`.

### Literals

All literals extend unist's [Literal][unist-literal] interface.

#### `stringLiteral`

```idl
interface StringLiteral <: Literal {
  type: 'stringLiteral'
  value: string | null
  raw: string
}
```

`value` is `null` when the encoding mode does not produce decoded values.
`raw` is the original source representation including delimiters.

#### `numericLiteral`

```idl
interface NumericLiteral <: Literal {
  type: 'numericLiteral'
  value: number
  raw: string
}
```

#### `booleanLiteral`

```idl
interface BooleanLiteral <: Literal {
  type: 'booleanLiteral'
  value: boolean
  raw: string
}
```

#### `nilLiteral`

```idl
interface NilLiteral <: Literal {
  type: 'nilLiteral'
  value: null
  raw: string
}
```

#### `varargLiteral`

```idl
interface VarargLiteral <: Literal {
  type: 'varargLiteral'
  value: string
  raw: string
}
```

Represents `...`.

### Table fields

These nodes appear only inside `tableConstructor.fields`.

#### `tableKey`

```idl
interface TableKey <: Node {
  type: 'tableKey'
  key: Expression
  value: Expression
}
```

Represents `[expr] = expr`.

#### `tableKeyString`

```idl
interface TableKeyString <: Node {
  type: 'tableKeyString'
  key: Identifier
  value: Expression
}
```

Represents `name = expr`.

#### `tableValue`

```idl
interface TableValue <: Node {
  type: 'tableValue'
  value: Expression
}
```

Represents a positional value `expr` in a table constructor.

### Comments

#### `comment`

```idl
interface Comment <: Literal {
  type: 'comment'
  value: string
  raw: string
}
```

Comments are stored in `root.comments` in document order.
They are not embedded in the statement/expression tree.

`value` is the comment content (without delimiters).
`raw` is the full source text including `--` or `--[[ ]]` delimiters.

## Content model

These type unions define which nodes can appear at each structural position.

```idl
type Statement =
  LabelStatement | BreakStatement | GotoStatement | ReturnStatement |
  IfStatement | WhileStatement | DoStatement | RepeatStatement |
  LocalStatement | AssignmentStatement | CallStatement |
  FunctionDeclaration | ForNumericStatement | ForGenericStatement

type Clause =
  IfClause | ElseifClause | ElseClause

type Expression =
  Identifier | StringLiteral | NumericLiteral | BooleanLiteral |
  NilLiteral | VarargLiteral | BinaryExpression | LogicalExpression |
  UnaryExpression | MemberExpression | IndexExpression |
  CallExpression | TableCallExpression | StringCallExpression |
  TableConstructor | FunctionDeclaration

type TableField =
  TableKey | TableKeyString | TableValue
```

Note that `functionDeclaration` appears in both `Statement` and `Expression`
unions.
In statement position it has a non-null `identifier`; in expression position
(`function(...) end`) the `identifier` is `null`.

## Child-field registry

The child-field registry is the single source of truth for which fields on
each node type contain child nodes (as opposed to scalar data like `operator`
or `name`).
This registry powers `luast-util-visit` and any tooling that needs to
enumerate a node's descendants.

Each entry maps a node type to its child-bearing fields, in traversal order.
Fields marked with `[]` contain arrays of nodes; unmarked fields contain a
single node or `null`.

```js
const childFields = {
  root: ['body'], // body: Statement[]
  labelStatement: ['label'], // label: Identifier
  breakStatement: [],
  gotoStatement: ['label'], // label: Identifier
  returnStatement: ['arguments'], // arguments: Expression[]
  ifStatement: ['clauses'], // clauses: Clause[]
  ifClause: ['condition', 'body'], // condition: Expression, body: Statement[]
  elseifClause: ['condition', 'body'], // condition: Expression, body: Statement[]
  elseClause: ['body'], // body: Statement[]
  whileStatement: ['condition', 'body'], // condition: Expression, body: Statement[]
  doStatement: ['body'], // body: Statement[]
  repeatStatement: ['condition', 'body'], // condition: Expression, body: Statement[]
  localStatement: ['variables', 'init'], // variables: Identifier[], init: Expression[]
  assignmentStatement: ['variables', 'init'], // variables: Expression[], init: Expression[]
  callStatement: ['expression'], // expression: CallExpression
  functionDeclaration: ['identifier', 'parameters', 'body'],
  // identifier: Identifier | MemberExpression | null
  // parameters: (Identifier | VarargLiteral)[]
  // body: Statement[]
  forNumericStatement: ['variable', 'start', 'end', 'step', 'body'],
  // variable: Identifier
  // start: Expression, end: Expression
  // step: Expression | null
  // body: Statement[]
  forGenericStatement: ['variables', 'iterators', 'body'],
  // variables: Identifier[], iterators: Expression[]
  // body: Statement[]
  identifier: [],
  stringLiteral: [],
  numericLiteral: [],
  booleanLiteral: [],
  nilLiteral: [],
  varargLiteral: [],
  binaryExpression: ['left', 'right'], // left: Expression, right: Expression
  logicalExpression: ['left', 'right'], // left: Expression, right: Expression
  unaryExpression: ['argument'], // argument: Expression
  memberExpression: ['base', 'identifier'], // base: Expression, identifier: Identifier
  indexExpression: ['base', 'index'], // base: Expression, index: Expression
  callExpression: ['base', 'arguments'], // base: Expression, arguments: Expression[]
  tableCallExpression: ['base', 'argument'], // base: Expression, argument: TableConstructor
  stringCallExpression: ['base', 'argument'], // base: Expression, argument: StringLiteral
  tableConstructor: ['fields'], // fields: TableField[]
  tableKey: ['key', 'value'], // key: Expression, value: Expression
  tableKeyString: ['key', 'value'], // key: Identifier, value: Expression
  tableValue: ['value'], // value: Expression
  comment: []
}
```

### Field metadata

For visitor implementations, the following fields are **nullable** (may be
`null` instead of a node):

- `functionDeclaration.identifier` — `null` for anonymous functions
- `forNumericStatement.step` — `null` when step is omitted

The following fields are **always arrays** (even when empty):

- `root.body`, `root.comments`
- `returnStatement.arguments`
- `ifStatement.clauses`
- `ifClause.body`, `elseifClause.body`, `elseClause.body`
- `whileStatement.body`, `doStatement.body`, `repeatStatement.body`
- `localStatement.variables`, `localStatement.init`
- `assignmentStatement.variables`, `assignmentStatement.init`
- `functionDeclaration.parameters`, `functionDeclaration.body`
- `forNumericStatement.body`
- `forGenericStatement.variables`, `forGenericStatement.iterators`,
  `forGenericStatement.body`
- `callExpression.arguments`
- `tableConstructor.fields`

All other child-bearing fields are **single nodes** (never arrays).

## Position

luast uses unist's [Position][unist-position] and [Point][unist-point]
interfaces.

```idl
interface Position {
  start: Point
  end: Point
}

interface Point {
  line: number >= 1
  column: number >= 1
  offset: number >= 0?
}
```

- `line` is 1-indexed
- `column` is 1-indexed
- `offset` is 0-indexed and optional
- `position.end` points to the first character **after** the node

Generated nodes (not present in source) must not have a `position` field.

### Mapping from luaparse positions

| luaparse           | luast                                                   |
| ------------------ | ------------------------------------------------------- |
| `loc.start.line`   | `position.start.line` (same — already 1-based)          |
| `loc.start.column` | `position.start.column` (**add 1** — 0-based → 1-based) |
| `loc.end.line`     | `position.end.line` (same)                              |
| `loc.end.column`   | `position.end.column` (**add 1**)                       |
| `range[0]`         | `position.start.offset`                                 |
| `range[1]`         | `position.end.offset`                                   |

## Recommendations

### Scope analysis

Scope annotations (`isLocal` on identifiers, `globals` on root) are semantic
analysis results, not syntactic structure.
They should be produced by a separate utility (`luast-util-scope`) or stored
under `data.scope`, not as first-class node fields.

### Raw values

The `raw` field on literal and comment nodes preserves the original source
representation.
When constructing nodes programmatically, `raw` may be omitted.
Tooling should not depend on `raw` for semantic operations — use `value`
instead.

### Cloning

To deep-clone a luast node, use `JSON.parse(JSON.stringify(node))`.
Do not assume a `children` field exists; use the [child-field
registry](#child-field-registry) to enumerate descendants.

### Type names

Node types use camelCase: `ifStatement`, `binaryExpression`,
`tableConstructor`.
This follows the majority convention in the unist ecosystem
(`mdast`, `hast`, `xast`).

## Glossary

See the [unist glossary][unist-glossary] but note the following deviating
terms (identical to esast's deviations).

###### Child

Node X is **child** of node Y, if X is either referenced directly at a field
on node Y, or referenced in an array at a field on node Y.

###### Sibling

Node X is a **sibling** of node Y, if X and Y have the same parent (if any)
and X and Y are both referenced in an array at a field on node Y.

## References

- **unist**:
  [Universal Syntax Tree][unist].
  T. Wormer; et al.
- **esast**:
  [ECMAScript Abstract Syntax Tree format][esast].
  T. Wormer; et al.
- **Lua**:
  [The Programming Language Lua][lua].
  Lua.org, PUC-Rio.
- **JSON**:
  [The JavaScript Object Notation (JSON) Data Interchange Format][json].
  T. Bray. IETF.
- **Web IDL**:
  [Web IDL][webidl].
  C. McCormack. W3C.

<!-- Definitions -->

[unist]: https://github.com/syntax-tree/unist
[unist-node]: https://github.com/syntax-tree/unist#node
[unist-literal]: https://github.com/syntax-tree/unist#literal
[unist-position]: https://github.com/syntax-tree/unist#position
[unist-point]: https://github.com/syntax-tree/unist#point
[unist-glossary]: https://github.com/syntax-tree/unist#glossary
[unist-utilities]: https://github.com/syntax-tree/unist#list-of-utilities
[esast]: https://github.com/syntax-tree/esast
[syntax-tree]: https://github.com/syntax-tree/unist#syntax-tree
[unified]: https://github.com/unifiedjs/unified
[luaparse]: https://github.com/fstirlitz/luaparse
[lua]: https://www.lua.org
[json]: https://datatracker.ietf.org/doc/html/rfc7159
[webidl]: https://webidl.spec.whatwg.org
