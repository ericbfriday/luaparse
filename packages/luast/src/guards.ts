import type {
  LuastNode,
  Statement,
  Expression,
  Clause,
  TableField,
  Comment,
  Root
} from './types.js'

const statementTypes = new Set([
  'labelStatement',
  'breakStatement',
  'gotoStatement',
  'returnStatement',
  'ifStatement',
  'whileStatement',
  'doStatement',
  'repeatStatement',
  'localStatement',
  'assignmentStatement',
  'callStatement',
  'functionDeclaration',
  'forNumericStatement',
  'forGenericStatement'
])

const expressionTypes = new Set([
  'identifier',
  'stringLiteral',
  'numericLiteral',
  'booleanLiteral',
  'nilLiteral',
  'varargLiteral',
  'binaryExpression',
  'logicalExpression',
  'unaryExpression',
  'memberExpression',
  'indexExpression',
  'callExpression',
  'tableCallExpression',
  'stringCallExpression',
  'tableConstructor',
  'functionDeclaration'
])

const clauseTypes = new Set(['ifClause', 'elseifClause', 'elseClause'])

const tableFieldTypes = new Set(['tableKey', 'tableKeyString', 'tableValue'])

export function isStatement(node: LuastNode): node is Statement {
  return statementTypes.has(node.type)
}

export function isExpression(node: LuastNode): node is Expression {
  return expressionTypes.has(node.type)
}

export function isClause(node: LuastNode): node is Clause {
  return clauseTypes.has(node.type)
}

export function isTableField(node: LuastNode): node is TableField {
  return tableFieldTypes.has(node.type)
}

export function isComment(node: LuastNode): node is Comment {
  return node.type === 'comment'
}

export function isRoot(node: LuastNode): node is Root {
  return node.type === 'root'
}
