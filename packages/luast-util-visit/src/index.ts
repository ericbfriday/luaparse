import {
  type LuastNode,
  childFields,
  arrayFields
} from '@friday-friday/luast'

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

  walk(tree, undefined, undefined, undefined)

  function walk(
    node: LuastNode,
    parent: LuastNode | undefined,
    field: string | undefined,
    index: number | undefined
  ): VisitorAction {
    if (typeFilter === undefined || node.type === typeFilter) {
      const action = visitor(node, parent, field, index)
      if (action === EXIT || action === REMOVE || action === SKIP) {
        return action
      }
    }

    const fields = childFields[node.type]
    if (fields === undefined) return undefined

    const nodeArrayFields = arrayFields[node.type]

    for (const childField of fields) {
      const child = (node as unknown as Record<string, unknown>)[childField]
      if (child === null || child === undefined) continue

      const isArray = nodeArrayFields?.includes(childField)

      if (isArray && Array.isArray(child)) {
        for (let i = 0; i < child.length; i++) {
          const element = child[i] as LuastNode
          const action = walk(element, node, childField, i)

          if (action === REMOVE) {
            child.splice(i, 1)
            i--
          } else if (action === EXIT) {
            return EXIT
          }
        }
      } else if (!isArray && typeof child === 'object' && 'type' in child) {
        const action = walk(child as LuastNode, node, childField, undefined)
        if (action === REMOVE) {
          ;(node as unknown as Record<string, unknown>)[childField] = null
        } else if (action === EXIT) {
          return EXIT
        }
      }
    }

    return undefined
  }
}
