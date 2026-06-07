## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.

## 2024-06-06 - Missing Input Validation at API Boundary
**Vulnerability:** The `parse` function in `luaparse.js` lacked strict type validation for the `input` argument, causing a silent crash or unhandled `TypeError` (e.g., `input.substr is not a function`) deep in the parser when passed an array or object.
**Learning:** Dynamically typed API boundaries must explicitly validate input types before processing to prevent unpredictable behavior and secure against denial-of-service or logic failures.
**Prevention:** Always validate input types (e.g., `typeof input !== 'string'`) at public API boundaries to fail securely and predictably.
