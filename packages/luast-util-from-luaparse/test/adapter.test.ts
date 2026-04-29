import {describe, it, expect} from 'vitest'
// @ts-expect-error -- luaparse is CJS without type declarations
import * as luaparse from '@friday-friday/luaparse'
import {visit} from '@friday-friday/luast-util-visit'
import {position as getPosition} from 'unist-util-position'
import type {Root, LuastNode} from '@friday-friday/luast'
import {fromLuaparse} from '../src/index.js'

function parse(code: string): unknown {
  return luaparse.parse(code, {
    locations: true,
    ranges: true,
    comments: true,
    scope: true,
    luaVersion: '5.3'
  })
}

function convert(code: string): Root {
  return fromLuaparse(parse(code))
}

describe('fromLuaparse', () => {
  describe('root node', () => {
    it('converts Chunk to root', () => {
      const tree = convert('local x = 1')
      expect(tree.type).toBe('root')
      expect(tree.body).toBeInstanceOf(Array)
      expect(tree.comments).toBeInstanceOf(Array)
    })

    it('strips globals from root', () => {
      const tree = convert('x = 1') as Record<string, unknown>
      expect(tree.globals).toBeUndefined()
    })
  })

  describe('statements', () => {
    it('converts AssignmentStatement', () => {
      const tree = convert('x = 1')
      expect(tree.body[0].type).toBe('assignmentStatement')
    })

    it('converts LocalStatement', () => {
      const tree = convert('local x = 1')
      expect(tree.body[0].type).toBe('localStatement')
    })

    it('converts LocalStatement without init', () => {
      const tree = convert('local x')
      const stmt = tree.body[0] as Record<string, unknown>
      expect(stmt.type).toBe('localStatement')
      expect(stmt.init).toEqual([])
    })

    it('converts IfStatement with clauses', () => {
      const tree = convert(
        'if true then x = 1 elseif false then x = 2 else x = 3 end'
      )
      const ifStmt = tree.body[0] as Record<string, unknown>
      expect(ifStmt.type).toBe('ifStatement')
      const clauses = ifStmt.clauses as Array<Record<string, unknown>>
      expect(clauses).toHaveLength(3)
      expect(clauses[0].type).toBe('ifClause')
      expect(clauses[1].type).toBe('elseifClause')
      expect(clauses[2].type).toBe('elseClause')
    })

    it('converts WhileStatement', () => {
      const tree = convert('while true do break end')
      expect(tree.body[0].type).toBe('whileStatement')
    })

    it('converts DoStatement', () => {
      const tree = convert('do end')
      expect(tree.body[0].type).toBe('doStatement')
    })

    it('converts RepeatStatement', () => {
      const tree = convert('repeat until true')
      expect(tree.body[0].type).toBe('repeatStatement')
    })

    it('converts ReturnStatement', () => {
      const tree = convert('return 1, 2')
      expect(tree.body[0].type).toBe('returnStatement')
    })

    it('converts BreakStatement', () => {
      const tree = convert('while true do break end')
      const whileStmt = tree.body[0] as Record<string, unknown>
      const body = whileStmt.body as Array<Record<string, unknown>>
      expect(body[0].type).toBe('breakStatement')
    })

    it('converts GotoStatement', () => {
      const tree = convert('goto done ::done::')
      expect(tree.body[0].type).toBe('gotoStatement')
    })

    it('converts LabelStatement', () => {
      const tree = convert('::done::')
      expect(tree.body[0].type).toBe('labelStatement')
    })

    it('converts CallStatement', () => {
      const tree = convert('print("hello")')
      expect(tree.body[0].type).toBe('callStatement')
    })

    it('converts ForNumericStatement', () => {
      const tree = convert('for i = 1, 10 do end')
      const forStmt = tree.body[0] as Record<string, unknown>
      expect(forStmt.type).toBe('forNumericStatement')
      expect(forStmt.step).toBeNull()
    })

    it('converts ForNumericStatement with step', () => {
      const tree = convert('for i = 1, 10, 2 do end')
      const forStmt = tree.body[0] as Record<string, unknown>
      expect(forStmt.step).not.toBeNull()
    })

    it('converts ForGenericStatement', () => {
      const tree = convert('for k, v in pairs(t) do end')
      expect(tree.body[0].type).toBe('forGenericStatement')
    })
  })

  describe('function declarations', () => {
    it('converts named function with local = false', () => {
      const tree = convert('function foo() end')
      const function_ = tree.body[0] as Record<string, unknown>
      expect(function_.type).toBe('functionDeclaration')
      expect(function_.local).toBe(false)
      expect(function_.identifier).not.toBeNull()
      expect(function_.isLocal).toBeUndefined()
    })

    it('converts local function with local = true', () => {
      const tree = convert('local function foo() end')
      const function_ = tree.body[0] as Record<string, unknown>
      expect(function_.local).toBe(true)
    })

    it('converts anonymous function expression with null identifier', () => {
      const tree = convert('local f = function() end')
      const localStmt = tree.body[0] as Record<string, unknown>
      const init = localStmt.init as Array<Record<string, unknown>>
      const function_ = init[0]
      expect(function_.type).toBe('functionDeclaration')
      expect(function_.identifier).toBeNull()
    })

    it('converts function with parameters', () => {
      const tree = convert('function foo(a, b, ...) end')
      const function_ = tree.body[0] as Record<string, unknown>
      const parameters = function_.parameters as Array<Record<string, unknown>>
      expect(parameters).toHaveLength(3)
      expect(parameters[0].type).toBe('identifier')
      expect(parameters[2].type).toBe('varargLiteral')
    })
  })

  describe('expressions', () => {
    it('converts Identifier (strips isLocal)', () => {
      const tree = convert('local x = 1; return x')
      const returnValueStmt = tree.body[1] as Record<string, unknown>
      const arguments_ = returnValueStmt.arguments as Array<
        Record<string, unknown>
      >
      const ident = arguments_[0]
      expect(ident.type).toBe('identifier')
      expect(ident.name).toBe('x')
      expect(ident.isLocal).toBeUndefined()
    })

    it('converts BinaryExpression', () => {
      const tree = convert('return 1 + 2')
      const returnValueStmt = tree.body[0] as Record<string, unknown>
      const arguments_ = returnValueStmt.arguments as Array<
        Record<string, unknown>
      >
      expect(arguments_[0].type).toBe('binaryExpression')
      expect(arguments_[0].operator).toBe('+')
    })

    it('converts LogicalExpression', () => {
      const tree = convert('return true and false')
      const returnValueStmt = tree.body[0] as Record<string, unknown>
      const arguments_ = returnValueStmt.arguments as Array<
        Record<string, unknown>
      >
      expect(arguments_[0].type).toBe('logicalExpression')
      expect(arguments_[0].operator).toBe('and')
    })

    it('converts UnaryExpression', () => {
      const tree = convert('return not true')
      const returnValueStmt = tree.body[0] as Record<string, unknown>
      const arguments_ = returnValueStmt.arguments as Array<
        Record<string, unknown>
      >
      expect(arguments_[0].type).toBe('unaryExpression')
    })

    it('converts MemberExpression', () => {
      const tree = convert('return a.b')
      const returnValueStmt = tree.body[0] as Record<string, unknown>
      const arguments_ = returnValueStmt.arguments as Array<
        Record<string, unknown>
      >
      const member = arguments_[0]
      expect(member.type).toBe('memberExpression')
      expect(member.indexer).toBe('.')
    })

    it('converts IndexExpression', () => {
      const tree = convert('return a[1]')
      const returnValueStmt = tree.body[0] as Record<string, unknown>
      const arguments_ = returnValueStmt.arguments as Array<
        Record<string, unknown>
      >
      expect(arguments_[0].type).toBe('indexExpression')
    })

    it('converts CallExpression', () => {
      const tree = convert('print("hi")')
      const callStmt = tree.body[0] as Record<string, unknown>
      const expr = callStmt.expression as Record<string, unknown>
      expect(expr.type).toBe('callExpression')
    })

    it('converts TableCallExpression without redundant arguments', () => {
      const tree = convert('foo{1, 2}')
      const callStmt = tree.body[0] as Record<string, unknown>
      const expr = callStmt.expression as Record<string, unknown>
      expect(expr.type).toBe('tableCallExpression')
      expect(expr.argument).toBeDefined()
      expect(expr.arguments).toBeUndefined()
    })

    it('converts StringCallExpression', () => {
      const tree = convert('require "mod"')
      const callStmt = tree.body[0] as Record<string, unknown>
      const expr = callStmt.expression as Record<string, unknown>
      expect(expr.type).toBe('stringCallExpression')
      expect(expr.argument).toBeDefined()
    })

    it('converts TableConstructorExpression to tableConstructor', () => {
      const tree = convert('return {}')
      const returnValueStmt = tree.body[0] as Record<string, unknown>
      const arguments_ = returnValueStmt.arguments as Array<
        Record<string, unknown>
      >
      expect(arguments_[0].type).toBe('tableConstructor')
    })
  })

  describe('table fields', () => {
    it('converts TableKey', () => {
      const tree = convert('return {[1] = "a"}')
      const returnValueStmt = tree.body[0] as Record<string, unknown>
      const arguments_ = returnValueStmt.arguments as Array<
        Record<string, unknown>
      >
      const table = arguments_[0]
      const fields = table.fields as Array<Record<string, unknown>>
      expect(fields[0].type).toBe('tableKey')
    })

    it('converts TableKeyString', () => {
      const tree = convert('return {x = 1}')
      const returnValueStmt = tree.body[0] as Record<string, unknown>
      const arguments_ = returnValueStmt.arguments as Array<
        Record<string, unknown>
      >
      const table = arguments_[0]
      const fields = table.fields as Array<Record<string, unknown>>
      expect(fields[0].type).toBe('tableKeyString')
    })

    it('converts TableValue', () => {
      const tree = convert('return {1, 2}')
      const returnValueStmt = tree.body[0] as Record<string, unknown>
      const arguments_ = returnValueStmt.arguments as Array<
        Record<string, unknown>
      >
      const table = arguments_[0]
      const fields = table.fields as Array<Record<string, unknown>>
      expect(fields[0].type).toBe('tableValue')
    })
  })

  describe('literals', () => {
    it('converts StringLiteral with raw', () => {
      const tree = convert('return "hello"')
      const returnValueStmt = tree.body[0] as Record<string, unknown>
      const arguments_ = returnValueStmt.arguments as Array<
        Record<string, unknown>
      >
      const lit = arguments_[0]
      expect(lit.type).toBe('stringLiteral')
      expect(lit.raw).toBe('"hello"')
    })

    it('converts NumericLiteral', () => {
      const tree = convert('return 42')
      const returnValueStmt = tree.body[0] as Record<string, unknown>
      const arguments_ = returnValueStmt.arguments as Array<
        Record<string, unknown>
      >
      expect(arguments_[0].type).toBe('numericLiteral')
      expect(arguments_[0].value).toBe(42)
    })

    it('converts BooleanLiteral', () => {
      const tree = convert('return true')
      const returnValueStmt = tree.body[0] as Record<string, unknown>
      const arguments_ = returnValueStmt.arguments as Array<
        Record<string, unknown>
      >
      expect(arguments_[0].type).toBe('booleanLiteral')
      expect(arguments_[0].value).toBe(true)
    })

    it('converts NilLiteral', () => {
      const tree = convert('return nil')
      const returnValueStmt = tree.body[0] as Record<string, unknown>
      const arguments_ = returnValueStmt.arguments as Array<
        Record<string, unknown>
      >
      expect(arguments_[0].type).toBe('nilLiteral')
      expect(arguments_[0].value).toBeNull()
    })

    it('converts VarargLiteral', () => {
      const tree = convert('function foo(...) return ... end')
      const function_ = tree.body[0] as Record<string, unknown>
      const body = function_.body as Array<Record<string, unknown>>
      const returnValueStmt = body[0]
      const arguments_ = returnValueStmt.arguments as Array<
        Record<string, unknown>
      >
      expect(arguments_[0].type).toBe('varargLiteral')
    })
  })

  describe('comments', () => {
    it('converts comments to root.comments', () => {
      const tree = convert('-- this is a comment\nlocal x = 1')
      expect(tree.comments).toBeDefined()
      expect(tree.comments!.length).toBeGreaterThan(0)
      expect(tree.comments![0].type).toBe('comment')
      expect(tree.comments![0].value).toBe(' this is a comment')
    })

    it('converts block comments', () => {
      const tree = convert('--[[ block comment ]]\nlocal x = 1')
      expect(tree.comments![0].type).toBe('comment')
      expect(tree.comments![0].raw).toContain('--[[')
    })
  })

  describe('position conversion', () => {
    it('converts loc columns from 0-based to 1-based', () => {
      const tree = convert('x = 1')
      const pos = getPosition(tree)
      expect(pos).toBeDefined()
      expect(pos!.start.column).toBe(1)
    })

    it('includes offset from range', () => {
      const tree = convert('x = 1')
      const pos = getPosition(tree)
      expect(pos!.start.offset).toBe(0)
    })

    it('converts positions on child nodes', () => {
      const tree = convert('x = 1')
      const assign = tree.body[0]
      const pos = getPosition(assign)
      expect(pos).toBeDefined()
      expect(pos!.start.line).toBe(1)
      expect(pos!.start.column).toBeGreaterThanOrEqual(1)
    })

    it('handles multiline code positions', () => {
      const tree = convert('x = 1\ny = 2')
      expect(tree.body).toHaveLength(2)
      const secondAssign = tree.body[1]
      const pos = getPosition(secondAssign)
      expect(pos!.start.line).toBe(2)
    })
  })

  describe('visitor traversal of converted trees', () => {
    it('visit reaches all nodes in a converted tree', () => {
      const tree = convert('local x = 1 + 2')
      const types: string[] = []
      visit(tree, (node) => {
        types.push(node.type)
      })
      expect(types).toContain('root')
      expect(types).toContain('localStatement')
      expect(types).toContain('identifier')
      expect(types).toContain('binaryExpression')
      expect(types).toContain('numericLiteral')
    })
  })
})
