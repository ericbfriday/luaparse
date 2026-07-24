import type {LuastAnyNode} from './types.js'

function registry<T extends Record<string, readonly string[]>>(entries: T): T {
  return Object.assign(Object.create(null), entries) as T
}

export const childFields: Record<string, readonly string[]> = registry({
  root: ['body'],
  labelStatement: ['label'],
  breakStatement: [],
  gotoStatement: ['label'],
  returnStatement: ['arguments'],
  ifStatement: ['clauses'],
  ifClause: ['condition', 'body'],
  elseifClause: ['condition', 'body'],
  elseClause: ['body'],
  whileStatement: ['condition', 'body'],
  doStatement: ['body'],
  repeatStatement: ['condition', 'body'],
  localStatement: ['variables', 'init'],
  assignmentStatement: ['variables', 'init'],
  callStatement: ['expression'],
  functionDeclaration: ['identifier', 'parameters', 'body'],
  forNumericStatement: ['variable', 'start', 'end', 'step', 'body'],
  forGenericStatement: ['variables', 'iterators', 'body'],
  identifier: [],
  stringLiteral: [],
  numericLiteral: [],
  booleanLiteral: [],
  nilLiteral: [],
  varargLiteral: [],
  binaryExpression: ['left', 'right'],
  logicalExpression: ['left', 'right'],
  unaryExpression: ['argument'],
  memberExpression: ['base', 'identifier'],
  indexExpression: ['base', 'index'],
  callExpression: ['base', 'arguments'],
  tableCallExpression: ['base', 'argument'],
  stringCallExpression: ['base', 'argument'],
  tableConstructor: ['fields'],
  tableKey: ['key', 'value'],
  tableKeyString: ['key', 'value'],
  tableValue: ['value'],
  comment: []
})

export const nullableFields: Record<string, readonly string[]> = registry({
  functionDeclaration: ['identifier'],
  forNumericStatement: ['step']
})

export const arrayFields: Record<string, readonly string[]> = registry({
  root: ['body', 'comments'],
  returnStatement: ['arguments'],
  ifStatement: ['clauses'],
  ifClause: ['body'],
  elseifClause: ['body'],
  elseClause: ['body'],
  whileStatement: ['body'],
  doStatement: ['body'],
  repeatStatement: ['body'],
  localStatement: ['variables', 'init'],
  assignmentStatement: ['variables', 'init'],
  functionDeclaration: ['parameters', 'body'],
  forNumericStatement: ['body'],
  forGenericStatement: ['variables', 'iterators', 'body'],
  callExpression: ['arguments'],
  tableConstructor: ['fields']
})

export function getChildFields(node: LuastAnyNode): readonly string[] {
  return Object.hasOwn(node, 'type') && Object.hasOwn(childFields, node.type)
    ? childFields[node.type]
    : []
}

export function forEachChild(
  node: LuastAnyNode,
  callback: (
    child: LuastAnyNode,
    field: string,
    index: number | undefined
  ) => void
): void {
  const fields = getChildFields(node)
  if (fields === undefined) return

  for (const field of fields) {
    if (!Object.hasOwn(node, field)) continue
    const child = (node as unknown as Record<string, unknown>)[field]
    if (child === null || child === undefined) continue

    const isArray = isArrayField(node.type, field)

    if (isArray && Array.isArray(child)) {
      const children = child as unknown[]
      for (const [index, element] of children.entries()) {
        if (
          typeof element === 'object' &&
          element !== null &&
          Object.hasOwn(element, 'type')
        ) {
          callback(element as LuastAnyNode, field, index)
        }
      }
    } else if (typeof child === 'object' && Object.hasOwn(child, 'type')) {
      callback(child as LuastAnyNode, field, undefined)
    }
  }
}

export function isArrayField(nodeType: string, field: string): boolean {
  return (
    Object.hasOwn(arrayFields, nodeType) &&
    arrayFields[nodeType].includes(field)
  )
}

export function isNullableField(nodeType: string, field: string): boolean {
  return (
    Object.hasOwn(nullableFields, nodeType) &&
    nullableFields[nodeType].includes(field)
  )
}
