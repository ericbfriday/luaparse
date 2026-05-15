## 2024-05-16 - Prototype Pollution in Lua Labels
**Vulnerability:** A prototype pollution vulnerability existed in `luaparse.js` where user-supplied Lua labels could overwrite Object.prototype properties if they were named `__proto__`.
**Learning:** This existed because the internal map for storing label names (`labels: {}`) was initialized with a standard object literal, which implicitly inherits from `Object.prototype`.
**Prevention:** Always use `Object.create(null)` when creating map-like structures to store arbitrary string keys to prevent them from accessing prototype properties.
