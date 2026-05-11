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

  const loc = node.loc as
    | {
        start: {line: number; column: number}
        end: {line: number; column: number}
      }
    | undefined
  if (loc !== undefined) {
    const range = node.range as [number, number] | undefined
    if (range === undefined) {
      result.position = {
        start: {line: loc.start.line, column: loc.start.column + 1},
        end: {line: loc.end.line, column: loc.end.column + 1}
      }
    } else {
      result.position = {
        start: {
          line: loc.start.line,
          column: loc.start.column + 1,
          offset: range[0]
        },
        end: {
          line: loc.end.line,
          column: loc.end.column + 1,
          offset: range[1]
        }
      }
    }
  }

  const fields = childFields[luastType]
  if (fields !== undefined) {
    const nodeArrayFields = arrayFields[luastType]

    for (let i = 0; i < fields.length; i++) {
      const field = fields[i] as string
      const legacyValue = node[field]

      if (legacyValue === null || legacyValue === undefined) {
        result[field] = null
        continue
      }

      if (nodeArrayFields?.includes(field) && Array.isArray(legacyValue)) {
        const len = legacyValue.length
        const arr = new Array(len)
        for (let j = 0; j < len; j++) {
          arr[j] = convertNode(legacyValue[j] as LegacyNode)
        }
        result[field] = arr
      } else if (typeof legacyValue === 'object') {
        result[field] = convertNode(legacyValue as LegacyNode)
      }
    }
  }

  if (node.operator !== undefined) result.operator = node.operator
  if (node.name !== undefined) result.name = node.name
  if (node.indexer !== undefined) result.indexer = node.indexer
  if (node.raw !== undefined) result.raw = node.raw
  if (node.value !== undefined) result.value = node.value

  if (legacyType === 'FunctionDeclaration') {
    result.local = node.isLocal === true
  } else if (node.local !== undefined) {
    result.local = node.local
  }

  if (luastType === 'root' && Array.isArray(node.comments)) {
    const comments = node.comments
    const len = comments.length
    const outComments = new Array(len)
    for (let i = 0; i < len; i++) {
      outComments[i] = convertNode(comments[i] as LegacyNode)
    }
    result.comments = outComments
  }

  return result as unknown as LuastNode
}
