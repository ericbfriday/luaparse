## 2024-05-02 - Prototype Pollution in AST options assign

**Vulnerability:** Found a Prototype Pollution vulnerability in the `assign` polyfill in `luaparse.js` used to merge parser options with default options.
**Learning:** In JavaScript, any generic `assign` or `extend` utility that naively copies properties from one object to another can be exploited to overwrite `Object.prototype` (and thus all objects' behavior) via the `__proto__`, `constructor`, or `prototype` keys. Here, user-supplied JSON or objects sent to parser options might be merged without filtering these keys.
**Prevention:** In deep-merge or extend utilities, always add an explicit block-list check (e.g. `if (prop === '__proto__' || prop === 'constructor' || prop === 'prototype') continue;`) before assigning properties, or use securely designed merge utilities.
