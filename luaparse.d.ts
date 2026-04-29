import type {Root} from '@friday-friday/luast'

export interface ParseOptions {
  wait?: boolean
  comments?: boolean
  scope?: boolean
  locations?: boolean
  ranges?: boolean
  onCreateNode?: ((node: AstNode) => void) | null
  onCreateScope?: (() => void) | null
  onDestroyScope?: (() => void) | null
  onLocalDeclaration?: ((name: string) => void) | null
  luaVersion?: '5.1' | '5.2' | '5.3' | 'LuaJIT'
  extendedIdentifiers?: boolean
  encodingMode?: 'none' | 'x-user-defined' | 'pseudo-latin1'
  ast?: 'legacy' | 'luast'
}

export interface AstNode {
  type: string
  [key: string]: unknown
}

export interface LocationInfo {
  start: {line: number; column: number}
  end: {line: number; column: number}
}

export interface ChunkNode extends AstNode {
  type: 'Chunk'
  body: AstNode[]
  comments?: AstNode[]
  globals?: AstNode[]
}

export interface TokenType {
  EOF: number
  StringLiteral: number
  Keyword: number
  Identifier: number
  NumericLiteral: number
  Punctuator: number
  BooleanLiteral: number
  NilLiteral: number
  VarargLiteral: number
}

export interface Token {
  type: number
  value: string
  line: number
  lineStart: number
  range: [number, number]
}

export const defaultOptions: ParseOptions
export const tokenTypes: TokenType
export const ast: Record<string, (...args: unknown[]) => AstNode>

export function parse(
  input: string,
  options: ParseOptions & {ast: 'luast'}
): Root
export function parse(options: ParseOptions & {wait: true}): {
  write(input: string): void
  end(input?: string): AstNode
  lex(): Token
}
export function parse(input: string, options?: ParseOptions): AstNode

export function write(input: string): void
export function end(input?: string): AstNode
export function lex(): Token
