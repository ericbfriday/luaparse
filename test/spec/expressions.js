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
})(this, 'expressions', function (exports) {
  'use strict'

  exports.name = 'expressions'
  exports.spec = [
    {
      source: 'a =',
      result: "[1:3] <expression> expected near '<eof>'"
    },
    {
      source: 'a = [[foo]]',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'stringLiteral',
                value: null,
                raw: '[[foo]]',
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
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
      source: 'a = {}',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'tableConstructor',
                fields: [],
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
                  },
                  end: {
                    line: 1,
                    column: 7,
                    offset: 6
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
      source: 'a = (a)',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'identifier',
                name: 'a',
                position: {
                  start: {
                    line: 1,
                    column: 6,
                    offset: 5
                  },
                  end: {
                    line: 1,
                    column: 7,
                    offset: 6
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
      source: 'a = (nil)',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'nilLiteral',
                value: null,
                raw: 'nil',
                position: {
                  start: {
                    line: 1,
                    column: 6,
                    offset: 5
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
                column: 10,
                offset: 9
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
            column: 10,
            offset: 9
          }
        }
      }
    },
    {
      source: 'a = (true)',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'booleanLiteral',
                value: true,
                raw: 'true',
                position: {
                  start: {
                    line: 1,
                    column: 6,
                    offset: 5
                  },
                  end: {
                    line: 1,
                    column: 10,
                    offset: 9
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
                column: 11,
                offset: 10
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
            column: 11,
            offset: 10
          }
        }
      }
    },
    {
      source: 'a = (1)',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
                    column: 6,
                    offset: 5
                  },
                  end: {
                    line: 1,
                    column: 7,
                    offset: 6
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
      source: 'a = ("foo")',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'stringLiteral',
                value: null,
                raw: '"foo"',
                position: {
                  start: {
                    line: 1,
                    column: 6,
                    offset: 5
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
    },
    {
      source: 'a = ([[foo]])',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'stringLiteral',
                value: null,
                raw: '[[foo]]',
                position: {
                  start: {
                    line: 1,
                    column: 6,
                    offset: 5
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
      source: 'a = ({})',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'tableConstructor',
                fields: [],
                position: {
                  start: {
                    line: 1,
                    column: 6,
                    offset: 5
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
      source: 'a = a.b',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'memberExpression',
                indexer: '.',
                identifier: {
                  type: 'identifier',
                  name: 'b',
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
                base: {
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
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
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
      source: 'a = a.b.',
      result: "[1:8] <name> expected near '<eof>'"
    },
    {
      source: 'a = a.b.c',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'memberExpression',
                indexer: '.',
                identifier: {
                  type: 'identifier',
                  name: 'c',
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
                base: {
                  type: 'memberExpression',
                  indexer: '.',
                  identifier: {
                    type: 'identifier',
                    name: 'b',
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
                  base: {
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
                  position: {
                    start: {
                      line: 1,
                      column: 5,
                      offset: 4
                    },
                    end: {
                      line: 1,
                      column: 8,
                      offset: 7
                    }
                  }
                },
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
                  },
                  end: {
                    line: 1,
                    column: 10,
                    offset: 9
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
                column: 10,
                offset: 9
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
            column: 10,
            offset: 9
          }
        }
      }
    },
    {
      source: 'a = a:b',
      result: "[1:7] function arguments expected near '<eof>'"
    },
    {
      source: 'a = a[]',
      result: "[1:6] <expression> expected near ']'"
    },
    {
      source: 'a = a[b]',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'indexExpression',
                base: {
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
                index: {
                  type: 'identifier',
                  name: 'b',
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
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
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
      source: 'a = a[1]',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'indexExpression',
                base: {
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
                index: {
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
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
      source: 'a = a["foo"]',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'indexExpression',
                base: {
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
                index: {
                  type: 'stringLiteral',
                  value: null,
                  raw: '"foo"',
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
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
      source: 'a = ()',
      result: "[1:5] <expression> expected near ')'"
    },
    {
      source: 'a = function',
      result: "[1:12] '(' expected near '<eof>'"
    },
    {
      source: 'a = function 1',
      result: "[1:13] '(' expected near '1'"
    },
    {
      source: 'a = function a',
      result: "[1:13] '(' expected near 'a'"
    },
    {
      source: 'a = function end',
      result: "[1:13] '(' expected near 'end'"
    },
    {
      source: 'a = function(',
      result: "[1:13] <name> or '...' expected near '<eof>'"
    },
    {
      source: 'a = function() end',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'functionDeclaration',
                identifier: null,
                local: false,
                parameters: [],
                body: [],
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
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
                line: 1,
                column: 19,
                offset: 18
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
            column: 19,
            offset: 18
          }
        }
      }
    },
    {
      source: 'a = function(1',
      result: "[1:13] <name> or '...' expected near '1'"
    },
    {
      source: 'a = function(p) end',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'functionDeclaration',
                identifier: null,
                local: false,
                parameters: [
                  {
                    type: 'identifier',
                    name: 'p',
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
                body: [],
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
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
      source: 'a = function(p,q) end',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'functionDeclaration',
                identifier: null,
                local: false,
                parameters: [
                  {
                    type: 'identifier',
                    name: 'p',
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
                    type: 'identifier',
                    name: 'q',
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
                    column: 5,
                    offset: 4
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
      source: 'a = function(p q) end',
      result: "[1:15] ')' expected near 'q'"
    },
    {
      source: 'a = function(p,)',
      result: "[1:15] <name> or '...' expected near ')'"
    },
    {
      source: 'a = function(p q',
      result: "[1:15] ')' expected near 'q'"
    },
    {
      source: 'a = function(p,q,r) end',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'functionDeclaration',
                identifier: null,
                local: false,
                parameters: [
                  {
                    type: 'identifier',
                    name: 'p',
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
                    type: 'identifier',
                    name: 'q',
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
                    name: 'r',
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
                    column: 5,
                    offset: 4
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
      source: 'a = function(p,q,1',
      result: "[1:17] <name> or '...' expected near '1'"
    },
    {
      source: 'a = function(...) end',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'functionDeclaration',
                identifier: null,
                local: false,
                parameters: [
                  {
                    type: 'varargLiteral',
                    value: '...',
                    raw: '...',
                    position: {
                      start: {
                        line: 1,
                        column: 14,
                        offset: 13
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
                    column: 5,
                    offset: 4
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
      source: 'a = function(...,',
      result: "[1:16] ')' expected near ','"
    },
    {
      source: 'a = function(p,...) end',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'functionDeclaration',
                identifier: null,
                local: false,
                parameters: [
                  {
                    type: 'identifier',
                    name: 'p',
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
                    type: 'varargLiteral',
                    value: '...',
                    raw: '...',
                    position: {
                      start: {
                        line: 1,
                        column: 16,
                        offset: 15
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
                    column: 5,
                    offset: 4
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
      source: 'a = function(p,q,r,...) end',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'functionDeclaration',
                identifier: null,
                local: false,
                parameters: [
                  {
                    type: 'identifier',
                    name: 'p',
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
                    type: 'identifier',
                    name: 'q',
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
                    name: 'r',
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
                    column: 5,
                    offset: 4
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
      source: "a = {'-'}",
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableValue',
                    value: {
                      type: 'stringLiteral',
                      value: null,
                      raw: "'-'",
                      position: {
                        start: {
                          line: 1,
                          column: 6,
                          offset: 5
                        },
                        end: {
                          line: 1,
                          column: 9,
                          offset: 8
                        }
                      }
                    },
                    position: {
                      start: {
                        line: 1,
                        column: 6,
                        offset: 5
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
                    column: 5,
                    offset: 4
                  },
                  end: {
                    line: 1,
                    column: 10,
                    offset: 9
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
                column: 10,
                offset: 9
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
            column: 10,
            offset: 9
          }
        }
      }
    },
    {
      source: "a = {'not'}",
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableValue',
                    value: {
                      type: 'stringLiteral',
                      value: null,
                      raw: "'not'",
                      position: {
                        start: {
                          line: 1,
                          column: 6,
                          offset: 5
                        },
                        end: {
                          line: 1,
                          column: 11,
                          offset: 10
                        }
                      }
                    },
                    position: {
                      start: {
                        line: 1,
                        column: 6,
                        offset: 5
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
                    column: 5,
                    offset: 4
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
      source: 'a = {not true}',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'a',
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
              }
            ],
            init: [
              {
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableValue',
                    value: {
                      type: 'unaryExpression',
                      operator: 'not',
                      argument: {
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
                      },
                      position: {
                        start: {
                          line: 1,
                          column: 6,
                          offset: 5
                        },
                        end: {
                          line: 1,
                          column: 14,
                          offset: 13
                        }
                      }
                    },
                    position: {
                      start: {
                        line: 1,
                        column: 6,
                        offset: 5
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
                    column: 5,
                    offset: 4
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
    }
  ]
})
