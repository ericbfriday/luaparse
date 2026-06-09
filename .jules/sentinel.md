## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2024-05-20 - Input Length Limitation
**Vulnerability:** The parser had no upper bound on the length of input it would process, exposing the application to potential Denial of Service (DoS) attacks via memory exhaustion or prolonged parsing times.
**Learning:** Security enhancements like `maxInputLength` serve as a defense-in-depth measure, particularly in components that process user-supplied strings or streams.
**Prevention:** Always provide an option to bound input size at the parsing or ingestion boundary.
