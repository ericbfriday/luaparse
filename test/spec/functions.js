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
})(this, 'functions', function (exports) {
  'use strict'

  exports.name = 'functions'
  exports.spec = [
    {
      source: 'function',
      result: "[1:8] <name> expected near '<eof>'"
    },
    {
      source: 'function 1',
      result: "[1:9] <name> expected near '1'"
    },
    {
      source: 'function end',
      result: "[1:9] <name> expected near 'end'"
    },
    {
      source: 'function a',
      result: "[1:10] '(' expected near '<eof>'"
    },
    {
      source: 'function a end',
      result: "[1:11] '(' expected near 'end'"
    },
    {
      source: 'function a( end',
      result: "[1:12] <name> or '...' expected near 'end'"
    },
    {
      source: 'function a() end',
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
            local: false,
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
      }
    },
    {
      source: 'function a(1',
      result: "[1:11] <name> or '...' expected near '1'"
    },
    {
      source: 'function a("foo"',
      result: "[1:11] <name> or '...' expected near '\"foo\"'"
    },
    {
      source: 'function a(p',
      result: "[1:12] ')' expected near '<eof>'"
    },
    {
      source: 'function a(p,)',
      result: "[1:13] <name> or '...' expected near ')'"
    },
    {
      source: 'function a(p q',
      result: "[1:13] ')' expected near 'q'"
    },
    {
      source: 'function a(p) end',
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
            local: false,
            parameters: [
              {
                type: 'identifier',
                name: 'p',
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
      source: 'function a(p,q) end',
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
            local: false,
            parameters: [
              {
                type: 'identifier',
                name: 'p',
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
                name: 'q',
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
      source: 'function a(p q) end',
      result: "[1:13] ')' expected near 'q'"
    },
    {
      source: 'function a(p,q,) end',
      result: "[1:15] <name> or '...' expected near ')'"
    },
    {
      source: 'function a(p,q,r) end',
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
            local: false,
            parameters: [
              {
                type: 'identifier',
                name: 'p',
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
                name: 'q',
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
                name: 'r',
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
      source: 'function a(p,q,1',
      result: "[1:15] <name> or '...' expected near '1'"
    },
    {
      source: 'function a(p) do',
      result: "[1:16] 'end' expected near '<eof>'"
    },
    {
      source: 'function a(p) 1 end',
      result: "[1:14] unexpected number '1' near 'end'"
    },
    {
      source: 'function a(p) return end',
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
            local: false,
            parameters: [
              {
                type: 'identifier',
                name: 'p',
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
      source: 'function a(p) return return end',
      result: "[1:21] 'end' expected near 'return'"
    },
    {
      source: 'function a(p) do end end',
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
            local: false,
            parameters: [
              {
                type: 'identifier',
                name: 'p',
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
      source: 'function a.(',
      result: "[1:11] <name> expected near '('"
    },
    {
      source: 'function a.1',
      result: "[1:10] '(' expected near '.1'"
    },
    {
      source: 'function a.b() end',
      result: {
        type: 'root',
        body: [
          {
            type: 'functionDeclaration',
            identifier: {
              type: 'memberExpression',
              indexer: '.',
              identifier: {
                type: 'identifier',
                name: 'b',
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
              base: {
                type: 'identifier',
                name: 'a',
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
              position: {
                start: {
                  line: 1,
                  column: 10,
                  offset: 9
                },
                end: {
                  line: 1,
                  column: 13,
                  offset: 12
                }
              }
            },
            local: false,
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
      source: 'function a.b,',
      result: "[1:12] '(' expected near ','"
    },
    {
      source: 'function a.b.(',
      result: "[1:13] <name> expected near '('"
    },
    {
      source: 'function a.b.c.d() end',
      result: {
        type: 'root',
        body: [
          {
            type: 'functionDeclaration',
            identifier: {
              type: 'memberExpression',
              indexer: '.',
              identifier: {
                type: 'identifier',
                name: 'd',
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
              base: {
                type: 'memberExpression',
                indexer: '.',
                identifier: {
                  type: 'identifier',
                  name: 'c',
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
                base: {
                  type: 'memberExpression',
                  indexer: '.',
                  identifier: {
                    type: 'identifier',
                    name: 'b',
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
                  base: {
                    type: 'identifier',
                    name: 'a',
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
                  position: {
                    start: {
                      line: 1,
                      column: 10,
                      offset: 9
                    },
                    end: {
                      line: 1,
                      column: 13,
                      offset: 12
                    }
                  }
                },
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
              },
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
            local: false,
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
      source: 'function a:',
      result: "[1:11] <name> expected near '<eof>'"
    },
    {
      source: 'function a:1',
      result: "[1:11] <name> expected near '1'"
    },
    {
      source: 'function a:b() end',
      result: {
        type: 'root',
        body: [
          {
            type: 'functionDeclaration',
            identifier: {
              type: 'memberExpression',
              indexer: ':',
              identifier: {
                type: 'identifier',
                name: 'b',
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
              base: {
                type: 'identifier',
                name: 'a',
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
              position: {
                start: {
                  line: 1,
                  column: 10,
                  offset: 9
                },
                end: {
                  line: 1,
                  column: 13,
                  offset: 12
                }
              }
            },
            local: false,
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
      source: 'function a:b:',
      result: "[1:12] '(' expected near ':'"
    },
    {
      source: 'function a:b.',
      result: "[1:12] '(' expected near '.'"
    },
    {
      source: 'function a.b.c:d() end',
      result: {
        type: 'root',
        body: [
          {
            type: 'functionDeclaration',
            identifier: {
              type: 'memberExpression',
              indexer: ':',
              identifier: {
                type: 'identifier',
                name: 'd',
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
              base: {
                type: 'memberExpression',
                indexer: '.',
                identifier: {
                  type: 'identifier',
                  name: 'c',
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
                base: {
                  type: 'memberExpression',
                  indexer: '.',
                  identifier: {
                    type: 'identifier',
                    name: 'b',
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
                  base: {
                    type: 'identifier',
                    name: 'a',
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
                  position: {
                    start: {
                      line: 1,
                      column: 10,
                      offset: 9
                    },
                    end: {
                      line: 1,
                      column: 13,
                      offset: 12
                    }
                  }
                },
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
              },
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
            local: false,
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
      source: 'function a(...) end',
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
            local: false,
            parameters: [
              {
                type: 'varargLiteral',
                value: '...',
                raw: '...',
                position: {
                  start: {
                    line: 1,
                    column: 12,
                    offset: 11
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
      source: 'function a(...,',
      result: "[1:14] ')' expected near ','"
    },
    {
      source: 'function a(p,...) end',
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
            local: false,
            parameters: [
              {
                type: 'identifier',
                name: 'p',
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
      source: 'function a(...,p) end',
      result: "[1:14] ')' expected near ','"
    },
    {
      source: 'function a(p,q,r,...) end',
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
            local: false,
            parameters: [
              {
                type: 'identifier',
                name: 'p',
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
                name: 'q',
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
                name: 'r',
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
      source: 'function a() local a local b end',
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
            local: false,
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
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 14,
                    offset: 13
                  },
                  end: {
                    line: 1,
                    column: 21,
                    offset: 20
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
                        column: 28,
                        offset: 27
                      },
                      end: {
                        line: 1,
                        column: 29,
                        offset: 28
                      }
                    }
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 22,
                    offset: 21
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
      source: 'function a() local a; local b; end',
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
            local: false,
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
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 14,
                    offset: 13
                  },
                  end: {
                    line: 1,
                    column: 21,
                    offset: 20
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
                column: 35,
                offset: 34
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
            column: 35,
            offset: 34
          }
        }
      }
    },
    {
      source: 'function a() end; function a() end;',
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
            local: false,
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
                column: 17,
                offset: 16
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
                  column: 28,
                  offset: 27
                },
                end: {
                  line: 1,
                  column: 29,
                  offset: 28
                }
              }
            },
            local: false,
            parameters: [],
            body: [],
            position: {
              start: {
                line: 1,
                column: 19,
                offset: 18
              },
              end: {
                line: 1,
                column: 35,
                offset: 34
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
      source: 'return ...',
      result: {
        type: 'root',
        body: [
          {
            type: 'returnStatement',
            arguments: [
              {
                type: 'varargLiteral',
                value: '...',
                raw: '...',
                position: {
                  start: {
                    line: 1,
                    column: 8,
                    offset: 7
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
      source: 'function a(...) return ... end',
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
            local: false,
            parameters: [
              {
                type: 'varargLiteral',
                value: '...',
                raw: '...',
                position: {
                  start: {
                    line: 1,
                    column: 12,
                    offset: 11
                  },
                  end: {
                    line: 1,
                    column: 15,
                    offset: 14
                  }
                }
              }
            ],
            body: [
              {
                type: 'returnStatement',
                arguments: [
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
                position: {
                  start: {
                    line: 1,
                    column: 17,
                    offset: 16
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
      source: 'function a() return ... end',
      result: "[1:20] cannot use '...' outside a vararg function near '...'"
    },
    {
      source: 'function a(...) function b() return ... end end',
      result: "[1:36] cannot use '...' outside a vararg function near '...'"
    }
  ]
})
