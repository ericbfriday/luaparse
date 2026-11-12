/*global require, define, exports, load, console, print, module, emit, process, __loadScript */
;(function (root) {
  var isLoader = typeof define === 'function' && !!define.amd,
    isModule =
      typeof require === 'function' &&
      typeof exports === 'object' &&
      exports &&
      !isLoader,
    isBrowser =
      'window' in root &&
      root.window === root &&
      typeof root.navigator !== 'undefined',
    isEngine = !isBrowser && !isModule && typeof root.load === 'function',
    isTestem = isBrowser && root.location.hash === '#testem',
    // Use the console reporter
    isConsole =
      typeof process === 'object' &&
      process.argv &&
      process.argv.indexOf('--console') >= 0

  // Static require calls only (no dynamic require paths).
  var nodeModules = {
    Spec: function () {
      return require('./lib/spec')
    },
    Newton: function () {
      return require('./lib/newton')
    },
    luaparse: function () {
      return require('../luaparse')
    },
    assignments: function () {
      return require('./spec/assignments')
    },
    break: function () {
      return require('./spec/break')
    },
    comments: function () {
      return require('./spec/comments')
    },
    conditional: function () {
      return require('./spec/conditional')
    },
    do: function () {
      return require('./spec/do')
    },
    escapesequences: function () {
      return require('./spec/escapesequences')
    },
    expressions: function () {
      return require('./spec/expressions')
    },
    for: function () {
      return require('./spec/for')
    },
    functioncalls: function () {
      return require('./spec/functioncalls')
    },
    functions: function () {
      return require('./spec/functions')
    },
    labels: function () {
      return require('./spec/labels')
    },
    literals: function () {
      return require('./spec/literals')
    },
    local: function () {
      return require('./spec/local')
    },
    misc: function () {
      return require('./spec/misc')
    },
    operators: function () {
      return require('./spec/operators')
    },
    repeat: function () {
      return require('./spec/repeat')
    },
    return: function () {
      return require('./spec/return')
    },
    scope: function () {
      return require('./spec/scope')
    },
    statements: function () {
      return require('./spec/statements')
    },
    tableconstructors: function () {
      return require('./spec/tableconstructors')
    },
    while: function () {
      return require('./spec/while')
    }
  }

  var load = function load(mod, path) {
    if (root[mod]) return root[mod]
    if (isModule) return nodeModules[mod]()
    var filename = path.replace(/\.js$/, '') + '.js'

    if (isEngine) {
      root.load(filename)
      return root[mod]
    }

    // QuickJS
    if (typeof __loadScript !== 'undefined') {
      __loadScript(filename)
      return root[mod]
    }
  }

  var Spec = load('Spec', './lib/spec'),
    Newton = load('Newton', './lib/newton'),
    luaparse = load('luaparse', '../luaparse'),
    specs = (root.specs = [
      './spec/assignments',
      './spec/break',
      './spec/comments',
      './spec/conditional',
      './spec/do',
      './spec/escapesequences',
      './spec/expressions',
      './spec/for',
      './spec/functioncalls',
      './spec/functions',
      './spec/labels',
      './spec/literals',
      './spec/local',
      './spec/misc',
      './spec/operators',
      './spec/repeat',
      './spec/return',
      './spec/scope',
      './spec/statements',
      './spec/tableconstructors',
      './spec/while'
    ]),
    // Print function used for Spec reporters.
    output = (function () {
      if (typeof console !== 'undefined' && console.log)
        return function (value) {
          console.log(value)
        }
      // In browsers, the global `print` function prints the current page.
      else if (typeof print === 'function' && !isBrowser) return print
      else return function (value) {}
    })(),
    // Create the test suite.
    suite = new Spec.Suite('Luaparse Unit Tests')

  if (!('assign' in Object)) {
    Object.assign = function () {
      var args = arguments
      var target = args[0]
      for (var i = 1; i < args.length; ++i) {
        var source = args[i]
        for (var k in source) {
          if (!Object.prototype.hasOwnProperty.call(source, k)) continue
          target[k] = source[k]
        }
      }
      return target
    }
  }

  function escapeString(string) {
    return string
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\t/g, '\\t')
      .replace(/\f/g, '\\f')
      .replace(/\v/g, '\\v')
  }

  // Expect a parse error to occur
  Spec.Test.prototype.parseError = function (source, expected, options) {
    var ok = false,
      actual
    try {
      actual = luaparse.parse(source, options)
    } catch (exception) {
      if (!(exception instanceof luaparse.SyntaxError)) throw exception
      actual = exception.message
      ok = actual === expected
    }
    return this.ok(ok, {
      expected: expected,
      actual: actual,
      message: escapeString(source)
    })
  }

  // Expect the parsed AST to match.
  Spec.Test.prototype.parses = function (source, expected, options, variant) {
    return this.deepEqual(
      luaparse.parse(source, options),
      expected,
      escapeString(source) + (variant ? ' ' + variant : '')
    )
  }

  Spec.Test.prototype.equalPrecedence = function (source, expected, options) {
    // Positions differ between the two spellings; compare tree structure only.
    function stripPositions(node) {
      if (!node || typeof node !== 'object') return node
      delete node.position
      for (var key in node)
        if (node.hasOwnProperty(key)) stripPositions(node[key])
      return node
    }

    return this.deepEqual(
      stripPositions(luaparse.parse('a = ' + source, options)),
      stripPositions(luaparse.parse('a = ' + expected, options)),
      source + ' is equal to ' + expected
    )
  }

  // Create a test, and delegate to appropiate test function.
  function addTest(testName, tests) {
    suite.addTest(testName, function () {
      var count = 0
      for (var i = 0; i < tests.length; ++i) {
        var expected = tests[i].result
        var opts = Object.assign({}, tests[i].options, {
          comments: true,
          scope: true
        })
        if (typeof expected === 'string') {
          this.parseError(tests[i].source, expected, opts)
          count++
        } else {
          count += 2
          this.parses(tests[i].source, expected, opts)

          opts.comments = false
          expected = Object.assign({}, expected)
          delete expected.comments
          this.parses(tests[i].source, expected, opts, '(no comments)')
        }
      }
      this.done(count)
    })
  }

  // Reporters ----------------------------------------------------------------

  // Beautify console output Mocha-style.
  var consoleReporter = (function () {
    var failures = [],
      colors = {
        red: 31,
        green: 32,
        gray: 90,
        white: 0
      },
      line = '-------------------------------------------------',
      colorize = function colorize(color, string) {
        return '\u001b[' + colors[color] + 'm' + string + '\u001b[0m'
      }

    return function consoleReporter(event) {
      switch (event.type) {
        case 'assertion':
          output(
            '    ' + colorize('green', '✓ ') + colorize('gray', event.message)
          )
          break
        case 'failure':
          output('    ' + colorize('red', '✖ ' + event.message))
          failures.push(event)
          break
        case 'start':
          output(this.name)
          break
        case 'setup':
          output('\n  ' + colorize('white', event.target.name))
          break
        case 'complete':
          var assertionCount = event.target.assertions,
            failureCount = event.target.failures,
            totalCount = assertionCount + failureCount

          for (var i = 0, l = failures.length; i < l; i++) {
            var failure = failures[i],
              expected = Newton.stringify(failure.expected),
              actual = Newton.stringify(failure.actual)
            output(
              Newton.substitute(
                '\n%s\n  Expected: %s\n  Actual:   %s',
                colorize('red', failure.message + ' ' + line),
                colorize('gray', expected),
                colorize('gray', actual)
              )
            )
          }
          output('\n' + assertionCount + '/' + totalCount + ' assertions')
          break
      }
    }
  })()

  var testemReporter = (function () {
    var id = 0,
      testResults = []

    return function (event) {
      var test, isSuccess
      switch (event.type) {
        case 'assertion':
        case 'failure':
          isSuccess = event.type === 'assertion'
          test = {
            passed: isSuccess ? 1 : 0,
            failed: isSuccess ? 0 : 1,
            total: 1,
            id: id++,
            name: event.message,
            items: []
          }
          if (!isSuccess) {
            test.items.push({
              passed: false,
              message: Newton.substitute(
                'Expected %o to match %o',
                event.expected,
                event.actual
              )
            })
          }
          testResults.push(test)
          root.Testem.emit('test-result', test)
          break
        case 'complete':
          root.Testem.emit('all-test-results', {
            failed: this.failures,
            total: this.assertions,
            tests: []
          })
          break
        case 'start':
          root.Testem.emit('tests-start')
          break
      }
    }
  })()

  // Use the appropiate reporter depending on enviroment.
  var reporter = isBrowser
    ? Newton.createReport('suite')
    : isConsole
      ? consoleReporter
      : Newton.createTAP(output)

  if (isTestem) suite.on('all', testemReporter)

  suite.on('all', reporter)

  // Additional tests ---------------------------------------------------------

  suite.addTest('API', function () {
    this.equal(typeof luaparse, 'object', 'luaparse is an object')
    this.equal(
      typeof luaparse.parse,
      'function',
      'luaparse.parse() is a function'
    )
    this.equal(
      typeof luaparse.write,
      'function',
      'luaparse.write() is a function'
    )
    this.equal(typeof luaparse.end, 'function', 'luaparse.end() is a function')
    var parse = luaparse.parse({wait: true})
    this.deepEqual(
      parse.end('return'),
      {
        type: 'root',
        body: [
          {
            type: 'returnStatement',
            arguments: [],
            position: {
              start: {line: 1, column: 1, offset: 0},
              end: {line: 1, column: 7, offset: 6}
            }
          }
        ],
        position: {
          start: {line: 1, column: 1, offset: 0},
          end: {line: 1, column: 7, offset: 6}
        },
        comments: []
      },
      'should support waiting on input'
    )

    var nodes = [],
      createdScopes = 0,
      destroyedScopes = 0,
      localDeclarations = []

    parse = luaparse.parse('do local a = 1 b = 1 end -- comment', {
      scope: true,
      onCreateNode: function (node) {
        nodes.push(node)
      },
      onCreateScope: function () {
        createdScopes++
      },
      onDestroyScope: function () {
        destroyedScopes++
      },
      onLocalDeclaration: function (ident) {
        localDeclarations.push(ident)
      }
    })
    this.equal(createdScopes, 2, 'should invoke onCreateScope callback')
    this.equal(
      createdScopes,
      destroyedScopes,
      'should invoke onDestroyScope callback'
    )
    this.deepEqual(
      localDeclarations,
      ['a'],
      'should invoke onLocalDeclaration callback'
    )
    this.equal(nodes.length, 9, 'should invoke onCreateNode callback')
    this.deepEqual(
      nodes[0],
      {
        type: 'identifier',
        name: 'a',
        position: {
          start: {line: 1, column: 10, offset: 9},
          end: {line: 1, column: 11, offset: 10}
        }
      },
      'should invoke onCreateNode callback with syntax node parameter'
    )

    this.deepEqual(
      luaparse.parse('#!/usr/bin/lua\nreturn'),
      {
        type: 'root',
        body: [
          {
            type: 'returnStatement',
            arguments: [],
            position: {
              start: {line: 2, column: 1, offset: 15},
              end: {line: 2, column: 7, offset: 21}
            }
          }
        ],
        position: {
          start: {line: 2, column: 1, offset: 15},
          end: {line: 2, column: 7, offset: 21}
        },
        comments: []
      },
      'should ignore shebangs'
    )

    parse = luaparse.parse({wait: true})
    this.error(function () {
      return luaparse.parse('return 2')
    }, 'A parser session is already active')
    this.equal(
      parse.end('return 1').body.length,
      1,
      'should finish active input'
    )

    this.error(function () {
      return luaparse.parse('return 1', {
        onCreateNode: function () {
          luaparse.parse('return 2')
        }
      })
    }, 'A parser session is already active')
    this.equal(
      luaparse.parse('return 3').body.length,
      1,
      'should recover after callback errors'
    )

    this.error(function () {
      return luaparse.parse(
        'return ' + new Array(601).join('(') + '1' + new Array(601).join(')')
      )
    }, 'Maximum expression nesting depth exceeded')
    this.error(function () {
      return luaparse.parse('return ' + new Array(1001).join('1^') + '1')
    }, 'Maximum expression nesting depth exceeded')
    this.error(function () {
      return luaparse.parse(
        new Array(601).join('do ') + new Array(601).join('end ')
      )
    }, 'Maximum block nesting depth exceeded')
    this.equal(
      luaparse.parse(new Array(100).join('do ') + new Array(100).join('end '))
        .body.length,
      1
    )

    parse = luaparse.parse({wait: true, maxInputLength: 8})
    parse.write('return')
    this.error(function () {
      return parse.write(' 123')
    }, 'Input length exceeds maximum allowed length')
    this.equal(
      parse.end().body.length,
      1,
      'should recover after a rejected write'
    )

    var labels = []
    for (var labelIndex = 0; labelIndex < 2000; labelIndex++)
      labels.push('goto l' + labelIndex + ' ::l' + labelIndex + '::')
    this.equal(
      luaparse.parse(labels.join(' '), {luaVersion: '5.2'}).body.length,
      4000,
      'should resolve a large set of unique goto targets'
    )

    this.done(22)
  })

  suite.addTest('Option validation', function () {
    var optionErrors = [
      {
        options: {luaVersion: '4.0'},
        message: "Lua version '4.0' not supported"
      },

      {
        options: {encodingMode: 'ebcdic'},
        message: "Encoding mode 'ebcdic' not supported"
      },

      {
        options: {luaVersion: 'hasOwnProperty'},
        message: "Lua version 'hasOwnProperty' not supported"
      }
    ]

    this.error(function () {
      return luaparse.parse([1, 2, 3], {})
    }, 'Expected input to be a string, but got object')
    this.error(function () {
      return luaparse.parse(123, {})
    }, 'Expected input to be a string, but got number')

    /*jshint loopfunc:true */
    for (var i = 0; i < optionErrors.length; ++i) {
      this.error(function () {
        return luaparse.parse('', optionErrors[i].options)
      }, optionErrors[i].message)
    }

    this.done(optionErrors.length + 2)
  })

  suite.addTest('Interpretation of literals', function () {
    var testcases = [
      ['019', '19', '0x13'],
      ['"a"', '"\\97"', '"\\097"', '"\\x61"', '"\\u{61}"', '"\\u{061}"'],
      [
        '"\\u{1f4a9}"',
        '"\\u{000001f4a9}"',
        '"\\xf0\\x9f\\x92\\xa9"',
        '"\ud83d\udca9"',
        "'\ud83d\udca9'",
        '[[\ud83d\udca9]]'
      ],
      ['"\\\\a"', '[==[\\a]==]'],
      [
        '"\\nfoo"',
        '"\\\nfoo"',
        '"\\\rfoo"',
        '"\\\r\nfoo"',
        '"\\\n\rfoo"',
        '[[\n\nfoo]]'
      ]
    ]
    var count = 0

    function symbolicControlChars(s) {
      /* control characters should not appears in test output;
       * use characters from the 'Control Pictures' block instead
       */
      return s.replace(/[\x00-\x1f]/g, function (m) {
        return String.fromCharCode(0x2400 + m.charCodeAt(0))
      })
    }

    for (var i = 0; i < testcases.length; ++i) {
      count += testcases[i].length - 1

      var list = testcases[i]
      var left = luaparse.parse('return ' + list[0], {luaVersion: '5.3'})
        .body[0].arguments[0]

      for (var j = 1; j < list.length; ++j) {
        var right = luaparse.parse('return ' + list[j], {luaVersion: '5.3'})
          .body[0].arguments[0]

        this.equal(
          left.value,
          right.value,
          symbolicControlChars(left.raw) +
            ' == ' +
            symbolicControlChars(right.raw)
        )
        left = right
      }
    }

    this.done(count)
  })

  suite.addTest('Precedence', function () {
    this.equalPrecedence('2^3^2', '2^(3^2)')
    this.equalPrecedence('2^3*4', '(2^3)*4')
    this.equalPrecedence('2^2^3', '2^(2^3)')
    this.equalPrecedence('2^2^3^4', '2^(2^(3^4))')
    this.equalPrecedence('2^2^3^4+1', '2^(2^(3^4))+1')
    this.equalPrecedence('1*2/3', '(1*2)/3')
    this.equalPrecedence('1 + 1 * 2 > 3', '( 1 + ( 1 * 2 ) ) > 3')
    this.equalPrecedence('1 < 2 and 2 < 1', '(1 < 2) and (2 < 1)')
    this.equalPrecedence('1 / 2 + 4 * 2 > 8', '((1 / 2) + (4 * 2)) > 8')
    this.equalPrecedence('2 < 1 == true', '(2 < 1) == true')
    this.equalPrecedence('2 < 1 + 1 == true', '(2 < (1 + 1)) == true')
    this.equalPrecedence('not 1 + 1', '(not 1) + 1')
    this.equalPrecedence('not not 1 + 1', '(not (not (1)) + 1)')
    this.equalPrecedence('1 + #1', '1 + (#1)')
    this.equalPrecedence('-x^2', '-(x^2)')
    this.equalPrecedence('3~2&1', '3~(2&1)', {luaVersion: '5.3'})
    this.equalPrecedence('3~2|1', '(3~2)|1', {luaVersion: '5.3'})
    this.equalPrecedence('1<<2 ..3', '1<<(2 ..3)', {luaVersion: '5.3'})
    this.done(18)
  })

  suite.addTest('EOL sequences', function () {
    // Offsets legitimately differ when a two-character line break replaces a
    // single newline; line/column tracking must stay equivalent.
    function dropOffsets(node) {
      if (!node || typeof node !== 'object') return node
      if (node.position) {
        delete node.position.start.offset
        delete node.position.end.offset
      }
      for (var key in node) if (node.hasOwnProperty(key)) dropOffsets(node[key])
      return node
    }

    var baseline = dropOffsets(luaparse.parse('foo = 1\nbar = 1'))

    this.deepEqual(
      baseline,
      dropOffsets(luaparse.parse('foo = 1\rbar = 1')),
      'carriage return'
    )
    this.deepEqual(
      baseline,
      dropOffsets(luaparse.parse('foo = 1\n\rbar = 1')),
      'newline followed by carriage return'
    )
    this.deepEqual(
      baseline,
      dropOffsets(luaparse.parse('foo = 1\r\nbar = 1')),
      'carriage return followed by newline'
    )
    this.done(3)
  })

  suite.addTest('Encoding modes', function () {
    var cases = [
      {mode: 'x-user-defined', src: '"\\u{0}"', value: '\u0000'},
      {mode: 'x-user-defined', src: '"\\u{80}"', value: '\uf7c2\uf780'},
      {mode: 'x-user-defined', src: '"\\u{d800}"', value: '\uf7ed\uf7a0\uf780'},
      {
        mode: 'x-user-defined',
        src: '"\\u{20000}"',
        value: '\uf7f0\uf7a0\uf780\uf780'
      },
      {mode: 'x-user-defined', src: '"\\x80"', value: '\uf780'},
      {mode: 'x-user-defined', src: '"\\x61"', value: 'a'},
      {mode: 'x-user-defined', src: '"\\128"', value: '\uf780'},
      {mode: 'x-user-defined', src: '"\uf780"', value: '\uf780'},
      {mode: 'x-user-defined', src: '"\ud800"', error: true},
      {mode: 'x-user-defined', src: '"\u0080"', error: true},
      {mode: 'x-user-defined', src: '[[\uf780]]', value: '\uf780'},
      {mode: 'x-user-defined', src: '[[\ud800]]', error: true},
      {mode: 'x-user-defined', src: '[[\u0080]]', error: true},
      {mode: 'x-user-defined', src: '"a"', value: 'a'},
      {mode: 'x-user-defined', src: '\uf780', name: '\uf780'},
      {mode: 'x-user-defined', src: '\x80', error: true},
      {mode: 'x-user-defined', src: 'a', name: 'a'},

      {mode: 'pseudo-latin1', src: '"\\u{0}"', value: '\u0000'},
      {mode: 'pseudo-latin1', src: '"\\u{80}"', value: '\u00c2\u0080'},
      {mode: 'pseudo-latin1', src: '"\\u{d800}"', value: '\u00ed\u00a0\u0080'},
      {
        mode: 'pseudo-latin1',
        src: '"\\u{20000}"',
        value: '\u00f0\u00a0\u0080\u0080'
      },
      {mode: 'pseudo-latin1', src: '"\\x80"', value: '\u0080'},
      {mode: 'pseudo-latin1', src: '"\\x61"', value: 'a'},
      {mode: 'pseudo-latin1', src: '"\\128"', value: '\u0080'},
      {mode: 'pseudo-latin1', src: '"\uf780"', error: true},
      {mode: 'pseudo-latin1', src: '"\ud800"', error: true},
      {mode: 'pseudo-latin1', src: '"\u0080"', value: '\u0080'},
      {mode: 'pseudo-latin1', src: '[[\uf780]]', error: true},
      {mode: 'pseudo-latin1', src: '[[\ud800]]', error: true},
      {mode: 'pseudo-latin1', src: '[[\u0080]]', value: '\u0080'},
      {mode: 'pseudo-latin1', src: '"a"', value: 'a'},
      {mode: 'pseudo-latin1', src: '\uf780', error: true},
      {mode: 'pseudo-latin1', src: '\x80', name: '\x80'},
      {mode: 'pseudo-latin1', src: 'a', name: 'a'},

      {mode: 'none', src: '"\\u{80}"', value: null},
      {mode: 'none', src: '"\\u{d800}"', value: null},
      {mode: 'none', src: '"\\x80"', value: null},
      {mode: 'none', src: '"\\x61"', value: null},
      {mode: 'none', src: '"\\128"', value: null},
      {mode: 'none', src: '"\uf780"', value: null},
      {mode: 'none', src: '"\ud800"', value: null},
      {mode: 'none', src: '"\u0080"', value: null},
      {mode: 'none', src: '"a"', value: null},
      {mode: 'none', src: '[[a]]', value: null},
      {mode: 'none', src: '\uf780', name: '\uf780'},
      {mode: 'none', src: '\x80', name: '\x80'},
      {mode: 'none', src: 'a', name: 'a'}
    ]

    for (var i = 0; i < cases.length; ++i) {
      var label = cases[i].src + ' (' + cases[i].mode + ')'
      var opts = {
        luaVersion: '5.3',
        encodingMode: cases[i].mode,
        extendedIdentifiers: true
      }
      if (cases[i].error) {
        var ok = false
        try {
          luaparse.parse('return ' + cases[i].src, opts)
        } catch (e) {
          if (!(e instanceof luaparse.SyntaxError)) throw e
          ok = true
        }
        this.ok(ok, {message: label})
        continue
      }
      var node = luaparse.parse('return ' + cases[i].src, opts).body[0]
        .arguments[0]
      if (cases[i].name) this.deepEqual(node.name, cases[i].name, label)
      else this.deepEqual(node.value, cases[i].value, label)
    }
    this.done(cases.length)
  })

  // luast / unist conformance ----------------------------------------------
  //
  // Walks every spec fixture through the child-field registry from
  // LUAST-SPEC.md and validates the unist invariants: known node types,
  // 1-based positions with sane offsets, JSON round-trip stability, and a
  // traversal that reaches every node exactly once.

  var childFields = {
    root: ['body'],
    labelStatement: ['label'],
    breakStatement: [],
    gotoStatement: ['label'],
    returnStatement: ['arguments'],
    ifStatement: ['clauses'],
    ifClause: ['condition', 'body'],
    elseifClause: ['condition', 'body'],
    elseClause: ['body'],
    whileStatement: ['condition', 'body'],
    doStatement: ['body'],
    repeatStatement: ['condition', 'body'],
    localStatement: ['variables', 'init'],
    assignmentStatement: ['variables', 'init'],
    callStatement: ['expression'],
    functionDeclaration: ['identifier', 'parameters', 'body'],
    forNumericStatement: ['variable', 'start', 'end', 'step', 'body'],
    forGenericStatement: ['variables', 'iterators', 'body'],
    identifier: [],
    stringLiteral: [],
    numericLiteral: [],
    booleanLiteral: [],
    nilLiteral: [],
    varargLiteral: [],
    binaryExpression: ['left', 'right'],
    logicalExpression: ['left', 'right'],
    unaryExpression: ['argument'],
    memberExpression: ['base', 'identifier'],
    indexExpression: ['base', 'index'],
    callExpression: ['base', 'arguments'],
    tableCallExpression: ['base', 'argument'],
    stringCallExpression: ['base', 'argument'],
    tableConstructor: ['fields'],
    tableKey: ['key', 'value'],
    tableKeyString: ['key', 'value'],
    tableValue: ['value'],
    comment: []
  }

  var arrayFields = {
    body: true,
    clauses: true,
    variables: true,
    init: true,
    arguments: true,
    parameters: true,
    iterators: true,
    fields: true
  }

  var conformanceEntries = []

  function checkConformance(test, source, options) {
    var tree = luaparse.parse(source, options)

    // unist: trees must be JSON-stable
    test.deepEqual(
      JSON.parse(JSON.stringify(tree)),
      tree,
      'JSON round-trip: ' + escapeString(source)
    )

    var visited = 0

    function fail(message) {
      throw new Error(message + ' (source: ' + escapeString(source) + ')')
    }

    function visit(node) {
      if (!node || typeof node !== 'object') return
      var type = node.type
      if (typeof type !== 'string' || !(type in childFields))
        fail('unknown node type ' + type)
      visited++

      var position = node.position
      if (!position || !position.start || !position.end)
        fail('missing position on ' + type)
      var start = position.start
      var end = position.end
      if (
        start.line < 1 ||
        start.column < 1 ||
        end.line < 1 ||
        end.column < 1 ||
        start.offset < 0 ||
        end.offset < start.offset
      )
        fail('invalid position on ' + type)

      var fields = childFields[type]
      for (var i = 0; i < fields.length; i++) {
        var value = node[fields[i]]
        if (value === null || value === undefined) continue
        if (arrayFields[fields[i]]) {
          if (!Array.isArray(value)) fail(type + '.' + fields[i] + ' not array')
          for (var j = 0; j < value.length; j++) visit(value[j])
        } else visit(value)
      }
    }

    if (tree.type !== 'root' || !Array.isArray(tree.body))
      fail('root shape invalid')
    if (!Array.isArray(tree.comments)) fail('root.comments missing')
    visit(tree)
    for (var i = 0; i < tree.comments.length; i++) visit(tree.comments[i])

    // The registry must reach every typed object exactly once: count them
    // independently via a brute-force walk over all properties.
    var total = 0
    function count(value) {
      if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) count(value[i])
        return
      }
      if (!value || typeof value !== 'object') return
      if (typeof value.type === 'string') total++
      for (var key in value)
        if (Object.prototype.hasOwnProperty.call(value, key)) count(value[key])
    }
    count(tree)
    if (visited !== total)
      fail('registry visited ' + visited + ' nodes, tree has ' + total)
  }

  function addConformanceTest() {
    suite.addTest('luast conformance', function () {
      var count = 0
      for (var i = 0; i < conformanceEntries.length; i++) {
        var entry = conformanceEntries[i]
        // Error tests (string results) intentionally fail to parse.
        if (typeof entry.result === 'string') continue
        checkConformance(this, entry.source, entry.options)
        count++
      }
      this.done(count)
    })
  }

  if (isLoader) {
    define(specs, function () {
      Spec.forEach(arguments, function (test) {
        conformanceEntries.push.apply(
          conformanceEntries,
          Array.isArray(test.spec) ? test.spec : [test.spec]
        )
        addTest(test.name, test.spec)
      })
      addConformanceTest()
      suite.shuffle()
      return suite
    })
  } else if (
    isBrowser ||
    !isModule ||
    (typeof module === 'object' && module === require.main)
  ) {
    var run = (root.run = function () {
      // Add all tests. In a browser the tests are expected to be loaded
      // therefore this function is exposed as a wrapper around the test suites
      // `run()` so it can run on load.
      Spec.forEach(specs, function (spec) {
        var name = spec.replace(/^[\s\S]*\/([^\/]+)$/, '$1'),
          tests = load(name, spec)

        var list = Array.isArray(tests.spec)
          ? tests.spec
          : Object.keys(tests.spec).map(function (key) {
              return {source: key, options: tests.spec[key].options}
            })
        conformanceEntries.push.apply(conformanceEntries, list)
        addTest(tests.name, tests.spec)
      })
      addConformanceTest()
      suite.shuffle()
      suite.run()
    })

    if (!isBrowser) run()
  }
})(this)
