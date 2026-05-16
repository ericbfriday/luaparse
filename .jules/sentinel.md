## 2025-05-16 - [Prototype Pollution via Lua Labels]
**Vulnerability:** A prototype pollution vulnerability existed in `luaparse.js` where user-supplied Lua labels could overwrite Object.prototype due to improper dictionary initialization (`labels: {}`).
**Learning:** Dictionaries that use user-supplied input as keys, such as Lua labels, must avoid inheriting `Object.prototype` to prevent key collision with properties like `__proto__`.
**Prevention:** Initialize dictionaries mapping user string keys to values using `Object.create(null)` instead of `{}`.
