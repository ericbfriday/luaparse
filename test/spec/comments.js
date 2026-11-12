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
})(this, 'comments', function (exports) {
  'use strict'

  exports.name = 'comments'
  exports.spec = [
    {
      source: '-- comment',
      result: {
        type: 'root',
        body: [],
        comments: [
          {
            type: 'comment',
            value: ' comment',
            raw: '-- comment',
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
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
            column: 11,
            offset: 10
          },
          end: {
            line: 1,
            column: 11,
            offset: 10
          }
        }
      }
    },
    {
      source: '-- comment\n-- comment',
      result: {
        type: 'root',
        body: [],
        comments: [
          {
            type: 'comment',
            value: ' comment',
            raw: '-- comment',
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 11,
                offset: 10
              }
            }
          },
          {
            type: 'comment',
            value: ' comment',
            raw: '-- comment',
            position: {
              start: {
                line: 2,
                column: 1,
                offset: 11
              },
              end: {
                line: 2,
                column: 11,
                offset: 21
              }
            }
          }
        ],
        position: {
          start: {
            line: 2,
            column: 11,
            offset: 21
          },
          end: {
            line: 2,
            column: 11,
            offset: 21
          }
        }
      }
    },
    {
      source: '--coment',
      result: {
        type: 'root',
        body: [],
        comments: [
          {
            type: 'comment',
            value: 'coment',
            raw: '--coment',
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
        position: {
          start: {
            line: 1,
            column: 9,
            offset: 8
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
      source: '-- comment\nreturn',
      result: {
        type: 'root',
        body: [
          {
            type: 'returnStatement',
            arguments: [],
            position: {
              start: {
                line: 2,
                column: 1,
                offset: 11
              },
              end: {
                line: 2,
                column: 7,
                offset: 17
              }
            }
          }
        ],
        comments: [
          {
            type: 'comment',
            value: ' comment',
            raw: '-- comment',
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
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
            line: 2,
            column: 1,
            offset: 11
          },
          end: {
            line: 2,
            column: 7,
            offset: 17
          }
        }
      }
    },
    {
      source: 'return --comment \n',
      result: {
        type: 'root',
        body: [
          {
            type: 'returnStatement',
            arguments: [],
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 7,
                offset: 6
              }
            }
          }
        ],
        comments: [
          {
            type: 'comment',
            value: 'comment ',
            raw: '--comment ',
            position: {
              start: {
                line: 1,
                column: 8,
                offset: 7
              },
              end: {
                line: 1,
                column: 18,
                offset: 17
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
            column: 7,
            offset: 6
          }
        }
      }
    },
    {
      source: '--[[comment]]',
      result: {
        type: 'root',
        body: [],
        comments: [
          {
            type: 'comment',
            value: 'comment',
            raw: '--[[comment]]',
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 14,
                offset: 13
              }
            }
          }
        ],
        position: {
          start: {
            line: 1,
            column: 14,
            offset: 13
          },
          end: {
            line: 1,
            column: 14,
            offset: 13
          }
        }
      }
    },
    {
      source: 'if true--[[comment]]then end',
      result: {
        type: 'root',
        body: [
          {
            type: 'ifStatement',
            clauses: [
              {
                type: 'ifClause',
                condition: {
                  type: 'booleanLiteral',
                  value: true,
                  raw: 'true',
                  position: {
                    start: {
                      line: 1,
                      column: 4,
                      offset: 3
                    },
                    end: {
                      line: 1,
                      column: 8,
                      offset: 7
                    }
                  }
                },
                body: [],
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 25,
                    offset: 24
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
                column: 29,
                offset: 28
              }
            }
          }
        ],
        comments: [
          {
            type: 'comment',
            value: 'comment',
            raw: '--[[comment]]',
            position: {
              start: {
                line: 1,
                column: 8,
                offset: 7
              },
              end: {
                line: 1,
                column: 21,
                offset: 20
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
            column: 29,
            offset: 28
          }
        }
      }
    },
    {
      source: '--[=[comment]=] return',
      result: {
        type: 'root',
        body: [
          {
            type: 'returnStatement',
            arguments: [],
            position: {
              start: {
                line: 1,
                column: 17,
                offset: 16
              },
              end: {
                line: 1,
                column: 23,
                offset: 22
              }
            }
          }
        ],
        comments: [
          {
            type: 'comment',
            value: 'comment',
            raw: '--[=[comment]=]',
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 16,
                offset: 15
              }
            }
          }
        ],
        position: {
          start: {
            line: 1,
            column: 17,
            offset: 16
          },
          end: {
            line: 1,
            column: 23,
            offset: 22
          }
        }
      }
    },
    {
      source: '--[===[comment\n--[=[sub]=]--\n]===]return',
      result: {
        type: 'root',
        body: [
          {
            type: 'returnStatement',
            arguments: [],
            position: {
              start: {
                line: 3,
                column: 6,
                offset: 34
              },
              end: {
                line: 3,
                column: 12,
                offset: 40
              }
            }
          }
        ],
        comments: [
          {
            type: 'comment',
            value: 'comment\n--[=[sub]=]--\n',
            raw: '--[===[comment\n--[=[sub]=]--\n]===]',
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 3,
                column: 6,
                offset: 34
              }
            }
          }
        ],
        position: {
          start: {
            line: 3,
            column: 6,
            offset: 34
          },
          end: {
            line: 3,
            column: 12,
            offset: 40
          }
        }
      }
    },
    {
      source: '--[[comment\nline two]]',
      result: {
        type: 'root',
        body: [],
        comments: [
          {
            type: 'comment',
            value: 'comment\nline two',
            raw: '--[[comment\nline two]]',
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 2,
                column: 11,
                offset: 22
              }
            }
          }
        ],
        position: {
          start: {
            line: 2,
            column: 11,
            offset: 22
          },
          end: {
            line: 2,
            column: 11,
            offset: 22
          }
        }
      }
    },
    {
      source: '--[[\ncomment\nline two\n]]',
      result: {
        type: 'root',
        body: [],
        comments: [
          {
            type: 'comment',
            value: 'comment\nline two\n',
            raw: '--[[\ncomment\nline two\n]]',
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 4,
                column: 3,
                offset: 24
              }
            }
          }
        ],
        position: {
          start: {
            line: 4,
            column: 3,
            offset: 24
          },
          end: {
            line: 4,
            column: 3,
            offset: 24
          }
        }
      }
    },
    {
      source: '--[==\nreturn --]]',
      result: {
        type: 'root',
        body: [
          {
            type: 'returnStatement',
            arguments: [],
            position: {
              start: {
                line: 2,
                column: 1,
                offset: 6
              },
              end: {
                line: 2,
                column: 7,
                offset: 12
              }
            }
          }
        ],
        comments: [
          {
            type: 'comment',
            value: '[==',
            raw: '--[==',
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 6,
                offset: 5
              }
            }
          },
          {
            type: 'comment',
            value: ']]',
            raw: '--]]',
            position: {
              start: {
                line: 2,
                column: 8,
                offset: 13
              },
              end: {
                line: 2,
                column: 12,
                offset: 17
              }
            }
          }
        ],
        position: {
          start: {
            line: 2,
            column: 1,
            offset: 6
          },
          end: {
            line: 2,
            column: 7,
            offset: 12
          }
        }
      }
    },
    {
      source: 'if true -- comment\nthen end',
      result: {
        type: 'root',
        body: [
          {
            type: 'ifStatement',
            clauses: [
              {
                type: 'ifClause',
                condition: {
                  type: 'booleanLiteral',
                  value: true,
                  raw: 'true',
                  position: {
                    start: {
                      line: 1,
                      column: 4,
                      offset: 3
                    },
                    end: {
                      line: 1,
                      column: 8,
                      offset: 7
                    }
                  }
                },
                body: [],
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 2,
                    column: 5,
                    offset: 23
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
                line: 2,
                column: 9,
                offset: 27
              }
            }
          }
        ],
        comments: [
          {
            type: 'comment',
            value: ' comment',
            raw: '-- comment',
            position: {
              start: {
                line: 1,
                column: 9,
                offset: 8
              },
              end: {
                line: 1,
                column: 19,
                offset: 18
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
            line: 2,
            column: 9,
            offset: 27
          }
        }
      }
    },
    {
      source: '--[=[x]x',
      result: "[1:9] unfinished long comment (starting at line 1) near '<eof>'"
    }
  ]
})
