import {describe, it, expect} from 'vitest'
// @ts-expect-error -- luaparse is CJS without type declarations
import * as luaparse from 'luaparse'
import type {Root, Identifier} from 'luast'
import {analyzeScope} from '../src/index.js'

function parseTree(code: string): Root {
  return luaparse.parse(code, {ast: 'luast', luaVersion: '5.3'}) as Root
}

function parseLegacy(code: string): Record<string, unknown> {
  return luaparse.parse(code, {
    scope: true,
    luaVersion: '5.3'
  }) as Record<string, unknown>
}

describe('analyzeScope', () => {
  it('identifies global variables', () => {
    const tree = parseTree('x = 1')
    const scope = analyzeScope(tree)
    expect(scope.globals.map((g) => g.name)).toEqual(['x'])
  })

  it('identifies local variables', () => {
    const tree = parseTree('local x = 1\nreturn x')
    const scope = analyzeScope(tree)
    expect(scope.globals).toHaveLength(0)
  })

  it('handles function parameters as local', () => {
    const tree = parseTree('function foo(a, b) return a + b end')
    const scope = analyzeScope(tree)
    expect(scope.globals.map((g) => g.name)).toEqual(['foo'])
  })

  it('handles local function declaration', () => {
    const tree = parseTree('local function foo() end\nfoo()')
    const scope = analyzeScope(tree)
    expect(scope.globals).toHaveLength(0)
  })

  it('handles nested scopes', () => {
    const tree = parseTree(
      'local x = 1\ndo\n  local y = 2\n  return x + y\nend'
    )
    const scope = analyzeScope(tree)
    expect(scope.globals).toHaveLength(0)
  })

  it('detects globals inside nested scope', () => {
    const tree = parseTree('do\n  z = 1\nend')
    const scope = analyzeScope(tree)
    expect(scope.globals.map((g) => g.name)).toEqual(['z'])
  })

  it('handles for-numeric loop variable as local', () => {
    const tree = parseTree('for i = 1, 10 do print(i) end')
    const scope = analyzeScope(tree)
    const globalNames = scope.globals.map((g) => g.name)
    expect(globalNames).toContain('print')
    expect(globalNames).not.toContain('i')
  })

  it('handles for-generic loop variables as local', () => {
    const tree = parseTree('for k, v in pairs(t) do end')
    const scope = analyzeScope(tree)
    const globalNames = scope.globals.map((g) => g.name)
    expect(globalNames).toContain('pairs')
    expect(globalNames).toContain('t')
    expect(globalNames).not.toContain('k')
    expect(globalNames).not.toContain('v')
  })

  it('handles shadowing', () => {
    const tree = parseTree('x = 1\ndo\n  local x = 2\n  return x\nend')
    const scope = analyzeScope(tree)
    const globalNames = scope.globals.map((g) => g.name)
    expect(globalNames).toEqual(['x'])
  })

  it('handles while loop scope', () => {
    const tree = parseTree('while true do local x = 1 break end')
    const scope = analyzeScope(tree)
    expect(scope.globals).toHaveLength(0)
  })

  it('handles repeat-until scope', () => {
    const tree = parseTree('repeat local x = 1 until x > 0')
    const scope = analyzeScope(tree)
    expect(scope.globals).toHaveLength(0)
  })

  it('isLocal correctly identifies local vs global identifier nodes', () => {
    const tree = parseTree('local x = 1\ny = x')
    const scope = analyzeScope(tree)

    expect(scope.globals).toHaveLength(1)
    expect(scope.globals[0].name).toBe('y')
    expect(scope.isLocal(scope.globals[0])).toBe(false)
  })

  describe('comparison with luaparse scope:true', () => {
    const fixtures = [
      {name: 'simple global', code: 'x = 1'},
      {name: 'simple local', code: 'local x = 1'},
      {name: 'mixed', code: 'local x = 1\ny = x'},
      {name: 'function params', code: 'function foo(a) return a end'},
      {name: 'local function', code: 'local function bar() end\nbar()'},
      {
        name: 'nested do',
        code: 'local a = 1\ndo\n  local b = 2\n  c = a + b\nend'
      },
      {name: 'for numeric', code: 'for i = 1, 10 do print(i) end'},
      {name: 'for generic', code: 'for k, v in pairs(t) do end'},
      {name: 'while', code: 'while x do local y = 1 end'}
    ]

    for (const {name, code} of fixtures) {
      it(`globals match for: ${name}`, () => {
        const tree = parseTree(code)
        const scope = analyzeScope(tree)
        const legacy = parseLegacy(code)
        const legacyGlobals = (legacy.globals as Array<{name: string}>) || []

        const luastGlobalNames = scope.globals.map((g) => g.name).sort()
        const legacyGlobalNames = legacyGlobals.map((g) => g.name).sort()

        expect(luastGlobalNames).toEqual(legacyGlobalNames)
      })
    }
  })
})
