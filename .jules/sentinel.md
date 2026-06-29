## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2024-10-24 - O(N^2) Denial of Service in Long String Parsing
**Vulnerability:** The parser was vulnerable to an O(N^2) DoS attack when parsing Lua long strings and long comments. An attacker could craft an input with a deep level of `=` delimiters and a long sequence of `]` characters, causing the parser to freeze.
**Learning:** Inner loops that check for matching delimiters or prefixes must break early upon the first mismatched character to prevent quadratic execution time.
**Prevention:** Always ensure inner loops short-circuit (e.g., using `break`) when a mismatch occurs during sequence validation.
