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
})(this, 'labels', function (exports) {
  'use strict'

  exports.name = 'labels'
  exports.spec = [
    {
      source: 'goto "foo"',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'stringCallExpression',
              base: {
                type: 'identifier',
                name: 'goto',
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 5,
                    offset: 4
                  }
                }
              },
              argument: {
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
              },
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
      source: '::foo::',
      result: "[1:0] unexpected symbol ':' near ':'"
    },
    {
      source: 'goto foo',
      result: "[1:5] '=' expected near 'foo'"
    },
    {
      source: '::foo',
      result: "[1:5] '::' expected near '<eof>'",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: '::foo::',
      result: {
        type: 'root',
        body: [
          {
            type: 'labelStatement',
            label: {
              type: 'identifier',
              name: 'foo',
              position: {
                start: {
                  line: 1,
                  column: 3,
                  offset: 2
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
      source: '::break::',
      result: "[1:2] <name> expected near 'break'",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'goto "foo"',
      result: '[1:5] <name> expected near \'"foo"\'',
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'goto hasOwnProperty',
      result: "[1:0] no visible label 'hasOwnProperty' for <goto>",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'goto x ::x::',
      result: {
        type: 'root',
        body: [
          {
            type: 'gotoStatement',
            label: {
              type: 'identifier',
              name: 'x',
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
            },
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
          },
          {
            type: 'labelStatement',
            label: {
              type: 'identifier',
              name: 'x',
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
      },
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'goto x do ::x:: end',
      result: "[1:0] no visible label 'x' for <goto>",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'do ::l1:: end goto l1',
      result: "[1:14] no visible label 'l1' for <goto>",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: '::x:: ::x::',
      result: "[1:8] label 'x' already defined on line 1",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'goto x local a ::x:: f()',
      result: "[1:0] <goto x> jumps into the scope of local 'a'",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'goto x local a, b ::x:: f()',
      result: "[1:0] <goto x> jumps into the scope of local 'a'",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'goto x local function a() end ::x:: f()',
      result: "[1:0] <goto x> jumps into the scope of local 'a'",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'do goto x local a end ::x:: f()',
      result: {
        type: 'root',
        body: [
          {
            type: 'doStatement',
            body: [
              {
                type: 'gotoStatement',
                label: {
                  type: 'identifier',
                  name: 'x',
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
                position: {
                  start: {
                    line: 1,
                    column: 4,
                    offset: 3
                  },
                  end: {
                    line: 1,
                    column: 10,
                    offset: 9
                  }
                }
              },
              {
                type: 'localStatement',
                variables: [
                  {
                    type: 'identifier',
                    name: 'a',
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
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 11,
                    offset: 10
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
          },
          {
            type: 'labelStatement',
            label: {
              type: 'identifier',
              name: 'x',
              position: {
                start: {
                  line: 1,
                  column: 25,
                  offset: 24
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
                column: 23,
                offset: 22
              },
              end: {
                line: 1,
                column: 28,
                offset: 27
              }
            }
          },
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'identifier',
                name: 'f',
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
              },
              arguments: [],
              position: {
                start: {
                  line: 1,
                  column: 29,
                  offset: 28
                },
                end: {
                  line: 1,
                  column: 32,
                  offset: 31
                }
              }
            },
            position: {
              start: {
                line: 1,
                column: 29,
                offset: 28
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
    },
    {
      source: 'do local a goto x end local b ::x:: f()',
      result: "[1:11] <goto x> jumps into the scope of local 'b'",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'do goto x local a ::x:: end',
      result: {
        type: 'root',
        body: [
          {
            type: 'doStatement',
            body: [
              {
                type: 'gotoStatement',
                label: {
                  type: 'identifier',
                  name: 'x',
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
                position: {
                  start: {
                    line: 1,
                    column: 4,
                    offset: 3
                  },
                  end: {
                    line: 1,
                    column: 10,
                    offset: 9
                  }
                }
              },
              {
                type: 'localStatement',
                variables: [
                  {
                    type: 'identifier',
                    name: 'a',
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
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 11,
                    offset: 10
                  },
                  end: {
                    line: 1,
                    column: 18,
                    offset: 17
                  }
                }
              },
              {
                type: 'labelStatement',
                label: {
                  type: 'identifier',
                  name: 'x',
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
      },
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'while 0 do goto x local a ::x:: end',
      result: {
        type: 'root',
        body: [
          {
            type: 'whileStatement',
            condition: {
              type: 'numericLiteral',
              value: 0,
              raw: '0',
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
                type: 'gotoStatement',
                label: {
                  type: 'identifier',
                  name: 'x',
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
              },
              {
                type: 'localStatement',
                variables: [
                  {
                    type: 'identifier',
                    name: 'a',
                    position: {
                      start: {
                        line: 1,
                        column: 25,
                        offset: 24
                      },
                      end: {
                        line: 1,
                        column: 26,
                        offset: 25
                      }
                    }
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 19,
                    offset: 18
                  },
                  end: {
                    line: 1,
                    column: 26,
                    offset: 25
                  }
                }
              },
              {
                type: 'labelStatement',
                label: {
                  type: 'identifier',
                  name: 'x',
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 27,
                    offset: 26
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
      },
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'repeat goto x local a ::x:: until 0',
      result: "[1:7] <goto x> jumps into the scope of local 'a'",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'do goto x local a ::x:: ::y:: ::z:: end',
      result: {
        type: 'root',
        body: [
          {
            type: 'doStatement',
            body: [
              {
                type: 'gotoStatement',
                label: {
                  type: 'identifier',
                  name: 'x',
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
                position: {
                  start: {
                    line: 1,
                    column: 4,
                    offset: 3
                  },
                  end: {
                    line: 1,
                    column: 10,
                    offset: 9
                  }
                }
              },
              {
                type: 'localStatement',
                variables: [
                  {
                    type: 'identifier',
                    name: 'a',
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
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 11,
                    offset: 10
                  },
                  end: {
                    line: 1,
                    column: 18,
                    offset: 17
                  }
                }
              },
              {
                type: 'labelStatement',
                label: {
                  type: 'identifier',
                  name: 'x',
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
              },
              {
                type: 'labelStatement',
                label: {
                  type: 'identifier',
                  name: 'y',
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 25,
                    offset: 24
                  },
                  end: {
                    line: 1,
                    column: 30,
                    offset: 29
                  }
                }
              },
              {
                type: 'labelStatement',
                label: {
                  type: 'identifier',
                  name: 'z',
                  position: {
                    start: {
                      line: 1,
                      column: 33,
                      offset: 32
                    },
                    end: {
                      line: 1,
                      column: 34,
                      offset: 33
                    }
                  }
                },
                position: {
                  start: {
                    line: 1,
                    column: 31,
                    offset: 30
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
                column: 40,
                offset: 39
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
            column: 40,
            offset: 39
          }
        }
      },
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'do do ::x:: end do goto x end end',
      result: "[1:19] no visible label 'x' for <goto>",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'do do goto x end do ::x:: end end',
      result: "[1:6] no visible label 'x' for <goto>",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'do do goto x end do end ::x:: end',
      result: {
        type: 'root',
        body: [
          {
            type: 'doStatement',
            body: [
              {
                type: 'doStatement',
                body: [
                  {
                    type: 'gotoStatement',
                    label: {
                      type: 'identifier',
                      name: 'x',
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
                    position: {
                      start: {
                        line: 1,
                        column: 7,
                        offset: 6
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
                    column: 4,
                    offset: 3
                  },
                  end: {
                    line: 1,
                    column: 17,
                    offset: 16
                  }
                }
              },
              {
                type: 'doStatement',
                body: [],
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
              },
              {
                type: 'labelStatement',
                label: {
                  type: 'identifier',
                  name: 'x',
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 25,
                    offset: 24
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
      },
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: '::foo::',
      result: {
        type: 'root',
        body: [
          {
            type: 'labelStatement',
            label: {
              type: 'identifier',
              name: 'foo',
              position: {
                start: {
                  line: 1,
                  column: 3,
                  offset: 2
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
        luaVersion: 'LuaJIT'
      }
    },
    {
      source: 'goto "foo"',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'stringCallExpression',
              base: {
                type: 'identifier',
                name: 'goto',
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 5,
                    offset: 4
                  }
                }
              },
              argument: {
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
              },
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
      },
      options: {
        luaVersion: 'LuaJIT'
      }
    },
    {
      source: 'goto foo',
      result: "[1:0] no visible label 'foo' for <goto>",
      options: {
        luaVersion: 'LuaJIT'
      }
    },
    {
      source: '::foo:: goto foo',
      result: {
        type: 'root',
        body: [
          {
            type: 'labelStatement',
            label: {
              type: 'identifier',
              name: 'foo',
              position: {
                start: {
                  line: 1,
                  column: 3,
                  offset: 2
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
            type: 'gotoStatement',
            label: {
              type: 'identifier',
              name: 'foo',
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
            },
            position: {
              start: {
                line: 1,
                column: 9,
                offset: 8
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
        luaVersion: 'LuaJIT'
      }
    },
    {
      source: 'goto goto',
      result: "[1:5] '=' expected near 'goto'",
      options: {
        luaVersion: 'LuaJIT'
      }
    },
    {
      source: '::goto:: -- sic!',
      result: {
        type: 'root',
        body: [
          {
            type: 'labelStatement',
            label: {
              type: 'identifier',
              name: 'goto',
              position: {
                start: {
                  line: 1,
                  column: 3,
                  offset: 2
                },
                end: {
                  line: 1,
                  column: 7,
                  offset: 6
                }
              }
            },
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
        comments: [
          {
            type: 'comment',
            value: ' sic!',
            raw: '-- sic!',
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
      },
      options: {
        luaVersion: 'LuaJIT'
      }
    }
  ]
})
