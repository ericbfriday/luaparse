## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2024-05-20 - Prevent DoS via memory exhaustion in parser
**Vulnerability:** The parser accepts unbounded input lengths, which could lead to Denial of Service (DoS) via memory exhaustion or prolonged execution when parsing maliciously large inputs.
**Learning:** Parsers handling user-supplied content must enforce strict bounds on input sizes to protect against resource exhaustion.
**Prevention:** Implement a `maxInputLength` configuration option to reject overly large inputs before parsing begins.
