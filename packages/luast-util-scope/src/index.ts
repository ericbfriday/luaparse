import {
  type Root,
  type Identifier,
  type LuastAnyNode,
  type LuastNode,
  childFields,
  arrayFields,
  forEachChild
} from '@friday-friday/luast'

export type ScopeInfo = {
  globals: Identifier[]
  isLocal(node: Identifier): boolean
}

export function analyzeScope(tree: Root): ScopeInfo {
  const localIdentifiers = new Set<Identifier>()
  const globalIdentifiers: Identifier[] = []
  const globalNames = new Set<string>()
  const scopeStack: Array<Set<string>> = [new Set()]

  function currentScope(): Set<string> {
    return scopeStack.at(-1)!
  }

  function pushScope(): void {
    scopeStack.push(new Set())
  }

  function popScope(): void {
    scopeStack.pop()
  }

  function declareLocal(name: string): void {
    currentScope().add(name)
  }

  function isNameLocal(name: string): boolean {
    for (let i = scopeStack.length - 1; i >= 0; i--) {
      if (scopeStack[i].has(name)) return true
    }

    return false
  }

  // eslint-disable-next-line complexity
  function walkNode(node: LuastNode): void {
    const rec = node as unknown as Record<string, unknown>

    switch (node.type) {
      case 'functionDeclaration': {
        const identifier = rec.identifier as
          | (Identifier | LuastNode)
          | null
        const isLocal = rec.local as boolean
        const parameters = rec.parameters as Array<Identifier | LuastNode>
        const body = rec.body as LuastNode[]

        if (identifier) {
          if (isLocal && identifier.type === 'identifier') {
            declareLocal((identifier as Identifier).name)
            localIdentifiers.add(identifier as Identifier)
          } else {
            walkNode(identifier as LuastNode)
          }
        }

        pushScope()
        for (const parameter of parameters) {
          if (parameter.type === 'identifier') {
            declareLocal((parameter as Identifier).name)
            localIdentifiers.add(parameter as Identifier)
          }
        }

        for (const stmt of body) walkNode(stmt)
        popScope()
        return
      }

      case 'localStatement': {
        const variables = rec.variables as Identifier[]
        const init = rec.init as LuastNode[]
        for (const expr of init) walkNode(expr)
        for (const v of variables) {
          declareLocal(v.name)
          localIdentifiers.add(v)
        }

        return
      }

      case 'forNumericStatement': {
        const variable = rec.variable as Identifier
        const start = rec.start as LuastNode
        const end = rec.end as LuastNode
        const step = rec.step as LuastNode | null
        const body = rec.body as LuastNode[]

        walkNode(start)
        walkNode(end)
        if (step) walkNode(step)

        pushScope()
        declareLocal(variable.name)
        localIdentifiers.add(variable)
        for (const stmt of body) walkNode(stmt)
        popScope()
        return
      }

      case 'forGenericStatement': {
        const variables = rec.variables as Identifier[]
        const iterators = rec.iterators as LuastNode[]
        const body = rec.body as LuastNode[]

        for (const iterator of iterators) walkNode(iterator)

        pushScope()
        for (const v of variables) {
          declareLocal(v.name)
          localIdentifiers.add(v)
        }

        for (const stmt of body) walkNode(stmt)
        popScope()
        return
      }

      case 'doStatement': {
        pushScope()
        for (const stmt of rec.body as LuastNode[]) walkNode(stmt)
        popScope()
        return
      }

      case 'whileStatement': {
        walkNode(rec.condition as LuastNode)
        pushScope()
        for (const stmt of rec.body as LuastNode[]) walkNode(stmt)
        popScope()
        return
      }

      case 'repeatStatement': {
        pushScope()
        for (const stmt of rec.body as LuastNode[]) walkNode(stmt)
        walkNode(rec.condition as LuastNode)
        popScope()
        return
      }

      case 'identifier': {
        const ident = node as Identifier
        if (isNameLocal(ident.name)) {
          localIdentifiers.add(ident)
        } else if (!globalNames.has(ident.name)) {
          globalNames.add(ident.name)
          globalIdentifiers.push(ident)
        }

        return
      }

      default: {
        break
      }
    }

    forEachChild(node as LuastAnyNode, (child) => walkNode(child as LuastNode))
  }

  for (const stmt of tree.body) {
    walkNode(stmt)
  }

  return {
    globals: globalIdentifiers,
    isLocal(node: Identifier): boolean {
      return localIdentifiers.has(node)
    }
  }
}
