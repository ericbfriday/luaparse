## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2024-05-24 - Prevent DoS by bounding input size
**Vulnerability:** Parsing arbitrary unbounded input can lead to memory exhaustion and Denial of Service (DoS).
**Learning:** Always bound the maximum input size for parsers to prevent resource exhaustion attacks.
**Prevention:** Added `maxInputLength` configuration option to limit input size.
