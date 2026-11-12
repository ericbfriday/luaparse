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
})(this, 'operators', function (exports) {
  'use strict'

  exports.name = 'operators'
  exports.spec = [
    {
      source: 'a = -"foo"',
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
                type: 'unaryExpression',
                operator: '-',
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
                    column: 5,
                    offset: 4
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
      source: 'a = -',
      result: "[1:5] <expression> expected near '<eof>'"
    },
    {
      source: 'a = not 10',
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
                type: 'unaryExpression',
                operator: 'not',
                argument: {
                  type: 'numericLiteral',
                  value: 10,
                  raw: '10',
                  position: {
                    start: {
                      line: 1,
                      column: 9,
                      offset: 8
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
                    column: 5,
                    offset: 4
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
      source: 'a = not',
      result: "[1:7] <expression> expected near '<eof>'"
    },
    {
      source: 'a = 1 +',
      result: "[1:7] <expression> expected near '<eof>'"
    },
    {
      source: 'a = 1 ..',
      result: "[1:8] <expression> expected near '<eof>'"
    },
    {
      source: 'a = 1 * /',
      result: "[1:8] <expression> expected near '/'"
    },
    {
      source: 'a = 1 + -2; a = 1 - -2',
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
                type: 'binaryExpression',
                operator: '+',
                left: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
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
                right: {
                  type: 'unaryExpression',
                  operator: '-',
                  argument: {
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
                  position: {
                    start: {
                      line: 1,
                      column: 9,
                      offset: 8
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
                    column: 5,
                    offset: 4
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
                type: 'binaryExpression',
                operator: '-',
                left: {
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
                right: {
                  type: 'unaryExpression',
                  operator: '-',
                  argument: {
                    type: 'numericLiteral',
                    value: 2,
                    raw: '2',
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
                  position: {
                    start: {
                      line: 1,
                      column: 21,
                      offset: 20
                    },
                    end: {
                      line: 1,
                      column: 23,
                      offset: 22
                    }
                  }
                },
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
                column: 13,
                offset: 12
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
      source: 'a = 1 * -',
      result: "[1:9] <expression> expected near '<eof>'"
    },
    {
      source: 'a = 1 * not 2; a = 1 / not 2',
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
                type: 'binaryExpression',
                operator: '*',
                left: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
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
                right: {
                  type: 'unaryExpression',
                  operator: 'not',
                  argument: {
                    type: 'numericLiteral',
                    value: 2,
                    raw: '2',
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
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
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
            type: 'assignmentStatement',
            variables: [
              {
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
              }
            ],
            init: [
              {
                type: 'binaryExpression',
                operator: '/',
                left: {
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
                },
                right: {
                  type: 'unaryExpression',
                  operator: 'not',
                  argument: {
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
                  },
                  position: {
                    start: {
                      line: 1,
                      column: 24,
                      offset: 23
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
                    column: 20,
                    offset: 19
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
                column: 16,
                offset: 15
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
      source: 'a = 1 / not',
      result: "[1:11] <expression> expected near '<eof>'"
    },
    {
      source: 'a = 1 + 2 - 3 * 4 / 5 ^ 6',
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
                type: 'binaryExpression',
                operator: '-',
                left: {
                  type: 'binaryExpression',
                  operator: '+',
                  left: {
                    type: 'numericLiteral',
                    value: 1,
                    raw: '1',
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
                  right: {
                    type: 'numericLiteral',
                    value: 2,
                    raw: '2',
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
                      column: 5,
                      offset: 4
                    },
                    end: {
                      line: 1,
                      column: 10,
                      offset: 9
                    }
                  }
                },
                right: {
                  type: 'binaryExpression',
                  operator: '/',
                  left: {
                    type: 'binaryExpression',
                    operator: '*',
                    left: {
                      type: 'numericLiteral',
                      value: 3,
                      raw: '3',
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
                    right: {
                      type: 'numericLiteral',
                      value: 4,
                      raw: '4',
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
                        column: 13,
                        offset: 12
                      },
                      end: {
                        line: 1,
                        column: 18,
                        offset: 17
                      }
                    }
                  },
                  right: {
                    type: 'binaryExpression',
                    operator: '^',
                    left: {
                      type: 'numericLiteral',
                      value: 5,
                      raw: '5',
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
                    right: {
                      type: 'numericLiteral',
                      value: 6,
                      raw: '6',
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
                        column: 21,
                        offset: 20
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
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
      source: 'a = ((1',
      result: "[1:7] ')' expected near '<eof>'"
    },
    {
      source: 'a = ((1 + 2)',
      result: "[1:12] ')' expected near '<eof>'"
    },
    {
      source: 'a = 1)',
      result: "[1:5] unexpected symbol ')' near '<eof>'"
    },
    {
      source: 'a = a + b - c',
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
                type: 'binaryExpression',
                operator: '-',
                left: {
                  type: 'binaryExpression',
                  operator: '+',
                  left: {
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
                  right: {
                    type: 'identifier',
                    name: 'b',
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
                      column: 5,
                      offset: 4
                    },
                    end: {
                      line: 1,
                      column: 10,
                      offset: 9
                    }
                  }
                },
                right: {
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
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
      source: 'a = "foo" + "bar"',
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
                type: 'binaryExpression',
                operator: '+',
                left: {
                  type: 'stringLiteral',
                  value: null,
                  raw: '"foo"',
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
                },
                right: {
                  type: 'stringLiteral',
                  value: null,
                  raw: '"bar"',
                  position: {
                    start: {
                      line: 1,
                      column: 13,
                      offset: 12
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
                    column: 5,
                    offset: 4
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
      source: 'a = "foo".."bar".."baz"',
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
                type: 'binaryExpression',
                operator: '..',
                left: {
                  type: 'stringLiteral',
                  value: null,
                  raw: '"foo"',
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
                },
                right: {
                  type: 'binaryExpression',
                  operator: '..',
                  left: {
                    type: 'stringLiteral',
                    value: null,
                    raw: '"bar"',
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
                  right: {
                    type: 'stringLiteral',
                    value: null,
                    raw: '"baz"',
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
                },
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
      source: 'a = true + false - nil',
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
                type: 'binaryExpression',
                operator: '-',
                left: {
                  type: 'binaryExpression',
                  operator: '+',
                  left: {
                    type: 'booleanLiteral',
                    value: true,
                    raw: 'true',
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
                  },
                  right: {
                    type: 'booleanLiteral',
                    value: false,
                    raw: 'false',
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
                  position: {
                    start: {
                      line: 1,
                      column: 5,
                      offset: 4
                    },
                    end: {
                      line: 1,
                      column: 17,
                      offset: 16
                    }
                  }
                },
                right: {
                  type: 'nilLiteral',
                  value: null,
                  raw: 'nil',
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
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
      source: 'a = {} * {}',
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
                type: 'binaryExpression',
                operator: '*',
                left: {
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
                },
                right: {
                  type: 'tableConstructor',
                  fields: [],
                  position: {
                    start: {
                      line: 1,
                      column: 10,
                      offset: 9
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
      source: 'a = function() end / function() end',
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
                type: 'binaryExpression',
                operator: '/',
                left: {
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
                },
                right: {
                  type: 'functionDeclaration',
                  identifier: null,
                  local: false,
                  parameters: [],
                  body: [],
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
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
      source: 'a = a() ^ b()',
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
                type: 'binaryExpression',
                operator: '^',
                left: {
                  type: 'callExpression',
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
                  arguments: [],
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
                right: {
                  type: 'callExpression',
                  base: {
                    type: 'identifier',
                    name: 'b',
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
                  arguments: [],
                  position: {
                    start: {
                      line: 1,
                      column: 11,
                      offset: 10
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
                    column: 5,
                    offset: 4
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
      source: 'a = 1 == 2; a = 1 ~= 2',
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
                type: 'binaryExpression',
                operator: '==',
                left: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
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
                right: {
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
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
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
                type: 'binaryExpression',
                operator: '~=',
                left: {
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
                right: {
                  type: 'numericLiteral',
                  value: 2,
                  raw: '2',
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
                column: 13,
                offset: 12
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
      source: 'a = 1 < 2 <= 2 > 2 >= 2 == 2',
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
                type: 'binaryExpression',
                operator: '==',
                left: {
                  type: 'binaryExpression',
                  operator: '>=',
                  left: {
                    type: 'binaryExpression',
                    operator: '>',
                    left: {
                      type: 'binaryExpression',
                      operator: '<=',
                      left: {
                        type: 'binaryExpression',
                        operator: '<',
                        left: {
                          type: 'numericLiteral',
                          value: 1,
                          raw: '1',
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
                        right: {
                          type: 'numericLiteral',
                          value: 2,
                          raw: '2',
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
                            column: 5,
                            offset: 4
                          },
                          end: {
                            line: 1,
                            column: 10,
                            offset: 9
                          }
                        }
                      },
                      right: {
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
                    },
                    right: {
                      type: 'numericLiteral',
                      value: 2,
                      raw: '2',
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
                  },
                  right: {
                    type: 'numericLiteral',
                    value: 2,
                    raw: '2',
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
                      column: 5,
                      offset: 4
                    },
                    end: {
                      line: 1,
                      column: 24,
                      offset: 23
                    }
                  }
                },
                right: {
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
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
      source: 'a = 1 ==',
      result: "[1:8] <expression> expected near '<eof>'"
    },
    {
      source: 'a = `',
      result: "[1:5] unexpected symbol '`' near '='"
    },
    {
      source: 'a = ~',
      result: "[1:5] unexpected symbol '~' near '='"
    },
    {
      source: 'a = ~= 2',
      result: "[1:4] <expression> expected near '~='"
    },
    {
      source: 'a = a ~= b',
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
                type: 'binaryExpression',
                operator: '~=',
                left: {
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
                right: {
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
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
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
      source: 'a = 1 and 2 or 2',
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
                type: 'logicalExpression',
                operator: 'or',
                left: {
                  type: 'logicalExpression',
                  operator: 'and',
                  left: {
                    type: 'numericLiteral',
                    value: 1,
                    raw: '1',
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
                  right: {
                    type: 'numericLiteral',
                    value: 2,
                    raw: '2',
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
                },
                right: {
                  type: 'numericLiteral',
                  value: 2,
                  raw: '2',
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
                    column: 5,
                    offset: 4
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
      }
    },
    {
      source: 'a = 1 and',
      result: "[1:9] <expression> expected near '<eof>'"
    },
    {
      source: 'a = or 1',
      result: "[1:4] <expression> expected near 'or'"
    },
    {
      source: 'a = {} and {} or {}',
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
                type: 'logicalExpression',
                operator: 'or',
                left: {
                  type: 'logicalExpression',
                  operator: 'and',
                  left: {
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
                  },
                  right: {
                    type: 'tableConstructor',
                    fields: [],
                    position: {
                      start: {
                        line: 1,
                        column: 12,
                        offset: 11
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
                      column: 5,
                      offset: 4
                    },
                    end: {
                      line: 1,
                      column: 14,
                      offset: 13
                    }
                  }
                },
                right: {
                  type: 'tableConstructor',
                  fields: [],
                  position: {
                    start: {
                      line: 1,
                      column: 18,
                      offset: 17
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
      source: 'a = (1) and ("foo") or (nil)',
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
                type: 'logicalExpression',
                operator: 'or',
                left: {
                  type: 'logicalExpression',
                  operator: 'and',
                  left: {
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
                  },
                  right: {
                    type: 'stringLiteral',
                    value: null,
                    raw: '"foo"',
                    position: {
                      start: {
                        line: 1,
                        column: 14,
                        offset: 13
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
                      column: 5,
                      offset: 4
                    },
                    end: {
                      line: 1,
                      column: 20,
                      offset: 19
                    }
                  }
                },
                right: {
                  type: 'nilLiteral',
                  value: null,
                  raw: 'nil',
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
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
      source: 'a = 1 // 0',
      result: "[1:7] <expression> expected near '/'",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'a = p ~ q',
      result: "[1:7] unexpected symbol '~' near 'p'",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'a = p & q',
      result: "[1:7] unexpected symbol '&' near 'p'",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'a = 1 // 0',
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
                type: 'binaryExpression',
                operator: '//',
                left: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
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
                right: {
                  type: 'numericLiteral',
                  value: 0,
                  raw: '0',
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
                    column: 5,
                    offset: 4
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
      },
      options: {
        luaVersion: '5.3'
      }
    },
    {
      source: 'a = p ~ q >> r | s',
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
                type: 'binaryExpression',
                operator: '|',
                left: {
                  type: 'binaryExpression',
                  operator: '~',
                  left: {
                    type: 'identifier',
                    name: 'p',
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
                  right: {
                    type: 'binaryExpression',
                    operator: '>>',
                    left: {
                      type: 'identifier',
                      name: 'q',
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
                    right: {
                      type: 'identifier',
                      name: 'r',
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
                    position: {
                      start: {
                        line: 1,
                        column: 9,
                        offset: 8
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
                      column: 5,
                      offset: 4
                    },
                    end: {
                      line: 1,
                      column: 15,
                      offset: 14
                    }
                  }
                },
                right: {
                  type: 'identifier',
                  name: 's',
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
      },
      options: {
        luaVersion: '5.3'
      }
    },
    {
      source: 'a = ~ p ~ q / r',
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
                type: 'binaryExpression',
                operator: '~',
                left: {
                  type: 'unaryExpression',
                  operator: '~',
                  argument: {
                    type: 'identifier',
                    name: 'p',
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
                      column: 8,
                      offset: 7
                    }
                  }
                },
                right: {
                  type: 'binaryExpression',
                  operator: '/',
                  left: {
                    type: 'identifier',
                    name: 'q',
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
                  right: {
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
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
      },
      options: {
        luaVersion: '5.3'
      }
    },
    {
      source: 'a = a <=',
      result: "[1:8] <expression> expected near '<eof>'",
      options: {
        luaVersion: '5.3'
      }
    },
    {
      source: 'a = a >=',
      result: "[1:8] <expression> expected near '<eof>'",
      options: {
        luaVersion: '5.3'
      }
    }
  ]
})
