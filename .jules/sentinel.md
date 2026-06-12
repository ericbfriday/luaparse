## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2025-02-18 - Prevent Denial of Service via memory exhaustion
**Vulnerability:** The parser accepts arbitrarily large strings when parsing which can lead to Denial of Service via memory exhaustion or prolonged execution.
**Learning:** Parsing extremely large strings requires guarding against resource exhaustion early in the parser pipeline.
**Prevention:** Added a `maxInputLength` configuration option to boundary the maximum allowed input length before parsing or during streaming.
