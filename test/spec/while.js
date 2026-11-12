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
})(this, 'while', function (exports) {
  'use strict'

  exports.name = 'while'
  exports.spec = [
    {
      source: 'while',
      result: "[1:5] <expression> expected near '<eof>'"
    },
    {
      source: 'while do',
      result: "[1:6] <expression> expected near 'do'"
    },
    {
      source: 'while =',
      result: "[1:6] <expression> expected near '='"
    },
    {
      source: 'while 1 do',
      result: "[1:10] 'end' expected near '<eof>'"
    },
    {
      source: 'while 1 do end',
      result: {
        type: 'root',
        body: [
          {
            type: 'whileStatement',
            condition: {
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
            body: [],
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
      source: 'while 1 do local a end',
      result: {
        type: 'root',
        body: [
          {
            type: 'whileStatement',
            condition: {
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
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 12,
                    offset: 11
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
      source: 'while 1 do local a local b end',
      result: {
        type: 'root',
        body: [
          {
            type: 'whileStatement',
            condition: {
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
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 12,
                    offset: 11
                  },
                  end: {
                    line: 1,
                    column: 19,
                    offset: 18
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
      source: 'while 1 do local a; local b; end',
      result: {
        type: 'root',
        body: [
          {
            type: 'whileStatement',
            condition: {
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
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 12,
                    offset: 11
                  },
                  end: {
                    line: 1,
                    column: 19,
                    offset: 18
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
                        column: 27,
                        offset: 26
                      },
                      end: {
                        line: 1,
                        column: 28,
                        offset: 27
                      }
                    }
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 21,
                    offset: 20
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
      source: 'while 1 do 2 end',
      result: "[1:11] unexpected number '2' near 'end'"
    },
    {
      source: 'while 1 do "foo" end',
      result: "[1:11] unexpected string '\"foo\"' near 'end'"
    },
    {
      source: 'while true do end',
      result: {
        type: 'root',
        body: [
          {
            type: 'whileStatement',
            condition: {
              type: 'booleanLiteral',
              value: true,
              raw: 'true',
              position: {
                start: {
                  line: 1,
                  column: 7,
                  offset: 6
                },
                end: {
                  line: 1,
                  column: 11,
                  offset: 10
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
      source: 'while 1 do ; end',
      result: "[1:11] unexpected symbol ';' near 'end'"
    },
    {
      source: 'while 1 do while',
      result: "[1:16] <expression> expected near '<eof>'"
    },
    {
      source: 'while 1 end',
      result: "[1:8] 'do' expected near 'end'"
    },
    {
      source: 'while 1 2 do',
      result: "[1:8] 'do' expected near '2'"
    },
    {
      source: 'while 1 = 2 do',
      result: "[1:8] 'do' expected near '='"
    },
    {
      source: 'while 1 do return end',
      result: {
        type: 'root',
        body: [
          {
            type: 'whileStatement',
            condition: {
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
            body: [
              {
                type: 'returnStatement',
                arguments: [],
                position: {
                  start: {
                    line: 1,
                    column: 12,
                    offset: 11
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
      source: 'while 1 do return return end',
      result: "[1:18] 'end' expected near 'return'"
    },
    {
      source: 'while 1 do do end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'whileStatement',
            condition: {
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
            body: [
              {
                type: 'doStatement',
                body: [],
                position: {
                  start: {
                    line: 1,
                    column: 12,
                    offset: 11
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
      source: 'while 1 do do return end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'whileStatement',
            condition: {
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
                    column: 12,
                    offset: 11
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
        comments: [],
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
      source: 'while 1 do break end',
      result: {
        type: 'root',
        body: [
          {
            type: 'whileStatement',
            condition: {
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
            body: [
              {
                type: 'breakStatement',
                position: {
                  start: {
                    line: 1,
                    column: 12,
                    offset: 11
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
      source: 'while 1 do break break end',
      result: "[1:17] 'end' expected near 'break'"
    },
    {
      source: 'while 1 do do break end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'whileStatement',
            condition: {
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
            body: [
              {
                type: 'doStatement',
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
                    column: 12,
                    offset: 11
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
      source: 'while 1 do ; end',
      result: {
        type: 'root',
        body: [
          {
            type: 'whileStatement',
            condition: {
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
      },
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'while 1 do break break end',
      result: {
        type: 'root',
        body: [
          {
            type: 'whileStatement',
            condition: {
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
            body: [
              {
                type: 'breakStatement',
                position: {
                  start: {
                    line: 1,
                    column: 12,
                    offset: 11
                  },
                  end: {
                    line: 1,
                    column: 17,
                    offset: 16
                  }
                }
              },
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
      },
      options: {
        luaVersion: '5.2'
      }
    }
  ]
})
