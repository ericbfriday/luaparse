# luast-util-visit

Tree visitor for [luast][] — walk Lua ASTs using the child-field registry.

## What is this?

This package provides a `visit` function for traversing luast syntax trees.
It is aware of the named child fields defined in `@friday-friday/luast` and
supports filtering by node type, plus `SKIP`, `REMOVE`, and `EXIT` control
flow actions.

## Install

```sh
npm install @friday-friday/luast-util-visit
```

## Use

```js
import {visit, SKIP, REMOVE, EXIT} from '@friday-friday/luast-util-visit'

visit(tree, (node, parent, field, index) => {
  console.log(node.type)
})

// Filter by type
visit(tree, 'identifier', (node) => {
  console.log(node.name)
})
```

## API

### `visit(tree, visitor)`

Walk the tree depth-first, calling `visitor(node, parent, field, index)` on
every node.

### `visit(tree, type, visitor)`

Walk the tree but only call `visitor` on nodes matching `type`.

### Visitor actions

- `SKIP` — do not visit children of this node
- `REMOVE` — remove the node from its parent
- `EXIT` — stop traversal immediately

### Types

- `Visitor` — `(node, parent, field, index) => VisitorAction`
- `VisitorAction` — `typeof SKIP | typeof REMOVE | typeof EXIT | void`

## Related

- [`@friday-friday/luast`](../luast) — tree specification and types
- [`@friday-friday/luast-util-scope`](../luast-util-scope) — scope analysis
- [`@friday-friday/luaparse`](../../) — Lua parser

## License

[MIT](./LICENSE)

[luast]: ../luast
