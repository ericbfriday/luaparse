import type {Data, Position} from 'unist'

// ---------------------------------------------------------------------------
// Base
// ---------------------------------------------------------------------------

export type LuastNode = {
  type: string
  data?: Data
  position?: Position
}

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

export type Root = {
  type: 'root'
  body: Statement[]
  comments?: Comment[]
} & LuastNode

// ---------------------------------------------------------------------------
// Statements
// ---------------------------------------------------------------------------

export type LabelStatement = {
  type: 'labelStatement'
  label: Identifier
} & LuastNode

export type BreakStatement = {
  type: 'breakStatement'
} & LuastNode

export type GotoStatement = {
  type: 'gotoStatement'
  label: Identifier
} & LuastNode

export type ReturnStatement = {
  type: 'returnStatement'
  arguments: Expression[]
} & LuastNode

export type IfStatement = {
  type: 'ifStatement'
  clauses: Array<IfClause | ElseifClause | ElseClause>
} & LuastNode

export type WhileStatement = {
  type: 'whileStatement'
  condition: Expression
  body: Statement[]
} & LuastNode

export type DoStatement = {
  type: 'doStatement'
  body: Statement[]
} & LuastNode

export type RepeatStatement = {
  type: 'repeatStatement'
  condition: Expression
  body: Statement[]
} & LuastNode

export type LocalStatement = {
  type: 'localStatement'
  variables: Identifier[]
  init: Expression[]
} & LuastNode

export type AssignmentStatement = {
  type: 'assignmentStatement'
  variables: Array<Identifier | MemberExpression | IndexExpression>
  init: Expression[]
} & LuastNode

export type CallStatement = {
  type: 'callStatement'
  expression: CallExpression | TableCallExpression | StringCallExpression
} & LuastNode

export type FunctionDeclaration = {
  type: 'functionDeclaration'
  identifier: Identifier | MemberExpression | undefined
  parameters: Array<Identifier | VarargLiteral>
  body: Statement[]
  local: boolean
} & LuastNode

export type ForNumericStatement = {
  type: 'forNumericStatement'
  variable: Identifier
  start: Expression
  end: Expression
  step: Expression | undefined
  body: Statement[]
} & LuastNode

export type ForGenericStatement = {
  type: 'forGenericStatement'
  variables: Identifier[]
  iterators: Expression[]
  body: Statement[]
} & LuastNode

// ---------------------------------------------------------------------------
// Clauses
// ---------------------------------------------------------------------------

export type IfClause = {
  type: 'ifClause'
  condition: Expression
  body: Statement[]
} & LuastNode

export type ElseifClause = {
  type: 'elseifClause'
  condition: Expression
  body: Statement[]
} & LuastNode

export type ElseClause = {
  type: 'elseClause'
  body: Statement[]
} & LuastNode

// ---------------------------------------------------------------------------
// Expressions
// ---------------------------------------------------------------------------

export type Identifier = {
  type: 'identifier'
  name: string
} & LuastNode

export type BinaryOperator =
  | '+'
  | '-'
  | '*'
  | '/'
  | '//'
  | '%'
  | '^'
  | '..'
  | '=='
  | '~='
  | '<'
  | '>'
  | '<='
  | '>='
  | '&'
  | '|'
  | '~'
  | '<<'
  | '>>'

export type BinaryExpression = {
  type: 'binaryExpression'
  operator: BinaryOperator
  left: Expression
  right: Expression
} & LuastNode

export type LogicalExpression = {
  type: 'logicalExpression'
  operator: 'and' | 'or'
  left: Expression
  right: Expression
} & LuastNode

export type UnaryOperator = 'not' | '-' | '#' | '~'

export type UnaryExpression = {
  type: 'unaryExpression'
  operator: UnaryOperator
  argument: Expression
} & LuastNode

export type MemberExpression = {
  type: 'memberExpression'
  base: Expression
  indexer: '.' | ':'
  identifier: Identifier
} & LuastNode

export type IndexExpression = {
  type: 'indexExpression'
  base: Expression
  index: Expression
} & LuastNode

export type CallExpression = {
  type: 'callExpression'
  base: Expression
  arguments: Expression[]
} & LuastNode

export type TableCallExpression = {
  type: 'tableCallExpression'
  base: Expression
  argument: TableConstructor
} & LuastNode

export type StringCallExpression = {
  type: 'stringCallExpression'
  base: Expression
  argument: StringLiteral
} & LuastNode

export type TableConstructor = {
  type: 'tableConstructor'
  fields: TableField[]
} & LuastNode

// ---------------------------------------------------------------------------
// Literals
// ---------------------------------------------------------------------------

export type StringLiteral = {
  type: 'stringLiteral'
  value: string | undefined
  raw: string
} & LuastNode

export type NumericLiteral = {
  type: 'numericLiteral'
  value: number
  raw: string
} & LuastNode

export type BooleanLiteral = {
  type: 'booleanLiteral'
  value: boolean
  raw: string
} & LuastNode

export type NilLiteral = {
  type: 'nilLiteral'
  value: undefined
  raw: string
} & LuastNode

export type VarargLiteral = {
  type: 'varargLiteral'
  value: string
  raw: string
} & LuastNode

// ---------------------------------------------------------------------------
// Table fields
// ---------------------------------------------------------------------------

export type TableKey = {
  type: 'tableKey'
  key: Expression
  value: Expression
} & LuastNode

export type TableKeyString = {
  type: 'tableKeyString'
  key: Identifier
  value: Expression
} & LuastNode

export type TableValue = {
  type: 'tableValue'
  value: Expression
} & LuastNode

// ---------------------------------------------------------------------------
// Comments
// ---------------------------------------------------------------------------

export type Comment = {
  type: 'comment'
  value: string
  raw: string
} & LuastNode

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

export type Clause = IfClause | ElseifClause | ElseClause

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

export type TableField = TableKey | TableKeyString | TableValue

export type LuastContent =
  | Statement
  | Clause
  | Expression
  | TableField
  | Comment

export type LuastAnyNode = Root | LuastContent
