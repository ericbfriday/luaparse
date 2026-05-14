## 2024-05-14 - Fix Prototype Pollution in FlowContext

**Vulnerability:** Prototype pollution vulnerability in `luaparse.js` via the `labels` object. The `FullFlowContext.prototype.pushScope` method initialized `labels: {}` (an object literal inheriting from `Object.prototype`). If a Lua script parsed by this library contained a label named `__proto__` (e.g. `::__proto__::`), the parsing logic `scope.labels[name] = { localCount: ..., line: ... }` would overwrite `Object.prototype` (in certain JavaScript environments, or cause unintended prototype mutation) instead of creating a standard key, leading to prototype pollution and internal parser errors (such as `no visible label '__proto__' for <goto>`).

**Learning:** When creating dictionary objects intended to store user-supplied string keys (like identifiers, label names, or parameter names), using object literals `{}` exposes the application to prototype pollution if keys like `__proto__`, `constructor`, or `hasOwnProperty` are used by the attacker.

**Prevention:** Always use `Object.create(null)` instead of `{}` when initializing a dictionary or map that will store user-provided keys. This creates an object with a `null` prototype, ensuring that keys like `__proto__` are treated as normal properties rather than modifying the object's prototype chain.
