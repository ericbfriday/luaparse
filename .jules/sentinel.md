## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2025-02-12 - Prevent DoS via Memory Exhaustion in Parser
**Vulnerability:** The parser lacks an upper bound on input length, making it vulnerable to Denial of Service (DoS) attacks via memory exhaustion.
**Learning:** Parsers exposed to untrusted user input can be attacked with extremely large payloads unless bounds are explicitly enforced.
**Prevention:** Always implement configurable maximum input length boundaries (`maxInputLength`) before allocating memory or processing input.
