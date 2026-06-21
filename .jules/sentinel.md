## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.

## 2025-01-29 - Bound Parser Input Size
**Vulnerability:** The parser lacks a configurable maximum input length, allowing for Denial of Service (DoS) attacks via memory exhaustion or prolonged execution when processing excessively large malicious payloads.
**Learning:** Parsers exposed to untrusted input must proactively bound the maximum allowed input size to prevent resource exhaustion before execution begins.
**Prevention:** Implement a `maxInputLength` configuration option to validate the input size and reject oversized payloads immediately.
