## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2025-02-23 - Fix O(N^2) DoS vulnerability in long string parsing
**Vulnerability:** The `readLongString` loop does not break out of string equality checks early when matching `=` characters, causing an O(N^2) lookup vulnerability.
**Learning:** Inner loops matching string prefixes should break early when encountering mismatching characters to avoid worst-case runtime complexity.
**Prevention:** Always break out of loops checking delimiters as soon as the first mismatch occurs.
