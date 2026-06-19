## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2024-06-19 - Prevent DoS via Memory Exhaustion
**Vulnerability:** The parser allows unlimited input length, making it vulnerable to Denial of Service (DoS) attacks via memory exhaustion.
**Learning:** Parsers must always enforce configurable maximum input limits to protect system resources from maliciously large payloads.
**Prevention:** Introduce a `maxInputLength` configuration option and validate the input length before parsing begins.
