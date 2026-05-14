## 2024-05-15 - [Prototype Pollution via User Input]
**Vulnerability:** Dictionary objects storing user-supplied string keys (e.g., Lua labels) are initialized with object literals `{}` instead of `Object.create(null)`, allowing `__proto__` to be used as a key.
**Learning:** This codebase parses Lua code where users define labels and other constructs. The parser maintains state using simple JavaScript objects. Using `__proto__` as a key modifies the prototype of the state object itself instead of storing a value, potentially leading to incorrect behavior or prototype pollution issues downstream.
**Prevention:** To prevent prototype pollution in dictionary objects storing user-supplied string keys, always initialize them with `Object.create(null)` instead of object literals `{}`.
