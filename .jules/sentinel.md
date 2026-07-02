## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2024-07-02 - Fix Algorithmic Complexity DoS in Long Strings
**Vulnerability:** The parser validates Lua long string terminators (e.g. [===[ ... ]===]) using a nested loop that does not break early on a character mismatch. A malicious payload with long sequences of = can cause quadratic O(N^2) execution time leading to a Denial of Service.
**Learning:** Even trivial inner loops matching string prefixes or delimiters can become DoS vectors if they do not short-circuit. The length of user-controlled delimiters must always be considered in complexity analysis.
**Prevention:** Always ensure inner validation loops break immediately upon the first mismatched character.
