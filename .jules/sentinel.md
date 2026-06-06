## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.

## 2024-05-21 - Require strict input types
**Vulnerability:** Weak input typing allowed parsing logic to silently fail or act unpredictably on unexpected input types (e.g., objects or numbers).
**Learning:** Always explicitly validate input types at the API boundary to fail securely and prevent unexpected code paths or logic bugs.
**Prevention:** Apply explicit type-checking at entry points (e.g. `typeof input !== 'string'`) and throw type errors to cleanly halt invalid input.
