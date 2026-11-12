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
})(this, 'tableconstructors', function (exports) {
  'use strict'

  exports.name = 'tableconstructors'
  exports.spec = [
    {
      source: 'a = {',
      result: "[1:5] '}' expected near '<eof>'"
    },
    {
      source: 'a = {}',
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
      source: 'a = {,}',
      result: "[1:5] '}' expected near ','"
    },
    {
      source: 'a = {;}',
      result: "[1:5] '}' expected near ';'"
    },
    {
      source: 'a = {,,}',
      result: "[1:5] '}' expected near ','"
    },
    {
      source: 'a = {;;}',
      result: "[1:5] '}' expected near ';'"
    },
    {
      source: 'a = {{',
      result: "[1:6] '}' expected near '<eof>'"
    },
    {
      source: 'a = {{{}}}',
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
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableValue',
                    value: {
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
                              column: 7,
                              offset: 6
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
                          column: 6,
                          offset: 5
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
                        column: 6,
                        offset: 5
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
      source: 'a = {{},{},{{}},}',
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
                  {
                    type: 'tableValue',
                    value: {
                      type: 'tableConstructor',
                      fields: [],
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
                  {
                    type: 'tableValue',
                    value: {
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
                                column: 13,
                                offset: 12
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
                              column: 13,
                              offset: 12
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
                          column: 12,
                          offset: 11
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
                        column: 12,
                        offset: 11
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
      source: 'a = { 1 }',
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
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableValue',
                    value: {
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
                    column: 5,
                    offset: 4
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
      source: 'a = { 1, }',
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
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableValue',
                    value: {
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
      source: 'a = { 1; }',
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
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableValue',
                    value: {
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
      source: 'a = { 1, 2 }',
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
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableValue',
                    value: {
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
                    type: 'tableValue',
                    value: {
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
                    column: 5,
                    offset: 4
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
      }
    },
    {
      source: 'a = { a, b, c, }',
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
                    type: 'tableValue',
                    value: {
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
                    type: 'tableValue',
                    value: {
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
      source: 'a = { true; false, nil; }',
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
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableValue',
                    value: {
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
                  {
                    type: 'tableValue',
                    value: {
                      type: 'booleanLiteral',
                      value: false,
                      raw: 'false',
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
                  {
                    type: 'tableValue',
                    value: {
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
                        column: 20,
                        offset: 19
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
      source: 'a = { a.b, a[b]; a:c(), }',
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
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableValue',
                    value: {
                      type: 'memberExpression',
                      indexer: '.',
                      identifier: {
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
                    },
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
                  },
                  {
                    type: 'tableValue',
                    value: {
                      type: 'indexExpression',
                      base: {
                        type: 'identifier',
                        name: 'a',
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
                      index: {
                        type: 'identifier',
                        name: 'b',
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
                          column: 12,
                          offset: 11
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
                        column: 12,
                        offset: 11
                      },
                      end: {
                        line: 1,
                        column: 16,
                        offset: 15
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
                          name: 'c',
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
                        base: {
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
                      },
                      arguments: [],
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
      source: 'a = { 1 + 2, a > b, "a" or "b" }',
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
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableValue',
                    value: {
                      type: 'binaryExpression',
                      operator: '+',
                      left: {
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
                  {
                    type: 'tableValue',
                    value: {
                      type: 'binaryExpression',
                      operator: '>',
                      left: {
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
                      },
                      right: {
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
                      },
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
                  {
                    type: 'tableValue',
                    value: {
                      type: 'logicalExpression',
                      operator: 'or',
                      left: {
                        type: 'stringLiteral',
                        value: null,
                        raw: '"a"',
                        position: {
                          start: {
                            line: 1,
                            column: 21,
                            offset: 20
                          },
                          end: {
                            line: 1,
                            column: 24,
                            offset: 23
                          }
                        }
                      },
                      right: {
                        type: 'stringLiteral',
                        value: null,
                        raw: '"b"',
                        position: {
                          start: {
                            line: 1,
                            column: 28,
                            offset: 27
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
                          column: 21,
                          offset: 20
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
                        column: 21,
                        offset: 20
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
                    column: 5,
                    offset: 4
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
      source: 'a = { a=1, }',
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
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableKeyString',
                    key: {
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
                    value: {
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
                position: {
                  start: {
                    line: 1,
                    column: 5,
                    offset: 4
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
      }
    },
    {
      source: 'a = { a=1, b="foo", c=nil }',
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
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableKeyString',
                    key: {
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
                    value: {
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
                  },
                  {
                    type: 'tableKeyString',
                    key: {
                      type: 'identifier',
                      name: 'b',
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
                    value: {
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
                    type: 'tableKeyString',
                    key: {
                      type: 'identifier',
                      name: 'c',
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
                    value: {
                      type: 'nilLiteral',
                      value: null,
                      raw: 'nil',
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
                    column: 5,
                    offset: 4
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
      source: 'a = { a',
      result: "[1:7] '}' expected near '<eof>'"
    },
    {
      source: 'a = { a=',
      result: "[1:8] <expression> expected near '<eof>'"
    },
    {
      source: 'a = { a=,',
      result: "[1:8] <expression> expected near ','"
    },
    {
      source: 'a = { a=;',
      result: "[1:8] <expression> expected near ';'"
    },
    {
      source: 'a = { 1, a="foo"',
      result: "[1:16] '}' expected near '<eof>'"
    },
    {
      source: 'a = { 1, a="foo"; b={}, d=true; }',
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
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableValue',
                    value: {
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
                    type: 'tableKeyString',
                    key: {
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
                    value: {
                      type: 'stringLiteral',
                      value: null,
                      raw: '"foo"',
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
                        column: 10,
                        offset: 9
                      },
                      end: {
                        line: 1,
                        column: 17,
                        offset: 16
                      }
                    }
                  },
                  {
                    type: 'tableKeyString',
                    key: {
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
                    },
                    value: {
                      type: 'tableConstructor',
                      fields: [],
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
                        column: 19,
                        offset: 18
                      },
                      end: {
                        line: 1,
                        column: 23,
                        offset: 22
                      }
                    }
                  },
                  {
                    type: 'tableKeyString',
                    key: {
                      type: 'identifier',
                      name: 'd',
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
                    value: {
                      type: 'booleanLiteral',
                      value: true,
                      raw: 'true',
                      position: {
                        start: {
                          line: 1,
                          column: 27,
                          offset: 26
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
                        column: 25,
                        offset: 24
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
                    column: 5,
                    offset: 4
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
      source: 'a = { [',
      result: "[1:7] <expression> expected near '<eof>'"
    },
    {
      source: 'a = { [1',
      result: "[1:8] ']' expected near '<eof>'"
    },
    {
      source: 'a = { [1]',
      result: "[1:9] '=' expected near '<eof>'"
    },
    {
      source: 'a = { [a]=',
      result: "[1:10] <expression> expected near '<eof>'"
    },
    {
      source: 'a = { ["foo"]="bar" }',
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
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableKey',
                    key: {
                      type: 'stringLiteral',
                      value: null,
                      raw: '"foo"',
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
                    value: {
                      type: 'stringLiteral',
                      value: null,
                      raw: '"bar"',
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
                    },
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
                    column: 5,
                    offset: 4
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
      source: 'a = { [1]=a, [2]=b, }',
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
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableKey',
                    key: {
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
                    },
                    value: {
                      type: 'identifier',
                      name: 'a',
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
                  {
                    type: 'tableKey',
                    key: {
                      type: 'numericLiteral',
                      value: 2,
                      raw: '2',
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
                    value: {
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
                    },
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
                    column: 5,
                    offset: 4
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
      source: 'a = { true, a=1; ["foo"]="bar", }',
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
                type: 'tableConstructor',
                fields: [
                  {
                    type: 'tableValue',
                    value: {
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
                  {
                    type: 'tableKeyString',
                    key: {
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
                    value: {
                      type: 'numericLiteral',
                      value: 1,
                      raw: '1',
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
                        column: 13,
                        offset: 12
                      },
                      end: {
                        line: 1,
                        column: 16,
                        offset: 15
                      }
                    }
                  },
                  {
                    type: 'tableKey',
                    key: {
                      type: 'stringLiteral',
                      value: null,
                      raw: '"foo"',
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
                    value: {
                      type: 'stringLiteral',
                      value: null,
                      raw: '"bar"',
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
                        column: 18,
                        offset: 17
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
                    column: 5,
                    offset: 4
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
      source: 'a = { [] }',
      result: "[1:7] <expression> expected near ']'"
    },
    {
      source: 'a = { a= }',
      result: "[1:9] <expression> expected near '}'"
    },
    {
      source: 'a = { a.b=1 }',
      result: "[1:9] '}' expected near '='"
    },
    {
      source: 'a = { a[b[c]]=1 }',
      result: "[1:13] '}' expected near '='"
    },
    {
      source: 'a = { 2 3 4 }',
      result: "[1:8] '}' expected near '3'"
    }
  ]
})
