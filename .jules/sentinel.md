## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2024-05-21 - Prevent memory exhaustion DoS attacks via unbounded input
**Vulnerability:** Parsers without maximum input bounds are susceptible to Denial of Service (DoS) attacks via memory exhaustion or prolonged execution when processing maliciously large inputs.
**Learning:** Parsing extremely large payloads can consume excessive memory and CPU time, leading to resource starvation for the rest of the application.
**Prevention:** Provide a configuration option (like `maxInputLength`) to enforce an upper limit on the maximum allowed input size before processing or buffering it.
