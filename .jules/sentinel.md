## 2025-05-20 - Prototype Pollution in Lua Labels
**Vulnerability:** A prototype pollution vulnerability existed in `luaparse.js` where Lua labels (e.g., `::label::`) were stored in a JavaScript object initialized with `{}` (`scope.labels`). If a script used `::__proto__::`, it would overwrite or interact unexpectedly with `Object.prototype` properties via `__proto__`, rather than storing it as a plain string key.
**Learning:** Dictionary objects that use user-supplied string keys must be created with a null prototype to avoid prototype pollution or conflicts with built-in properties like `__proto__`, `toString`, etc.
**Prevention:** Always initialize such dictionary objects using `Object.create(null)` instead of `{}`.
