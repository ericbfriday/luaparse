## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.

## 2024-05-21 - Restrict Input Size
**Vulnerability:** Denial of Service (DoS) attacks via memory exhaustion or prolonged execution on large inputs.
**Learning:** Parsers are vulnerable to DoS if they attempt to parse unbounded input sizes.
**Prevention:** Provide a configuration option (like `maxInputLength`) to bound the maximum allowed input size before parsing begins.
