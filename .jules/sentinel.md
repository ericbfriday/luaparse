## 2024-05-24 - Prototype Pollution in Lua Labels
**Vulnerability:** Using object literals `{}` to store user-supplied string keys (like Lua labels) allows prototype pollution if a user uses keys like `__proto__`.
**Learning:** Dictionary objects storing arbitrary user input should not inherit from `Object.prototype`.
**Prevention:** Use a secure initialization like `Object.create ? Object.create(null) : {}` for dictionaries to prevent prototype pollution while providing a fallback.
