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
})(this, 'functioncalls', function (exports) {
  'use strict'

  exports.name = 'functioncalls'
  exports.spec = [
    {
      source: 'a(',
      result: "[1:2] ')' expected near '<eof>'"
    },
    {
      source: 'a()',
      result: {
        type: 'root',
        body: [
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
              arguments: [],
              position: {
                start: {
                  line: 1,
                  column: 1,
                  offset: 0
                },
                end: {
                  line: 1,
                  column: 4,
                  offset: 3
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
                column: 4,
                offset: 3
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
            column: 4,
            offset: 3
          }
        }
      }
    },
    {
      source: 'a(1)',
      result: {
        type: 'root',
        body: [
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
              arguments: [
                {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
                  position: {
                    start: {
                      line: 1,
                      column: 3,
                      offset: 2
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
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
                  column: 5,
                  offset: 4
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
                column: 5,
                offset: 4
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
            column: 5,
            offset: 4
          }
        }
      }
    },
    {
      source: 'a(,1)',
      result: "[1:2] ')' expected near ','"
    },
    {
      source: 'a(1,)',
      result: "[1:4] <expression> expected near ')'"
    },
    {
      source: 'a(1,2,3)',
      result: {
        type: 'root',
        body: [
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
              arguments: [
                {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
                  position: {
                    start: {
                      line: 1,
                      column: 3,
                      offset: 2
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
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
                  type: 'numericLiteral',
                  value: 3,
                  raw: '3',
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
      source: '1()',
      result: "[1:0] unexpected number '1' near '('"
    },
    {
      source: 'a()()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'callExpression',
                base: {
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
                },
                arguments: [],
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 4,
                    offset: 3
                  }
                }
              },
              arguments: [],
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
            column: 6,
            offset: 5
          }
        }
      }
    },
    {
      source: 'a.b()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'memberExpression',
                indexer: '.',
                identifier: {
                  type: 'identifier',
                  name: 'b',
                  position: {
                    start: {
                      line: 1,
                      column: 3,
                      offset: 2
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
                    }
                  }
                },
                base: {
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 4,
                    offset: 3
                  }
                }
              },
              arguments: [],
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
            column: 6,
            offset: 5
          }
        }
      }
    },
    {
      source: 'a[b]()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'indexExpression',
                base: {
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
                },
                index: {
                  type: 'identifier',
                  name: 'b',
                  position: {
                    start: {
                      line: 1,
                      column: 3,
                      offset: 2
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
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
                    column: 5,
                    offset: 4
                  }
                }
              },
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
      source: 'a.1',
      result: "[1:1] '=' expected near '.1'"
    },
    {
      source: 'a.b',
      result: "[1:3] '=' expected near '<eof>'"
    },
    {
      source: 'a[b]',
      result: "[1:4] '=' expected near '<eof>'"
    },
    {
      source: 'a.b.(',
      result: "[1:4] <name> expected near '('"
    },
    {
      source: 'a.b.c()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'memberExpression',
                indexer: '.',
                identifier: {
                  type: 'identifier',
                  name: 'c',
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
                base: {
                  type: 'memberExpression',
                  indexer: '.',
                  identifier: {
                    type: 'identifier',
                    name: 'b',
                    position: {
                      start: {
                        line: 1,
                        column: 3,
                        offset: 2
                      },
                      end: {
                        line: 1,
                        column: 4,
                        offset: 3
                      }
                    }
                  },
                  base: {
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
                  },
                  position: {
                    start: {
                      line: 1,
                      column: 1,
                      offset: 0
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
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
                    column: 6,
                    offset: 5
                  }
                }
              },
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
      }
    },
    {
      source: 'a[b][c]()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'indexExpression',
                base: {
                  type: 'indexExpression',
                  base: {
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
                  },
                  index: {
                    type: 'identifier',
                    name: 'b',
                    position: {
                      start: {
                        line: 1,
                        column: 3,
                        offset: 2
                      },
                      end: {
                        line: 1,
                        column: 4,
                        offset: 3
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
                      column: 5,
                      offset: 4
                    }
                  }
                },
                index: {
                  type: 'identifier',
                  name: 'c',
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
                    column: 8,
                    offset: 7
                  }
                }
              },
              arguments: [],
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
      source: 'a[b].c()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'memberExpression',
                indexer: '.',
                identifier: {
                  type: 'identifier',
                  name: 'c',
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
                base: {
                  type: 'indexExpression',
                  base: {
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
                  },
                  index: {
                    type: 'identifier',
                    name: 'b',
                    position: {
                      start: {
                        line: 1,
                        column: 3,
                        offset: 2
                      },
                      end: {
                        line: 1,
                        column: 4,
                        offset: 3
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
                      column: 5,
                      offset: 4
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
              arguments: [],
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
      source: 'a.b[c]()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'indexExpression',
                base: {
                  type: 'memberExpression',
                  indexer: '.',
                  identifier: {
                    type: 'identifier',
                    name: 'b',
                    position: {
                      start: {
                        line: 1,
                        column: 3,
                        offset: 2
                      },
                      end: {
                        line: 1,
                        column: 4,
                        offset: 3
                      }
                    }
                  },
                  base: {
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
                  },
                  position: {
                    start: {
                      line: 1,
                      column: 1,
                      offset: 0
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
                    }
                  }
                },
                index: {
                  type: 'identifier',
                  name: 'c',
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
              arguments: [],
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
      source: 'a:b()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
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
                      column: 3,
                      offset: 2
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
                    }
                  }
                },
                base: {
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 4,
                    offset: 3
                  }
                }
              },
              arguments: [],
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
            column: 6,
            offset: 5
          }
        }
      }
    },
    {
      source: 'a:b',
      result: "[1:3] function arguments expected near '<eof>'"
    },
    {
      source: 'a:1',
      result: "[1:2] <name> expected near '1'"
    },
    {
      source: 'a.b:c()',
      result: {
        type: 'root',
        body: [
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
                base: {
                  type: 'memberExpression',
                  indexer: '.',
                  identifier: {
                    type: 'identifier',
                    name: 'b',
                    position: {
                      start: {
                        line: 1,
                        column: 3,
                        offset: 2
                      },
                      end: {
                        line: 1,
                        column: 4,
                        offset: 3
                      }
                    }
                  },
                  base: {
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
                  },
                  position: {
                    start: {
                      line: 1,
                      column: 1,
                      offset: 0
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
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
                    column: 6,
                    offset: 5
                  }
                }
              },
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
      }
    },
    {
      source: 'a[b]:c()',
      result: {
        type: 'root',
        body: [
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
                base: {
                  type: 'indexExpression',
                  base: {
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
                  },
                  index: {
                    type: 'identifier',
                    name: 'b',
                    position: {
                      start: {
                        line: 1,
                        column: 3,
                        offset: 2
                      },
                      end: {
                        line: 1,
                        column: 4,
                        offset: 3
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
                      column: 5,
                      offset: 4
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
              arguments: [],
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
      source: 'a:b:',
      result: "[1:3] function arguments expected near ':'"
    },
    {
      source: 'a:b():c()',
      result: {
        type: 'root',
        body: [
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
                          column: 3,
                          offset: 2
                        },
                        end: {
                          line: 1,
                          column: 4,
                          offset: 3
                        }
                      }
                    },
                    base: {
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
                    },
                    position: {
                      start: {
                        line: 1,
                        column: 1,
                        offset: 0
                      },
                      end: {
                        line: 1,
                        column: 4,
                        offset: 3
                      }
                    }
                  },
                  arguments: [],
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
              arguments: [],
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
      source: '(a)()',
      result: {
        type: 'root',
        body: [
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
                    column: 2,
                    offset: 1
                  },
                  end: {
                    line: 1,
                    column: 3,
                    offset: 2
                  }
                }
              },
              arguments: [],
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
            column: 6,
            offset: 5
          }
        }
      }
    },
    {
      source: '()()',
      result: "[1:1] <expression> expected near ')'"
    },
    {
      source: '("foo")()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'stringLiteral',
                value: null,
                raw: '"foo"',
                position: {
                  start: {
                    line: 1,
                    column: 2,
                    offset: 1
                  },
                  end: {
                    line: 1,
                    column: 7,
                    offset: 6
                  }
                }
              },
              arguments: [],
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
      source: '(a)()()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'callExpression',
                base: {
                  type: 'identifier',
                  name: 'a',
                  position: {
                    start: {
                      line: 1,
                      column: 2,
                      offset: 1
                    },
                    end: {
                      line: 1,
                      column: 3,
                      offset: 2
                    }
                  }
                },
                arguments: [],
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
      }
    },
    {
      source: '(a).b()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'memberExpression',
                indexer: '.',
                identifier: {
                  type: 'identifier',
                  name: 'b',
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
                base: {
                  type: 'identifier',
                  name: 'a',
                  position: {
                    start: {
                      line: 1,
                      column: 2,
                      offset: 1
                    },
                    end: {
                      line: 1,
                      column: 3,
                      offset: 2
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
                    column: 6,
                    offset: 5
                  }
                }
              },
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
      }
    },
    {
      source: '(a)[b]()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'indexExpression',
                base: {
                  type: 'identifier',
                  name: 'a',
                  position: {
                    start: {
                      line: 1,
                      column: 2,
                      offset: 1
                    },
                    end: {
                      line: 1,
                      column: 3,
                      offset: 2
                    }
                  }
                },
                index: {
                  type: 'identifier',
                  name: 'b',
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
              arguments: [],
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
      source: '(a):b()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
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
                base: {
                  type: 'identifier',
                  name: 'a',
                  position: {
                    start: {
                      line: 1,
                      column: 2,
                      offset: 1
                    },
                    end: {
                      line: 1,
                      column: 3,
                      offset: 2
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
                    column: 6,
                    offset: 5
                  }
                }
              },
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
      }
    },
    {
      source: 'a"foo"',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'stringCallExpression',
              base: {
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
              },
              argument: {
                type: 'stringLiteral',
                value: null,
                raw: '"foo"',
                position: {
                  start: {
                    line: 1,
                    column: 2,
                    offset: 1
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
      source: 'a"foo',
      result: "[1:7] unfinished string near '\"foo'"
    },
    {
      source: 'a[[foo]]',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'stringCallExpression',
              base: {
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
              },
              argument: {
                type: 'stringLiteral',
                value: null,
                raw: '[[foo]]',
                position: {
                  start: {
                    line: 1,
                    column: 2,
                    offset: 1
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
      source: 'a.b"foo"',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'stringCallExpression',
              base: {
                type: 'memberExpression',
                indexer: '.',
                identifier: {
                  type: 'identifier',
                  name: 'b',
                  position: {
                    start: {
                      line: 1,
                      column: 3,
                      offset: 2
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
                    }
                  }
                },
                base: {
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 4,
                    offset: 3
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
                    column: 4,
                    offset: 3
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
      source: 'a[b]"foo"',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'stringCallExpression',
              base: {
                type: 'indexExpression',
                base: {
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
                },
                index: {
                  type: 'identifier',
                  name: 'b',
                  position: {
                    start: {
                      line: 1,
                      column: 3,
                      offset: 2
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
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
      source: 'a:b"foo"',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'stringCallExpression',
              base: {
                type: 'memberExpression',
                indexer: ':',
                identifier: {
                  type: 'identifier',
                  name: 'b',
                  position: {
                    start: {
                      line: 1,
                      column: 3,
                      offset: 2
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
                    }
                  }
                },
                base: {
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 4,
                    offset: 3
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
                    column: 4,
                    offset: 3
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
      source: 'a()"foo"',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'stringCallExpression',
              base: {
                type: 'callExpression',
                base: {
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
                },
                arguments: [],
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 4,
                    offset: 3
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
                    column: 4,
                    offset: 3
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
      source: 'a"foo"()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'stringCallExpression',
                base: {
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
                },
                argument: {
                  type: 'stringLiteral',
                  value: null,
                  raw: '"foo"',
                  position: {
                    start: {
                      line: 1,
                      column: 2,
                      offset: 1
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
              arguments: [],
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
      source: 'a"foo".b()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'memberExpression',
                indexer: '.',
                identifier: {
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
                base: {
                  type: 'stringCallExpression',
                  base: {
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
                  },
                  argument: {
                    type: 'stringLiteral',
                    value: null,
                    raw: '"foo"',
                    position: {
                      start: {
                        line: 1,
                        column: 2,
                        offset: 1
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
              arguments: [],
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
      source: 'a"foo"[b]()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'indexExpression',
                base: {
                  type: 'stringCallExpression',
                  base: {
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
                  },
                  argument: {
                    type: 'stringLiteral',
                    value: null,
                    raw: '"foo"',
                    position: {
                      start: {
                        line: 1,
                        column: 2,
                        offset: 1
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
                index: {
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
              arguments: [],
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
            },
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
      source: 'a"foo":c()',
      result: {
        type: 'root',
        body: [
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
                base: {
                  type: 'stringCallExpression',
                  base: {
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
                  },
                  argument: {
                    type: 'stringLiteral',
                    value: null,
                    raw: '"foo"',
                    position: {
                      start: {
                        line: 1,
                        column: 2,
                        offset: 1
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
              arguments: [],
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
      source: 'a"foo""bar"',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'stringCallExpression',
              base: {
                type: 'stringCallExpression',
                base: {
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
                },
                argument: {
                  type: 'stringLiteral',
                  value: null,
                  raw: '"foo"',
                  position: {
                    start: {
                      line: 1,
                      column: 2,
                      offset: 1
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
              argument: {
                type: 'stringLiteral',
                value: null,
                raw: '"bar"',
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
                  column: 1,
                  offset: 0
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
      source: 'a"foo"{}',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'tableCallExpression',
              base: {
                type: 'stringCallExpression',
                base: {
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
                },
                argument: {
                  type: 'stringLiteral',
                  value: null,
                  raw: '"foo"',
                  position: {
                    start: {
                      line: 1,
                      column: 2,
                      offset: 1
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
              argument: {
                type: 'tableConstructor',
                fields: [],
                position: {
                  start: {
                    line: 1,
                    column: 7,
                    offset: 6
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
      source: '(a):b"foo".c[d]:e"bar"',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'stringCallExpression',
              base: {
                type: 'memberExpression',
                indexer: ':',
                identifier: {
                  type: 'identifier',
                  name: 'e',
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
                  type: 'indexExpression',
                  base: {
                    type: 'memberExpression',
                    indexer: '.',
                    identifier: {
                      type: 'identifier',
                      name: 'c',
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
                      type: 'stringCallExpression',
                      base: {
                        type: 'memberExpression',
                        indexer: ':',
                        identifier: {
                          type: 'identifier',
                          name: 'b',
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
                        base: {
                          type: 'identifier',
                          name: 'a',
                          position: {
                            start: {
                              line: 1,
                              column: 2,
                              offset: 1
                            },
                            end: {
                              line: 1,
                              column: 3,
                              offset: 2
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
                            column: 6,
                            offset: 5
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
                        column: 13,
                        offset: 12
                      }
                    }
                  },
                  index: {
                    type: 'identifier',
                    name: 'd',
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
              },
              argument: {
                type: 'stringLiteral',
                value: null,
                raw: '"bar"',
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
              },
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
      source: '(a):b"foo"[c].d:e"bar"',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'stringCallExpression',
              base: {
                type: 'memberExpression',
                indexer: ':',
                identifier: {
                  type: 'identifier',
                  name: 'e',
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
                  type: 'memberExpression',
                  indexer: '.',
                  identifier: {
                    type: 'identifier',
                    name: 'd',
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
                  base: {
                    type: 'indexExpression',
                    base: {
                      type: 'stringCallExpression',
                      base: {
                        type: 'memberExpression',
                        indexer: ':',
                        identifier: {
                          type: 'identifier',
                          name: 'b',
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
                        base: {
                          type: 'identifier',
                          name: 'a',
                          position: {
                            start: {
                              line: 1,
                              column: 2,
                              offset: 1
                            },
                            end: {
                              line: 1,
                              column: 3,
                              offset: 2
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
                            column: 6,
                            offset: 5
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
                    index: {
                      type: 'identifier',
                      name: 'c',
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
              },
              argument: {
                type: 'stringLiteral',
                value: null,
                raw: '"bar"',
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
              },
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
      source: 'a{}"foo"',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'stringCallExpression',
              base: {
                type: 'tableCallExpression',
                base: {
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
                },
                argument: {
                  type: 'tableConstructor',
                  fields: [],
                  position: {
                    start: {
                      line: 1,
                      column: 2,
                      offset: 1
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
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
                    column: 4,
                    offset: 3
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
                    column: 4,
                    offset: 3
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
      source: 'a{}',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'tableCallExpression',
              base: {
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
              },
              argument: {
                type: 'tableConstructor',
                fields: [],
                position: {
                  start: {
                    line: 1,
                    column: 2,
                    offset: 1
                  },
                  end: {
                    line: 1,
                    column: 4,
                    offset: 3
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
                  column: 4,
                  offset: 3
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
                column: 4,
                offset: 3
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
            column: 4,
            offset: 3
          }
        }
      }
    },
    {
      source: 'a.b{}',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'tableCallExpression',
              base: {
                type: 'memberExpression',
                indexer: '.',
                identifier: {
                  type: 'identifier',
                  name: 'b',
                  position: {
                    start: {
                      line: 1,
                      column: 3,
                      offset: 2
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
                    }
                  }
                },
                base: {
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 4,
                    offset: 3
                  }
                }
              },
              argument: {
                type: 'tableConstructor',
                fields: [],
                position: {
                  start: {
                    line: 1,
                    column: 4,
                    offset: 3
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
                column: 6,
                offset: 5
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
            column: 6,
            offset: 5
          }
        }
      }
    },
    {
      source: 'a[b]{}',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'tableCallExpression',
              base: {
                type: 'indexExpression',
                base: {
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
                },
                index: {
                  type: 'identifier',
                  name: 'b',
                  position: {
                    start: {
                      line: 1,
                      column: 3,
                      offset: 2
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
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
                    column: 5,
                    offset: 4
                  }
                }
              },
              argument: {
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
      source: 'a:b{}',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'tableCallExpression',
              base: {
                type: 'memberExpression',
                indexer: ':',
                identifier: {
                  type: 'identifier',
                  name: 'b',
                  position: {
                    start: {
                      line: 1,
                      column: 3,
                      offset: 2
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
                    }
                  }
                },
                base: {
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 4,
                    offset: 3
                  }
                }
              },
              argument: {
                type: 'tableConstructor',
                fields: [],
                position: {
                  start: {
                    line: 1,
                    column: 4,
                    offset: 3
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
                column: 6,
                offset: 5
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
            column: 6,
            offset: 5
          }
        }
      }
    },
    {
      source: 'a(){}',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'tableCallExpression',
              base: {
                type: 'callExpression',
                base: {
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
                },
                arguments: [],
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 4,
                    offset: 3
                  }
                }
              },
              argument: {
                type: 'tableConstructor',
                fields: [],
                position: {
                  start: {
                    line: 1,
                    column: 4,
                    offset: 3
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
                column: 6,
                offset: 5
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
            column: 6,
            offset: 5
          }
        }
      }
    },
    {
      source: 'a{}()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'tableCallExpression',
                base: {
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
                },
                argument: {
                  type: 'tableConstructor',
                  fields: [],
                  position: {
                    start: {
                      line: 1,
                      column: 2,
                      offset: 1
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
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
                    column: 4,
                    offset: 3
                  }
                }
              },
              arguments: [],
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
            column: 6,
            offset: 5
          }
        }
      }
    },
    {
      source: 'a{}.b()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'memberExpression',
                indexer: '.',
                identifier: {
                  type: 'identifier',
                  name: 'b',
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
                base: {
                  type: 'tableCallExpression',
                  base: {
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
                  },
                  argument: {
                    type: 'tableConstructor',
                    fields: [],
                    position: {
                      start: {
                        line: 1,
                        column: 2,
                        offset: 1
                      },
                      end: {
                        line: 1,
                        column: 4,
                        offset: 3
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
                      column: 4,
                      offset: 3
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
                    column: 6,
                    offset: 5
                  }
                }
              },
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
      }
    },
    {
      source: 'a{}[b]()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'indexExpression',
                base: {
                  type: 'tableCallExpression',
                  base: {
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
                  },
                  argument: {
                    type: 'tableConstructor',
                    fields: [],
                    position: {
                      start: {
                        line: 1,
                        column: 2,
                        offset: 1
                      },
                      end: {
                        line: 1,
                        column: 4,
                        offset: 3
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
                      column: 4,
                      offset: 3
                    }
                  }
                },
                index: {
                  type: 'identifier',
                  name: 'b',
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
              arguments: [],
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
      source: 'a{}:c()',
      result: {
        type: 'root',
        body: [
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
                base: {
                  type: 'tableCallExpression',
                  base: {
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
                  },
                  argument: {
                    type: 'tableConstructor',
                    fields: [],
                    position: {
                      start: {
                        line: 1,
                        column: 2,
                        offset: 1
                      },
                      end: {
                        line: 1,
                        column: 4,
                        offset: 3
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
                      column: 4,
                      offset: 3
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
                    column: 6,
                    offset: 5
                  }
                }
              },
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
      }
    },
    {
      source: 'a{}{}',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'tableCallExpression',
              base: {
                type: 'tableCallExpression',
                base: {
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
                },
                argument: {
                  type: 'tableConstructor',
                  fields: [],
                  position: {
                    start: {
                      line: 1,
                      column: 2,
                      offset: 1
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
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
                    column: 4,
                    offset: 3
                  }
                }
              },
              argument: {
                type: 'tableConstructor',
                fields: [],
                position: {
                  start: {
                    line: 1,
                    column: 4,
                    offset: 3
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
                column: 6,
                offset: 5
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
            column: 6,
            offset: 5
          }
        }
      }
    },
    {
      source: '(a):b{}.c[d]:e{}',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'tableCallExpression',
              base: {
                type: 'memberExpression',
                indexer: ':',
                identifier: {
                  type: 'identifier',
                  name: 'e',
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
                  type: 'indexExpression',
                  base: {
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
                      type: 'tableCallExpression',
                      base: {
                        type: 'memberExpression',
                        indexer: ':',
                        identifier: {
                          type: 'identifier',
                          name: 'b',
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
                        base: {
                          type: 'identifier',
                          name: 'a',
                          position: {
                            start: {
                              line: 1,
                              column: 2,
                              offset: 1
                            },
                            end: {
                              line: 1,
                              column: 3,
                              offset: 2
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
                            column: 6,
                            offset: 5
                          }
                        }
                      },
                      argument: {
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
                  index: {
                    type: 'identifier',
                    name: 'd',
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
              },
              argument: {
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
              },
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
      source: '(a):b{}[c].d:e{}',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'tableCallExpression',
              base: {
                type: 'memberExpression',
                indexer: ':',
                identifier: {
                  type: 'identifier',
                  name: 'e',
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
                    name: 'd',
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
                    type: 'indexExpression',
                    base: {
                      type: 'tableCallExpression',
                      base: {
                        type: 'memberExpression',
                        indexer: ':',
                        identifier: {
                          type: 'identifier',
                          name: 'b',
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
                        base: {
                          type: 'identifier',
                          name: 'a',
                          position: {
                            start: {
                              line: 1,
                              column: 2,
                              offset: 1
                            },
                            end: {
                              line: 1,
                              column: 3,
                              offset: 2
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
                            column: 6,
                            offset: 5
                          }
                        }
                      },
                      argument: {
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
                    index: {
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
                      column: 13,
                      offset: 12
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
                    column: 15,
                    offset: 14
                  }
                }
              },
              argument: {
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
              },
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
      source: '(a"")',
      result: "[1:5] unexpected symbol near '<eof>'"
    },
    {
      source: '(a())',
      result: "[1:5] unexpected symbol near '<eof>'"
    },
    {
      source: '(a{})',
      result: "[1:5] unexpected symbol near '<eof>'"
    },
    {
      source: 'a\n()',
      result: "[2:3] ambiguous syntax (function call x new statement) near '('"
    },
    {
      source: 'a\n""',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'stringCallExpression',
              base: {
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
              },
              argument: {
                type: 'stringLiteral',
                value: null,
                raw: '""',
                position: {
                  start: {
                    line: 2,
                    column: 1,
                    offset: 2
                  },
                  end: {
                    line: 2,
                    column: 3,
                    offset: 4
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
                  line: 2,
                  column: 3,
                  offset: 4
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
                line: 2,
                column: 3,
                offset: 4
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
            line: 2,
            column: 3,
            offset: 4
          }
        }
      }
    },
    {
      source: 'a\n{}',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'tableCallExpression',
              base: {
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
              },
              argument: {
                type: 'tableConstructor',
                fields: [],
                position: {
                  start: {
                    line: 2,
                    column: 1,
                    offset: 2
                  },
                  end: {
                    line: 2,
                    column: 3,
                    offset: 4
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
                  line: 2,
                  column: 3,
                  offset: 4
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
                line: 2,
                column: 3,
                offset: 4
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
            line: 2,
            column: 3,
            offset: 4
          }
        }
      }
    },
    {
      source: 'a.b\n()',
      result: "[2:3] ambiguous syntax (function call x new statement) near '('"
    },
    {
      source: 'a.b\n""',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'stringCallExpression',
              base: {
                type: 'memberExpression',
                indexer: '.',
                identifier: {
                  type: 'identifier',
                  name: 'b',
                  position: {
                    start: {
                      line: 1,
                      column: 3,
                      offset: 2
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
                    }
                  }
                },
                base: {
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 4,
                    offset: 3
                  }
                }
              },
              argument: {
                type: 'stringLiteral',
                value: null,
                raw: '""',
                position: {
                  start: {
                    line: 2,
                    column: 1,
                    offset: 4
                  },
                  end: {
                    line: 2,
                    column: 3,
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
                  line: 2,
                  column: 3,
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
                line: 2,
                column: 3,
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
            line: 2,
            column: 3,
            offset: 6
          }
        }
      }
    },
    {
      source: 'a.b\n{}',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'tableCallExpression',
              base: {
                type: 'memberExpression',
                indexer: '.',
                identifier: {
                  type: 'identifier',
                  name: 'b',
                  position: {
                    start: {
                      line: 1,
                      column: 3,
                      offset: 2
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
                    }
                  }
                },
                base: {
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 4,
                    offset: 3
                  }
                }
              },
              argument: {
                type: 'tableConstructor',
                fields: [],
                position: {
                  start: {
                    line: 2,
                    column: 1,
                    offset: 4
                  },
                  end: {
                    line: 2,
                    column: 3,
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
                  line: 2,
                  column: 3,
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
                line: 2,
                column: 3,
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
            line: 2,
            column: 3,
            offset: 6
          }
        }
      }
    },
    {
      source: 'a:b\n()',
      result: "[2:3] ambiguous syntax (function call x new statement) near '('"
    },
    {
      source: 'a:b\n""',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'stringCallExpression',
              base: {
                type: 'memberExpression',
                indexer: ':',
                identifier: {
                  type: 'identifier',
                  name: 'b',
                  position: {
                    start: {
                      line: 1,
                      column: 3,
                      offset: 2
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
                    }
                  }
                },
                base: {
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 4,
                    offset: 3
                  }
                }
              },
              argument: {
                type: 'stringLiteral',
                value: null,
                raw: '""',
                position: {
                  start: {
                    line: 2,
                    column: 1,
                    offset: 4
                  },
                  end: {
                    line: 2,
                    column: 3,
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
                  line: 2,
                  column: 3,
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
                line: 2,
                column: 3,
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
            line: 2,
            column: 3,
            offset: 6
          }
        }
      }
    },
    {
      source: 'a:b\n{}',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'tableCallExpression',
              base: {
                type: 'memberExpression',
                indexer: ':',
                identifier: {
                  type: 'identifier',
                  name: 'b',
                  position: {
                    start: {
                      line: 1,
                      column: 3,
                      offset: 2
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
                    }
                  }
                },
                base: {
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 4,
                    offset: 3
                  }
                }
              },
              argument: {
                type: 'tableConstructor',
                fields: [],
                position: {
                  start: {
                    line: 2,
                    column: 1,
                    offset: 4
                  },
                  end: {
                    line: 2,
                    column: 3,
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
                  line: 2,
                  column: 3,
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
                line: 2,
                column: 3,
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
            line: 2,
            column: 3,
            offset: 6
          }
        }
      }
    },
    {
      source: '(a\n())',
      result: "[2:3] ambiguous syntax (function call x new statement) near '('"
    },
    {
      source: '(a\n"")',
      result: "[2:3] unexpected symbol near '<eof>'"
    },
    {
      source: '(a\n{})',
      result: "[2:3] unexpected symbol near '<eof>'"
    },
    {
      source: '(a)\n()',
      result: "[2:3] ambiguous syntax (function call x new statement) near '('"
    },
    {
      source: '(a)\n""',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'stringCallExpression',
              base: {
                type: 'identifier',
                name: 'a',
                position: {
                  start: {
                    line: 1,
                    column: 2,
                    offset: 1
                  },
                  end: {
                    line: 1,
                    column: 3,
                    offset: 2
                  }
                }
              },
              argument: {
                type: 'stringLiteral',
                value: null,
                raw: '""',
                position: {
                  start: {
                    line: 2,
                    column: 1,
                    offset: 4
                  },
                  end: {
                    line: 2,
                    column: 3,
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
                  line: 2,
                  column: 3,
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
                line: 2,
                column: 3,
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
            line: 2,
            column: 3,
            offset: 6
          }
        }
      }
    },
    {
      source: '(a)\n{}',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'tableCallExpression',
              base: {
                type: 'identifier',
                name: 'a',
                position: {
                  start: {
                    line: 1,
                    column: 2,
                    offset: 1
                  },
                  end: {
                    line: 1,
                    column: 3,
                    offset: 2
                  }
                }
              },
              argument: {
                type: 'tableConstructor',
                fields: [],
                position: {
                  start: {
                    line: 2,
                    column: 1,
                    offset: 4
                  },
                  end: {
                    line: 2,
                    column: 3,
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
                  line: 2,
                  column: 3,
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
                line: 2,
                column: 3,
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
            line: 2,
            column: 3,
            offset: 6
          }
        }
      }
    },
    {
      source: 'a\n()',
      result: {
        type: 'root',
        body: [
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
              arguments: [],
              position: {
                start: {
                  line: 1,
                  column: 1,
                  offset: 0
                },
                end: {
                  line: 2,
                  column: 3,
                  offset: 4
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
                line: 2,
                column: 3,
                offset: 4
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
            line: 2,
            column: 3,
            offset: 4
          }
        }
      },
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'a.b\n()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
              type: 'callExpression',
              base: {
                type: 'memberExpression',
                indexer: '.',
                identifier: {
                  type: 'identifier',
                  name: 'b',
                  position: {
                    start: {
                      line: 1,
                      column: 3,
                      offset: 2
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
                    }
                  }
                },
                base: {
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 4,
                    offset: 3
                  }
                }
              },
              arguments: [],
              position: {
                start: {
                  line: 1,
                  column: 1,
                  offset: 0
                },
                end: {
                  line: 2,
                  column: 3,
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
                line: 2,
                column: 3,
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
            line: 2,
            column: 3,
            offset: 6
          }
        }
      },
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'a:b\n()',
      result: {
        type: 'root',
        body: [
          {
            type: 'callStatement',
            expression: {
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
                      column: 3,
                      offset: 2
                    },
                    end: {
                      line: 1,
                      column: 4,
                      offset: 3
                    }
                  }
                },
                base: {
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
                },
                position: {
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0
                  },
                  end: {
                    line: 1,
                    column: 4,
                    offset: 3
                  }
                }
              },
              arguments: [],
              position: {
                start: {
                  line: 1,
                  column: 1,
                  offset: 0
                },
                end: {
                  line: 2,
                  column: 3,
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
                line: 2,
                column: 3,
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
            line: 2,
            column: 3,
            offset: 6
          }
        }
      },
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: '(a\n())',
      result: "[2:3] unexpected symbol near '<eof>'",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: '(a)\n()',
      result: {
        type: 'root',
        body: [
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
                    column: 2,
                    offset: 1
                  },
                  end: {
                    line: 1,
                    column: 3,
                    offset: 2
                  }
                }
              },
              arguments: [],
              position: {
                start: {
                  line: 1,
                  column: 1,
                  offset: 0
                },
                end: {
                  line: 2,
                  column: 3,
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
                line: 2,
                column: 3,
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
            line: 2,
            column: 3,
            offset: 6
          }
        }
      },
      options: {
        luaVersion: '5.2'
      }
    }
  ]
})
