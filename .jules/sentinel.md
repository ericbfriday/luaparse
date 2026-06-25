## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2024-05-21 - Prevent DoS in long string terminators
**Vulnerability:** Missing early break in parser loop allows O(N^2) execution time for crafted input with many mismatching long string terminators.
**Learning:** Inner loops matching string prefixes or delimiters must break immediately upon the first mismatched character.
**Prevention:** Always use `break` in parser loops that check for exact string matches once a mismatch is found to prevent O(N^2) memory exhaustion or execution time.
