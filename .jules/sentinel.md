## 2024-05-22 - \[CRITICAL] Fix prototype pollution in label scoping

**Vulnerability:** A prototype pollution vulnerability existed in `luaparse.js` where the AST parser collected parsed Lua labels into a plain JavaScript object literal `{}`. An attacker controlling parsed Lua scripts could use labels like `::__proto__::` which would corrupt the parser's environment, possibly allowing unexpected behavior during AST traversal.
**Learning:** Dictionary objects storing user-supplied string keys must be securely initialized without inheriting from `Object.prototype`. In an environment where polyfills might not be present, conditional initializations like `Object.create ? Object.create(null) : {}` provides a safer fallback than just `{}`.
**Prevention:** Always initialize map/dictionary structures storing dynamic strings with `Object.create(null)` instead of `{}`.
