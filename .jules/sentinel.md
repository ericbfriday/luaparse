## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2024-05-18 - [Fix algorithmic complexity DoS in parser]
**Vulnerability:** The parser allows O(N^2) execution time when evaluating unclosed multiline strings due to lack of an early loop break.
**Learning:** Missing early exits during O(N) evaluation across large tokens can compound into severe performance bottlenecks, leading to DoS.
**Prevention:** Always break early in matching loops as soon as a condition fails, especially for unbounded inputs.
