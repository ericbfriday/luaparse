import {describe, it, expect} from 'vitest'
import {unified} from 'unified'
import {is} from 'unist-util-is'
import {position} from 'unist-util-position'
import {visit} from 'luast-util-visit'
import type {Root, LuastNode} from 'luast'
import luaParse from '../src/index.js'

describe('unified-lua plugin', () => {
  it('parses Lua code via unified pipeline', () => {
    const tree = unified().use(luaParse).parse('local x = 1') as Root

    expect(tree.type).toBe('root')
    expect(tree.body).toBeInstanceOf(Array)
    expect(tree.body.length).toBe(1)
    expect(tree.body[0].type).toBe('localStatement')
  })

  it('returns root that passes unist-util-is', () => {
    const tree = unified().use(luaParse).parse('return 1') as Root

    expect(is(tree, 'root')).toBe(true)
  })

  it('has valid positions readable by unist-util-position', () => {
    const tree = unified().use(luaParse).parse('x = 1') as Root

    const pos = position(tree)
    expect(pos).toBeDefined()
    expect(pos!.start.line).toBe(1)
    expect(pos!.start.column).toBe(1)
  })

  it('includes comments', () => {
    const tree = unified().use(luaParse).parse('-- hi\nreturn 1') as Root

    expect(tree.comments).toBeDefined()
    expect(tree.comments!.length).toBe(1)
    expect(tree.comments![0].type).toBe('comment')
  })

  it('supports luaVersion option', () => {
    const tree = unified()
      .use(luaParse, {luaVersion: '5.3'})
      .parse('::label:: goto label') as Root

    expect(tree.body.length).toBe(2)
    expect(tree.body[0].type).toBe('labelStatement')
    expect(tree.body[1].type).toBe('gotoStatement')
  })

  it('tree is traversable by luast-util-visit', () => {
    const tree = unified().use(luaParse).parse('local x = 1 + 2') as Root

    const types: string[] = []
    visit(tree, (node: LuastNode) => {
      types.push(node.type)
    })

    expect(types).toContain('root')
    expect(types).toContain('localStatement')
    expect(types).toContain('identifier')
    expect(types).toContain('binaryExpression')
    expect(types).toContain('numericLiteral')
  })

  it('does not include globals or isLocal', () => {
    const tree = unified().use(luaParse).parse('x = 1') as unknown as Record<
      string,
      unknown
    >

    expect(tree.globals).toBeUndefined()
  })
})
