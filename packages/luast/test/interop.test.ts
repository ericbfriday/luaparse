import { describe, it, expect } from 'vitest'
import { is } from 'unist-util-is'
import { position, pointStart, pointEnd } from 'unist-util-position'
import type { Root, Identifier, NumericLiteral, AssignmentStatement } from '../src/index.js'

function makeTree(): Root {
  const ident: Identifier = {
    type: 'identifier',
    name: 'x',
    position: {
      start: { line: 1, column: 1, offset: 0 },
      end: { line: 1, column: 2, offset: 1 },
    },
  }
  const num: NumericLiteral = {
    type: 'numericLiteral',
    value: 42,
    raw: '42',
    position: {
      start: { line: 1, column: 5, offset: 4 },
      end: { line: 1, column: 7, offset: 6 },
    },
  }
  const assign: AssignmentStatement = {
    type: 'assignmentStatement',
    variables: [ident],
    init: [num],
    position: {
      start: { line: 1, column: 1, offset: 0 },
      end: { line: 1, column: 7, offset: 6 },
    },
  }
  return {
    type: 'root',
    body: [assign],
    comments: [],
    position: {
      start: { line: 1, column: 1, offset: 0 },
      end: { line: 1, column: 7, offset: 6 },
    },
  }
}

describe('unist-util-is interop', () => {
  const tree = makeTree()

  it('matches root by type string', () => {
    expect(is(tree, 'root')).toBe(true)
  })

  it('does not match root as identifier', () => {
    expect(is(tree, 'identifier')).toBe(false)
  })

  it('matches with a predicate function', () => {
    expect(is(tree, (node) => node.type === 'root')).toBe(true)
  })

  it('matches child nodes', () => {
    const assign = tree.body[0]
    expect(is(assign, 'assignmentStatement')).toBe(true)
  })
})

describe('unist-util-position interop', () => {
  const tree = makeTree()

  it('reads position from root', () => {
    const pos = position(tree)
    expect(pos).toBeDefined()
    expect(pos!.start.line).toBe(1)
    expect(pos!.start.column).toBe(1)
    expect(pos!.end.column).toBe(7)
  })

  it('reads pointStart from a node', () => {
    const start = pointStart(tree.body[0])
    expect(start).toBeDefined()
    expect(start!.line).toBe(1)
    expect(start!.offset).toBe(0)
  })

  it('reads pointEnd from a node', () => {
    const end = pointEnd(tree.body[0])
    expect(end).toBeDefined()
    expect(end!.offset).toBe(6)
  })

  it('handles nodes without position', () => {
    const bare: Identifier = { type: 'identifier', name: 'y' }
    const pos = position(bare)
    expect(pos).toBeUndefined()
  })
})
