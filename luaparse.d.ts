import type {Root} from '@friday-friday/luast'

export interface ParseOptions {
  wait?: boolean
  comments?: boolean
  scope?: boolean
  onCreateNode?: ((node: AstNode) => void) | null
  onCreateScope?: (() => void) | null
  onDestroyScope?: (() => void) | null
  onLocalDeclaration?: ((name: string) => void) | null
  luaVersion?: '5.1' | '5.2' | '5.3' | 'LuaJIT'
  extendedIdentifiers?: boolean
  encodingMode?: 'none' | 'x-user-defined' | 'pseudo-latin1'
  maxInputLength?: number
}

export interface AstNode {
  type: string
  position?: {
    start: {line: number; column: number; offset: number}
    end: {line: number; column: number; offset: number}
  }
  [key: string]: unknown
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

export const version: string
export const defaultOptions: ParseOptions
export const tokenTypes: TokenType
export const ast: Record<string, (...args: unknown[]) => AstNode>
export const errors: Record<string, string>
export const SyntaxError: new (message: string) => Error

export interface StreamSession {
  write(input: string): StreamSession
  end(input?: string): Root
  lex(): Token
}

export function parse(input: string, options?: ParseOptions): Root
export function parse(options: ParseOptions & {wait: true}): StreamSession

export const write: (input: string) => StreamSession
export const end: (input?: string) => Root
export const lex: () => Token
