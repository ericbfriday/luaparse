import {
  type Root,
  type LuastAnyNode,
  getChildFields,
  isArrayField
} from '@friday-friday/luast'

type LegacyNode = Record<string, unknown>
type Target = Record<string, unknown> | unknown[]
type Task =
  | {
      kind: 'convert'
      node: LegacyNode
      target: Target
      key: string | number
    }
  | {kind: 'leave'; node: LegacyNode}

const typeMap: Record<string, string> = {
  Chunk: 'root',
  LabelStatement: 'labelStatement',
  BreakStatement: 'breakStatement',
  GotoStatement: 'gotoStatement',
  ReturnStatement: 'returnStatement',
  IfStatement: 'ifStatement',
  IfClause: 'ifClause',
  ElseifClause: 'elseifClause',
  ElseClause: 'elseClause',
  WhileStatement: 'whileStatement',
  DoStatement: 'doStatement',
  RepeatStatement: 'repeatStatement',
  LocalStatement: 'localStatement',
  AssignmentStatement: 'assignmentStatement',
  CallStatement: 'callStatement',
  FunctionDeclaration: 'functionDeclaration',
  ForNumericStatement: 'forNumericStatement',
  ForGenericStatement: 'forGenericStatement',
  Identifier: 'identifier',
  StringLiteral: 'stringLiteral',
  NumericLiteral: 'numericLiteral',
  BooleanLiteral: 'booleanLiteral',
  NilLiteral: 'nilLiteral',
  VarargLiteral: 'varargLiteral',
  BinaryExpression: 'binaryExpression',
  LogicalExpression: 'logicalExpression',
  UnaryExpression: 'unaryExpression',
  MemberExpression: 'memberExpression',
  IndexExpression: 'indexExpression',
  CallExpression: 'callExpression',
  TableCallExpression: 'tableCallExpression',
  StringCallExpression: 'stringCallExpression',
  TableConstructorExpression: 'tableConstructor',
  TableKey: 'tableKey',
  TableKeyString: 'tableKeyString',
  TableValue: 'tableValue',
  Comment: 'comment'
}
Object.setPrototypeOf(typeMap, null)

const scalarFields = new Set([
  'operator',
  'name',
  'indexer',
  'raw',
  'value',
  'local'
])

// eslint-disable-next-line complexity
export function fromLuaparse(legacy: unknown): Root {
  const root: Record<string, unknown> = {}
  const active = new WeakSet()
  const tasks: Task[] = [
    {
      kind: 'convert',
      node: legacy as LegacyNode,
      target: root,
      key: 'value'
    }
  ]

  while (tasks.length > 0) {
    const task = tasks.pop()!
    if (task.kind === 'leave') {
      active.delete(task.node)
      continue
    }

    const {node} = task
    if (typeof node !== 'object' || node === null) {
      throw new TypeError('Expected a luaparse node object')
    }

    if (active.has(node)) {
      throw new Error('Cyclic luaparse AST')
    }

    const legacyType = Object.hasOwn(node, 'type')
      ? (node.type as string)
      : undefined
    const luastType =
      typeof legacyType === 'string' && Object.hasOwn(typeMap, legacyType)
        ? typeMap[legacyType]
        : undefined
    if (luastType === undefined) {
      throw new Error(`Unknown luaparse node type: ${legacyType}`)
    }

    active.add(node)
    const result: Record<string, unknown> = {type: luastType}
    if (Array.isArray(task.target)) {
      task.target[task.key as number] = result
    } else {
      task.target[task.key as string] = result
    }

    convertPosition(node, result)

    for (const key of scalarFields) {
      if (Object.hasOwn(node, key) && !Object.hasOwn(result, key)) {
        result[key] = node[key]
      }
    }

    if (legacyType === 'FunctionDeclaration') {
      result.local = Object.hasOwn(node, 'isLocal') && node.isLocal === true
    }

    const children: Task[] = []
    for (const field of getChildFields(result as LuastAnyNode)) {
      const legacyValue = Object.hasOwn(node, field) ? node[field] : undefined

      if (legacyValue === null || legacyValue === undefined) {
        result[field] = null
      } else if (isArrayField(luastType, field) && Array.isArray(legacyValue)) {
        const converted: unknown[] = Array.from({length: legacyValue.length})
        result[field] = converted
        for (const [index, child] of (legacyValue as unknown[]).entries()) {
          children.push({
            kind: 'convert',
            node: child as LegacyNode,
            target: converted,
            key: index
          })
        }
      } else if (
        !isArrayField(luastType, field) &&
        typeof legacyValue === 'object'
      ) {
        children.push({
          kind: 'convert',
          node: legacyValue as LegacyNode,
          target: result,
          key: field
        })
      }
    }

    if (
      luastType === 'root' &&
      Object.hasOwn(node, 'comments') &&
      Array.isArray(node.comments)
    ) {
      const legacyComments = node.comments as unknown[]
      const comments: unknown[] = Array.from({length: legacyComments.length})
      result.comments = comments
      for (const [index, comment] of legacyComments.entries()) {
        children.push({
          kind: 'convert',
          node: comment as LegacyNode,
          target: comments,
          key: index
        })
      }
    }

    tasks.push({kind: 'leave', node})
    for (let index = children.length - 1; index >= 0; index--) {
      tasks.push(children[index])
    }
  }

  return root.value as Root
}

function convertPosition(
  node: LegacyNode,
  result: Record<string, unknown>
): void {
  const loc = (Object.hasOwn(node, 'loc') ? node.loc : undefined) as
    | {
        start: {line: number; column: number}
        end: {line: number; column: number}
      }
    | undefined
  const range = (Object.hasOwn(node, 'range') ? node.range : undefined) as
    | [number, number]
    | undefined

  if (loc === undefined) return

  const position: Record<string, unknown> = {
    start: {
      line: loc.start.line,
      column: loc.start.column + 1,
      ...(range === undefined ? {} : {offset: range[0]})
    },
    end: {
      line: loc.end.line,
      column: loc.end.column + 1,
      ...(range === undefined ? {} : {offset: range[1]})
    }
  }

  result.position = position
}
