import {describe, it, expect} from 'vitest'
import {
  childFields,
  nullableFields,
  arrayFields,
  getChildFields,
  forEachChild,
  isArrayField,
  isNullableField
} from '../src/index.js'

const allTypes = [
  'root',
  'labelStatement',
  'breakStatement',
  'gotoStatement',
  'returnStatement',
  'ifStatement',
  'ifClause',
  'elseifClause',
  'elseClause',
  'whileStatement',
  'doStatement',
  'repeatStatement',
  'localStatement',
  'assignmentStatement',
  'callStatement',
  'functionDeclaration',
  'forNumericStatement',
  'forGenericStatement',
  'identifier',
  'stringLiteral',
  'numericLiteral',
  'booleanLiteral',
  'nilLiteral',
  'varargLiteral',
  'binaryExpression',
  'logicalExpression',
  'unaryExpression',
  'memberExpression',
  'indexExpression',
  'callExpression',
  'tableCallExpression',
  'stringCallExpression',
  'tableConstructor',
  'tableKey',
  'tableKeyString',
  'tableValue',
  'comment'
]

describe('childFields registry', () => {
  it('covers all node types', () => {
    for (const type of allTypes) {
      expect(childFields).toHaveProperty(type)
    }
  })

  it('has no extra types beyond the spec', () => {
    for (const type of Object.keys(childFields)) {
      expect(allTypes).toContain(type)
    }
  })

  it('leaf nodes have empty field arrays', () => {
    const leaves = [
      'breakStatement',
      'identifier',
      'stringLiteral',
      'numericLiteral',
      'booleanLiteral',
      'nilLiteral',
      'varargLiteral',
      'comment'
    ]
    for (const type of leaves) {
      expect(childFields[type]).toEqual([])
    }
  })
})

describe('nullableFields', () => {
  it('lists functionDeclaration.identifier', () => {
    expect(nullableFields.functionDeclaration).toContain('identifier')
  })

  it('lists forNumericStatement.step', () => {
    expect(nullableFields.forNumericStatement).toContain('step')
  })
})

describe('arrayFields', () => {
  it('lists root.body and root.comments', () => {
    expect(arrayFields.root).toContain('body')
    expect(arrayFields.root).toContain('comments')
  })

  it('lists all body fields that are arrays', () => {
    const typesWithBody = [
      'ifClause',
      'elseifClause',
      'elseClause',
      'whileStatement',
      'doStatement',
      'repeatStatement',
      'functionDeclaration',
      'forNumericStatement',
      'forGenericStatement'
    ]
    for (const type of typesWithBody) {
      expect(arrayFields[type]).toContain('body')
    }
  })
})

describe('getChildFields', () => {
  it('returns fields for known types', () => {
    expect(getChildFields({type: 'root'})).toEqual(['body'])
  })

  it('returns empty array for unknown types', () => {
    expect(getChildFields({type: 'unknownNode'})).toEqual([])
  })
})

describe('forEachChild', () => {
  it('iterates array, single-node, and leaf node children correctly', () => {
    const arrayVisits: Array<[string, string, number | undefined]> = []
    forEachChild(
      {
        type: 'callExpression',
        base: {type: 'identifier', name: 'fn'},
        arguments: [
          {type: 'numericLiteral', value: 1, raw: '1'},
          {type: 'stringLiteral', value: 'x', raw: '"x"'}
        ]
      },
      (child, field, index) => {
        arrayVisits.push([child.type, field, index])
      }
    )

    expect(arrayVisits).toEqual([
      ['identifier', 'base', undefined],
      ['numericLiteral', 'arguments', 0],
      ['stringLiteral', 'arguments', 1]
    ])

    const singleVisits: Array<[string, string, number | undefined]> = []
    forEachChild(
      {
        type: 'binaryExpression',
        operator: '+',
        left: {type: 'identifier', name: 'a'},
        right: {type: 'identifier', name: 'b'}
      },
      (child, field, index) => {
        singleVisits.push([child.type, field, index])
      }
    )

    expect(singleVisits).toEqual([
      ['identifier', 'left', undefined],
      ['identifier', 'right', undefined]
    ])

    const leafVisits: Array<[string, string, number | undefined]> = []
    forEachChild({type: 'identifier', name: 'leaf'}, (child, field, index) => {
      leafVisits.push([child.type, field, index])
    })

    expect(leafVisits).toEqual([])
  })
})

describe('isArrayField', () => {
  it('returns true for array fields', () => {
    expect(isArrayField('root', 'body')).toBe(true)
    expect(isArrayField('callExpression', 'arguments')).toBe(true)
  })

  it('returns false for non-array fields', () => {
    expect(isArrayField('whileStatement', 'condition')).toBe(false)
    expect(isArrayField('callExpression', 'base')).toBe(false)
  })
})

describe('isNullableField', () => {
  it('returns true for nullable fields', () => {
    expect(isNullableField('functionDeclaration', 'identifier')).toBe(true)
    expect(isNullableField('forNumericStatement', 'step')).toBe(true)
  })

  it('returns false for non-nullable fields', () => {
    expect(isNullableField('functionDeclaration', 'body')).toBe(false)
    expect(isNullableField('whileStatement', 'condition')).toBe(false)
  })
})
