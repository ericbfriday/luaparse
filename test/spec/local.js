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
})(this, 'local', function (exports) {
  'use strict'

  exports.name = 'local'
  exports.spec = [
    {
      source: 'local',
      result: "[1:5] <name> expected near '<eof>'"
    },
    {
      source: 'local;',
      result: "[1:5] <name> expected near ';'"
    },
    {
      source: 'local =',
      result: "[1:6] <name> expected near '='"
    },
    {
      source: 'local end',
      result: "[1:6] <name> expected near 'end'"
    },
    {
      source: 'local a',
      result: {
        type: 'root',
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
            init: [],
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
      source: 'local a;',
      result: {
        type: 'root',
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
            init: [],
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
            column: 9,
            offset: 8
          }
        }
      }
    },
    {
      source: 'local a, b, c',
      result: {
        type: 'root',
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
                    column: 7,
                    offset: 6
                  },
                  end: {
                    line: 1,
                    column: 8,
                    offset: 7
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
                    column: 13,
                    offset: 12
                  },
                  end: {
                    line: 1,
                    column: 14,
                    offset: 13
                  }
                }
              }
            ],
            init: [],
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
        comments: [],
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
    },
    {
      source: 'local a; local b local c;',
      result: {
        type: 'root',
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
            init: [],
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
          {
            type: 'localStatement',
            variables: [
              {
                type: 'identifier',
                name: 'b',
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
            init: [],
            position: {
              start: {
                line: 1,
                column: 10,
                offset: 9
              },
              end: {
                line: 1,
                column: 17,
                offset: 16
              }
            }
          },
          {
            type: 'localStatement',
            variables: [
              {
                type: 'identifier',
                name: 'c',
                position: {
                  start: {
                    line: 1,
                    column: 24,
                    offset: 23
                  },
                  end: {
                    line: 1,
                    column: 25,
                    offset: 24
                  }
                }
              }
            ],
            init: [],
            position: {
              start: {
                line: 1,
                column: 18,
                offset: 17
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
            column: 26,
            offset: 25
          }
        }
      }
    },
    {
      source: 'local a = 1',
      result: {
        type: 'root',
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
            init: [
              {
                type: 'numericLiteral',
                value: 1,
                raw: '1',
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
    },
    {
      source: 'local a local b = a',
      result: {
        type: 'root',
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
            init: [],
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
          {
            type: 'localStatement',
            variables: [
              {
                type: 'identifier',
                name: 'b',
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
              }
            ],
            init: [
              {
                type: 'identifier',
                name: 'a',
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
      source: 'local a, b = 1, 2',
      result: {
        type: 'root',
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
                    column: 7,
                    offset: 6
                  },
                  end: {
                    line: 1,
                    column: 8,
                    offset: 7
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
                    column: 14,
                    offset: 13
                  },
                  end: {
                    line: 1,
                    column: 15,
                    offset: 14
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
                    column: 17,
                    offset: 16
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
      source: 'local a, b, c = 1, 2, 3',
      result: {
        type: 'root',
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
                    column: 7,
                    offset: 6
                  },
                  end: {
                    line: 1,
                    column: 8,
                    offset: 7
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
                    column: 13,
                    offset: 12
                  },
                  end: {
                    line: 1,
                    column: 14,
                    offset: 13
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
                    column: 17,
                    offset: 16
                  },
                  end: {
                    line: 1,
                    column: 18,
                    offset: 17
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
                    column: 20,
                    offset: 19
                  },
                  end: {
                    line: 1,
                    column: 21,
                    offset: 20
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
      source: 'local a, b, c = 1',
      result: {
        type: 'root',
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
                    column: 7,
                    offset: 6
                  },
                  end: {
                    line: 1,
                    column: 8,
                    offset: 7
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
                    column: 13,
                    offset: 12
                  },
                  end: {
                    line: 1,
                    column: 14,
                    offset: 13
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
                    column: 17,
                    offset: 16
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
      source: 'local a = 1, 2, 3',
      result: {
        type: 'root',
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
            init: [
              {
                type: 'numericLiteral',
                value: 1,
                raw: '1',
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
              },
              {
                type: 'numericLiteral',
                value: 2,
                raw: '2',
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
              },
              {
                type: 'numericLiteral',
                value: 3,
                raw: '3',
                position: {
                  start: {
                    line: 1,
                    column: 17,
                    offset: 16
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
      source: 'local a, local',
      result: "[1:9] <name> expected near 'local'"
    },
    {
      source: 'local 1',
      result: "[1:6] <name> expected near '1'"
    },
    {
      source: 'local "foo"',
      result: '[1:6] <name> expected near \'"foo"\''
    },
    {
      source: 'local a = local',
      result: "[1:10] <expression> expected near 'local'"
    },
    {
      source: 'local a, b, =',
      result: "[1:12] <name> expected near '='"
    },
    {
      source: 'local a, b = 1, local',
      result: "[1:16] <expression> expected near 'local'"
    },
    {
      source: 'local a, b = , local',
      result: "[1:13] <expression> expected near ','"
    },
    {
      source: 'local function',
      result: "[1:14] <name> expected near '<eof>'"
    },
    {
      source: 'local function 1',
      result: "[1:15] <name> expected near '1'"
    },
    {
      source: 'local function end',
      result: "[1:15] <name> expected near 'end'"
    },
    {
      source: 'local function a',
      result: "[1:16] '(' expected near '<eof>'"
    },
    {
      source: 'local function a end',
      result: "[1:17] '(' expected near 'end'"
    },
    {
      source: 'local function a( end',
      result: "[1:18] <name> or '...' expected near 'end'"
    },
    {
      source: 'local function a() end',
      result: {
        type: 'root',
        body: [
          {
            type: 'functionDeclaration',
            identifier: {
              type: 'identifier',
              name: 'a',
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
            local: true,
            parameters: [],
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
      source: 'local function a(1',
      result: "[1:17] <name> or '...' expected near '1'"
    },
    {
      source: 'local function a("foo"',
      result: "[1:17] <name> or '...' expected near '\"foo\"'"
    },
    {
      source: 'local function a(p',
      result: "[1:18] ')' expected near '<eof>'"
    },
    {
      source: 'local function a(p,)',
      result: "[1:19] <name> or '...' expected near ')'"
    },
    {
      source: 'local function a(p q',
      result: "[1:19] ')' expected near 'q'"
    },
    {
      source: 'local function a(p) end',
      result: {
        type: 'root',
        body: [
          {
            type: 'functionDeclaration',
            identifier: {
              type: 'identifier',
              name: 'a',
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
            local: true,
            parameters: [
              {
                type: 'identifier',
                name: 'p',
                position: {
                  start: {
                    line: 1,
                    column: 18,
                    offset: 17
                  },
                  end: {
                    line: 1,
                    column: 19,
                    offset: 18
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
      source: 'local function a(p,q) end',
      result: {
        type: 'root',
        body: [
          {
            type: 'functionDeclaration',
            identifier: {
              type: 'identifier',
              name: 'a',
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
            local: true,
            parameters: [
              {
                type: 'identifier',
                name: 'p',
                position: {
                  start: {
                    line: 1,
                    column: 18,
                    offset: 17
                  },
                  end: {
                    line: 1,
                    column: 19,
                    offset: 18
                  }
                }
              },
              {
                type: 'identifier',
                name: 'q',
                position: {
                  start: {
                    line: 1,
                    column: 20,
                    offset: 19
                  },
                  end: {
                    line: 1,
                    column: 21,
                    offset: 20
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
      source: 'local function a(p q) end',
      result: "[1:19] ')' expected near 'q'"
    },
    {
      source: 'local function a(p,q,) end',
      result: "[1:21] <name> or '...' expected near ')'"
    },
    {
      source: 'local function a(p,q,r) end',
      result: {
        type: 'root',
        body: [
          {
            type: 'functionDeclaration',
            identifier: {
              type: 'identifier',
              name: 'a',
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
            local: true,
            parameters: [
              {
                type: 'identifier',
                name: 'p',
                position: {
                  start: {
                    line: 1,
                    column: 18,
                    offset: 17
                  },
                  end: {
                    line: 1,
                    column: 19,
                    offset: 18
                  }
                }
              },
              {
                type: 'identifier',
                name: 'q',
                position: {
                  start: {
                    line: 1,
                    column: 20,
                    offset: 19
                  },
                  end: {
                    line: 1,
                    column: 21,
                    offset: 20
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
                column: 28,
                offset: 27
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
            column: 28,
            offset: 27
          }
        }
      }
    },
    {
      source: 'local function a(p,q,1',
      result: "[1:21] <name> or '...' expected near '1'"
    },
    {
      source: 'local function a(p) do',
      result: "[1:22] 'end' expected near '<eof>'"
    },
    {
      source: 'local function a(p) 1 end',
      result: "[1:20] unexpected number '1' near 'end'"
    },
    {
      source: 'local function a(p) return end',
      result: {
        type: 'root',
        body: [
          {
            type: 'functionDeclaration',
            identifier: {
              type: 'identifier',
              name: 'a',
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
            local: true,
            parameters: [
              {
                type: 'identifier',
                name: 'p',
                position: {
                  start: {
                    line: 1,
                    column: 18,
                    offset: 17
                  },
                  end: {
                    line: 1,
                    column: 19,
                    offset: 18
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
                    column: 21,
                    offset: 20
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
      source: 'local function a(p) return return end',
      result: "[1:27] 'end' expected near 'return'"
    },
    {
      source: 'local function a(p) do end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'functionDeclaration',
            identifier: {
              type: 'identifier',
              name: 'a',
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
            local: true,
            parameters: [
              {
                type: 'identifier',
                name: 'p',
                position: {
                  start: {
                    line: 1,
                    column: 18,
                    offset: 17
                  },
                  end: {
                    line: 1,
                    column: 19,
                    offset: 18
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
                    column: 21,
                    offset: 20
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
      source: 'local function a.',
      result: "[1:16] '(' expected near '.'"
    },
    {
      source: 'local function a:',
      result: "[1:16] '(' expected near ':'"
    },
    {
      source: 'local function a(...) end',
      result: {
        type: 'root',
        body: [
          {
            type: 'functionDeclaration',
            identifier: {
              type: 'identifier',
              name: 'a',
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
            local: true,
            parameters: [
              {
                type: 'varargLiteral',
                value: '...',
                raw: '...',
                position: {
                  start: {
                    line: 1,
                    column: 18,
                    offset: 17
                  },
                  end: {
                    line: 1,
                    column: 21,
                    offset: 20
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
      source: 'local function a(...,',
      result: "[1:20] ')' expected near ','"
    },
    {
      source: 'local function a(p,...) end',
      result: {
        type: 'root',
        body: [
          {
            type: 'functionDeclaration',
            identifier: {
              type: 'identifier',
              name: 'a',
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
            local: true,
            parameters: [
              {
                type: 'identifier',
                name: 'p',
                position: {
                  start: {
                    line: 1,
                    column: 18,
                    offset: 17
                  },
                  end: {
                    line: 1,
                    column: 19,
                    offset: 18
                  }
                }
              },
              {
                type: 'varargLiteral',
                value: '...',
                raw: '...',
                position: {
                  start: {
                    line: 1,
                    column: 20,
                    offset: 19
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
                column: 28,
                offset: 27
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
            column: 28,
            offset: 27
          }
        }
      }
    },
    {
      source: 'local function a(p,q,r,...) end',
      result: {
        type: 'root',
        body: [
          {
            type: 'functionDeclaration',
            identifier: {
              type: 'identifier',
              name: 'a',
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
            local: true,
            parameters: [
              {
                type: 'identifier',
                name: 'p',
                position: {
                  start: {
                    line: 1,
                    column: 18,
                    offset: 17
                  },
                  end: {
                    line: 1,
                    column: 19,
                    offset: 18
                  }
                }
              },
              {
                type: 'identifier',
                name: 'q',
                position: {
                  start: {
                    line: 1,
                    column: 20,
                    offset: 19
                  },
                  end: {
                    line: 1,
                    column: 21,
                    offset: 20
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
              },
              {
                type: 'varargLiteral',
                value: '...',
                raw: '...',
                position: {
                  start: {
                    line: 1,
                    column: 24,
                    offset: 23
                  },
                  end: {
                    line: 1,
                    column: 27,
                    offset: 26
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
      source: 'local function a() local a local b end',
      result: {
        type: 'root',
        body: [
          {
            type: 'functionDeclaration',
            identifier: {
              type: 'identifier',
              name: 'a',
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
            local: true,
            parameters: [],
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
                        column: 26,
                        offset: 25
                      },
                      end: {
                        line: 1,
                        column: 27,
                        offset: 26
                      }
                    }
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 20,
                    offset: 19
                  },
                  end: {
                    line: 1,
                    column: 27,
                    offset: 26
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
                        column: 34,
                        offset: 33
                      },
                      end: {
                        line: 1,
                        column: 35,
                        offset: 34
                      }
                    }
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 28,
                    offset: 27
                  },
                  end: {
                    line: 1,
                    column: 35,
                    offset: 34
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
                column: 39,
                offset: 38
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
            column: 39,
            offset: 38
          }
        }
      }
    },
    {
      source: 'local function a() local a; local b; end',
      result: {
        type: 'root',
        body: [
          {
            type: 'functionDeclaration',
            identifier: {
              type: 'identifier',
              name: 'a',
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
            local: true,
            parameters: [],
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
                        column: 26,
                        offset: 25
                      },
                      end: {
                        line: 1,
                        column: 27,
                        offset: 26
                      }
                    }
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 20,
                    offset: 19
                  },
                  end: {
                    line: 1,
                    column: 27,
                    offset: 26
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
                        column: 35,
                        offset: 34
                      },
                      end: {
                        line: 1,
                        column: 36,
                        offset: 35
                      }
                    }
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 29,
                    offset: 28
                  },
                  end: {
                    line: 1,
                    column: 36,
                    offset: 35
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
                column: 41,
                offset: 40
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
            column: 41,
            offset: 40
          }
        }
      }
    },
    {
      source: 'local function a() end; local function a() end;',
      result: {
        type: 'root',
        body: [
          {
            type: 'functionDeclaration',
            identifier: {
              type: 'identifier',
              name: 'a',
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
            local: true,
            parameters: [],
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
          },
          {
            type: 'functionDeclaration',
            identifier: {
              type: 'identifier',
              name: 'a',
              position: {
                start: {
                  line: 1,
                  column: 40,
                  offset: 39
                },
                end: {
                  line: 1,
                  column: 41,
                  offset: 40
                }
              }
            },
            local: true,
            parameters: [],
            body: [],
            position: {
              start: {
                line: 1,
                column: 25,
                offset: 24
              },
              end: {
                line: 1,
                column: 47,
                offset: 46
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
            column: 48,
            offset: 47
          }
        }
      }
    },
    {
      source: 'local a = { b = { z = 1 } }',
      result: {
        type: 'root',
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
            init: [
              {
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableKeyString',
                    key: {
                      type: 'identifier',
                      name: 'b',
                      position: {
                        start: {
                          line: 1,
                          column: 13,
                          offset: 12
                        },
                        end: {
                          line: 1,
                          column: 14,
                          offset: 13
                        }
                      }
                    },
                    value: {
                      type: 'tableConstructor',
                      fields: [
                        {
                          type: 'tableKeyString',
                          key: {
                            type: 'identifier',
                            name: 'z',
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
                          value: {
                            type: 'numericLiteral',
                            value: 1,
                            raw: '1',
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
                          },
                          position: {
                            start: {
                              line: 1,
                              column: 19,
                              offset: 18
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
                          column: 17,
                          offset: 16
                        },
                        end: {
                          line: 1,
                          column: 26,
                          offset: 25
                        }
                      }
                    },
                    position: {
                      start: {
                        line: 1,
                        column: 13,
                        offset: 12
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
                    column: 11,
                    offset: 10
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
                column: 28,
                offset: 27
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
            column: 28,
            offset: 27
          }
        }
      }
    },
    {
      source: 'local Дождь = {}',
      result: "[1:7] unexpected symbol 'Д' near 'local'"
    },
    {
      source: 'local Дождь = {}',
      result: {
        type: 'root',
        body: [
          {
            type: 'localStatement',
            variables: [
              {
                type: 'identifier',
                name: 'Дождь',
                position: {
                  start: {
                    line: 1,
                    column: 7,
                    offset: 6
                  },
                  end: {
                    line: 1,
                    column: 12,
                    offset: 11
                  }
                }
              }
            ],
            init: [
              {
                type: 'tableConstructor',
                fields: [],
                position: {
                  start: {
                    line: 1,
                    column: 15,
                    offset: 14
                  },
                  end: {
                    line: 1,
                    column: 17,
                    offset: 16
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
                column: 17,
                offset: 16
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
            column: 17,
            offset: 16
          }
        }
      },
      options: {
        extendedIdentifiers: true
      }
    }
  ]
})
