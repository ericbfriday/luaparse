## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2024-05-20 - Prevent DoS via memory exhaustion in parser
**Vulnerability:** Parsers without input size bounds are vulnerable to Denial of Service (DoS) attacks via memory exhaustion or prolonged execution when provided with maliciously large inputs.
**Learning:** Always provide a mechanism to bound the maximum allowed input size before parsing begins, especially for user-supplied data.
**Prevention:** Implement a configurable `maxInputLength` limit and enforce it when reading or writing input streams.
