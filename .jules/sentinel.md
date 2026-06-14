## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2024-05-21 - Prevent DoS attacks via memory exhaustion in parsers
**Vulnerability:** Unbounded input lengths parsed synchronously or buffered entirely in memory can cause a Denial of Service (DoS) attack through memory exhaustion or prolonged CPU execution.
**Learning:** Parsers acting on user-supplied strings must explicitly bound the maximum input size before beginning execution.
**Prevention:** Implement and enforce a configurable `maxInputLength` bound during configuration merging and before entering the parsing loop.
