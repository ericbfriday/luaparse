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
})(this, 'assignments', function (exports) {
  'use strict'

  exports.name = 'assignments'
  exports.spec = [
    {
      source: 'a',
      result: "[1:1] '=' expected near '<eof>'"
    },
    {
      source: 'a,',
      result: "[1:2] unexpected symbol near '<eof>'"
    },
    {
      source: 'a,b,c',
      result: "[1:5] '=' expected near '<eof>'"
    },
    {
      source: 'a,b =',
      result: "[1:5] <expression> expected near '<eof>'"
    },
    {
      source: 'a = 1',
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
      source: 'a = 1,2,3',
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
                value: 2,
                raw: '2',
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
                type: 'numericLiteral',
                value: 3,
                raw: '3',
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
      source: 'a,b,c = 1',
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
              },
              {
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
              {
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
                    column: 9,
                    offset: 8
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
      source: 'a,b,c = 1,2,3',
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
              },
              {
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
              {
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
              {
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
              {
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
      source: 'a.b = 1',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
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
      source: 'a.b.c = 1',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
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
                    column: 9,
                    offset: 8
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
      source: 'a[b] = 1',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
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
                    column: 8,
                    offset: 7
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
      source: 'a[b][c] = 1',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
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
      source: 'a.b[c] = 1',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
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
      source: 'a[b].c = 1',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
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
      source: 'a[b], a[c] = 1',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
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
              {
                type: 'indexExpression',
                base: {
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
                    column: 7,
                    offset: 6
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
    },
    {
      source: 'a().b = 1',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
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
                    column: 6,
                    offset: 5
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
                    column: 9,
                    offset: 8
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
      source: '({})[b] = 1',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'indexExpression',
                base: {
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
                index: {
                  type: 'identifier',
                  name: 'b',
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
      source: 'a""[b] = 1',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
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
                    raw: '""',
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
      source: 'a{}[b] = 1',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
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
      source: '({{}})[a][b] = 1',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'indexExpression',
                base: {
                  type: 'indexExpression',
                  base: {
                    type: 'tableConstructor',
                    fields: [
                      {
                        type: 'tableValue',
                        value: {
                          type: 'tableConstructor',
                          fields: [],
                          position: {
                            start: {
                              line: 1,
                              column: 3,
                              offset: 2
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
                            column: 3,
                            offset: 2
                          },
                          end: {
                            line: 1,
                            column: 5,
                            offset: 4
                          }
                        }
                      }
                    ],
                    position: {
                      start: {
                        line: 1,
                        column: 2,
                        offset: 1
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
                    name: 'a',
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
                index: {
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
      source: '(a).b = 1',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
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
                    column: 9,
                    offset: 8
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
      source: '(1).a = 0',
      result: {
        type: 'root',
        body: [
          {
            type: 'assignmentStatement',
            variables: [
              {
                type: 'memberExpression',
                indexer: '.',
                identifier: {
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
                base: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
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
                    column: 9,
                    offset: 8
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
      source: '0 = 0',
      result: "[1:0] unexpected number '0' near '='"
    },
    {
      source: '"foo" = 0',
      result: "[1:0] unexpected string '\"foo\"' near '='"
    },
    {
      source: 'true = 0',
      result: "[1:0] unexpected boolean 'true' near '='"
    },
    {
      source: '(a) = 0',
      result: "[1:4] unexpected symbol '=' near '0'"
    },
    {
      source: '{} = 0',
      result: "[1:0] unexpected symbol '{' near '}'"
    },
    {
      source: 'a, b() c()',
      result: "[1:7] unexpected identifier 'c' near '('"
    },
    {
      source: 'a, b(), c',
      result: "[1:6] unexpected symbol ',' near 'c'"
    },
    {
      source: 'a:b() = 0',
      result: "[1:6] unexpected symbol '=' near '0'"
    },
    {
      source: 'a() = 0',
      result: "[1:4] unexpected symbol '=' near '0'"
    },
    {
      source: 'a.b:c() = 0',
      result: "[1:8] unexpected symbol '=' near '0'"
    },
    {
      source: 'a[b]() = 0',
      result: "[1:7] unexpected symbol '=' near '0'"
    },
    {
      source: 'a = a b',
      result: "[1:7] '=' expected near '<eof>'"
    },
    {
      source: 'a = 1 2',
      result: "[1:6] unexpected number '2' near '<eof>'"
    },
    {
      source: 'a = a = 1',
      result: "[1:6] unexpected symbol '=' near '1'"
    }
  ]
})
