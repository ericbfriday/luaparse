import type { Data, Position } from 'unist'

// ---------------------------------------------------------------------------
// Base
// ---------------------------------------------------------------------------

export interface LuastNode {
  type: string
  data?: Data
  position?: Position
}

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

export interface Root extends LuastNode {
  type: 'root'
  body: Statement[]
  comments?: Comment[]
}

// ---------------------------------------------------------------------------
// Statements
// ---------------------------------------------------------------------------

export interface LabelStatement extends LuastNode {
  type: 'labelStatement'
  label: Identifier
}

export interface BreakStatement extends LuastNode {
  type: 'breakStatement'
}

export interface GotoStatement extends LuastNode {
  type: 'gotoStatement'
  label: Identifier
}

export interface ReturnStatement extends LuastNode {
  type: 'returnStatement'
  arguments: Expression[]
}

export interface IfStatement extends LuastNode {
  type: 'ifStatement'
  clauses: (IfClause | ElseifClause | ElseClause)[]
}

export interface WhileStatement extends LuastNode {
  type: 'whileStatement'
  condition: Expression
  body: Statement[]
}

export interface DoStatement extends LuastNode {
  type: 'doStatement'
  body: Statement[]
}

export interface RepeatStatement extends LuastNode {
  type: 'repeatStatement'
  condition: Expression
  body: Statement[]
}

export interface LocalStatement extends LuastNode {
  type: 'localStatement'
  variables: Identifier[]
  init: Expression[]
}

export interface AssignmentStatement extends LuastNode {
  type: 'assignmentStatement'
  variables: (Identifier | MemberExpression | IndexExpression)[]
  init: Expression[]
}

export interface CallStatement extends LuastNode {
  type: 'callStatement'
  expression: CallExpression | TableCallExpression | StringCallExpression
}

export interface FunctionDeclaration extends LuastNode {
  type: 'functionDeclaration'
  identifier: Identifier | MemberExpression | null
  parameters: (Identifier | VarargLiteral)[]
  body: Statement[]
  local: boolean
}

export interface ForNumericStatement extends LuastNode {
  type: 'forNumericStatement'
  variable: Identifier
  start: Expression
  end: Expression
  step: Expression | null
  body: Statement[]
}

export interface ForGenericStatement extends LuastNode {
  type: 'forGenericStatement'
  variables: Identifier[]
  iterators: Expression[]
  body: Statement[]
}

// ---------------------------------------------------------------------------
// Clauses
// ---------------------------------------------------------------------------

export interface IfClause extends LuastNode {
  type: 'ifClause'
  condition: Expression
  body: Statement[]
}

export interface ElseifClause extends LuastNode {
  type: 'elseifClause'
  condition: Expression
  body: Statement[]
}

export interface ElseClause extends LuastNode {
  type: 'elseClause'
  body: Statement[]
}

// ---------------------------------------------------------------------------
// Expressions
// ---------------------------------------------------------------------------

export interface Identifier extends LuastNode {
  type: 'identifier'
  name: string
}

export type BinaryOperator =
  | '+' | '-' | '*' | '/' | '//' | '%' | '^' | '..'
  | '==' | '~=' | '<' | '>' | '<=' | '>='
  | '&' | '|' | '~' | '<<' | '>>'

export interface BinaryExpression extends LuastNode {
  type: 'binaryExpression'
  operator: BinaryOperator
  left: Expression
  right: Expression
}

export interface LogicalExpression extends LuastNode {
  type: 'logicalExpression'
  operator: 'and' | 'or'
  left: Expression
  right: Expression
}

export type UnaryOperator = 'not' | '-' | '#' | '~'

export interface UnaryExpression extends LuastNode {
  type: 'unaryExpression'
  operator: UnaryOperator
  argument: Expression
}

export interface MemberExpression extends LuastNode {
  type: 'memberExpression'
  base: Expression
  indexer: '.' | ':'
  identifier: Identifier
}

export interface IndexExpression extends LuastNode {
  type: 'indexExpression'
  base: Expression
  index: Expression
}

export interface CallExpression extends LuastNode {
  type: 'callExpression'
  base: Expression
  arguments: Expression[]
}

export interface TableCallExpression extends LuastNode {
  type: 'tableCallExpression'
  base: Expression
  argument: TableConstructor
}

export interface StringCallExpression extends LuastNode {
  type: 'stringCallExpression'
  base: Expression
  argument: StringLiteral
}

export interface TableConstructor extends LuastNode {
  type: 'tableConstructor'
  fields: TableField[]
}

// ---------------------------------------------------------------------------
// Literals
// ---------------------------------------------------------------------------

export interface StringLiteral extends LuastNode {
  type: 'stringLiteral'
  value: string | null
  raw: string
}

export interface NumericLiteral extends LuastNode {
  type: 'numericLiteral'
  value: number
  raw: string
}

export interface BooleanLiteral extends LuastNode {
  type: 'booleanLiteral'
  value: boolean
  raw: string
}

export interface NilLiteral extends LuastNode {
  type: 'nilLiteral'
  value: null
  raw: string
}

export interface VarargLiteral extends LuastNode {
  type: 'varargLiteral'
  value: string
  raw: string
}

// ---------------------------------------------------------------------------
// Table fields
// ---------------------------------------------------------------------------

export interface TableKey extends LuastNode {
  type: 'tableKey'
  key: Expression
  value: Expression
}

export interface TableKeyString extends LuastNode {
  type: 'tableKeyString'
  key: Identifier
  value: Expression
}

export interface TableValue extends LuastNode {
  type: 'tableValue'
  value: Expression
}

// ---------------------------------------------------------------------------
// Comments
// ---------------------------------------------------------------------------

export interface Comment extends LuastNode {
  type: 'comment'
  value: string
  raw: string
}

// ---------------------------------------------------------------------------
// Content model — union types
// ---------------------------------------------------------------------------

export type Statement =
  | LabelStatement
  | BreakStatement
  | GotoStatement
  | ReturnStatement
  | IfStatement
  | WhileStatement
  | DoStatement
  | RepeatStatement
  | LocalStatement
  | AssignmentStatement
  | CallStatement
  | FunctionDeclaration
  | ForNumericStatement
  | ForGenericStatement

export type Clause =
  | IfClause
  | ElseifClause
  | ElseClause

export type Expression =
  | Identifier
  | StringLiteral
  | NumericLiteral
  | BooleanLiteral
  | NilLiteral
  | VarargLiteral
  | BinaryExpression
  | LogicalExpression
  | UnaryExpression
  | MemberExpression
  | IndexExpression
  | CallExpression
  | TableCallExpression
  | StringCallExpression
  | TableConstructor
  | FunctionDeclaration

export type TableField =
  | TableKey
  | TableKeyString
  | TableValue

export type LuastContent =
  | Statement
  | Clause
  | Expression
  | TableField
  | Comment

export type LuastAnyNode = Root | LuastContent
