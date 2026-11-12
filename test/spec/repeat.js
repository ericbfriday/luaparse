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
})(this, 'repeat', function (exports) {
  'use strict'

  exports.name = 'repeat'
  exports.spec = [
    {
      source: 'repeat',
      result: "[1:6] 'until' expected near '<eof>'"
    },
    {
      source: 'repeat until',
      result: "[1:12] <expression> expected near '<eof>'"
    },
    {
      source: 'repeat until 0',
      result: {
        type: 'root',
        body: [
          {
            type: 'repeatStatement',
            condition: {
              type: 'numericLiteral',
              value: 0,
              raw: '0',
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
      source: 'repeat until false',
      result: {
        type: 'root',
        body: [
          {
            type: 'repeatStatement',
            condition: {
              type: 'booleanLiteral',
              value: false,
              raw: 'false',
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
      source: 'repeat until local',
      result: "[1:13] <expression> expected near 'local'"
    },
    {
      source: 'repeat end',
      result: "[1:7] 'until' expected near 'end'"
    },
    {
      source: 'repeat 1',
      result: "[1:7] unexpected number '1' near '<eof>'"
    },
    {
      source: 'repeat =',
      result: "[1:7] unexpected symbol '=' near '<eof>'"
    },
    {
      source: 'repeat local a until 1',
      result: {
        type: 'root',
        body: [
          {
            type: 'repeatStatement',
            condition: {
              type: 'numericLiteral',
              value: 1,
              raw: '1',
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
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 8,
                    offset: 7
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
      source: 'repeat local a local b until 0',
      result: {
        type: 'root',
        body: [
          {
            type: 'repeatStatement',
            condition: {
              type: 'numericLiteral',
              value: 0,
              raw: '0',
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
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 8,
                    offset: 7
                  },
                  end: {
                    line: 1,
                    column: 15,
                    offset: 14
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
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 16,
                    offset: 15
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
      source: 'repeat local a; local b; until 0',
      result: {
        type: 'root',
        body: [
          {
            type: 'repeatStatement',
            condition: {
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
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 8,
                    offset: 7
                  },
                  end: {
                    line: 1,
                    column: 15,
                    offset: 14
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
                        column: 23,
                        offset: 22
                      },
                      end: {
                        line: 1,
                        column: 24,
                        offset: 23
                      }
                    }
                  }
                ],
                init: [],
                position: {
                  start: {
                    line: 1,
                    column: 17,
                    offset: 16
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
      source: 'repeat ; until 1',
      result: "[1:7] unexpected symbol ';' near 'until'"
    },
    {
      source: 'repeat 2 until 1',
      result: "[1:7] unexpected number '2' near 'until'"
    },
    {
      source: 'repeat "foo" until 1',
      result: "[1:7] unexpected string '\"foo\"' near 'until'"
    },
    {
      source: 'repeat return until 0',
      result: {
        type: 'root',
        body: [
          {
            type: 'repeatStatement',
            condition: {
              type: 'numericLiteral',
              value: 0,
              raw: '0',
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
            body: [
              {
                type: 'returnStatement',
                arguments: [],
                position: {
                  start: {
                    line: 1,
                    column: 8,
                    offset: 7
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
      source: 'repeat return return until 0',
      result: "[1:14] 'until' expected near 'return'"
    },
    {
      source: 'repeat break until 0',
      result: {
        type: 'root',
        body: [
          {
            type: 'repeatStatement',
            condition: {
              type: 'numericLiteral',
              value: 0,
              raw: '0',
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
            body: [
              {
                type: 'breakStatement',
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
      source: 'repeat break break until 0',
      result: "[1:13] 'until' expected near 'break'"
    },
    {
      source: 'repeat do end until 0',
      result: {
        type: 'root',
        body: [
          {
            type: 'repeatStatement',
            condition: {
              type: 'numericLiteral',
              value: 0,
              raw: '0',
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
            body: [
              {
                type: 'doStatement',
                body: [],
                position: {
                  start: {
                    line: 1,
                    column: 8,
                    offset: 7
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
      source: 'repeat do return end until 0',
      result: {
        type: 'root',
        body: [
          {
            type: 'repeatStatement',
            condition: {
              type: 'numericLiteral',
              value: 0,
              raw: '0',
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
                    column: 8,
                    offset: 7
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
      source: 'repeat do break end until 0',
      result: {
        type: 'root',
        body: [
          {
            type: 'repeatStatement',
            condition: {
              type: 'numericLiteral',
              value: 0,
              raw: '0',
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
                type: 'doStatement',
                body: [
                  {
                    type: 'breakStatement',
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
                    column: 8,
                    offset: 7
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
      source: 'repeat ; until 1',
      result: {
        type: 'root',
        body: [
          {
            type: 'repeatStatement',
            condition: {
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
      source: 'repeat break break until 0',
      result: {
        type: 'root',
        body: [
          {
            type: 'repeatStatement',
            condition: {
              type: 'numericLiteral',
              value: 0,
              raw: '0',
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
                type: 'breakStatement',
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
              },
              {
                type: 'breakStatement',
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
