## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2024-05-20 - Prevent O(N^2) Denial of Service in parser loops
**Vulnerability:** Long string terminators parsing loop allows Denial of Service via long unmatched strings triggering O(N^2) behavior.
**Learning:** Inner loops matching string prefixes or delimiters must break early upon the first mismatched character to prevent memory exhaustion and prolonged execution.
**Prevention:** Ensure inner loops break early upon the first mismatched character.
