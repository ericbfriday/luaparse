;(function (root, name, factory) {
  'use strict'

  var freeExports = typeof exports === 'object' && exports,
    freeModule =
      typeof module === 'object' &&
      module &&
      module.exports === freeExports &&
      module,
    freeGlobal = typeof global === 'object' && global
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)
    root = freeGlobal

  if (typeof define === 'function' && define.amd) define(['exports'], factory)
  else if (freeExports && !freeExports.nodeType) {
    if (freeModule) factory(freeModule.exports)
    else factory(freeExports)
  } else factory((root[name] = {}))
})(this, 'misc', function (exports) {
  'use strict'

  exports.name = 'misc'
  exports.spec = [
    {
      source:
        'function foo.bar:baz(a) goto foo end local function a() local a, b ::c:: for a,b in c.d:e() do end end do while a do end repeat until 0 end for a = 1, 1 do end a = function() end',
      options: {luaVersion: '5.2'},
      result: "[1:24] no visible label 'foo' for <goto>"
    },
    {
      source: '--comment\nif 1 then elseif 2 then else end',
      result: {
        type: 'root',
        body: [
          {
            type: 'ifStatement',
            clauses: [
              {
                type: 'ifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
                  position: {
                    start: {
                      line: 2,
                      column: 4,
                      offset: 13
                    },
                    end: {
                      line: 2,
                      column: 5,
                      offset: 14
                    }
                  }
                },
                body: [],
                position: {
                  start: {
                    line: 2,
                    column: 1,
                    offset: 10
                  },
                  end: {
                    line: 2,
                    column: 10,
                    offset: 19
                  }
                }
              },
              {
                type: 'elseifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 2,
                  raw: '2',
                  position: {
                    start: {
                      line: 2,
                      column: 18,
                      offset: 27
                    },
                    end: {
                      line: 2,
                      column: 19,
                      offset: 28
                    }
                  }
                },
                body: [],
                position: {
                  start: {
                    line: 2,
                    column: 11,
                    offset: 20
                  },
                  end: {
                    line: 2,
                    column: 24,
                    offset: 33
                  }
                }
              },
              {
                type: 'elseClause',
                body: [],
                position: {
                  start: {
                    line: 2,
                    column: 25,
                    offset: 34
                  },
                  end: {
                    line: 2,
                    column: 29,
                    offset: 38
                  }
                }
              }
            ],
            position: {
              start: {
                line: 2,
                column: 1,
                offset: 10
              },
              end: {
                line: 2,
                column: 33,
                offset: 42
              }
            }
          }
        ],
        position: {
          start: {
            line: 2,
            column: 1,
            offset: 10
          },
          end: {
            line: 2,
            column: 33,
            offset: 42
          }
        },
        comments: [
          {
            type: 'comment',
            value: 'comment',
            raw: '--comment',
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 10,
                offset: 9
              }
            }
          }
        ]
      }
    },
    {
      source: 'foo = 1',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'foo',
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 4,
                    offset: 3
                  }
                }
              }
            ],
            init: [
              {
                type: 'numericLiteral',
                value: 1,
                raw: '1',
                position: {
                  start: {
                    line: 1,
                    column: 7,
                    offset: 6
                  },
                  end: {
                    line: 1,
                    column: 8,
                    offset: 7
                  }
                }
              }
            ],
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 8,
                offset: 7
              }
            }
          }
        ],
        position: {
          start: {
            line: 1,
            column: 1,
            offset: 0
          },
          end: {
            line: 1,
            column: 8,
            offset: 7
          }
        },
        comments: []
      }
    },
    {
      source: 'foo = 2',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'foo',
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 4,
                    offset: 3
                  }
                }
              }
            ],
            init: [
              {
                type: 'numericLiteral',
                value: 2,
                raw: '2',
                position: {
                  start: {
                    line: 1,
                    column: 7,
                    offset: 6
                  },
                  end: {
                    line: 1,
                    column: 8,
                    offset: 7
                  }
                }
              }
            ],
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 8,
                offset: 7
              }
            }
          }
        ],
        position: {
          start: {
            line: 1,
            column: 1,
            offset: 0
          },
          end: {
            line: 1,
            column: 8,
            offset: 7
          }
        },
        comments: []
      }
    },
    {
      source: '',
      result: {
        type: 'root',
        body: [],
        position: {
          start: {
            line: 1,
            column: 1,
            offset: 0
          },
          end: {
            line: 1,
            column: 1,
            offset: 0
          }
        },
        comments: []
      }
    },
    {
      source: '--comment',
      result: {
        type: 'root',
        body: [],
        position: {
          start: {
            line: 1,
            column: 10,
            offset: 9
          },
          end: {
            line: 1,
            column: 10,
            offset: 9
          }
        },
        comments: [
          {
            type: 'comment',
            value: 'comment',
            raw: '--comment',
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 10,
                offset: 9
              }
            }
          }
        ]
      }
    }
  ]
})
