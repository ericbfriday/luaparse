## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2025-07-01 - O(N^2) Denial of Service in Long String Parsing
**Vulnerability:** The parser's `readLongString` function checked for the end of a long string `]` by verifying the correct number of `=` characters without breaking early on a mismatch, causing O(N^2) quadratic scaling when continuously encountering mismatched brackets in heavily padded text.
**Learning:** Even simple string-matching loops can cause catastrophic memory/CPU exhaustion if they don't break immediately upon detecting a mismatch, especially when processing uncontrolled input.
**Prevention:** Always implement an early exit (`break`) in nested matching loops as soon as a mismatch occurs, preventing O(N^2) behavior in string delimiter checks.
