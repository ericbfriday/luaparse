## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## $(date +%Y-%m-%d) - Parser Denial of Service (DoS) Protection
**Vulnerability:** A missing bound on maximum input size allowed malicious actors to provide massive files that exhaust memory and compute resources during AST parsing.
**Learning:** Parsers operating on unchecked input sizes are prime targets for DoS attacks.
**Prevention:** Always provide a configurable 'maxInputLength' boundary before starting CPU-intensive parsing loops.
