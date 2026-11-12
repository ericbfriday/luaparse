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
})(this, 'statements', function (exports) {
  'use strict'

  exports.name = 'statements'
  exports.spec = [
    {
      source: 'return',
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
        comments: [],
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
      source: 'nil',
      result: "[1:0] unexpected symbol 'nil' near '<eof>'"
    },
    {
      source: 'return;',
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
                column: 8,
                offset: 7
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
            column: 8,
            offset: 7
          }
        }
      }
    },
    {
      source: ';',
      result: "[1:0] unexpected symbol ';' near '<eof>'"
    },
    {
      source: 'return;',
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
                column: 8,
                offset: 7
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
            column: 8,
            offset: 7
          }
        }
      },
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'return;;',
      result: "[1:7] unexpected symbol ';' near '<eof>'",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: ';',
      result: {
        type: 'root',
        body: [],
        comments: [],
        position: {
          start: {
            line: 1,
            column: 1,
            offset: 0
          },
          end: {
            line: 1,
            column: 2,
            offset: 1
          }
        }
      },
      options: {
        luaVersion: '5.2'
      }
    }
  ]
})
