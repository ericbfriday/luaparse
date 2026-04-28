import { describe, it, expect } from 'vitest'
import { visit, SKIP, REMOVE, EXIT } from '../src/index.js'
import type {
  Root,
  Identifier,
  NumericLiteral,
  AssignmentStatement,
  IfStatement,
  IfClause,
  ElseClause,
  FunctionDeclaration,
  ForNumericStatement,
  CallExpression,
  CallStatement,
  BooleanLiteral,
  StringLiteral,
  TableConstructor,
  TableKeyString,
  LuastNode,
} from 'luast'

function id(name: string): Identifier {
  return { type: 'identifier', name }
}

function num(value: number): NumericLiteral {
  return { type: 'numericLiteral', value, raw: String(value) }
}

function makeSimpleTree(): Root {
  return {
    type: 'root',
    body: [
      {
        type: 'assignmentStatement',
        variables: [id('x')],
        init: [num(1)],
      } as AssignmentStatement,
      {
        type: 'assignmentStatement',
        variables: [id('y')],
        init: [num(2)],
      } as AssignmentStatement,
    ],
  }
}

describe('visit', () => {
  it('visits all nodes in a tree', () => {
    const tree = makeSimpleTree()
    const types: string[] = []
    visit(tree, (node) => {
      types.push(node.type)
    })
    expect(types).toEqual([
      'root',
      'assignmentStatement', 'identifier', 'numericLiteral',
      'assignmentStatement', 'identifier', 'numericLiteral',
    ])
  })

  it('provides parent, field, and index to visitor', () => {
    const tree = makeSimpleTree()
    const records: Array<{ type: string; field: string | null; index: number | null }> = []
    visit(tree, (node, _parent, field, index) => {
      records.push({ type: node.type, field, index })
    })
    expect(records[0]).toEqual({ type: 'root', field: null, index: null })
    expect(records[1]).toEqual({ type: 'assignmentStatement', field: 'body', index: 0 })
    expect(records[2]).toEqual({ type: 'identifier', field: 'variables', index: 0 })
    expect(records[3]).toEqual({ type: 'numericLiteral', field: 'init', index: 0 })
  })

  it('filters by type when type string provided', () => {
    const tree = makeSimpleTree()
    const names: string[] = []
    visit(tree, 'identifier', (node) => {
      names.push((node as Identifier).name)
    })
    expect(names).toEqual(['x', 'y'])
  })

  it('handles SKIP to skip children', () => {
    const tree: Root = {
      type: 'root',
      body: [{
        type: 'ifStatement',
        clauses: [{
          type: 'ifClause',
          condition: { type: 'booleanLiteral', value: true, raw: 'true' } as BooleanLiteral,
          body: [{ type: 'breakStatement' }],
        } as IfClause],
      } as IfStatement],
    }

    const types: string[] = []
    visit(tree, (node) => {
      types.push(node.type)
      if (node.type === 'ifClause') return SKIP
    })
    expect(types).toEqual(['root', 'ifStatement', 'ifClause'])
  })

  it('handles EXIT to stop traversal', () => {
    const tree = makeSimpleTree()
    const types: string[] = []
    visit(tree, (node) => {
      types.push(node.type)
      if (node.type === 'assignmentStatement') return EXIT
    })
    expect(types).toEqual(['root', 'assignmentStatement'])
  })

  it('handles REMOVE to remove array elements', () => {
    const tree = makeSimpleTree()
    visit(tree, 'assignmentStatement', (node) => {
      const assign = node as AssignmentStatement
      if (assign.variables[0] && (assign.variables[0] as Identifier).name === 'y') {
        return REMOVE
      }
    })
    expect(tree.body).toHaveLength(1)
    expect((tree.body[0] as AssignmentStatement).variables[0]).toEqual(id('x'))
  })

  it('handles REMOVE to null out single-node fields', () => {
    const tree: Root = {
      type: 'root',
      body: [{
        type: 'functionDeclaration',
        identifier: id('foo'),
        parameters: [],
        body: [],
        local: false,
      } as FunctionDeclaration],
    }

    visit(tree, 'identifier', () => REMOVE)
    const fn = tree.body[0] as FunctionDeclaration
    expect(fn.identifier).toBeNull()
  })

  it('traverses nullable fields (null step in forNumericStatement)', () => {
    const tree: Root = {
      type: 'root',
      body: [{
        type: 'forNumericStatement',
        variable: id('i'),
        start: num(1),
        end: num(10),
        step: null,
        body: [{ type: 'breakStatement' }],
      } as ForNumericStatement],
    }

    const types: string[] = []
    visit(tree, (node) => {
      types.push(node.type)
    })
    expect(types).toEqual([
      'root', 'forNumericStatement',
      'identifier', 'numericLiteral', 'numericLiteral',
      'breakStatement',
    ])
  })

  it('traverses complex trees with nested structures', () => {
    const table: TableConstructor = {
      type: 'tableConstructor',
      fields: [{
        type: 'tableKeyString',
        key: id('name'),
        value: { type: 'stringLiteral', value: 'lua', raw: '"lua"' } as StringLiteral,
      } as TableKeyString],
    }
    const call: CallExpression = {
      type: 'callExpression',
      base: id('print'),
      arguments: [table],
    }
    const tree: Root = {
      type: 'root',
      body: [{
        type: 'callStatement',
        expression: call,
      } as CallStatement],
    }

    const types: string[] = []
    visit(tree, (node) => {
      types.push(node.type)
    })
    expect(types).toEqual([
      'root', 'callStatement', 'callExpression',
      'identifier', 'tableConstructor', 'tableKeyString',
      'identifier', 'stringLiteral',
    ])
  })

  it('handles else clause (no condition field)', () => {
    const tree: Root = {
      type: 'root',
      body: [{
        type: 'ifStatement',
        clauses: [
          {
            type: 'ifClause',
            condition: { type: 'booleanLiteral', value: true, raw: 'true' } as BooleanLiteral,
            body: [],
          } as IfClause,
          {
            type: 'elseClause',
            body: [{ type: 'breakStatement' }],
          } as ElseClause,
        ],
      } as IfStatement],
    }

    const types: string[] = []
    visit(tree, (node) => {
      types.push(node.type)
    })
    expect(types).toEqual([
      'root', 'ifStatement',
      'ifClause', 'booleanLiteral',
      'elseClause', 'breakStatement',
    ])
  })
})
