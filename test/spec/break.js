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
})(this, 'break', function (exports) {
  'use strict'

  exports.name = 'break'
  exports.spec = [
    {
      source: 'break',
      result: "[1:5] no loop to break near '<eof>'"
    },
    {
      source: 'do break end',
      result: "[1:9] no loop to break near 'end'"
    },
    {
      source: 'if 0 then break end',
      result: "[1:16] no loop to break near 'end'"
    },
    {
      source: 'if 0 then else break end',
      result: "[1:21] no loop to break near 'end'"
    },
    {
      source: 'while 0 do function x() break end end',
      result: "[1:30] no loop to break near 'end'"
    },
    {
      source: 'repeat function x() break end until 0',
      result: "[1:26] no loop to break near 'end'"
    },
    {
      source: 'repeat x = function() break end until 0',
      result: "[1:28] no loop to break near 'end'"
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
      source: 'repeat if 0 then break end until 0',
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
            body: [
              {
                type: 'ifStatement',
                clauses: [
                  {
                    type: 'ifClause',
                    condition: {
                      type: 'numericLiteral',
                      value: 0,
                      raw: '0',
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
                    body: [
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
                        column: 8,
                        offset: 7
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
                    column: 8,
                    offset: 7
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
      source: 'repeat if 0 then else break end until 0',
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
                  column: 39,
                  offset: 38
                },
                end: {
                  line: 1,
                  column: 40,
                  offset: 39
                }
              }
            },
            body: [
              {
                type: 'ifStatement',
                clauses: [
                  {
                    type: 'ifClause',
                    condition: {
                      type: 'numericLiteral',
                      value: 0,
                      raw: '0',
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
                    body: [],
                    position: {
                      start: {
                        line: 1,
                        column: 8,
                        offset: 7
                      },
                      end: {
                        line: 1,
                        column: 17,
                        offset: 16
                      }
                    }
                  },
                  {
                    type: 'elseClause',
                    body: [
                      {
                        type: 'breakStatement',
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
                        column: 28,
                        offset: 27
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
      source: 'while 0 do break end',
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
      source: 'while 0 do break; end',
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
                type: 'breakStatement',
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
      source: 'while 0 do break;; end',
      result: "[1:17] 'end' expected near ';'"
    },
    {
      source: 'while 0 do do break end end',
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
      source: 'while 0 do if 0 then break end end',
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
                type: 'ifStatement',
                clauses: [
                  {
                    type: 'ifClause',
                    condition: {
                      type: 'numericLiteral',
                      value: 0,
                      raw: '0',
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
                    body: [
                      {
                        type: 'breakStatement',
                        position: {
                          start: {
                            line: 1,
                            column: 22,
                            offset: 21
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
                        column: 12,
                        offset: 11
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
                    column: 12,
                    offset: 11
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
      source: 'while 0 do if 0 then else break end end',
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
                type: 'ifStatement',
                clauses: [
                  {
                    type: 'ifClause',
                    condition: {
                      type: 'numericLiteral',
                      value: 0,
                      raw: '0',
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
                    body: [],
                    position: {
                      start: {
                        line: 1,
                        column: 12,
                        offset: 11
                      },
                      end: {
                        line: 1,
                        column: 21,
                        offset: 20
                      }
                    }
                  },
                  {
                    type: 'elseClause',
                    body: [
                      {
                        type: 'breakStatement',
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
                        column: 22,
                        offset: 21
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
                    column: 12,
                    offset: 11
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
      }
    },
    {
      source: 'for i = 1, 2 do break end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forNumericStatement',
            variable: {
              type: 'identifier',
              name: 'i',
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
              value: 2,
              raw: '2',
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
            body: [
              {
                type: 'breakStatement',
                position: {
                  start: {
                    line: 1,
                    column: 17,
                    offset: 16
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
      source: 'for i = 1, 2 do do break end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forNumericStatement',
            variable: {
              type: 'identifier',
              name: 'i',
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
              value: 2,
              raw: '2',
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
            body: [
              {
                type: 'doStatement',
                body: [
                  {
                    type: 'breakStatement',
                    position: {
                      start: {
                        line: 1,
                        column: 20,
                        offset: 19
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
                    column: 17,
                    offset: 16
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
      source: 'for i = 1, 2 do if 0 then break end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forNumericStatement',
            variable: {
              type: 'identifier',
              name: 'i',
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
              value: 2,
              raw: '2',
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
            body: [
              {
                type: 'ifStatement',
                clauses: [
                  {
                    type: 'ifClause',
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
                        column: 17,
                        offset: 16
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
                    column: 17,
                    offset: 16
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
      }
    },
    {
      source: 'for i = 1, 2 do if 0 then else break end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forNumericStatement',
            variable: {
              type: 'identifier',
              name: 'i',
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
              value: 2,
              raw: '2',
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
            body: [
              {
                type: 'ifStatement',
                clauses: [
                  {
                    type: 'ifClause',
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
                    body: [],
                    position: {
                      start: {
                        line: 1,
                        column: 17,
                        offset: 16
                      },
                      end: {
                        line: 1,
                        column: 26,
                        offset: 25
                      }
                    }
                  },
                  {
                    type: 'elseClause',
                    body: [
                      {
                        type: 'breakStatement',
                        position: {
                          start: {
                            line: 1,
                            column: 32,
                            offset: 31
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
                        column: 27,
                        offset: 26
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
                    column: 17,
                    offset: 16
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
                column: 1,
                offset: 0
              },
              end: {
                line: 1,
                column: 45,
                offset: 44
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
            column: 45,
            offset: 44
          }
        }
      }
    },
    {
      source: 'for a in b do break end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forGenericStatement',
            variables: [
              {
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
              }
            ],
            iterators: [
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
      source: 'for a in b do do break end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forGenericStatement',
            variables: [
              {
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
              }
            ],
            iterators: [
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
            body: [
              {
                type: 'doStatement',
                body: [
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
                    column: 15,
                    offset: 14
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
      source: 'for a in b do if 0 then break end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forGenericStatement',
            variables: [
              {
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
              }
            ],
            iterators: [
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
            body: [
              {
                type: 'ifStatement',
                clauses: [
                  {
                    type: 'ifClause',
                    condition: {
                      type: 'numericLiteral',
                      value: 0,
                      raw: '0',
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
                    body: [
                      {
                        type: 'breakStatement',
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
                        column: 15,
                        offset: 14
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
                    column: 15,
                    offset: 14
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
      source: 'for a in b do if 0 then else break end end',
      result: {
        type: 'root',
        body: [
          {
            type: 'forGenericStatement',
            variables: [
              {
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
              }
            ],
            iterators: [
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
            body: [
              {
                type: 'ifStatement',
                clauses: [
                  {
                    type: 'ifClause',
                    condition: {
                      type: 'numericLiteral',
                      value: 0,
                      raw: '0',
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
                        column: 15,
                        offset: 14
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
                    body: [
                      {
                        type: 'breakStatement',
                        position: {
                          start: {
                            line: 1,
                            column: 30,
                            offset: 29
                          },
                          end: {
                            line: 1,
                            column: 35,
                            offset: 34
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
                        column: 35,
                        offset: 34
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
                    column: 39,
                    offset: 38
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
                column: 43,
                offset: 42
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
            column: 43,
            offset: 42
          }
        }
      }
    },
    {
      source: 'function x() break end',
      result: "[1:19] no loop to break near 'end'"
    },
    {
      source: 'local function x() break end',
      result: "[1:25] no loop to break near 'end'"
    },
    {
      source: 'function x() repeat break until 0 end',
      result: {
        type: 'root',
        body: [
          {
            type: 'functionDeclaration',
            identifier: {
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
            local: false,
            parameters: [],
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
                body: [
                  {
                    type: 'breakStatement',
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
                position: {
                  start: {
                    line: 1,
                    column: 14,
                    offset: 13
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
      source: 'break',
      result: "[1:5] no loop to break near '<eof>'",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'do break end',
      result: "[1:9] no loop to break near 'end'",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'if 0 then break end',
      result: "[1:16] no loop to break near 'end'",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'if 0 then else break end',
      result: "[1:21] no loop to break near 'end'",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'while 0 do break;; end',
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
                type: 'breakStatement',
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
      },
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'while 0 do function x() break end end',
      result: "[1:30] no loop to break near 'end'",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'repeat function x() break end until 0',
      result: "[1:26] no loop to break near 'end'",
      options: {
        luaVersion: '5.2'
      }
    },
    {
      source: 'repeat x = function() break end until 0',
      result: "[1:28] no loop to break near 'end'",
      options: {
        luaVersion: '5.2'
      }
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
      },
      options: {
        luaVersion: '5.2'
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
      },
      options: {
        luaVersion: '5.2'
      }
    }
  ]
})
