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
})(this, 'do', function (exports) {
  'use strict'

  exports.name = 'do'
  exports.spec = [
    {
      source: 'do',
      result: "[1:2] 'end' expected near '<eof>'"
    },
    {
      source: 'end',
      result: "[1:0] unexpected keyword 'end' near '<eof>'"
    },
    {
      source: 'do end',
      result: {
        type: 'root',
        body: [
          {
            type: 'doStatement',
            body: [],
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
      source: 'do ; end',
      result: "[1:3] unexpected symbol ';' near 'end'"
    },
    {
      source: 'do 1 end',
      result: "[1:3] unexpected number '1' near 'end'"
    },
    {
      source: 'do "foo" end',
      result: "[1:3] unexpected string '\"foo\"' near 'end'"
    },
    {
      source: 'do local a, b end',
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
                  {
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
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 4,
                    offset: 3
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
      source: 'do local a local b end',
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
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 4,
                    offset: 3
                  },
                  end: {
                    line: 1,
                    column: 11,
                    offset: 10
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
      source: 'do local a; local b; end',
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
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 4,
                    offset: 3
                  },
                  end: {
                    line: 1,
                    column: 11,
                    offset: 10
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
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 13,
                    offset: 12
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
      source: 'do local a = 1 end',
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
                    column: 4,
                    offset: 3
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
      source: 'do do end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'doStatement',
            body: [
              {
                type: 'doStatement',
                body: [],
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
      source: 'do do end; end',
      result: {
        type: 'root',
        body: [
          {
            type: 'doStatement',
            body: [
              {
                type: 'doStatement',
                body: [],
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
      source: 'do do do end end end',
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
                    type: 'doStatement',
                    body: [],
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
      source: 'do do do end; end; end',
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
                    type: 'doStatement',
                    body: [],
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
      source: 'do do do return end end end',
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
                    type: 'doStatement',
                    body: [
                      {
                        type: 'returnStatement',
                        arguments: [],
                        position: {
                          start: {
                            line: 1,
                            column: 10,
                            offset: 9
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
                        column: 7,
                        offset: 6
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
                    column: 4,
                    offset: 3
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
      source: 'do end do',
      result: "[1:9] 'end' expected near '<eof>'"
    },
    {
      source: 'do end end',
      result: "[1:7] unexpected keyword 'end' near '<eof>'"
    },
    {
      source: 'do return end',
      result: {
        type: 'root',
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
                    column: 4,
                    offset: 3
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
      source: 'do return return end',
      result: "[1:10] 'end' expected near 'return'"
    },
    {
      source: 'do ; end',
      result: {
        type: 'root',
        body: [
          {
            type: 'doStatement',
            body: [],
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
      },
      options: {
        luaVersion: '5.2'
      }
    }
  ]
})
