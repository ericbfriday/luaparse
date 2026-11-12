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
})(this, 'for', function (exports) {
  'use strict'

  exports.name = 'for'
  exports.spec = [
    {
      source: 'for',
      result: "[1:3] <name> expected near '<eof>'"
    },
    {
      source: 'for do',
      result: "[1:4] <name> expected near 'do'"
    },
    {
      source: 'for end',
      result: "[1:4] <name> expected near 'end'"
    },
    {
      source: 'for 1',
      result: "[1:4] <name> expected near '1'"
    },
    {
      source: 'for a',
      result: "[1:5] 'in' expected near '<eof>'"
    },
    {
      source: 'for true',
      result: "[1:4] <name> expected near 'true'"
    },
    {
      source: 'for a, in',
      result: "[1:7] <name> expected near 'in'"
    },
    {
      source: 'for a in',
      result: "[1:8] <expression> expected near '<eof>'"
    },
    {
      source: 'for a do',
      result: "[1:6] 'in' expected near 'do'"
    },
    {
      source: 'for a in do',
      result: "[1:9] <expression> expected near 'do'"
    },
    {
      source: 'for a in b do',
      result: "[1:13] 'end' expected near '<eof>'"
    },
    {
      source: 'for a in b end',
      result: "[1:11] 'do' expected near 'end'"
    },
    {
      source: 'for a in b, do',
      result: "[1:12] <expression> expected near 'do'"
    },
    {
      source: 'for a in b do end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forGenericStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
                  },
                  end: {
                    line: 1,
                    column: 6,
                    offset: 5
                  }
                }
              }
            ],
            iterators: [
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
              }
            ],
            body: [],
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 18,
                offset: 17
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
            column: 18,
            offset: 17
          }
        }
      }
    },
    {
      source: 'for a in b do local a local b end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forGenericStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
                  },
                  end: {
                    line: 1,
                    column: 6,
                    offset: 5
                  }
                }
              }
            ],
            iterators: [
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
              }
            ],
            body: [
              {
                type: 'localStatement',
                variables: [
                  {
                    type: 'identifier',
                    name: 'a',
                    position: {
                      start: {
                        line: 1,
                        column: 21,
                        offset: 20
                      },
                      end: {
                        line: 1,
                        column: 22,
                        offset: 21
                      }
                    }
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 15,
                    offset: 14
                  },
                  end: {
                    line: 1,
                    column: 22,
                    offset: 21
                  }
                }
              },
              {
                type: 'localStatement',
                variables: [
                  {
                    type: 'identifier',
                    name: 'b',
                    position: {
                      start: {
                        line: 1,
                        column: 29,
                        offset: 28
                      },
                      end: {
                        line: 1,
                        column: 30,
                        offset: 29
                      }
                    }
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 23,
                    offset: 22
                  },
                  end: {
                    line: 1,
                    column: 30,
                    offset: 29
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
                column: 34,
                offset: 33
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
            column: 34,
            offset: 33
          }
        }
      }
    },
    {
      source: 'for a in b do local a; local b; end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forGenericStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
                  },
                  end: {
                    line: 1,
                    column: 6,
                    offset: 5
                  }
                }
              }
            ],
            iterators: [
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
              }
            ],
            body: [
              {
                type: 'localStatement',
                variables: [
                  {
                    type: 'identifier',
                    name: 'a',
                    position: {
                      start: {
                        line: 1,
                        column: 21,
                        offset: 20
                      },
                      end: {
                        line: 1,
                        column: 22,
                        offset: 21
                      }
                    }
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 15,
                    offset: 14
                  },
                  end: {
                    line: 1,
                    column: 22,
                    offset: 21
                  }
                }
              },
              {
                type: 'localStatement',
                variables: [
                  {
                    type: 'identifier',
                    name: 'b',
                    position: {
                      start: {
                        line: 1,
                        column: 30,
                        offset: 29
                      },
                      end: {
                        line: 1,
                        column: 31,
                        offset: 30
                      }
                    }
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 24,
                    offset: 23
                  },
                  end: {
                    line: 1,
                    column: 31,
                    offset: 30
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
                column: 36,
                offset: 35
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
            column: 36,
            offset: 35
          }
        }
      }
    },
    {
      source: 'for a in b do 1 end',
      result: "[1:14] unexpected number '1' near 'end'"
    },
    {
      source: 'for a in b do "foo" end',
      result: "[1:14] unexpected string '\"foo\"' near 'end'"
    },
    {
      source: 'for a b in',
      result: "[1:6] 'in' expected near 'b'"
    },
    {
      source: 'for a, b, c in p do end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forGenericStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
                  },
                  end: {
                    line: 1,
                    column: 6,
                    offset: 5
                  }
                }
              },
              {
                type: 'identifier',
                name: 'b',
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
                name: 'c',
                position: {
                  start: {
                    line: 1,
                    column: 11,
                    offset: 10
                  },
                  end: {
                    line: 1,
                    column: 12,
                    offset: 11
                  }
                }
              }
            ],
            iterators: [
              {
                type: 'identifier',
                name: 'p',
                position: {
                  start: {
                    line: 1,
                    column: 16,
                    offset: 15
                  },
                  end: {
                    line: 1,
                    column: 17,
                    offset: 16
                  }
                }
              }
            ],
            body: [],
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 24,
                offset: 23
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
            column: 24,
            offset: 23
          }
        }
      }
    },
    {
      source: 'for a, b, c in p, q, r do end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forGenericStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
                  },
                  end: {
                    line: 1,
                    column: 6,
                    offset: 5
                  }
                }
              },
              {
                type: 'identifier',
                name: 'b',
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
                name: 'c',
                position: {
                  start: {
                    line: 1,
                    column: 11,
                    offset: 10
                  },
                  end: {
                    line: 1,
                    column: 12,
                    offset: 11
                  }
                }
              }
            ],
            iterators: [
              {
                type: 'identifier',
                name: 'p',
                position: {
                  start: {
                    line: 1,
                    column: 16,
                    offset: 15
                  },
                  end: {
                    line: 1,
                    column: 17,
                    offset: 16
                  }
                }
              },
              {
                type: 'identifier',
                name: 'q',
                position: {
                  start: {
                    line: 1,
                    column: 19,
                    offset: 18
                  },
                  end: {
                    line: 1,
                    column: 20,
                    offset: 19
                  }
                }
              },
              {
                type: 'identifier',
                name: 'r',
                position: {
                  start: {
                    line: 1,
                    column: 22,
                    offset: 21
                  },
                  end: {
                    line: 1,
                    column: 23,
                    offset: 22
                  }
                }
              }
            ],
            body: [],
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 30,
                offset: 29
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
            column: 30,
            offset: 29
          }
        }
      }
    },
    {
      source: 'for a in 1 do end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forGenericStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
                  },
                  end: {
                    line: 1,
                    column: 6,
                    offset: 5
                  }
                }
              }
            ],
            iterators: [
              {
                type: 'numericLiteral',
                value: 1,
                raw: '1',
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
            body: [],
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 18,
                offset: 17
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
            column: 18,
            offset: 17
          }
        }
      }
    },
    {
      source: 'for a in true do end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forGenericStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
                  },
                  end: {
                    line: 1,
                    column: 6,
                    offset: 5
                  }
                }
              }
            ],
            iterators: [
              {
                type: 'booleanLiteral',
                value: true,
                raw: 'true',
                position: {
                  start: {
                    line: 1,
                    column: 10,
                    offset: 9
                  },
                  end: {
                    line: 1,
                    column: 14,
                    offset: 13
                  }
                }
              }
            ],
            body: [],
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 21,
                offset: 20
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
            column: 21,
            offset: 20
          }
        }
      }
    },
    {
      source: 'for a in "foo" do end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forGenericStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
                  },
                  end: {
                    line: 1,
                    column: 6,
                    offset: 5
                  }
                }
              }
            ],
            iterators: [
              {
                type: 'stringLiteral',
                value: null,
                raw: '"foo"',
                position: {
                  start: {
                    line: 1,
                    column: 10,
                    offset: 9
                  },
                  end: {
                    line: 1,
                    column: 15,
                    offset: 14
                  }
                }
              }
            ],
            body: [],
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 22,
                offset: 21
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
            column: 22,
            offset: 21
          }
        }
      }
    },
    {
      source: 'for a in b do break end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forGenericStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
                  },
                  end: {
                    line: 1,
                    column: 6,
                    offset: 5
                  }
                }
              }
            ],
            iterators: [
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
              }
            ],
            body: [
              {
                type: 'breakStatement',
                position: {
                  start: {
                    line: 1,
                    column: 15,
                    offset: 14
                  },
                  end: {
                    line: 1,
                    column: 20,
                    offset: 19
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
                column: 24,
                offset: 23
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
            column: 24,
            offset: 23
          }
        }
      }
    },
    {
      source: 'for a in b do break break end',
      result: "[1:20] 'end' expected near 'break'"
    },
    {
      source: 'for a in b do return end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forGenericStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
                  },
                  end: {
                    line: 1,
                    column: 6,
                    offset: 5
                  }
                }
              }
            ],
            iterators: [
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
              }
            ],
            body: [
              {
                type: 'returnStatement',
                arguments: [],
                position: {
                  start: {
                    line: 1,
                    column: 15,
                    offset: 14
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
                column: 25,
                offset: 24
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
            column: 25,
            offset: 24
          }
        }
      }
    },
    {
      source: 'for a in b do return return end',
      result: "[1:21] 'end' expected near 'return'"
    },
    {
      source: 'for a in b do do end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forGenericStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
                  },
                  end: {
                    line: 1,
                    column: 6,
                    offset: 5
                  }
                }
              }
            ],
            iterators: [
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
              }
            ],
            body: [
              {
                type: 'doStatement',
                body: [],
                position: {
                  start: {
                    line: 1,
                    column: 15,
                    offset: 14
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
                column: 25,
                offset: 24
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
            column: 25,
            offset: 24
          }
        }
      }
    },
    {
      source: 'for a in b do do break end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forGenericStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
                  },
                  end: {
                    line: 1,
                    column: 6,
                    offset: 5
                  }
                }
              }
            ],
            iterators: [
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
              }
            ],
            body: [
              {
                type: 'doStatement',
                body: [
                  {
                    type: 'breakStatement',
                    position: {
                      start: {
                        line: 1,
                        column: 18,
                        offset: 17
                      },
                      end: {
                        line: 1,
                        column: 23,
                        offset: 22
                      }
                    }
                  }
                ],
                position: {
                  start: {
                    line: 1,
                    column: 15,
                    offset: 14
                  },
                  end: {
                    line: 1,
                    column: 27,
                    offset: 26
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
                column: 31,
                offset: 30
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
            column: 31,
            offset: 30
          }
        }
      }
    },
    {
      source: 'for a in b do do return end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forGenericStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
                  },
                  end: {
                    line: 1,
                    column: 6,
                    offset: 5
                  }
                }
              }
            ],
            iterators: [
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
              }
            ],
            body: [
              {
                type: 'doStatement',
                body: [
                  {
                    type: 'returnStatement',
                    arguments: [],
                    position: {
                      start: {
                        line: 1,
                        column: 18,
                        offset: 17
                      },
                      end: {
                        line: 1,
                        column: 24,
                        offset: 23
                      }
                    }
                  }
                ],
                position: {
                  start: {
                    line: 1,
                    column: 15,
                    offset: 14
                  },
                  end: {
                    line: 1,
                    column: 28,
                    offset: 27
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
                column: 32,
                offset: 31
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
            column: 32,
            offset: 31
          }
        }
      }
    },
    {
      source: 'for =',
      result: "[1:4] <name> expected near '='"
    },
    {
      source: 'for a =',
      result: "[1:7] <expression> expected near '<eof>'"
    },
    {
      source: 'for a, b =',
      result: "[1:9] 'in' expected near '='"
    },
    {
      source: 'for a = do',
      result: "[1:8] <expression> expected near 'do'"
    },
    {
      source: 'for a = 1, do',
      result: "[1:11] <expression> expected near 'do'"
    },
    {
      source: 'for a = p, q, do',
      result: "[1:14] <expression> expected near 'do'"
    },
    {
      source: 'for a = p q do',
      result: "[1:10] ',' expected near 'q'"
    },
    {
      source: 'for a = b do end',
      result: "[1:10] ',' expected near 'do'"
    },
    {
      source: 'for a = 1, 2, 3, 4 do end',
      result: "[1:15] 'do' expected near ','"
    },
    {
      source: 'for a = p, q do end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forNumericStatement',
            variable: {
              type: 'identifier',
              name: 'a',
              position: {
                start: {
                  line: 1,
                  column: 5,
                  offset: 4
                },
                end: {
                  line: 1,
                  column: 6,
                  offset: 5
                }
              }
            },
            start: {
              type: 'identifier',
              name: 'p',
              position: {
                start: {
                  line: 1,
                  column: 9,
                  offset: 8
                },
                end: {
                  line: 1,
                  column: 10,
                  offset: 9
                }
              }
            },
            end: {
              type: 'identifier',
              name: 'q',
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
            step: null,
            body: [],
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 20,
                offset: 19
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
            column: 20,
            offset: 19
          }
        }
      }
    },
    {
      source: 'for a = 1, 2 do end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forNumericStatement',
            variable: {
              type: 'identifier',
              name: 'a',
              position: {
                start: {
                  line: 1,
                  column: 5,
                  offset: 4
                },
                end: {
                  line: 1,
                  column: 6,
                  offset: 5
                }
              }
            },
            start: {
              type: 'numericLiteral',
              value: 1,
              raw: '1',
              position: {
                start: {
                  line: 1,
                  column: 9,
                  offset: 8
                },
                end: {
                  line: 1,
                  column: 10,
                  offset: 9
                }
              }
            },
            end: {
              type: 'numericLiteral',
              value: 2,
              raw: '2',
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
            step: null,
            body: [],
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 20,
                offset: 19
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
            column: 20,
            offset: 19
          }
        }
      }
    },
    {
      source: 'for a = 1, 2 do local a local b end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forNumericStatement',
            variable: {
              type: 'identifier',
              name: 'a',
              position: {
                start: {
                  line: 1,
                  column: 5,
                  offset: 4
                },
                end: {
                  line: 1,
                  column: 6,
                  offset: 5
                }
              }
            },
            start: {
              type: 'numericLiteral',
              value: 1,
              raw: '1',
              position: {
                start: {
                  line: 1,
                  column: 9,
                  offset: 8
                },
                end: {
                  line: 1,
                  column: 10,
                  offset: 9
                }
              }
            },
            end: {
              type: 'numericLiteral',
              value: 2,
              raw: '2',
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
            step: null,
            body: [
              {
                type: 'localStatement',
                variables: [
                  {
                    type: 'identifier',
                    name: 'a',
                    position: {
                      start: {
                        line: 1,
                        column: 23,
                        offset: 22
                      },
                      end: {
                        line: 1,
                        column: 24,
                        offset: 23
                      }
                    }
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 17,
                    offset: 16
                  },
                  end: {
                    line: 1,
                    column: 24,
                    offset: 23
                  }
                }
              },
              {
                type: 'localStatement',
                variables: [
                  {
                    type: 'identifier',
                    name: 'b',
                    position: {
                      start: {
                        line: 1,
                        column: 31,
                        offset: 30
                      },
                      end: {
                        line: 1,
                        column: 32,
                        offset: 31
                      }
                    }
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 25,
                    offset: 24
                  },
                  end: {
                    line: 1,
                    column: 32,
                    offset: 31
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
                column: 36,
                offset: 35
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
            column: 36,
            offset: 35
          }
        }
      }
    },
    {
      source: 'for a = 1, 2 do local a; local b; end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forNumericStatement',
            variable: {
              type: 'identifier',
              name: 'a',
              position: {
                start: {
                  line: 1,
                  column: 5,
                  offset: 4
                },
                end: {
                  line: 1,
                  column: 6,
                  offset: 5
                }
              }
            },
            start: {
              type: 'numericLiteral',
              value: 1,
              raw: '1',
              position: {
                start: {
                  line: 1,
                  column: 9,
                  offset: 8
                },
                end: {
                  line: 1,
                  column: 10,
                  offset: 9
                }
              }
            },
            end: {
              type: 'numericLiteral',
              value: 2,
              raw: '2',
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
            step: null,
            body: [
              {
                type: 'localStatement',
                variables: [
                  {
                    type: 'identifier',
                    name: 'a',
                    position: {
                      start: {
                        line: 1,
                        column: 23,
                        offset: 22
                      },
                      end: {
                        line: 1,
                        column: 24,
                        offset: 23
                      }
                    }
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 17,
                    offset: 16
                  },
                  end: {
                    line: 1,
                    column: 24,
                    offset: 23
                  }
                }
              },
              {
                type: 'localStatement',
                variables: [
                  {
                    type: 'identifier',
                    name: 'b',
                    position: {
                      start: {
                        line: 1,
                        column: 32,
                        offset: 31
                      },
                      end: {
                        line: 1,
                        column: 33,
                        offset: 32
                      }
                    }
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 26,
                    offset: 25
                  },
                  end: {
                    line: 1,
                    column: 33,
                    offset: 32
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
                column: 38,
                offset: 37
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
            column: 38,
            offset: 37
          }
        }
      }
    },
    {
      source: 'for a = 1, 2 do 3 end',
      result: "[1:16] unexpected number '3' near 'end'"
    },
    {
      source: 'for a = 1, 2 do "foo" end',
      result: "[1:16] unexpected string '\"foo\"' near 'end'"
    },
    {
      source: 'for a = p, q, r do end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forNumericStatement',
            variable: {
              type: 'identifier',
              name: 'a',
              position: {
                start: {
                  line: 1,
                  column: 5,
                  offset: 4
                },
                end: {
                  line: 1,
                  column: 6,
                  offset: 5
                }
              }
            },
            start: {
              type: 'identifier',
              name: 'p',
              position: {
                start: {
                  line: 1,
                  column: 9,
                  offset: 8
                },
                end: {
                  line: 1,
                  column: 10,
                  offset: 9
                }
              }
            },
            end: {
              type: 'identifier',
              name: 'q',
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
            step: {
              type: 'identifier',
              name: 'r',
              position: {
                start: {
                  line: 1,
                  column: 15,
                  offset: 14
                },
                end: {
                  line: 1,
                  column: 16,
                  offset: 15
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
                column: 23,
                offset: 22
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
            column: 23,
            offset: 22
          }
        }
      }
    },
    {
      source: 'for a = 1, 2, 3 do end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forNumericStatement',
            variable: {
              type: 'identifier',
              name: 'a',
              position: {
                start: {
                  line: 1,
                  column: 5,
                  offset: 4
                },
                end: {
                  line: 1,
                  column: 6,
                  offset: 5
                }
              }
            },
            start: {
              type: 'numericLiteral',
              value: 1,
              raw: '1',
              position: {
                start: {
                  line: 1,
                  column: 9,
                  offset: 8
                },
                end: {
                  line: 1,
                  column: 10,
                  offset: 9
                }
              }
            },
            end: {
              type: 'numericLiteral',
              value: 2,
              raw: '2',
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
            step: {
              type: 'numericLiteral',
              value: 3,
              raw: '3',
              position: {
                start: {
                  line: 1,
                  column: 15,
                  offset: 14
                },
                end: {
                  line: 1,
                  column: 16,
                  offset: 15
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
                column: 23,
                offset: 22
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
            column: 23,
            offset: 22
          }
        }
      }
    },
    {
      source: 'for a = p, q do break end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forNumericStatement',
            variable: {
              type: 'identifier',
              name: 'a',
              position: {
                start: {
                  line: 1,
                  column: 5,
                  offset: 4
                },
                end: {
                  line: 1,
                  column: 6,
                  offset: 5
                }
              }
            },
            start: {
              type: 'identifier',
              name: 'p',
              position: {
                start: {
                  line: 1,
                  column: 9,
                  offset: 8
                },
                end: {
                  line: 1,
                  column: 10,
                  offset: 9
                }
              }
            },
            end: {
              type: 'identifier',
              name: 'q',
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
            step: null,
            body: [
              {
                type: 'breakStatement',
                position: {
                  start: {
                    line: 1,
                    column: 17,
                    offset: 16
                  },
                  end: {
                    line: 1,
                    column: 22,
                    offset: 21
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
                column: 26,
                offset: 25
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
            column: 26,
            offset: 25
          }
        }
      }
    },
    {
      source: 'for a = p, q do break break end',
      result: "[1:22] 'end' expected near 'break'"
    },
    {
      source: 'for a = 1, 2 do return end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forNumericStatement',
            variable: {
              type: 'identifier',
              name: 'a',
              position: {
                start: {
                  line: 1,
                  column: 5,
                  offset: 4
                },
                end: {
                  line: 1,
                  column: 6,
                  offset: 5
                }
              }
            },
            start: {
              type: 'numericLiteral',
              value: 1,
              raw: '1',
              position: {
                start: {
                  line: 1,
                  column: 9,
                  offset: 8
                },
                end: {
                  line: 1,
                  column: 10,
                  offset: 9
                }
              }
            },
            end: {
              type: 'numericLiteral',
              value: 2,
              raw: '2',
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
            step: null,
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
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 27,
                offset: 26
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
            column: 27,
            offset: 26
          }
        }
      }
    },
    {
      source: 'for a = 1, 2 do return return end',
      result: "[1:23] 'end' expected near 'return'"
    },
    {
      source: 'for a = p, q do do end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forNumericStatement',
            variable: {
              type: 'identifier',
              name: 'a',
              position: {
                start: {
                  line: 1,
                  column: 5,
                  offset: 4
                },
                end: {
                  line: 1,
                  column: 6,
                  offset: 5
                }
              }
            },
            start: {
              type: 'identifier',
              name: 'p',
              position: {
                start: {
                  line: 1,
                  column: 9,
                  offset: 8
                },
                end: {
                  line: 1,
                  column: 10,
                  offset: 9
                }
              }
            },
            end: {
              type: 'identifier',
              name: 'q',
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
            step: null,
            body: [
              {
                type: 'doStatement',
                body: [],
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
            position: {
              start: {
                line: 1,
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 27,
                offset: 26
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
            column: 27,
            offset: 26
          }
        }
      }
    },
    {
      source: 'for a = p, q do do break end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forNumericStatement',
            variable: {
              type: 'identifier',
              name: 'a',
              position: {
                start: {
                  line: 1,
                  column: 5,
                  offset: 4
                },
                end: {
                  line: 1,
                  column: 6,
                  offset: 5
                }
              }
            },
            start: {
              type: 'identifier',
              name: 'p',
              position: {
                start: {
                  line: 1,
                  column: 9,
                  offset: 8
                },
                end: {
                  line: 1,
                  column: 10,
                  offset: 9
                }
              }
            },
            end: {
              type: 'identifier',
              name: 'q',
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
            step: null,
            body: [
              {
                type: 'doStatement',
                body: [
                  {
                    type: 'breakStatement',
                    position: {
                      start: {
                        line: 1,
                        column: 20,
                        offset: 19
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
                    column: 17,
                    offset: 16
                  },
                  end: {
                    line: 1,
                    column: 29,
                    offset: 28
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
                column: 33,
                offset: 32
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
            column: 33,
            offset: 32
          }
        }
      }
    },
    {
      source: 'for a = p, q do do return end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forNumericStatement',
            variable: {
              type: 'identifier',
              name: 'a',
              position: {
                start: {
                  line: 1,
                  column: 5,
                  offset: 4
                },
                end: {
                  line: 1,
                  column: 6,
                  offset: 5
                }
              }
            },
            start: {
              type: 'identifier',
              name: 'p',
              position: {
                start: {
                  line: 1,
                  column: 9,
                  offset: 8
                },
                end: {
                  line: 1,
                  column: 10,
                  offset: 9
                }
              }
            },
            end: {
              type: 'identifier',
              name: 'q',
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
            step: null,
            body: [
              {
                type: 'doStatement',
                body: [
                  {
                    type: 'returnStatement',
                    arguments: [],
                    position: {
                      start: {
                        line: 1,
                        column: 20,
                        offset: 19
                      },
                      end: {
                        line: 1,
                        column: 26,
                        offset: 25
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
                    column: 30,
                    offset: 29
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
                column: 34,
                offset: 33
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
            column: 34,
            offset: 33
          }
        }
      }
    },
    {
      source: 'for a in b do break break end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forGenericStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
                  },
                  end: {
                    line: 1,
                    column: 6,
                    offset: 5
                  }
                }
              }
            ],
            iterators: [
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
              }
            ],
            body: [
              {
                type: 'breakStatement',
                position: {
                  start: {
                    line: 1,
                    column: 15,
                    offset: 14
                  },
                  end: {
                    line: 1,
                    column: 20,
                    offset: 19
                  }
                }
              },
              {
                type: 'breakStatement',
                position: {
                  start: {
                    line: 1,
                    column: 21,
                    offset: 20
                  },
                  end: {
                    line: 1,
                    column: 26,
                    offset: 25
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
                column: 30,
                offset: 29
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
            column: 30,
            offset: 29
          }
        }
      },
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'for a = p, q do break break end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forNumericStatement',
            variable: {
              type: 'identifier',
              name: 'a',
              position: {
                start: {
                  line: 1,
                  column: 5,
                  offset: 4
                },
                end: {
                  line: 1,
                  column: 6,
                  offset: 5
                }
              }
            },
            start: {
              type: 'identifier',
              name: 'p',
              position: {
                start: {
                  line: 1,
                  column: 9,
                  offset: 8
                },
                end: {
                  line: 1,
                  column: 10,
                  offset: 9
                }
              }
            },
            end: {
              type: 'identifier',
              name: 'q',
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
            step: null,
            body: [
              {
                type: 'breakStatement',
                position: {
                  start: {
                    line: 1,
                    column: 17,
                    offset: 16
                  },
                  end: {
                    line: 1,
                    column: 22,
                    offset: 21
                  }
                }
              },
              {
                type: 'breakStatement',
                position: {
                  start: {
                    line: 1,
                    column: 23,
                    offset: 22
                  },
                  end: {
                    line: 1,
                    column: 28,
                    offset: 27
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
                column: 32,
                offset: 31
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
            column: 32,
            offset: 31
          }
        }
      },
      options: {
        luaVersion: '5.2'
      }
    }
  ]
})
