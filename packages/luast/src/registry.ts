import type {LuastAnyNode} from './types.js'

export const childFields: Record<string, readonly string[]> = {
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
}

export const nullableFields: Record<string, readonly string[]> = {
  functionDeclaration: ['identifier'],
  forNumericStatement: ['step']
}

export const arrayFields: Record<string, readonly string[]> = {
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
}

export function getChildFields(node: LuastAnyNode): readonly string[] {
  return childFields[node.type] ?? []
}

export function forEachChild(
  node: LuastAnyNode,
  callback: (child: LuastAnyNode, field: string, index: number | undefined) => void
): void {
  const fields = childFields[node.type]
  if (fields === undefined) return

  const nodeArrayFields = arrayFields[node.type]

  for (const field of fields) {
    const child = (node as unknown as Record<string, unknown>)[field]
    if (child === null || child === undefined) continue

    const isArray = nodeArrayFields?.includes(field)

    if (isArray && Array.isArray(child)) {
      for (let i = 0; i < child.length; i++) {
        callback(child[i] as LuastAnyNode, field, i)
      }
    } else if (typeof child === 'object' && 'type' in child) {
      callback(child as LuastAnyNode, field, undefined)
    }
  }
}

export function isArrayField(nodeType: string, field: string): boolean {
  return arrayFields[nodeType]?.includes(field) ?? false
}

export function isNullableField(nodeType: string, field: string): boolean {
  return nullableFields[nodeType]?.includes(field) ?? false
}
