## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2024-06-20 - Add Input Length Limit for DoS Prevention
**Vulnerability:** The parser lacked a mechanism to restrict the size of the Lua source code input, making it susceptible to Denial of Service (DoS) attacks via memory exhaustion or prolonged execution when processing excessively large strings.
**Learning:** Even if a parser is efficient, unbounded input processing can block the Node.js event loop or exhaust memory. Adding a configurable length limit ensures the parser can safely reject arbitrarily large payloads at the API boundary before beginning potentially expensive operations.
**Prevention:** Always implement bounded limits on the size of user-supplied inputs (like strings, files, or streams) before passing them to parsing or processing engines.
