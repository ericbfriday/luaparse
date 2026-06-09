## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.

## 2024-05-20 - Prevent Denial of Service (DoS) via memory exhaustion
**Vulnerability:** Unbounded input lengths can cause the parser to consume excessive memory or CPU time, leading to a Denial of Service.
**Learning:** Parsers must enforce maximum input size limits before processing begins to protect against DoS attacks.
**Prevention:** Introduce a `maxInputLength` configuration option to reject overly large inputs early.
