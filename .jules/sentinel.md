## 2024-05-18 - [Fix prototype pollution in label scope]
**Vulnerability:** Prototype pollution possible when Lua code defines labels with names matching JavaScript Object prototype properties (e.g., `__proto__`, `hasOwnProperty`).
**Learning:** Using plain object literals (`{}`) as maps for user-defined strings (like labels) exposes inherited prototype properties, causing standard parser operations on these properties to either crash unexpectedly or potentially modify prototypes.
**Prevention:** Always initialize dictionary objects for user input with `Object.create(null)` instead of `{}`.
