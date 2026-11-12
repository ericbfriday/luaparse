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
})(this, 'scope', function (exports) {
  'use strict'

  exports.name = 'scope'
  exports.spec = [
    {
      source: 'local foo = 1 do foo = 2 end',
      result: {
        type: 'root',
        body: [
          {
            type: 'localStatement',
            variables: [
              {
                type: 'identifier',
                name: 'foo',
                position: {
                  start: {
                    line: 1,
                    column: 7,
                    offset: 6
                  },
                  end: {
                    line: 1,
                    column: 10,
                    offset: 9
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
          },
          {
            type: 'doStatement',
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
                init: [
                  {
                    type: 'numericLiteral',
                    value: 2,
                    raw: '2',
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
            position: {
              start: {
                line: 1,
                column: 15,
                offset: 14
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
      source: 'do local foo = 1 end foo = 2',
      result: {
        type: 'root',
        body: [
          {
            type: 'doStatement',
            body: [
              {
                type: 'localStatement',
                variables: [
                  {
                    type: 'identifier',
                    name: 'foo',
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
          },
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'foo',
                position: {
                  start: {
                    line: 1,
                    column: 22,
                    offset: 21
                  },
                  end: {
                    line: 1,
                    column: 25,
                    offset: 24
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
      source: 'do local foo = 1 end do foo = 2 end',
      result: {
        type: 'root',
        body: [
          {
            type: 'doStatement',
            body: [
              {
                type: 'localStatement',
                variables: [
                  {
                    type: 'identifier',
                    name: 'foo',
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
          },
          {
            type: 'doStatement',
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
                        column: 25,
                        offset: 24
                      },
                      end: {
                        line: 1,
                        column: 28,
                        offset: 27
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
                column: 22,
                offset: 21
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
      source: 'local foo do foo = 1 do foo = 2 end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'localStatement',
            variables: [
              {
                type: 'identifier',
                name: 'foo',
                position: {
                  start: {
                    line: 1,
                    column: 7,
                    offset: 6
                  },
                  end: {
                    line: 1,
                    column: 10,
                    offset: 9
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
                column: 10,
                offset: 9
              }
            }
          },
          {
            type: 'doStatement',
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
                init: [
                  {
                    type: 'numericLiteral',
                    value: 1,
                    raw: '1',
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
                type: 'doStatement',
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
                            column: 25,
                            offset: 24
                          },
                          end: {
                            line: 1,
                            column: 28,
                            offset: 27
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
                    column: 22,
                    offset: 21
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
                column: 11,
                offset: 10
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
      }
    },
    {
      source: 'local function foo() end foo()',
      result: {
        type: 'root',
        body: [
          {
            type: 'functionDeclaration',
            identifier: {
              type: 'identifier',
              name: 'foo',
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
                column: 25,
                offset: 24
              }
            }
          },
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'identifier',
                name: 'foo',
                position: {
                  start: {
                    line: 1,
                    column: 26,
                    offset: 25
                  },
                  end: {
                    line: 1,
                    column: 29,
                    offset: 28
                  }
                }
              },
              arguments: [],
              position: {
                start: {
                  line: 1,
                  column: 26,
                  offset: 25
                },
                end: {
                  line: 1,
                  column: 31,
                  offset: 30
                }
              }
            },
            position: {
              start: {
                line: 1,
                column: 26,
                offset: 25
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
      source: 'local a = { a }',
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
                    type: 'tableValue',
                    value: {
                      type: 'identifier',
                      name: 'a',
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
                position: {
                  start: {
                    line: 1,
                    column: 11,
                    offset: 10
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
        comments: [],
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
    },
    {
      source: 'local b = { b, b.a, b[a], b:a() }',
      result: {
        type: 'root',
        body: [
          {
            type: 'localStatement',
            variables: [
              {
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
              }
            ],
            init: [
              {
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableValue',
                    value: {
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
                  {
                    type: 'tableValue',
                    value: {
                      type: 'memberExpression',
                      indexer: '.',
                      identifier: {
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
                      },
                      base: {
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
                      },
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
                    },
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
                  },
                  {
                    type: 'tableValue',
                    value: {
                      type: 'indexExpression',
                      base: {
                        type: 'identifier',
                        name: 'b',
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
                      index: {
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
                      },
                      position: {
                        start: {
                          line: 1,
                          column: 21,
                          offset: 20
                        },
                        end: {
                          line: 1,
                          column: 25,
                          offset: 24
                        }
                      }
                    },
                    position: {
                      start: {
                        line: 1,
                        column: 21,
                        offset: 20
                      },
                      end: {
                        line: 1,
                        column: 25,
                        offset: 24
                      }
                    }
                  },
                  {
                    type: 'tableValue',
                    value: {
                      type: 'callExpression',
                      base: {
                        type: 'memberExpression',
                        indexer: ':',
                        identifier: {
                          type: 'identifier',
                          name: 'a',
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
                        base: {
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
                        },
                        position: {
                          start: {
                            line: 1,
                            column: 27,
                            offset: 26
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
                          column: 27,
                          offset: 26
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
                    column: 11,
                    offset: 10
                  },
                  end: {
                    line: 1,
                    column: 34,
                    offset: 33
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
      source: 'local b = {} local a = { b, b.a, b[a], b:a() }',
      result: {
        type: 'root',
        body: [
          {
            type: 'localStatement',
            variables: [
              {
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
              }
            ],
            init: [
              {
                type: 'tableConstructor',
                fields: [],
                position: {
                  start: {
                    line: 1,
                    column: 11,
                    offset: 10
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
            init: [
              {
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableValue',
                    value: {
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
                    },
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
                  },
                  {
                    type: 'tableValue',
                    value: {
                      type: 'memberExpression',
                      indexer: '.',
                      identifier: {
                        type: 'identifier',
                        name: 'a',
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
                      },
                      base: {
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
                  },
                  {
                    type: 'tableValue',
                    value: {
                      type: 'indexExpression',
                      base: {
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
                      },
                      index: {
                        type: 'identifier',
                        name: 'a',
                        position: {
                          start: {
                            line: 1,
                            column: 36,
                            offset: 35
                          },
                          end: {
                            line: 1,
                            column: 37,
                            offset: 36
                          }
                        }
                      },
                      position: {
                        start: {
                          line: 1,
                          column: 34,
                          offset: 33
                        },
                        end: {
                          line: 1,
                          column: 38,
                          offset: 37
                        }
                      }
                    },
                    position: {
                      start: {
                        line: 1,
                        column: 34,
                        offset: 33
                      },
                      end: {
                        line: 1,
                        column: 38,
                        offset: 37
                      }
                    }
                  },
                  {
                    type: 'tableValue',
                    value: {
                      type: 'callExpression',
                      base: {
                        type: 'memberExpression',
                        indexer: ':',
                        identifier: {
                          type: 'identifier',
                          name: 'a',
                          position: {
                            start: {
                              line: 1,
                              column: 42,
                              offset: 41
                            },
                            end: {
                              line: 1,
                              column: 43,
                              offset: 42
                            }
                          }
                        },
                        base: {
                          type: 'identifier',
                          name: 'b',
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
                        position: {
                          start: {
                            line: 1,
                            column: 40,
                            offset: 39
                          },
                          end: {
                            line: 1,
                            column: 43,
                            offset: 42
                          }
                        }
                      },
                      arguments: [],
                      position: {
                        start: {
                          line: 1,
                          column: 40,
                          offset: 39
                        },
                        end: {
                          line: 1,
                          column: 45,
                          offset: 44
                        }
                      }
                    },
                    position: {
                      start: {
                        line: 1,
                        column: 40,
                        offset: 39
                      },
                      end: {
                        line: 1,
                        column: 45,
                        offset: 44
                      }
                    }
                  }
                ],
                position: {
                  start: {
                    line: 1,
                    column: 24,
                    offset: 23
                  },
                  end: {
                    line: 1,
                    column: 47,
                    offset: 46
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
            column: 47,
            offset: 46
          }
        }
      }
    },
    {
      source: 'local c local a = { b[c] }',
      result: {
        type: 'root',
        body: [
          {
            type: 'localStatement',
            variables: [
              {
                type: 'identifier',
                name: 'c',
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
                name: 'a',
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
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableValue',
                    value: {
                      type: 'indexExpression',
                      base: {
                        type: 'identifier',
                        name: 'b',
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
                      index: {
                        type: 'identifier',
                        name: 'c',
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
                          column: 21,
                          offset: 20
                        },
                        end: {
                          line: 1,
                          column: 25,
                          offset: 24
                        }
                      }
                    },
                    position: {
                      start: {
                        line: 1,
                        column: 21,
                        offset: 20
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
                    column: 19,
                    offset: 18
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
                column: 9,
                offset: 8
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
      source: 'local a = function() end a()',
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
                type: 'functionDeclaration',
                identifier: null,
                local: false,
                parameters: [],
                body: [],
                position: {
                  start: {
                    line: 1,
                    column: 11,
                    offset: 10
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
                column: 25,
                offset: 24
              }
            }
          },
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
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
              },
              arguments: [],
              position: {
                start: {
                  line: 1,
                  column: 26,
                  offset: 25
                },
                end: {
                  line: 1,
                  column: 29,
                  offset: 28
                }
              }
            },
            position: {
              start: {
                line: 1,
                column: 26,
                offset: 25
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
      source: 'local a, b = 1, a',
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
      source: 'local a, b = 1, function() b = 2 end',
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
                type: 'functionDeclaration',
                identifier: null,
                local: false,
                parameters: [],
                body: [
                  {
                    type: 'assignmentStatement',
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
                    init: [
                      {
                        type: 'numericLiteral',
                        value: 2,
                        raw: '2',
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
                    position: {
                      start: {
                        line: 1,
                        column: 28,
                        offset: 27
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
                    column: 17,
                    offset: 16
                  },
                  end: {
                    line: 1,
                    column: 37,
                    offset: 36
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
                column: 37,
                offset: 36
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
            column: 37,
            offset: 36
          }
        }
      }
    },
    {
      source: 'local a (a):b():c()',
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
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'memberExpression',
                indexer: ':',
                identifier: {
                  type: 'identifier',
                  name: 'c',
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
                base: {
                  type: 'callExpression',
                  base: {
                    type: 'memberExpression',
                    indexer: ':',
                    identifier: {
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
                        column: 9,
                        offset: 8
                      },
                      end: {
                        line: 1,
                        column: 14,
                        offset: 13
                      }
                    }
                  },
                  arguments: [],
                  position: {
                    start: {
                      line: 1,
                      column: 9,
                      offset: 8
                    },
                    end: {
                      line: 1,
                      column: 16,
                      offset: 15
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
                    column: 18,
                    offset: 17
                  }
                }
              },
              arguments: [],
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
            },
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
      source: 'local a, b for i, a, b in c do end',
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
            init: [],
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
            type: 'forGenericStatement',
            variables: [
              {
                type: 'identifier',
                name: 'i',
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
              },
              {
                type: 'identifier',
                name: 'b',
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
            iterators: [
              {
                type: 'identifier',
                name: 'c',
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
            body: [],
            position: {
              start: {
                line: 1,
                column: 12,
                offset: 11
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
      source: 'local a, b, c for i, a, b in c do end',
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
          },
          {
            type: 'forGenericStatement',
            variables: [
              {
                type: 'identifier',
                name: 'i',
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
                name: 'a',
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
                type: 'identifier',
                name: 'b',
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
            iterators: [
              {
                type: 'identifier',
                name: 'c',
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
            body: [],
            position: {
              start: {
                line: 1,
                column: 15,
                offset: 14
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
      source: 'local a = {} function a:b() return self end self = nil',
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
                fields: [],
                position: {
                  start: {
                    line: 1,
                    column: 11,
                    offset: 10
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
          },
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
              base: {
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
              },
              position: {
                start: {
                  line: 1,
                  column: 23,
                  offset: 22
                },
                end: {
                  line: 1,
                  column: 26,
                  offset: 25
                }
              }
            },
            local: false,
            parameters: [],
            body: [
              {
                type: 'returnStatement',
                arguments: [
                  {
                    type: 'identifier',
                    name: 'self',
                    position: {
                      start: {
                        line: 1,
                        column: 36,
                        offset: 35
                      },
                      end: {
                        line: 1,
                        column: 40,
                        offset: 39
                      }
                    }
                  }
                ],
                position: {
                  start: {
                    line: 1,
                    column: 29,
                    offset: 28
                  },
                  end: {
                    line: 1,
                    column: 40,
                    offset: 39
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
                column: 44,
                offset: 43
              }
            }
          },
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'identifier',
                name: 'self',
                position: {
                  start: {
                    line: 1,
                    column: 45,
                    offset: 44
                  },
                  end: {
                    line: 1,
                    column: 49,
                    offset: 48
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
                    column: 52,
                    offset: 51
                  },
                  end: {
                    line: 1,
                    column: 55,
                    offset: 54
                  }
                }
              }
            ],
            position: {
              start: {
                line: 1,
                column: 45,
                offset: 44
              },
              end: {
                line: 1,
                column: 55,
                offset: 54
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
            column: 55,
            offset: 54
          }
        }
      }
    },
    {
      source: 'repeat local a = true until a',
      result: {
        type: 'root',
        body: [
          {
            type: 'repeatStatement',
            condition: {
              type: 'identifier',
              name: 'a',
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
                init: [
                  {
                    type: 'booleanLiteral',
                    value: true,
                    raw: 'true',
                    position: {
                      start: {
                        line: 1,
                        column: 18,
                        offset: 17
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
                    column: 8,
                    offset: 7
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
      source: 'local a = function (b) end b = 0',
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
                type: 'functionDeclaration',
                identifier: null,
                local: false,
                parameters: [
                  {
                    type: 'identifier',
                    name: 'b',
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
                body: [],
                position: {
                  start: {
                    line: 1,
                    column: 11,
                    offset: 10
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
                column: 27,
                offset: 26
              }
            }
          },
          {
            type: 'assignmentStatement',
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
            init: [
              {
                type: 'numericLiteral',
                value: 0,
                raw: '0',
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
            position: {
              start: {
                line: 1,
                column: 28,
                offset: 27
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
      source: 'for a = 1, 5 do end a = 0',
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
              value: 5,
              raw: '5',
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
          },
          {
            type: 'assignmentStatement',
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
            init: [
              {
                type: 'numericLiteral',
                value: 0,
                raw: '0',
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
    }
  ]
})
