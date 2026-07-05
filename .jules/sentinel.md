## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2024-05-20 - Prevent DoS vulnerability in long string parsing
**Vulnerability:** In `luaparse.js`, parsing Lua long strings with mismatched delimiters (e.g., `[========[ ... ]========]`) can lead to O(N^2) complexity because the inner loop doesn't break early when a character mismatch occurs.
**Learning:** Nested loops validating multi-character delimiters must break immediately upon encountering the first invalid character to prevent catastrophic backtracking and algorithmic complexity attacks (Denial of Service).
**Prevention:** Always use `break` when iterating to validate string sequences or delimiters upon the first failure condition.
