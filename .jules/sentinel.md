## 2024-05-18 - Prototype Pollution via Lua Labels
**Vulnerability:** Prototype pollution vulnerability where Lua labels could potentially overwrite properties on Object.prototype, as labels are stored using `labels = {}` without `Object.create(null)`.
**Learning:** Dictionaries storing user-supplied string keys (e.g., Lua labels) should always be initialized using `Object.create(null)` to prevent prototype pollution.
**Prevention:** Use `Object.create(null)` to create prototype-less objects for dictionaries holding untrusted keys.
