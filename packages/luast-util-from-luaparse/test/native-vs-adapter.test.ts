import {describe, it, expect} from 'vitest'
// @ts-expect-error -- luaparse is CJS without type declarations
import * as luaparse from '@friday-friday/luaparse'
import type {Root} from '@friday-friday/luast'
import {fromLuaparse} from '../src/index.js'

function parseNative(code: string, version = '5.3'): Root {
  return luaparse.parse(code, {
    ast: 'luast',
    luaVersion: version
  }) as Root
}

function parseViaAdapter(code: string, version = '5.3'): Root {
  const legacy = luaparse.parse(code, {
    locations: true,
    ranges: true,
    comments: true,
    scope: true,
    luaVersion: version
  })
  return fromLuaparse(legacy)
}

function stripUndefined(object: unknown): unknown {
  return JSON.parse(JSON.stringify(object))
}

const fixtures = [
  {name: 'assignment', code: 'x = 1'},
  {name: 'local', code: 'local x = 1'},
  {name: 'local without init', code: 'local x'},
  {name: 'multiple assignment', code: 'x, y = 1, 2'},
  {
    name: 'if/elseif/else',
    code: 'if true then x = 1 elseif false then x = 2 else x = 3 end'
  },
  {name: 'while', code: 'while true do break end'},
  {name: 'repeat', code: 'repeat x = 1 until true'},
  {name: 'do', code: 'do end'},
  {name: 'return', code: 'return 1, 2, 3'},
  {name: 'return empty', code: 'return'},
  {name: 'for numeric', code: 'for i = 1, 10 do end'},
  {name: 'for numeric with step', code: 'for i = 1, 10, 2 do end'},
  {name: 'for generic', code: 'for k, v in pairs(t) do end'},
  {name: 'function named', code: 'function foo(a, b) return a end'},
  {name: 'function local', code: 'local function bar() end'},
  {name: 'function anonymous', code: 'local f = function(x) return x end'},
  {name: 'function vararg', code: 'function foo(...) return ... end'},
  {name: 'function method', code: 'function a:b() end'},
  {name: 'call expression', code: 'print("hello")'},
  {name: 'table call', code: 'foo{1, 2}'},
  {name: 'string call', code: 'require "mod"'},
  {name: 'binary expression', code: 'return 1 + 2 * 3'},
  {name: 'logical expression', code: 'return true and false or nil'},
  {name: 'unary expression', code: 'return not true'},
  {name: 'unary neg', code: 'return -x'},
  {name: 'unary len', code: 'return #t'},
  {name: 'member expression', code: 'return a.b.c'},
  {name: 'method call', code: 'a:b()'},
  {name: 'index expression', code: 'return a[1]'},
  {name: 'table constructor empty', code: 'return {}'},
  {name: 'table constructor values', code: 'return {1, 2, 3}'},
  {name: 'table constructor keys', code: 'return {x = 1, [2] = "b"}'},
  {name: 'string literal', code: 'return "hello"'},
  {name: 'string literal single', code: "return 'world'"},
  {name: 'numeric literal', code: 'return 42'},
  {name: 'numeric hex', code: 'return 0xFF'},
  {name: 'boolean true', code: 'return true'},
  {name: 'boolean false', code: 'return false'},
  {name: 'nil', code: 'return nil'},
  {name: 'comment', code: '-- comment\nreturn 1'},
  {name: 'block comment', code: '--[[ block ]]\nreturn 1'},
  {name: 'label and goto', code: '::start:: goto start'},
  {name: 'nested functions', code: 'function a() function b() end end'},
  {name: 'chained member', code: 'return a.b.c.d'},
  {
    name: 'complex',
    code: 'local function foo(x, y)\n  if x > y then\n    return x\n  else\n    return y\n  end\nend'
  },
  {name: 'multiline', code: 'x = 1\ny = 2\nz = x + y\nreturn z'}
]

describe('native emission matches adapter output', () => {
  for (const {name, code} of fixtures) {
    it(`fixture: ${name}`, () => {
      const native = stripUndefined(parseNative(code))
      const adapted = stripUndefined(parseViaAdapter(code))
      expect(native).toEqual(adapted)
    })
  }
})
