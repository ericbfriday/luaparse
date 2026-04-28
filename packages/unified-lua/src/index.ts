import type {Root} from 'luast'
import * as luaparse from 'luaparse'

export type Options = {
  luaVersion?: '5.1' | '5.2' | '5.3' | 'LuaJIT'
  encodingMode?: 'none' | 'x-user-defined' | 'pseudo-latin1'
}

export default function luaParse(
  this: {Parser: (document: string) => Root},
  options?: Options
) {
  const settings = {
    ast: 'luast' as const,
    luaVersion: options?.luaVersion ?? '5.1',
    encodingMode: options?.encodingMode ?? 'none'
  }

  Object.assign(this, {
    Parser(document: string): Root {
      return luaparse.parse(document, settings) as Root
    }
  })
}
