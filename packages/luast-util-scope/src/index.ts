import {
  type Root,
  type Identifier,
  type LuastAnyNode,
  type LuastNode,
  forEachChild
} from '@friday-friday/luast'

export type ScopeInfo = {
  globals: Identifier[]
  isLocal(node: Identifier): boolean
}

// eslint-disable-next-line complexity
export function analyzeScope(tree: Root): ScopeInfo {
  type Work =
    | {kind: 'visit'; node: LuastNode}
    | {kind: 'leaveNode'; node: LuastNode}
    | {kind: 'declare'; identifier: Identifier}
    | {kind: 'enterScope'}
    | {kind: 'leaveScope'}

  const localIdentifiers = new Set<Identifier>()
  const globalIdentifiers: Identifier[] = []
  const globalNames = new Set<string>()
  const scopeStack: Array<Set<string>> = [new Set()]
  const active = new WeakSet()

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

  function declareIdentifier(identifier: Identifier): void {
    declareLocal(identifier.name)
    localIdentifiers.add(identifier)
  }

  function isNameLocal(name: string): boolean {
    for (let i = scopeStack.length - 1; i >= 0; i--) {
      if (scopeStack[i].has(name)) return true
    }

    return false
  }

  function pushVisits(work: Work[], nodes: LuastNode[]): void {
    for (let index = nodes.length - 1; index >= 0; index--) {
      work.push({kind: 'visit', node: nodes[index]})
    }
  }

  const work: Work[] = []
  pushVisits(work, tree.body)

  while (work.length > 0) {
    const item = work.pop()!

    if (item.kind === 'enterScope') {
      pushScope()
      continue
    }

    if (item.kind === 'leaveScope') {
      popScope()
      continue
    }

    if (item.kind === 'leaveNode') {
      active.delete(item.node)
      continue
    }

    if (item.kind === 'declare') {
      declareIdentifier(item.identifier)
      continue
    }

    const {node} = item
    if (active.has(node)) throw new Error('Cyclic AST')
    active.add(node)
    work.push({kind: 'leaveNode', node})

    const rec = node as unknown as Record<string, unknown>

    switch (node.type) {
      case 'functionDeclaration': {
        const identifier = rec.identifier as Identifier | LuastNode | undefined
        const isLocal = rec.local as boolean
        const parameters = rec.parameters as Array<Identifier | LuastNode>
        const body = rec.body as LuastNode[]

        work.push({kind: 'leaveScope'})
        pushVisits(work, body)
        for (let index = parameters.length - 1; index >= 0; index--) {
          const parameter = parameters[index]
          if (parameter.type === 'identifier') {
            work.push({
              kind: 'declare',
              identifier: parameter as Identifier
            })
          }
        }

        work.push({kind: 'enterScope'})
        if (identifier) {
          if (isLocal && identifier.type === 'identifier') {
            work.push({
              kind: 'declare',
              identifier: identifier as Identifier
            })
          } else {
            work.push({kind: 'visit', node: identifier as LuastNode})
          }
        }

        continue
      }

      case 'localStatement': {
        const variables = rec.variables as Identifier[]
        const init = rec.init as LuastNode[]
        for (let index = variables.length - 1; index >= 0; index--) {
          work.push({kind: 'declare', identifier: variables[index]})
        }

        pushVisits(work, init)
        continue
      }

      case 'forNumericStatement': {
        const variable = rec.variable as Identifier
        const start = rec.start as LuastNode
        const end = rec.end as LuastNode
        const step = rec.step as LuastNode | undefined
        const body = rec.body as LuastNode[]

        work.push({kind: 'leaveScope'})
        pushVisits(work, body)
        work.push({kind: 'declare', identifier: variable}, {kind: 'enterScope'})
        if (step) work.push({kind: 'visit', node: step})
        work.push({kind: 'visit', node: end}, {kind: 'visit', node: start})
        continue
      }

      case 'forGenericStatement': {
        const variables = rec.variables as Identifier[]
        const iterators = rec.iterators as LuastNode[]
        const body = rec.body as LuastNode[]

        work.push({kind: 'leaveScope'})
        pushVisits(work, body)
        for (let index = variables.length - 1; index >= 0; index--) {
          work.push({kind: 'declare', identifier: variables[index]})
        }

        work.push({kind: 'enterScope'})
        pushVisits(work, iterators)
        continue
      }

      case 'doStatement': {
        work.push({kind: 'leaveScope'})
        pushVisits(work, rec.body as LuastNode[])
        work.push({kind: 'enterScope'})
        continue
      }

      case 'whileStatement': {
        work.push({kind: 'leaveScope'})
        pushVisits(work, rec.body as LuastNode[])
        work.push(
          {kind: 'enterScope'},
          {kind: 'visit', node: rec.condition as LuastNode}
        )
        continue
      }

      case 'repeatStatement': {
        work.push(
          {kind: 'leaveScope'},
          {kind: 'visit', node: rec.condition as LuastNode}
        )
        pushVisits(work, rec.body as LuastNode[])
        work.push({kind: 'enterScope'})
        continue
      }

      case 'ifClause':
      case 'elseifClause': {
        work.push({kind: 'leaveScope'})
        pushVisits(work, rec.body as LuastNode[])
        work.push(
          {kind: 'enterScope'},
          {kind: 'visit', node: rec.condition as LuastNode}
        )
        continue
      }

      case 'elseClause': {
        work.push({kind: 'leaveScope'})
        pushVisits(work, rec.body as LuastNode[])
        work.push({kind: 'enterScope'})
        continue
      }

      case 'identifier': {
        const ident = node as Identifier
        if (isNameLocal(ident.name)) {
          localIdentifiers.add(ident)
        } else if (!globalNames.has(ident.name)) {
          globalNames.add(ident.name)
          globalIdentifiers.push(ident)
        }

        continue
      }

      default: {
        break
      }
    }

    const children: LuastNode[] = []
    forEachChild(node as LuastAnyNode, (child) => {
      children.push(child as LuastNode)
    })
    pushVisits(work, children)
  }

  return {
    globals: globalIdentifiers,
    isLocal(node: Identifier): boolean {
      return localIdentifiers.has(node)
    }
  }
}
