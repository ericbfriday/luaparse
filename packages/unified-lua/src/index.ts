import type { Root } from 'luast'
import * as luaparse from 'luaparse'

export interface Options {
  luaVersion?: '5.1' | '5.2' | '5.3' | 'LuaJIT'
  encodingMode?: 'none' | 'x-user-defined' | 'pseudo-latin1'
}

export default function luaParse(this: { Parser: (doc: string) => Root }, options?: Options) {
  const settings = {
    ast: 'luast' as const,
    luaVersion: options?.luaVersion ?? '5.1',
    encodingMode: options?.encodingMode ?? 'none',
  }

  Object.assign(this, {
    Parser(doc: string): Root {
      return luaparse.parse(doc, settings) as Root
    },
  })
}
