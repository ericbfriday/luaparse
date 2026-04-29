import {
  type Root,
  type LuastNode,
  type Comment,
  childFields,
  arrayFields
} from '@friday-friday/luast'

type LegacyNode = Record<string, unknown>

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

const scalarFields = new Set([
  'operator',
  'name',
  'indexer',
  'raw',
  'value',
  'local'
])

export function fromLuaparse(legacy: unknown): Root {
  return convertNode(legacy as LegacyNode) as Root
}

function convertNode(node: LegacyNode): LuastNode {
  const legacyType = node.type as string
  const luastType = typeMap[legacyType]
  if (luastType === undefined) {
    throw new Error(`Unknown luaparse node type: ${legacyType}`)
  }

  const result: Record<string, unknown> = {type: luastType}

  convertPosition(node, result)

  const fields = childFields[luastType]
  if (fields !== undefined) {
    const nodeArrayFields = arrayFields[luastType]

    for (const field of fields) {
      const legacyValue = node[field]

      if (legacyValue === null || legacyValue === undefined) {
        result[field] = null
        continue
      }

      const isArray = nodeArrayFields?.includes(field)

      if (isArray && Array.isArray(legacyValue)) {
        result[field] = legacyValue.map((child: LegacyNode) =>
          convertNode(child)
        )
      } else if (!isArray && typeof legacyValue === 'object') {
        result[field] = convertNode(legacyValue as LegacyNode)
      }
    }
  }

  for (const key of scalarFields) {
    if (key in node && !(key in result)) {
      result[key] = node[key]
    }
  }

  if (legacyType === 'FunctionDeclaration') {
    result.local = node.isLocal === true
  }

  if (luastType === 'root' && Array.isArray(node.comments)) {
    result.comments = (node.comments as LegacyNode[]).map((c) =>
      convertNode(c)
    ) as Comment[]
  }

  return result as unknown as LuastNode
}

function convertPosition(
  node: LegacyNode,
  result: Record<string, unknown>
): void {
  const loc = node.loc as
    | {
        start: {line: number; column: number}
        end: {line: number; column: number}
      }
    | undefined
  const range = node.range as [number, number] | undefined

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
