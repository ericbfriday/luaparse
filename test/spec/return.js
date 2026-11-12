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
})(this, 'return', function (exports) {
  'use strict'

  exports.name = 'return'
  exports.spec = [
    {
      source: 'return return',
      result: "[1:7] unexpected keyword 'return' near '<eof>'"
    },
    {
      source: 'return 1',
      result: {
        type: 'root',
        body: [
          {
            type: 'returnStatement',
            arguments: [
              {
                type: 'numericLiteral',
                value: 1,
                raw: '1',
                position: {
                  start: {
                    line: 1,
                    column: 8,
                    offset: 7
                  },
                  end: {
                    line: 1,
                    column: 9,
                    offset: 8
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
                column: 9,
                offset: 8
              }
            }
          }
        ],
        comments: [],
        position: {
          start: {
            line: 1,
            column: 1,
            offset: 0
          },
          end: {
            line: 1,
            column: 9,
            offset: 8
          }
        }
      }
    },
    {
      source: 'return local',
      result: "[1:7] unexpected keyword 'local' near '<eof>'"
    },
    {
      source: 'return "foo"',
      result: {
        type: 'root',
        body: [
          {
            type: 'returnStatement',
            arguments: [
              {
                type: 'stringLiteral',
                value: null,
                raw: '"foo"',
                position: {
                  start: {
                    line: 1,
                    column: 8,
                    offset: 7
                  },
                  end: {
                    line: 1,
                    column: 13,
                    offset: 12
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
                column: 13,
                offset: 12
              }
            }
          }
        ],
        comments: [],
        position: {
          start: {
            line: 1,
            column: 1,
            offset: 0
          },
          end: {
            line: 1,
            column: 13,
            offset: 12
          }
        }
      }
    },
    {
      source: 'return ,1',
      result: "[1:7] unexpected symbol ',' near '1'"
    },
    {
      source: 'return 1,',
      result: "[1:9] <expression> expected near '<eof>'"
    },
    {
      source: 'return 1,2,3',
      result: {
        type: 'root',
        body: [
          {
            type: 'returnStatement',
            arguments: [
              {
                type: 'numericLiteral',
                value: 1,
                raw: '1',
                position: {
                  start: {
                    line: 1,
                    column: 8,
                    offset: 7
                  },
                  end: {
                    line: 1,
                    column: 9,
                    offset: 8
                  }
                }
              },
              {
                type: 'numericLiteral',
                value: 2,
                raw: '2',
                position: {
                  start: {
                    line: 1,
                    column: 10,
                    offset: 9
                  },
                  end: {
                    line: 1,
                    column: 11,
                    offset: 10
                  }
                }
              },
              {
                type: 'numericLiteral',
                value: 3,
                raw: '3',
                position: {
                  start: {
                    line: 1,
                    column: 12,
                    offset: 11
                  },
                  end: {
                    line: 1,
                    column: 13,
                    offset: 12
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
                column: 13,
                offset: 12
              }
            }
          }
        ],
        comments: [],
        position: {
          start: {
            line: 1,
            column: 1,
            offset: 0
          },
          end: {
            line: 1,
            column: 13,
            offset: 12
          }
        }
      }
    },
    {
      source: 'return a,b,c,d',
      result: {
        type: 'root',
        body: [
          {
            type: 'returnStatement',
            arguments: [
              {
                type: 'identifier',
                name: 'a',
                position: {
                  start: {
                    line: 1,
                    column: 8,
                    offset: 7
                  },
                  end: {
                    line: 1,
                    column: 9,
                    offset: 8
                  }
                }
              },
              {
                type: 'identifier',
                name: 'b',
                position: {
                  start: {
                    line: 1,
                    column: 10,
                    offset: 9
                  },
                  end: {
                    line: 1,
                    column: 11,
                    offset: 10
                  }
                }
              },
              {
                type: 'identifier',
                name: 'c',
                position: {
                  start: {
                    line: 1,
                    column: 12,
                    offset: 11
                  },
                  end: {
                    line: 1,
                    column: 13,
                    offset: 12
                  }
                }
              },
              {
                type: 'identifier',
                name: 'd',
                position: {
                  start: {
                    line: 1,
                    column: 14,
                    offset: 13
                  },
                  end: {
                    line: 1,
                    column: 15,
                    offset: 14
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
                column: 15,
                offset: 14
              }
            }
          }
        ],
        comments: [],
        position: {
          start: {
            line: 1,
            column: 1,
            offset: 0
          },
          end: {
            line: 1,
            column: 15,
            offset: 14
          }
        }
      }
    },
    {
      source: 'return 1,2;',
      result: {
        type: 'root',
        body: [
          {
            type: 'returnStatement',
            arguments: [
              {
                type: 'numericLiteral',
                value: 1,
                raw: '1',
                position: {
                  start: {
                    line: 1,
                    column: 8,
                    offset: 7
                  },
                  end: {
                    line: 1,
                    column: 9,
                    offset: 8
                  }
                }
              },
              {
                type: 'numericLiteral',
                value: 2,
                raw: '2',
                position: {
                  start: {
                    line: 1,
                    column: 10,
                    offset: 9
                  },
                  end: {
                    line: 1,
                    column: 11,
                    offset: 10
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
                column: 12,
                offset: 11
              }
            }
          }
        ],
        comments: [],
        position: {
          start: {
            line: 1,
            column: 1,
            offset: 0
          },
          end: {
            line: 1,
            column: 12,
            offset: 11
          }
        }
      }
    }
  ]
})
