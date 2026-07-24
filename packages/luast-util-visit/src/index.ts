import {
  type LuastAnyNode,
  type LuastNode,
  getChildFields,
  isArrayField
} from '@friday-friday/luast'

/* eslint-disable max-depth, max-params */

export const SKIP: unique symbol = Symbol('skip')
export const REMOVE: unique symbol = Symbol('remove')
export const EXIT: unique symbol = Symbol('exit')

export type VisitorAction = typeof SKIP | typeof REMOVE | typeof EXIT | void

export type Visitor = (
  node: LuastNode,
  parent: LuastNode | undefined,
  field: string | undefined,
  index: number | undefined
) => VisitorAction

export function visit(tree: LuastNode, visitor: Visitor): void
export function visit(tree: LuastNode, type: string, visitor: Visitor): void
// eslint-disable-next-line complexity
export function visit(
  tree: LuastNode,
  visitorOrType: Visitor | string,
  maybeVisitor?: Visitor
): void {
  let typeFilter: string | undefined
  let visitor: Visitor

  if (typeof visitorOrType === 'string') {
    typeFilter = visitorOrType
    visitor = maybeVisitor!
  } else {
    visitor = visitorOrType
  }

  type Frame = {
    node: LuastNode
    parent: LuastNode | undefined
    field: string | undefined
    index: number | undefined
    owner: Frame | undefined
    entered: boolean
    fields: readonly string[]
    fieldIndex: number
    arrayIndex: number
  }

  const active = new WeakSet()
  const stack: Frame[] = [frame(tree)]

  while (stack.length > 0) {
    const current = stack.at(-1)!
    const {node} = current

    if (!current.entered) {
      if (
        typeof node !== 'object' ||
        node === null ||
        !Object.hasOwn(node, 'type') ||
        typeof node.type !== 'string'
      ) {
        stack.pop()
        continue
      }

      if (active.has(node)) {
        throw new Error('Cyclic AST')
      }

      active.add(node)
      current.entered = true

      if (typeFilter === undefined || node.type === typeFilter) {
        const action = visitor(
          node,
          current.parent,
          current.field,
          current.index
        )
        if (action === EXIT) return
        if (action === REMOVE) {
          if (current.parent && current.field && current.index !== undefined) {
            const siblings = (
              current.parent as unknown as Record<string, unknown>
            )[current.field] as LuastNode[]
            siblings.splice(current.index, 1)
            if (current.owner) current.owner.arrayIndex--
          } else if (current.parent && current.field) {
            ;(current.parent as unknown as Record<string, unknown>)[
              current.field
            ] = null
          }

          active.delete(node)
          stack.pop()
          continue
        }

        if (action === SKIP) {
          active.delete(node)
          stack.pop()
          continue
        }
      }

      current.fields = getChildFields(node as LuastAnyNode)
    }

    const childField = current.fields[current.fieldIndex]
    if (childField === undefined) {
      active.delete(node)
      stack.pop()
      continue
    }

    if (!Object.hasOwn(node, childField)) {
      current.fieldIndex++
      current.arrayIndex = 0
      continue
    }

    const child = (node as unknown as Record<string, unknown>)[childField]
    if (isArrayField(node.type, childField) && Array.isArray(child)) {
      if (current.arrayIndex < child.length) {
        const index = current.arrayIndex++
        stack.push(
          frame(child[index] as LuastNode, node, childField, index, current)
        )
      } else {
        current.fieldIndex++
        current.arrayIndex = 0
      }
    } else {
      current.fieldIndex++
      current.arrayIndex = 0
      if (
        typeof child === 'object' &&
        child !== null &&
        Object.hasOwn(child, 'type')
      ) {
        stack.push(frame(child as LuastNode, node, childField))
      }
    }
  }

  function frame(
    node: LuastNode,
    parent?: LuastNode,
    field?: string,
    index?: number,
    owner?: Frame
  ): Frame {
    return {
      node,
      parent,
      field,
      index,
      owner,
      entered: false,
      fields: [],
      fieldIndex: 0,
      arrayIndex: 0
    }
  }
}

/* eslint-enable max-depth, max-params */
