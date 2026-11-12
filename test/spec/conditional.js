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
})(this, 'conditional', function (exports) {
  'use strict'

  exports.name = 'conditional'
  exports.spec = [
    {
      source: 'if',
      result: "[1:2] <expression> expected near '<eof>'"
    },
    {
      source: 'elseif',
      result: "[1:0] unexpected keyword 'elseif' near '<eof>'"
    },
    {
      source: 'else',
      result: "[1:0] unexpected keyword 'else' near '<eof>'"
    },
    {
      source: 'then',
      result: "[1:0] unexpected keyword 'then' near '<eof>'"
    },
    {
      source: 'if then',
      result: "[1:3] <expression> expected near 'then'"
    },
    {
      source: 'if 1',
      result: "[1:4] 'then' expected near '<eof>'"
    },
    {
      source: 'if 1 then',
      result: "[1:9] 'end' expected near '<eof>'"
    },
    {
      source: 'if 1 else',
      result: "[1:5] 'then' expected near 'else'"
    },
    {
      source: 'if 1 then else',
      result: "[1:14] 'end' expected near '<eof>'"
    },
    {
      source: 'if 1 then elseif',
      result: "[1:16] <expression> expected near '<eof>'"
    },
    {
      source: 'if 1 then end',
      result: {
        type: 'root',
        body: [
          {
            type: 'ifStatement',
            clauses: [
              {
                type: 'ifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
                  position: {
                    start: {
                      line: 1,
                      column: 4,
                      offset: 3
                    },
                    end: {
                      line: 1,
                      column: 5,
                      offset: 4
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
      source: 'if 1 then local a end',
      result: {
        type: 'root',
        body: [
          {
            type: 'ifStatement',
            clauses: [
              {
                type: 'ifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
                  position: {
                    start: {
                      line: 1,
                      column: 4,
                      offset: 3
                    },
                    end: {
                      line: 1,
                      column: 5,
                      offset: 4
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
      source: 'if 1 then local a local b end',
      result: {
        type: 'root',
        body: [
          {
            type: 'ifStatement',
            clauses: [
              {
                type: 'ifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
                  position: {
                    start: {
                      line: 1,
                      column: 4,
                      offset: 3
                    },
                    end: {
                      line: 1,
                      column: 5,
                      offset: 4
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
                    type: 'localStatement',
                    variables: [
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
      source: 'if 1 then local a; local b; end',
      result: {
        type: 'root',
        body: [
          {
            type: 'ifStatement',
            clauses: [
              {
                type: 'ifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
                  position: {
                    start: {
                      line: 1,
                      column: 4,
                      offset: 3
                    },
                    end: {
                      line: 1,
                      column: 5,
                      offset: 4
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
      source: 'if 1 then else end',
      result: {
        type: 'root',
        body: [
          {
            type: 'ifStatement',
            clauses: [
              {
                type: 'ifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
                  position: {
                    start: {
                      line: 1,
                      column: 4,
                      offset: 3
                    },
                    end: {
                      line: 1,
                      column: 5,
                      offset: 4
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
                    column: 10,
                    offset: 9
                  }
                }
              },
              {
                type: 'elseClause',
                body: [],
                position: {
                  start: {
                    line: 1,
                    column: 11,
                    offset: 10
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
      source: 'if 1 then local a else local b end',
      result: {
        type: 'root',
        body: [
          {
            type: 'ifStatement',
            clauses: [
              {
                type: 'ifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
                  position: {
                    start: {
                      line: 1,
                      column: 4,
                      offset: 3
                    },
                    end: {
                      line: 1,
                      column: 5,
                      offset: 4
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
                    column: 18,
                    offset: 17
                  }
                }
              },
              {
                type: 'elseClause',
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
                    column: 19,
                    offset: 18
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
      source: 'if 1 then local a; else local b; end',
      result: {
        type: 'root',
        body: [
          {
            type: 'ifStatement',
            clauses: [
              {
                type: 'ifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
                  position: {
                    start: {
                      line: 1,
                      column: 4,
                      offset: 3
                    },
                    end: {
                      line: 1,
                      column: 5,
                      offset: 4
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
                    column: 19,
                    offset: 18
                  }
                }
              },
              {
                type: 'elseClause',
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
                    column: 20,
                    offset: 19
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
      source: 'if 1 then elseif 2',
      result: "[1:18] 'then' expected near '<eof>'"
    },
    {
      source: 'if 1 then elseif 2 then',
      result: "[1:23] 'end' expected near '<eof>'"
    },
    {
      source: 'if 1 then elseif 2 then end',
      result: {
        type: 'root',
        body: [
          {
            type: 'ifStatement',
            clauses: [
              {
                type: 'ifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
                  position: {
                    start: {
                      line: 1,
                      column: 4,
                      offset: 3
                    },
                    end: {
                      line: 1,
                      column: 5,
                      offset: 4
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
                    column: 10,
                    offset: 9
                  }
                }
              },
              {
                type: 'elseifClause',
                condition: {
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
                body: [],
                position: {
                  start: {
                    line: 1,
                    column: 11,
                    offset: 10
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
      source: 'if 1 then local a elseif 2 then local b end',
      result: {
        type: 'root',
        body: [
          {
            type: 'ifStatement',
            clauses: [
              {
                type: 'ifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
                  position: {
                    start: {
                      line: 1,
                      column: 4,
                      offset: 3
                    },
                    end: {
                      line: 1,
                      column: 5,
                      offset: 4
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
                    column: 18,
                    offset: 17
                  }
                }
              },
              {
                type: 'elseifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 2,
                  raw: '2',
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
                            column: 39,
                            offset: 38
                          },
                          end: {
                            line: 1,
                            column: 40,
                            offset: 39
                          }
                        }
                      }
                    ],
                    init: [],
                    position: {
                      start: {
                        line: 1,
                        column: 33,
                        offset: 32
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
                    column: 19,
                    offset: 18
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
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 44,
                offset: 43
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
            column: 44,
            offset: 43
          }
        }
      }
    },
    {
      source: 'if 1 then local a; elseif 2 then local b; end',
      result: {
        type: 'root',
        body: [
          {
            type: 'ifStatement',
            clauses: [
              {
                type: 'ifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
                  position: {
                    start: {
                      line: 1,
                      column: 4,
                      offset: 3
                    },
                    end: {
                      line: 1,
                      column: 5,
                      offset: 4
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
                    column: 19,
                    offset: 18
                  }
                }
              },
              {
                type: 'elseifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 2,
                  raw: '2',
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
                            column: 40,
                            offset: 39
                          },
                          end: {
                            line: 1,
                            column: 41,
                            offset: 40
                          }
                        }
                      }
                    ],
                    init: [],
                    position: {
                      start: {
                        line: 1,
                        column: 34,
                        offset: 33
                      },
                      end: {
                        line: 1,
                        column: 41,
                        offset: 40
                      }
                    }
                  }
                ],
                position: {
                  start: {
                    line: 1,
                    column: 20,
                    offset: 19
                  },
                  end: {
                    line: 1,
                    column: 42,
                    offset: 41
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
                column: 46,
                offset: 45
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
            column: 46,
            offset: 45
          }
        }
      }
    },
    {
      source: 'if 1 then elseif 2 then else end',
      result: {
        type: 'root',
        body: [
          {
            type: 'ifStatement',
            clauses: [
              {
                type: 'ifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
                  position: {
                    start: {
                      line: 1,
                      column: 4,
                      offset: 3
                    },
                    end: {
                      line: 1,
                      column: 5,
                      offset: 4
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
                    column: 10,
                    offset: 9
                  }
                }
              },
              {
                type: 'elseifClause',
                condition: {
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
                body: [],
                position: {
                  start: {
                    line: 1,
                    column: 11,
                    offset: 10
                  },
                  end: {
                    line: 1,
                    column: 24,
                    offset: 23
                  }
                }
              },
              {
                type: 'elseClause',
                body: [],
                position: {
                  start: {
                    line: 1,
                    column: 25,
                    offset: 24
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
      source: 'if 1 then else if 2 then end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'ifStatement',
            clauses: [
              {
                type: 'ifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
                  position: {
                    start: {
                      line: 1,
                      column: 4,
                      offset: 3
                    },
                    end: {
                      line: 1,
                      column: 5,
                      offset: 4
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
                    column: 10,
                    offset: 9
                  }
                }
              },
              {
                type: 'elseClause',
                body: [
                  {
                    type: 'ifStatement',
                    clauses: [
                      {
                        type: 'ifClause',
                        condition: {
                          type: 'numericLiteral',
                          value: 2,
                          raw: '2',
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
                        body: [],
                        position: {
                          start: {
                            line: 1,
                            column: 16,
                            offset: 15
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
                position: {
                  start: {
                    line: 1,
                    column: 11,
                    offset: 10
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
      source: 'if 1 then else if 2 then end',
      result: "[1:28] 'end' expected near '<eof>'"
    },
    {
      source: 'if 1 then return end',
      result: {
        type: 'root',
        body: [
          {
            type: 'ifStatement',
            clauses: [
              {
                type: 'ifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
                  position: {
                    start: {
                      line: 1,
                      column: 4,
                      offset: 3
                    },
                    end: {
                      line: 1,
                      column: 5,
                      offset: 4
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
                        column: 11,
                        offset: 10
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
      source: 'if 1 then return return end',
      result: "[1:17] 'end' expected near 'return'"
    },
    {
      source: 'if 1 then end; if 1 then end;',
      result: {
        type: 'root',
        body: [
          {
            type: 'ifStatement',
            clauses: [
              {
                type: 'ifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
                  position: {
                    start: {
                      line: 1,
                      column: 4,
                      offset: 3
                    },
                    end: {
                      line: 1,
                      column: 5,
                      offset: 4
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
                column: 14,
                offset: 13
              }
            }
          },
          {
            type: 'ifStatement',
            clauses: [
              {
                type: 'ifClause',
                condition: {
                  type: 'numericLiteral',
                  value: 1,
                  raw: '1',
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
                body: [],
                position: {
                  start: {
                    line: 1,
                    column: 16,
                    offset: 15
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
            column: 30,
            offset: 29
          }
        }
      }
    },
    {
      source: 'if then end',
      result: "[1:3] <expression> expected near 'then'"
    },
    {
      source: 'if 1 then elseif then end',
      result: "[1:17] <expression> expected near 'then'"
    }
  ]
})
