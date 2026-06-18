## 2024-05-20 - Prevent prototype pollution in dictionary objects

**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.

## 2024-05-20 - Prevent DoS via Memory Exhaustion in Parser

**Vulnerability:** The parser lacks a bound on input size, potentially allowing DoS attacks via memory exhaustion or prolonged execution when parsing excessively large files.
**Learning:** Parsers operating on user-supplied strings must enforce a strict upper bound on the maximum input size before beginning parsing to protect against DoS.
**Prevention:** Implement a configuration option like `maxInputLength` that immediately rejects input strings exceeding the defined threshold before creating any syntax trees or tokenizing.
